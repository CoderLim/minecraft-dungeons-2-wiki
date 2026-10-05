import { createFileRoute } from '@tanstack/react-router';

import { Section, WikiCardGrid, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/guides')({
  head: () =>
    pageHead(
      '/guides',
      'Minecraft Dungeons 2 Guides: Builds, Co-op & Exploration',
      'Minecraft Dungeons 2 guide hub for builds, co-op, controls, exploration, gameplay systems and evidence-backed progression help.',
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[]}
      eyebrow="Guide hub"
      title="Minecraft Dungeons 2 Guides"
      description="Guides answer task-focused questions: what to equip, how a system works, how to play with friends, or where to explore next. Canonical entity facts stay in the wiki database and are linked from these guides instead of being duplicated."
    >
      <WikiCardGrid
        items={[
          {
            href: '/builds',
            title: 'Builds',
            description: 'Source-backed buildcraft and gear synergies based on currently verified systems.',
            meta: 'Buildcraft',
          },
          {
            href: '/tier-list',
            title: 'Tier List',
            description: 'A provisional ranking layer kept separate from canonical item facts.',
            meta: 'Buildcraft',
          },
          {
            href: '/crossplay',
            title: 'Crossplay & Co-op',
            description: 'Cross-platform play, mixed couch/online sessions, party codes and matchmaking.',
            meta: 'Co-op',
          },
          {
            href: '/controls',
            title: 'Controls',
            description: 'Verified control mappings and platform-specific gaps that still need confirmation.',
            meta: 'Getting started',
          },
          {
            href: '/the-sift',
            title: 'The Sift',
            description: 'Verified details for the new dimension, regions, rifts and exploration context.',
            meta: 'Exploration',
          },
          {
            href: '/gameplay',
            title: 'Gameplay Systems',
            description: 'Jumping, gear, enchantments, interconnected exploration and co-op quality-of-life.',
            meta: 'Systems',
          },
        ]}
      />
      <Section title="Guide vs. database">
        <p>
          A guide should explain what a player should do. A database page should define the entity or system itself. Keeping those intents separate lets future weapon, boss and mission entities stay canonical while guides can recommend and combine them.
        </p>
      </Section>
    </WikiPage>
  );
}
