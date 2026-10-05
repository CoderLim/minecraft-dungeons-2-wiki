import { createFileRoute } from '@tanstack/react-router';

import { indexablePaths } from '@/lib/seo-pages';
import { SITE } from '@/lib/site';

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...indexablePaths().map(
            (path) =>
              `  <url><loc>${new URL(path, SITE.url).href}</loc></url>`,
          ),
          '</urlset>',
          '',
        ].join('\n');
        return new Response(xml, {
          headers: { 'Content-Type': 'application/xml; charset=utf-8' },
        });
      },
    },
  },
});
