#!/usr/bin/env python3
"""Generate pre-rendered localized articles from the verified English SSR pages.

Requires the English production site to be reachable and an Argos en->target model
for every locale. This is an explicit, auditable offline generation step, not a
live machine-translation proxy on user requests.

Translations are machine-assisted and should be manually reviewed for names.
"""
import html
import json
import os
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit

import requests
from bs4 import BeautifulSoup, NavigableString, Tag
import argostranslate.package
import argostranslate.translate
from opencc import OpenCC

SITE = "https://minecraftdungeons2wiki.com"
OUTPUT = Path("src/data/i18n-pages.json")
TARGETS = {
    "zh-cn": "zh",
    "zh-tw": "zh",
    "ja": "ja",
    "ko": "ko",
    "de": "de",
    "fr": "fr",
    "es": "es",
    "pt-br": "pt",
}
ENTRY = re.compile(r"path: '([^']+)'")
KEEP_NAMES = (
    "Minecraft Dungeons II", "Minecraft Dungeons 2", "Minecraft",
    "Mojang", "Steam Deck", "Nintendo Switch 2", "Nintendo Switch",
    "Game Pass", "Xbox Series X|S", "The Sift", "Prime Enchanter",
    "Grand Illusioner", "Supreme Evoker", "Copper Monstrosity",
    "Twisted Warden", "Corrupted Creeper", "Echo Shards",
    "Aurora Cape", "Hero Cape", "Twisted Cape", "Soul Cape",
)
TERM_RE = re.compile("|".join(re.escape(x) for x in sorted(KEEP_NAMES, key=len, reverse=True)))
OPENCC = OpenCC("s2twp")

def paths():
    file = Path("src/lib/seo-pages.ts").read_text()
    found = ENTRY.findall(file)
    if len(found) < 48 or len(found) != len(set(found)):
        raise RuntimeError(f"Unexpected English page manifest: {len(found)} entries")
    return found

def download(path):
    url = SITE + (path if path != "/" else "/")
    for attempt in range(3):
        try:
            r = requests.get(url, timeout=35, headers={"User-Agent": "DungeonsIIWiki-LocalizationBuilder/1.0"})
            r.raise_for_status()
            soup = BeautifulSoup(r.text, "html.parser")
            main = soup.select_one("main.wiki-grid")
            if not main or not main.find("h1"):
                raise ValueError(f"Missing server-rendered article at {url}")
            title = soup.title.get_text(strip=True) if soup.title else ""
            desc_tag = soup.find("meta", attrs={"name": "description"})
            description = desc_tag.get("content", "") if desc_tag else ""
            if not title or not description:
                raise ValueError(f"Missing SEO metadata at {url}")
            for tag in main.select("script, style, noscript"):
                tag.decompose()
            for a in main.find_all("a", href=True):
                href = a["href"]
                parsed = urlsplit(href)
                if parsed.netloc and parsed.netloc.lower() not in {"minecraftdungeons2wiki.com", "www.minecraftdungeons2wiki.com"}:
                    continue
                # Leave internal anchors, empty URLs and non-http schemes untouched.
                if href.startswith("#") or parsed.scheme not in ("", "http", "https"):
                    continue
                p = parsed.path
                if p and p in ALL_PATHS:
                    a["data-localization-path"] = p
            return path, title, description, main
        except Exception:
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))

def setup_models():
    argostranslate.package.update_package_index()
    available = argostranslate.package.get_available_packages()
    installed = set()
    for lang in sorted(set(TARGETS.values())):
        match = next((p for p in available if p.from_code == "en" and p.to_code == lang), None)
        if match is None:
            raise RuntimeError(f"No Argos en->{lang} translation model available")
        print(f"Downloading en->{lang} model: {match.package_version}", flush=True)
        argostranslate.package.install_from_path(match.download())
        installed.add(lang)
    languages = argostranslate.translate.get_installed_languages()
    english = next((lang for lang in languages if lang.code == "en"), None)
    if english is None:
        raise RuntimeError("Argos English language not installed")
    return {
        target: english.get_translation(next(lang for lang in languages if lang.code == target))
        for target in installed
    }

