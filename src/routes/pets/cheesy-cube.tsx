import { createFileRoute, Link } from '@tanstack/react-router';

import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';

const collab = findOfficialFact('dominos-collab-2026-10-21');

export const Route = createFileRoute('/pets/cheesy-cube')({
  head: () =>
    pageHead(
      '/pets/cheesy-cube',
      'Cheesy Cube Pet - Minecraft Dungeons 2 Domino’s Pet',
      "Official Cheesy Cube Pet guide for Minecraft Dungeons 2: Domino's collaboration dates, cosmetic-only behavior and reward redemption details.",
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[{ label: "Domino's Collaboration", to: '/dominos-collaboration' }]}
      eyebrow="Cosmetic pet"
      title="Cheesy Cube Pet"
      description="The Cheesy Cube Pet is an officially announced cosmetic companion from the Domino's x Minecraft Dungeons II collaboration. It follows the player but provides no gameplay benefit."
    >
      <FactGrid
        items={[
          { label: 'Type', value: 'Cosmetic companion' },
          { label: 'Collaboration', value: "Domino's x Minecraft Dungeons II" },
          { label: 'Announced', value: 'Oct 21, 2026' },
          { label: 'U.S. promo', value: 'Oct 26, 2026 → Jan 10, 2027' },
          { label: 'Gameplay bonus', value: 'None' },
          { label: 'Reward allocation', value: 'Random in U.S. promotion' },
        ]}
      />

      <Section title="What does the Cheesy Cube Pet do?">
        <p>
          Mojang describes it as a cheesy companion that follows you on your travels. The official collaboration
          article explicitly states that all three Domino's rewards are cosmetics and do not provide gameplay
          benefits.
        </p>
      </Section>

      <Section title="How to get it">
        <p>
          In the U.S., Domino's Rewards members can receive one of the three collaboration cosmetics at random
          after a qualifying prepaid online Domino order. Availability, qualifying products and distribution
          differ in other participating countries.
        </p>
      </Section>

      <Section title="Related rewards">
        <p>
          The collaboration also includes the Domino's Skin and{' '}
          <Link to="/capes/slice-slayer-cape" className="text-[var(--lime)] underline underline-offset-4">
            Slice Slayer Cape
          </Link>
          . The full promotion details are collected on the{' '}
          <Link to="/dominos-collaboration" className="text-[var(--lime)] underline underline-offset-4">
            Domino's collaboration page
          </Link>
          .
        </p>
      </Section>

      <SourceList sources={[{ label: collab.sourceLabel, href: collab.sourceUrl }]} />
    </WikiPage>
  );
}
