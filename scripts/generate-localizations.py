#!/usr/bin/env python3
"""Generate complete, server-rendered locale copies from the canonical English Wiki.

Uses the Google Translate web endpoint during the offline GitHub Actions build.
Results are stored as static site data (never live request-time proxy translation).
The reviewed pages in verified-translations.ts override auto-generated data.
"""
from __future__ import annotations

import json
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit

import requests
from bs4 import BeautifulSoup, NavigableString, Tag

BASE = "https://minecraftdungeons2wiki.com"
ENDPOINT = "https://translate.googleapis.com/translate_a/single"
OUTPUT = Path("src/data/i18n-pages.json")
TARGETS = {
    "zh-cn": "zh-CN", "zh-tw": "zh-TW",
    "ja": "ja", "ko": "ko", "de": "de",
    "fr": "fr", "es": "es", "pt-br": "pt",
}
ALL_PATHS = set()
# Site-specific literal labels override ambiguous generic machine translations.
TERMS = {
 "zh-cn": {
    "Capes": "披风", "Cape": "披风", "Armor": "护甲", "Gear": "装备",
    "Weapons": "武器", "Bosses": "首领", "Enemies": "敌人", "World": "世界",
    "Locations": "地点", "Artifacts": "神器", "Talismans": "护符",
    "Enchantments": "附魔", "Quests": "任务", "Dungeons": "地下城",
    "Guides": "攻略", "Builds": "配装", "Tier List": "强度排行",
    "Crossplay": "跨平台联机", "Multiplayer": "多人游戏", "Pets": "宠物",
    "Characters": "角色", "Notes": "说明", "Gameplay": "玩法",
    "Verified Updates": "已核实更新", "Source": "来源", "Sources": "来源",
 },
 "zh-tw": {
    "Capes": "披風", "Cape": "披風", "Armor": "護甲", "Gear": "裝備",
    "Weapons": "武器", "Bosses": "首領", "Enemies": "敵人", "World": "世界",
    "Locations": "地點", "Artifacts": "神器", "Talismans": "護符",
    "Enchantments": "附魔", "Quests": "任務", "Dungeons": "地城",
    "Guides": "攻略", "Builds": "配裝", "Tier List": "強度排名",
    "Crossplay": "跨平台連線", "Multiplayer": "多人遊戲",
 },
 "ja": {
    "Capes": "マント", "Cape": "マント", "Armor": "防具", "Gear": "装備",
    "Weapons": "武器", "Bosses": "ボス", "Enemies": "敵", "World": "ワールド",
    "Quests": "クエスト", "Dungeons": "ダンジョン", "Guides": "攻略",
    "Builds": "ビルド", "Enchantments": "エンチャント", "Crossplay": "クロスプレイ",
 },
 "ko": {
    "Capes": "망토", "Cape": "망토", "Armor": "방어구", "Gear": "장비",
    "Weapons": "무기", "Bosses": "보스", "Enemies": "적", "World": "세계",
    "Quests": "퀘스트", "Dungeons": "던전", "Guides": "가이드",
    "Builds": "빌드", "Enchantments": "마법 부여", "Crossplay": "크로스플레이",
 },
 "de": {"Gear": "Ausrüstung", "Capes": "Umhänge", "Armor": "Rüstung",
        "Artifacts": "Artefakte", "Bosses": "Bosse", "Quests": "Quests"},
 "fr": {"Capes": "Capes", "Cape": "Cape", "Gear": "Équipement",
        "Armor": "Armure", "Artifacts": "Artefacts", "Bosses": "Boss"},
 "es": {"Capes": "Capas", "Cape": "Capa", "Gear": "Equipo",
        "Armor": "Armadura", "Artifacts": "Artefactos", "Bosses": "Jefes"},
 "pt-br": {"Capes": "Capas", "Cape": "Capa", "Gear": "Equipamentos",
           "Armor": "Armadura", "Artifacts": "Artefatos", "Bosses": "Chefes"},
}
# Correct common misreadings of unambiguous game vocabulary in translated prose.
REPLACEMENTS = {
    "zh-cn": [("海角", "披风"), ("机械齿轮", "机械齿轮"), ("小队代码", "队伍代码"), ("派对代码", "队伍代码"), ("齿轮系统", "装备系统"),
              ("盔甲槽", "护甲槽"), ("敦煌二号", "Minecraft Dungeons II")],
    "zh-tw": [("海角", "披風"), ("齒輪系統", "裝備系統"), ("派對代碼", "隊伍代碼"), ("岬", "披風")],
    "ja": [("岬", "マント"), ("ギヤ", "装備"), ("ギアシステム", "装備システム")],
    "ko": [("팟캐스트", "방어구"), ("기갑", "방어구"), ("기어 시스템", "장비 시스템")],
    "de": [("Getriebe", "Ausrüstung")],
}
BATCH_CHARS = 1800


