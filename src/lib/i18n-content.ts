import { getReviewedTranslation } from '@/lib/verified-translations';

import { isTranslatedLocale, LOCALES } from '@/lib/locales';
import { SEO_PAGES } from '@/lib/seo-pages';
import { absoluteUrl, pageHead } from '@/lib/seo';

type LocalizedPage = {
  title: string;
  description: string;
  html: string;
};


export function getLocalizedPage(locale: string, path: string): LocalizedPage | undefined {
  if (!isTranslatedLocale(locale)) return undefined;
  // Raw machine output is retained for editorial comparison, not publication.
  // Never expose it as a translated page until its full article is reviewed.
  return getReviewedTranslation(locale, path);
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
  const relativePath = path === '/' ? `/${locale}/` : `/${locale}${path}`;
  const head = pageHead(relativePath, page.title, page.description, {
    noindex: seoEntry ? !seoEntry.index : true,
  });
  return {
    ...head,
    links: [
      ...head.links,
      { rel: 'alternate', hrefLang: 'en', href: absoluteUrl(path) },
      ...LOCALES.filter(
        (language) => language.code !== 'en' && Boolean(getLocalizedPage(language.code, path)),
      ).map((language) => ({
        rel: 'alternate',
        hrefLang: language.languageTag,
        href: absoluteUrl(path === '/' ? `/${language.code}/` : `/${language.code}${path}`),
      })),
      { rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl(path) },
    ],
  };
}

export function localizedSitemapPaths(): string[] {
  return SEO_PAGES.filter((page) => page.index)
    .flatMap(({ path }) =>
      LOCALES.filter(
        (language) => language.code !== 'en' && Boolean(getLocalizedPage(language.code, path)),
      ).map((language) => (path === '/' ? `/${language.code}/` : `/${language.code}${path}`)),
    );
}
