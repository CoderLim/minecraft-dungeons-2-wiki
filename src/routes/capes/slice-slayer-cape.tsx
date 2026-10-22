import { createFileRoute, Link } from '@tanstack/react-router';

import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';

const collab = findOfficialFact('dominos-collab-2026-10-21');

export const Route = createFileRoute('/capes/slice-slayer-cape')({
  head: () =>
    pageHead(
      '/capes/slice-slayer-cape',
      'Slice Slayer Cape - Minecraft Dungeons 2 Domino’s Cape',
      "Official Slice Slayer Cape guide for Minecraft Dungeons 2, including the Domino's collaboration, promotion dates, random reward rules and redemption details.",
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[{ label: 'Capes', to: '/capes' }]}
      eyebrow="Promotional cape"
      title="Slice Slayer Cape"
      description="The Slice Slayer Cape is an officially announced pizza-themed cosmetic cape from the Domino's x Minecraft Dungeons II collaboration. It becomes obtainable through qualifying promotion orders starting October 26, 2026 in participating markets."
    >
      <FactGrid
        items={[
          { label: 'Type', value: 'Cosmetic cape' },
          { label: 'Collaboration', value: "Domino's x Minecraft Dungeons II" },
          { label: 'Announced', value: 'Oct 21, 2026' },
          { label: 'U.S. promo', value: 'Oct 26, 2026 → Jan 10, 2027' },
          { label: 'Gameplay bonus', value: 'None' },
          { label: 'Reward allocation', value: 'Random in U.S. promotion' },
        ]}
      />

      <Section title="How to get the Slice Slayer Cape">
        <p>
          In the U.S., a qualifying prepaid online Domino order by a Domino's Rewards member grants a code for
          one of three Dungeons II cosmetics at random. The Slice Slayer Cape is one of those three items.
          Regional rules differ outside the U.S.
        </p>
      </Section>

      <Section title="Is the cape guaranteed?">
        <p>
          No. The U.S. promotion randomly allocates one of the three cosmetics per qualifying reward. Mojang
          says codes can be shared or swapped with friends, which provides a way to complete the set.
        </p>
      </Section>

      <Section title="Related collaboration rewards">
        <p>
          The other two official cosmetics are the Domino's Skin and Cheesy Cube Pet. See the{' '}
          <Link to="/dominos-collaboration" className="text-[var(--lime)] underline underline-offset-4">
            full Domino's collaboration guide
          </Link>{' '}
          for dates, redemption instructions and the separate U.S. game-code giveaway.
        </p>
      </Section>

      <SourceList sources={[{ label: collab.sourceLabel, href: collab.sourceUrl }]} />
    </WikiPage>
  );
}