def get_paths():
    paths = re.findall(r"path: '([^']+)'", Path("src/lib/seo-pages.ts").read_text())
    if len(paths) < 50 or len(paths) != len(set(paths)):
        raise RuntimeError(f"Bad page inventory: {len(paths)}")
    return paths


def source(path):
    address = BASE + path
    for retry in range(5):
        try:
            r = requests.get(address, timeout=35, headers={"User-Agent": "MinecraftDungeonsIIWikiLocaleBuilder/2.0"})
            r.raise_for_status()
            soup = BeautifulSoup(r.text, "html.parser")
            main = soup.select_one("main.wiki-grid")
            if main is None or main.find("h1") is None:
                raise RuntimeError("Missing SSR main")
            title = soup.title.get_text(strip=True)
            desc = soup.find("meta", attrs={"name": "description"})
            description = (desc.get("content") or "") if desc else ""
            if not title or not description:
                raise RuntimeError("Missing SEO metadata")
            for element in main.select("script,style,noscript"):
                element.decompose()
            for link in main.find_all("a", href=True):
                href = link["href"]
                parsed = urlsplit(href)
                if parsed.scheme not in ("", "http", "https"):
                    continue
                if parsed.netloc and parsed.netloc.lower() not in {"minecraftdungeons2wiki.com", "www.minecraftdungeons2wiki.com"}:
                    continue
                if parsed.path in ALL_PATHS and not href.startswith("#"):
                    link["data-localization-path"] = parsed.path
            return path, title, description, str(main)
        except Exception as ex:
            if retry == 4:
                raise RuntimeError(f"Fetch failed {address}: {ex}")
            time.sleep(2 * (retry + 1))


def text_nodes(root):
    values = []
    for element in root.find_all(True):
        for field in ("alt", "title", "aria-label", "placeholder"):
            if element.has_attr(field) and isinstance(element[field], str):
                val = element[field].strip()
                if re.search("[A-Za-z]{2}", val):
                    values.append(val)
    for node in root.descendants:
        if isinstance(node, NavigableString) and node.parent and node.parent.name not in ("script", "style", "code", "pre", "svg"):
            val = " ".join(str(node).split())
            if val and re.search("[A-Za-z]{2}", val):
                values.append(val)
    return values


def api_translate(text, target):
    args = {"client": "gtx", "sl": "en", "tl": target, "dt": "t", "q": text}
    err = None
    for attempt in range(9):
        try:
            response = requests.post(ENDPOINT, data=args, timeout=35, headers={"User-Agent": "Mozilla/5.0"})
            response.raise_for_status()
            data = response.json()
            output = "".join(part[0] for part in data[0] if part and part[0])
            if not output.strip():
                raise RuntimeError("Empty translation")
            return output
        except Exception as ex:
            err = ex
            time.sleep(min(3 * (attempt + 1), 25))
    raise RuntimeError(f"Google translation failed for {target}: {err}")


def multi_translate(items, target):
    """Preserve translation-to-text alignment; split recursively when separators drift."""
    if not items:
        return []
    if len(items) == 1:
        return [api_translate(items[0], target)]
    combined = "\n\n".join(items)
    translated = api_translate(combined, target)
    pieces = re.split(r"\n\s*\n", translated.strip())
    if len(pieces) == len(items) and all(p.strip() for p in pieces):
        return pieces
    # Some languages collapse line breaks; do not guess text-to-node mapping.
    middle = len(items) // 2
    return multi_translate(items[:middle], target) + multi_translate(items[middle:], target)


