import { createFileRoute } from '@tanstack/react-router';
import { SITE } from '@/lib/site';

const paths = [
  '/',
  '/release-date',
  '/price',
  '/editions',
  '/pre-order',
  '/pre-order-bonus',
  '/gameplay',
  '/builds',
  '/tier-list',
  '/trailers',
  '/the-sift',
  '/capes',
  '/capes/hero-cape',
  '/capes/corrupted-creeper-cape',
  '/redeem-code',
  '/note-block-code',
  '/bosses',
  '/bosses/twisted-warden',
  '/bosses/copper-monstrosity',
  '/pets/blub',
  '/crossplay',
  '/platforms/steam',
  '/platforms/xbox',
  '/platforms/switch',
  '/platforms/switch-2',
];

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...paths.map((path) => `  <url><loc>${new URL(path, SITE.url).href}</loc><lastmod>2026-09-30</lastmod></url>`),
          '</urlset>',
          '',
        ].join('\n');
        return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
      },
    },
  },
});
