import { createFileRoute } from '@tanstack/react-router';

import { Section, WikiCardGrid, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/game-info')({
  head: () =>
    pageHead(
      '/game-info',
      'Minecraft Dungeons 2 Game Info: Release, Price & Editions',
      'Minecraft Dungeons 2 game information hub for release date, price, editions, former pre-order details, redemption and official trailers.',
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[]}
      eyebrow="Game information"
      title="Minecraft Dungeons 2 Game Info"
      description="Launch and purchasing information remains available for search and reference, but it is separated from the core wiki databases so release-date and pricing pages do not dominate the knowledge architecture."
    >
      <WikiCardGrid
        items={[
          {
            href: '/release-date',
            title: 'Release Date',
            description: 'Launch date, release status and related availability information.',
          },
          {
            href: '/price',
            title: 'Price',
            description: 'Store-specific pricing tracked separately from gameplay facts.',
          },
          {
            href: '/editions',
            title: 'Editions',
            description: 'Standard and Deluxe Edition differences and included content.',
          },
          {
            href: '/pre-order',
            title: 'Pre-order',
            description: 'Post-launch record of former pre-order availability and conditions.',
          },
          {
            href: '/redeem-code',
            title: 'Redeem Code',
            description: 'Official promotion and platform redemption information.',
          },
          {
            href: '/trailers',
            title: 'Official Trailers',
            description: 'Video evidence index for official and developer footage.',
          },
        ]}
      />
      <Section title="Why this is separate from the main wiki">
        <p>
          Release and store queries remain useful, but a mature wiki should lead with reusable knowledge about the world, gear, enemies and systems. This hub preserves those launch-intent pages without making them the primary navigation model.
        </p>
      </Section>
    </WikiPage>
  );
}
