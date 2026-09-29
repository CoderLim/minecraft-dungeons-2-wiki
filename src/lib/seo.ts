import { SITE } from './site';

export function pageHead(
  path: string,
  title: string,
  description: string,
  options: { noindex?: boolean } = {},
) {
  const url = new URL(path || '/', SITE.url).href;
  // Prefer compressed square asset (~45KB) over full /logo.png (~500KB)
  const image = new URL('/logo-128.png', SITE.url).href;
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
      { property: 'og:image:width', content: '128' },
      { property: 'og:image:height', content: '128' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    links: [{ rel: 'canonical', href: url }],
  };
}
