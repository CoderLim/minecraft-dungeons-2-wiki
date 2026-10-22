import pagesJson from '@/data/i18n-pages.json';
import { getReviewedTranslation } from '@/lib/verified-translations';
import { polishTranslation } from '@/lib/translation-edits';

import { isTranslatedLocale, localeHomePath, LOCALES } from '@/lib/locales';
import { SEO_PAGES } from '@/lib/seo-pages';
import { absoluteUrl, pageHead } from '@/lib/seo';

type LocalizedPage = {
  title: string;
  description: string;
  html: string;
};


const staticPages = pagesJson as Record<string, Record<string, LocalizedPage>>;
const polishedCache = new Map<string, LocalizedPage>();

export function getLocalizedPage(locale: string, path: string): LocalizedPage | undefined {
  if (!isTranslatedLocale(locale)) return undefined;
  // The home route has editorially written React content in all nine languages.
  if (path === '/') return undefined;
  const key = `${locale}:${path}`;
  const cached = polishedCache.get(key);
  if (cached) return cached;
  // Human-edited guides take priority over contextual machine-assisted versions.
  const content = getReviewedTranslation(locale, path) ?? staticPages[locale]?.[path];
  if (!content) return undefined;
  const polished = polishTranslation(locale, path, content);
  polishedCache.set(key, polished);
  return polished;
}

export function isLocalizationComplete(): boolean {
  return LOCALES.every(
    (locale) =>
      locale.code === 'en' ||
      SEO_PAGES.every((page) => page.path === '/' || Boolean(getLocalizedPage(locale.code, page.path)?.html)),
  );
}

export function localizedHead(locale: string, path: string) {
  const page = getLocalizedPage(locale, path);
  if (!page) return pageHead('/', 'Not found', 'No verified translation.', { noindex: true });
  const seoEntry = SEO_PAGES.find((item) => item.path === path);
  const relativePath = path === '/' ? localeHomePath(locale) : `/${locale}${path}`;
  const head = pageHead(relativePath, page.title, page.description, {
    noindex: seoEntry ? !seoEntry.index : true,
  });
  return {
    ...head,
    links: [
      ...head.links,
      { rel: 'alternate', hrefLang: 'en', href: absoluteUrl(path) },
      ...LOCALES.filter(
        (language) => language.code !== 'en' && (path === '/' || Boolean(getLocalizedPage(language.code, path))),
      ).map((language) => ({
        rel: 'alternate',
        hrefLang: language.languageTag,
        href: absoluteUrl(path === '/' ? localeHomePath(language.code) : `/${language.code}${path}`),
      })),
      { rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl(path) },
    ],
  };
}

export function localizedSitemapPaths(): string[] {
  return SEO_PAGES.filter((page) => page.index)
    .flatMap(({ path }) =>
      LOCALES.filter(
        (language) => language.code !== 'en' && (path === '/' || Boolean(getLocalizedPage(language.code, path))),
      ).map((language) => (path === '/' ? localeHomePath(language.code) : `/${language.code}${path}`)),
    );
}
