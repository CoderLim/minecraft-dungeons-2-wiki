#!/usr/bin/env node
/**
 * Verify that every SEO route has a real SSR translation in all eight locales.
 * This intentionally rejects thin/empty locale placeholders.
 */
import fs from 'node:fs';
import assert from 'node:assert/strict';

const source = fs.readFileSync('src/lib/seo-pages.ts', 'utf8');
const paths = [...source.matchAll(/path: '([^']+)'/g)].map((m) => m[1]);
const locales = ['zh-cn', 'zh-tw', 'ja', 'ko', 'de', 'fr', 'es', 'pt-br'];
const translations = JSON.parse(fs.readFileSync('src/data/i18n-pages.json', 'utf8'));
const reviewedOnly = {
  '/dominos-collaboration': 'src/lib/verified-dominos.ts',
  '/capes/slice-slayer-cape': 'src/lib/verified-dominos.ts',
  '/pets/cheesy-cube': 'src/lib/verified-dominos.ts',
};
const reviewedSources = new Map(
  [...new Set(Object.values(reviewedOnly))].map((file) => [file, fs.readFileSync(file, 'utf8')]),
);
function reviewedLocaleMarker(locale) {
  return locale.includes('-') ? `'${locale}':{` : `${locale}:{`;
}
function hasReviewedArticle(locale, path) {
  const file = reviewedOnly[path];
  if (!file) return false;
  const source = reviewedSources.get(file) || '';
  return source.includes(reviewedLocaleMarker(locale)) && source.includes(`if(path==='${path}')`);
}
const languageSignals = {
  'zh-cn': /[\u4e00-\u9fff]/,
  'zh-tw': /[\u4e00-\u9fff]/,
  ja: /[\u3040-\u30ff]/,
  ko: /[\uac00-\ud7af]/,
};

assert.ok(paths.length >= 50, 'Expected full wiki route inventory');
assert.equal(paths.length, new Set(paths).size, 'Duplicate SEO route');
assert.deepEqual(Object.keys(translations).sort(), locales.slice().sort(), 'Locale coverage mismatch');

let checked = 0;
for (const locale of locales) {
  const articles = translations[locale];
  const effectivePaths = new Set(Object.keys(articles));
  for (const path of Object.keys(reviewedOnly)) {
    if (hasReviewedArticle(locale, path)) effectivePaths.add(path);
  }
  assert.deepEqual([...effectivePaths].sort(), paths.slice().sort(), `Missing article in ${locale}`);
  for (const path of paths) {
    const article = articles[path];
    if (!article && hasReviewedArticle(locale, path)) {
      checked++;
      continue;
    }
    assert.ok(article?.title?.trim(), `Missing localized title: ${locale}${path}`);
    assert.ok(article?.description?.trim(), `Missing localized description: ${locale}${path}`);
    assert.ok(article?.html?.includes('<h1'), `Missing localized h1: ${locale}${path}`);
    assert.ok(!/<script\b/i.test(article.html), `Script in SSR snapshot: ${locale}${path}`);
    assert.ok(!/data-localization-path/.test(article.html), `Unconverted relative link: ${locale}${path}`);
    assert.ok(article.html.includes(`href="/${locale}/`), `Missing localized internal navigation: ${locale}${path}`);
    assert.ok(article.html.length >= 350, `Suspiciously short localized page: ${locale}${path}`);
    if (languageSignals[locale]) {
      assert.ok(languageSignals[locale].test(article.html), `Target-language content missing: ${locale}${path}`);
    }
    checked++;
  }
}
console.log(`i18n validation passed: ${locales.length} locales × ${paths.length} routes = ${checked} localized pages`);

const qualityTerms = {
  'zh-cn': ['海角', '敦煌二号', '播客'], 'zh-tw': ['海角', '敦煌二號', '岬'],
  ja: ['岬', '2018年10月13日'], ko: ['팟캐스트', '기갑'],
  de: ['Getriebe'], fr: [], es: [], 'pt-br': [],
};
for (const [locale, pages] of Object.entries(translations)) {
  for (const path of ['/release-date', '/capes', '/gear', '/bosses', '/builds', '/crossplay', '/tier-list', '/updates']) {
    const page = pages[path];
    if (!page) continue;
    const excerpt = page.html.replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ')
      .replace(/\s+/g, ' ').slice(0, 290);
    console.log(JSON.stringify({ type: 'editorial_sample', locale, path, title: page.title, excerpt }));
  }
  for (const [path, page] of Object.entries(pages)) {
    for (const bad of qualityTerms[locale] || []) {
      if (page.title.includes(bad)) {
        throw new Error(`Unacceptable literal mistranslation in title: ${locale} ${path} ${bad}`);
      }
    }
  }
}
console.log('Editorial sample printout and critical term checks passed');
