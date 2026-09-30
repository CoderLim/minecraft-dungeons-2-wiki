import { SITE } from './site';

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
    links: [{ rel: 'canonical', href: url }],
    scripts: jsonLdItems.map((item) => ({
      type: 'application/ld+json',
      children: JSON.stringify(item),
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
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