def apply_glossary(value, locale):
    for wrong, correct in REPLACEMENTS.get(locale, []):
        value = value.replace(wrong, correct)
    return value


def translate_locale(locale, english_sources):
    target = TARGETS[locale]
    unique = set()
    for path, title, desc, main in english_sources:
        unique.update([title, desc])
        root = BeautifulSoup(main, "html.parser")
        unique.update(text_nodes(root))
    overrides = TERMS.get(locale, {})
    strings = sorted(unique, key=lambda s: (len(s), s))
    cache = dict(overrides)
    tasks = [s for s in strings if s not in cache]
    batches = []
    current = []
    length = 0
    for value in tasks:
        if current and length + len(value) + 2 > BATCH_CHARS:
            batches.append(current)
            current = []
            length = 0
        current.append(value)
        length += len(value) + 2
    if current:
        batches.append(current)
    print(f"{locale}: {len(strings)} distinct strings / {len(batches)} request batches", flush=True)
    # One worker per locale: do not flood the free endpoint with hundreds of calls.
    for index, batch in enumerate(batches):
        values = multi_translate(batch, target)
        if len(values) != len(batch):
            raise RuntimeError(f"Lost text alignment {locale} batch {index}")
        cache.update({original: apply_glossary(translated, locale) for original, translated in zip(batch, values)})
        if index % 50 == 0:
            print(f"{locale}: {index}/{len(batches)} batches", flush=True)

    out = {}
    for path, title, description, raw in english_sources:
        root = BeautifulSoup(raw, "html.parser")
        for element in root.find_all(True):
            for field in ("alt", "title", "aria-label", "placeholder"):
                if element.has_attr(field) and isinstance(element[field], str):
                    original = element[field].strip()
                    if original in cache:
                        element[field] = cache[original]
            if element.name == "a" and element.has_attr("data-localization-path"):
                old = element["data-localization-path"]
                parsed = urlsplit(element.get("href", ""))
                localized = "/" + locale + (old if old != "/" else "/")
                element["href"] = urlunsplit(("", "", localized, parsed.query, parsed.fragment))
                del element["data-localization-path"]
        for node in list(root.descendants):
            if not isinstance(node, NavigableString) or not node.parent:
                continue
            if node.parent.name in ("script", "style", "code", "pre", "svg"):
                continue
            original = str(node)
            key = " ".join(original.split())
            if key not in cache:
                continue
            head = re.match(r"^\s*", original).group()
            tail = re.search(r"\s*$", original).group()
            node.replace_with(head + cache[key].strip() + tail)
        result = {"title": cache[title], "description": cache[description], "html": root.decode_contents()}
        if "<h1" not in result["html"]:
            raise RuntimeError(f"Missing H1 {locale} {path}")
        # Never silently corrupt dates: 4-digit years in the English source must survive translation.
        years = set(re.findall(r"(?<!\d)(?:20\d{2})(?!\d)", raw + title + description))
        localized_years = set(re.findall(r"(?<!\d)(?:20\d{2})(?!\d)", result["html"] + result["title"] + result["description"]))
        if not years.issubset(localized_years):
            raise RuntimeError(f"Changed year {locale} {path}: {years - localized_years}")
        out[path] = result
    print(f"{locale}: completed {len(out)} pages", flush=True)
    return locale, out


def main():
    global ALL_PATHS
    paths = get_paths()
    ALL_PATHS = set(paths)
    english_sources = []
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(source, path): path for path in paths}
        for future in as_completed(futures):
            english_sources.append(future.result())
    english_sources.sort(key=lambda item: item[0])
    print(f"Downloaded {len(english_sources)} English SSR pages", flush=True)
    results = {}
    # Parallel locales, each with its own cache and conservative request rate.
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(translate_locale, locale, english_sources) for locale in TARGETS]
        for future in as_completed(futures):
            locale, content = future.result()
            results[locale] = content
    if len(results) != len(TARGETS):
        raise RuntimeError("Incomplete language set")
    OUTPUT.parent.mkdir(exist_ok=True, parents=True)
    OUTPUT.write_text(json.dumps(results, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"Saved {len(results) * len(paths)} translated pages to {OUTPUT} ({OUTPUT.stat().st_size} bytes)", flush=True)


if __name__ == "__main__":
    main()
