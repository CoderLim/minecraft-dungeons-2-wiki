import { createFileRoute, Link } from '@tanstack/react-router';

import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';

const collaboration = findOfficialFact('dominos-collaboration-2026-10-21');

export const Route = createFileRoute('/capes/slice-slayer-cape')({
  head: () =>
    pageHead(
      '/capes/slice-slayer-cape',
      "Slice Slayer Cape: Minecraft Dungeons 2 x Domino's",
      "How to get the Domino's Slice Slayer Cape in Minecraft Dungeons II, including official promotion dates, eligibility and code redemption deadline.",
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[
        { label: 'Capes & Cosmetics', to: '/capes' },
        { label: "Domino's Collaboration", to: '/dominos-collaboration' },
      ]}
      eyebrow="Promotional cape"
      title="Domino's Slice Slayer Cape"
      description="The Slice Slayer Cape is an official Minecraft Dungeons II cosmetic from the Domino's collaboration announced October 21, 2026. In the U.S. promotion it is one of three randomly awarded item codes."
    >
      <FactGrid
        items={[
          { label: 'Type', value: 'Cosmetic cape' },
          { label: 'Promotion', value: "Domino's x Minecraft Dungeons II" },
          { label: 'U.S. availability', value: 'Oct 26, 2026 → Jan 10, 2027' },
          { label: 'Reward method', value: 'Random 1 of 3 item codes' },
          { label: 'Membership', value: "Domino's Rewards required" },
          { label: 'Redeem by', value: 'Dec 31, 2027' },
        ]}
      />
      <Section title="How to get the Slice Slayer Cape">
        <p>{collaboration.claim}</p>
        <p className="mt-4">
          The reward is random, so a qualifying purchase does not guarantee the Slice Slayer Cape specifically.
          Multiple qualifying Dominos can earn multiple codes, but the official rules allow each Microsoft
          account to redeem each of the three collaboration items once.
        </p>
      </Section>
      <Section title="Is it a permanent store item?">
        <p>
          No permanent store listing has been announced. The currently verified U.S. acquisition path is the
          limited Domino's promotion. International availability must be checked against local Domino's terms.
        </p>
      </Section>
      <Section title="Related collaboration rewards">
        <p>
          The other two official rewards are the Domino's Skin and{' '}
          <Link to="/pets/cheesy-cube" className="text-[var(--lime)] underline underline-offset-4">
            Cheesy Cube Pet
          </Link>
          .
        </p>
      </Section>
      <SourceList
        sources={[
          { label: collaboration.sourceLabel, href: collaboration.sourceUrl },
          {
            label: "Domino's official terms",
            href: 'https://www.dominos.com/minecraft-dungeons-ii/terms/',
          },
        ]}
      />
    </WikiPage>
  );
}
