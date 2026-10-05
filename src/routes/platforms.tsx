import { createFileRoute } from '@tanstack/react-router';

import { Section, WikiCardGrid, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/platforms')({
  head: () =>
    pageHead(
      '/platforms',
      'Minecraft Dungeons 2 Platforms: PC, Xbox, Switch & Steam Deck',
      'Minecraft Dungeons 2 platform hub for Steam, Steam Deck, Xbox, Nintendo Switch, Switch 2 and crossplay information.',
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[]}
      eyebrow="Platform hub"
      title="Minecraft Dungeons 2 Platforms"
      description="Platform pages collect availability, compatibility and multiplayer details without duplicating the underlying gameplay database."
    >
      <WikiCardGrid
        items={[
          {
            href: '/platforms/steam',
            title: 'Steam / PC',
            description: 'PC release information, store details and links to Steam-specific compatibility notes.',
          },
          {
            href: '/steam-deck',
            title: 'Steam Deck',
            description: 'Current playable status, verification progress and known limitations from the official changelog.',
          },
          {
            href: '/platforms/xbox',
            title: 'Xbox',
            description: 'Xbox availability, Game Pass context and multiplayer information.',
          },
          {
            href: '/platforms/switch',
            title: 'Nintendo Switch',
            description: 'Nintendo Switch release and platform-specific notes.',
          },
          {
            href: '/platforms/switch-2',
            title: 'Nintendo Switch 2',
            description: 'Nintendo Switch 2 availability and platform-specific notes.',
          },
          {
            href: '/crossplay',
            title: 'Crossplay & Co-op',
            description: 'How supported platforms connect through crossplay, party codes and online sessions.',
          },
        ]}
      />
      <Section title="Platform data policy">
        <p>
          A platform is only promoted when there is a real page with sourced availability or compatibility information. The hub should not create speculative pages for unsupported or unconfirmed platforms.
        </p>
      </Section>
    </WikiPage>
  );
}