def translate_with_names(value, engine, lang, cache):
    value = str(value)
    if not re.search(r"[a-zA-Z]{2}", value):
        return value
    key = (lang, value)
    if key in cache:
        return cache[key]
    # Protect game proper nouns with line-separated placeholders to reduce name drift.
    matches = []
    def substitute(m):
        matches.append(m.group(0))
        return f" ZZZNAME{len(matches) - 1}ZZZ "
    masked = TERM_RE.sub(substitute, value)
    try:
        translated = engine.translate(masked)
    except Exception as error:
        raise RuntimeError(f"Translation failure ({lang}): {value[:80]}") from error
    for i, term in enumerate(matches):
        translated = re.sub(r"ZZZ\s*NAME\s*" + str(i) + r"\s*ZZZ", term, translated, flags=re.I)
    if "ZZZNAME" in translated.upper():
        raise RuntimeError(f"Unresolved protected name in translated string ({lang}): {translated[:80]}")
    # Retain formatting of all-whitespace prefix/suffix.
    prefix = re.match(r"^\s*", value).group(0)
    suffix = re.search(r"\s*$", value).group(0)
    translated = prefix + translated.strip() + suffix
    if lang == "zh-tw":
        translated = OPENCC.convert(translated)
    if not translated.strip():
        raise RuntimeError(f"Empty translation for {lang}: {value[:80]}")
    cache[key] = translated
    return translated

def generate(article, locale, engine, cache):
    path, title, description, main = article
    # Parse a fresh copy so translations in one locale cannot contaminate others.
    main = BeautifulSoup(str(main), "html.parser").select_one("main.wiki-grid")
    for elem in main.find_all(True):
        for attr in ("alt", "title", "aria-label", "placeholder"):
            if elem.has_attr(attr) and isinstance(elem[attr], str):
                elem[attr] = translate_with_names(elem[attr], engine, locale, cache)
        if elem.name == "a" and elem.has_attr("data-localization-path"):
            original = elem["data-localization-path"]
            original_url = urlsplit(elem.get("href", ""))
            localized = f"/{locale}" + (original if original != "/" else "/")
            elem["href"] = urlunsplit(("", "", localized, original_url.query, original_url.fragment))
            del elem["data-localization-path"]
    for node in list(main.descendants):
        if not isinstance(node, NavigableString) or isinstance(node, Tag):
            continue
        if not node.parent or node.parent.name in {"script", "style", "code", "pre", "svg"}:
            continue
        original = str(node)
        if re.search(r"[a-zA-Z]{2}", original):
            node.replace_with(translate_with_names(original, engine, locale, cache))
    translated_title = translate_with_names(title, engine, locale, cache)
    translated_description = translate_with_names(description, engine, locale, cache)
    result = {
        "title": translated_title,
        "description": translated_description,
        "html": main.decode_contents(),
    }
    if "<h1" not in result["html"] or not result["description"]:
        raise ValueError(f"Incomplete translated HTML: {locale} {path}")
    return result

def main():
    global ALL_PATHS
    ALL_PATHS = set(paths())
    print(f"Found {len(ALL_PATHS)} source pages", flush=True)
    articles = {}
    with ThreadPoolExecutor(max_workers=8) as ex:
        futures = {ex.submit(download, p): p for p in ALL_PATHS}
        for f in as_completed(futures):
            p, title, desc, main = f.result()
            articles[p] = (p, title, desc, main)
    print(f"Downloaded {len(articles)} English SSR pages", flush=True)
    engines = setup_models()
    data = {}
    cache = {}
    for locale, model_lang in TARGETS.items():
        print(f"Translating {locale} / {len(articles)} pages...", flush=True)
        engine = engines[model_lang]
        data[locale] = {}
        for path in sorted(articles):
            data[locale][path] = generate(articles[path], locale, engine, cache)
        print(f"{locale} complete; cache size {len(cache)}", flush=True)
    assert all(len(pages) == len(ALL_PATHS) for pages in data.values())
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"Saved {OUTPUT} ({OUTPUT.stat().st_size} bytes)", flush=True)

if __name__ == "__main__":
    main()
