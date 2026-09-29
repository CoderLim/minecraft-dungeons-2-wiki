import { createFileRoute } from '@tanstack/react-router';
import { SITE } from '@/lib/site';

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: () => new Response(
        [
          'User-Agent: *',
          'Allow: /',
          'Disallow: /*?*',
          '',
          `Sitemap: ${SITE.url}/sitemap.xml`,
          `# llms.txt: ${SITE.url}/llms.txt`,
          '',
        ].join('\n'),
        { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
      ),
    },
  },
});
