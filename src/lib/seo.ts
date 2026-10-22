import { SITE } from './site';
import { localeHomePath, LOCALES } from './locales';
import { SEO_PAGES } from './seo-pages';

export type PageHeadOptions = {
  noindex?: boolean;
  /** Absolute or site-relative image URL. Defaults to /og.png */
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** Structured data objects rendered as application/ld+json head scripts */
  jsonLd?: unknown | unknown[];
};

export function absoluteUrl(path: string) {
  return new URL(path || '/', SITE.url).href;
}

export function pageHead(
  path: string,
  title: string,
  description: string,
  options: PageHeadOptions = {},
) {
  const url = absoluteUrl(path);
  const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '');
  // Only alternate indexed canonical English routes; localized pages supply
  // their own reciprocal links in localizedHead.
  const englishIndexable = SEO_PAGES.some((item) => item.path === normalizedPath && item.index);
  const englishAlternates = englishIndexable
    ? [
        { rel: 'alternate', hrefLang: 'en', href: absoluteUrl(normalizedPath) },
        ...LOCALES.filter((locale) => locale.code !== 'en').map((locale) => ({
          rel: 'alternate',
          hrefLang: locale.languageTag,
          href: absoluteUrl(
            normalizedPath === '/' ? localeHomePath(locale.code) : `/${locale.code}${normalizedPath}`,
          ),
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl(normalizedPath) },
      ]
    : [];
  const imagePath = options.image ?? '/og.png';
  const image = imagePath.startsWith('http') ? imagePath : absoluteUrl(imagePath);
  const imageWidth = String(options.imageWidth ?? 1200);
  const imageHeight = String(options.imageHeight ?? 630);

  const jsonLdItems = options.jsonLd
    ? Array.isArray(options.jsonLd)
      ? options.jsonLd
      : [options.jsonLd]
    : [];

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      ...(options.noindex ? [{ name: 'robots', content: 'noindex,follow' }] : []),
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: SITE.name },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: imageWidth },
      { property: 'og:image:height', content: imageHeight },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    links: [{ rel: 'canonical', href: url }, ...(options.noindex ? [] : englishAlternates)],
    scripts: jsonLdItems.map((item) => ({
      type: 'application/ld+json',
      children: JSON.stringify(item),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: absoluteUrl('/'),
    },
  };
}

