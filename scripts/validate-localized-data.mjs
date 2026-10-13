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
const languageSignals = {
  'zh-cn': /[\\u4e00-\\u9fff]/,
  'zh-tw': /[\\u4e00-\\u9fff]/,
  ja: /[\\u3040-\\u30ff]/,
  ko: /[\\uac00-\\ud7af]/,
};

assert.ok(paths.length >= 50, 'Expected full wiki route inventory');
assert.equal(paths.length, new Set(paths).size, 'Duplicate SEO route');
assert.deepEqual(Object.keys(translations).sort(), locales.slice().sort(), 'Locale coverage mismatch');

let checked = 0;
for (const locale of locales) {
  const articles = translations[locale];
  assert.deepEqual(Object.keys(articles).sort(), paths.slice().sort(), `Missing article in ${locale}`);
  for (const path of paths) {
    const article = articles[path];
    assert.ok(article?.title?.trim(), `Missing localized title: ${locale}${path}`);
    assert.ok(article?.description?.trim(), `Missing localized description: ${locale}${path}`);
    assert.ok(article?.html?.includes('<h1'), `Missing localized h1: ${locale}${path}`);
    assert.ok(!/<script\b/i.test(article.html), `Script in SSR snapshot: ${locale}${path}`);
    assert.ok(!/data-localization-path/.test(article.html), `Unconverted relative link: ${locale}${path}`);
    assert.ok(article.html.length >= 350, `Suspiciously short localized page: ${locale}${path}`);
    if (languageSignals[locale]) {
      assert.ok(languageSignals[locale].test(article.html), `Target-language content missing: ${locale}${path}`);
    }
    checked++;
  }
}
console.log(`i18n validation passed: ${locales.length} locales × ${paths.length} routes = ${checked} localized pages`);
