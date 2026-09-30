import { createFileRoute } from '@tanstack/react-router';

import { allSeoPages } from '@/lib/seo-pages';
import { SITE } from '@/lib/site';

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: () => {
        const pages = allSeoPages();
        const indexed = pages.filter((page) => page.index);
        const held = pages.filter((page) => !page.index);
        const body = [
          `# ${SITE.name}`,
          '',
          `> ${SITE.description}`,
          '',
          '## Evidence policy',
          '',
          '- Official / first-party evidence has highest priority.',
          '- Direct gameplay observation is recorded with timestamps where possible.',
          '- Community-only claims are labeled and never silently promoted to fact.',
          '- Unknown fields remain unknown instead of being guessed.',
          '',
          '## Indexable pages',
          '',
          ...indexed.map(
            (page) =>
              `- [${page.title}](${new URL(page.path, SITE.url).href}): ${page.blurb}`,
          ),
          '',
          '## Held / noindex until databases deepen',
          '',
          ...held.map(
            (page) =>
              `- [${page.title}](${new URL(page.path, SITE.url).href}): ${page.blurb}`,
          ),
          '',
          '## Machine-readable indexes',
          '',
          `- Sitemap: ${SITE.url}/sitemap.xml`,
          `- Robots: ${SITE.url}/robots.txt`,
          '',
        ].join('\n');
        return new Response(body, {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      },
    },
  },
});
