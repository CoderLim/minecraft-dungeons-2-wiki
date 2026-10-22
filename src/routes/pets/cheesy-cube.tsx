import { createFileRoute, Link } from '@tanstack/react-router';

import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';

const collaboration = findOfficialFact('dominos-collaboration-2026-10-21');

export const Route = createFileRoute('/pets/cheesy-cube')({
  head: () =>
    pageHead(
      '/pets/cheesy-cube',
      "Cheesy Cube Pet: Minecraft Dungeons 2 x Domino's",
      "Official Cheesy Cube Pet guide for Minecraft Dungeons II: how to get it, whether it fights, U.S. promotion dates and redemption rules.",
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
      eyebrow="Promotional pet"
      title="Domino's Cheesy Cube Pet"
      description="The Cheesy Cube Pet is a non-combat Minecraft Dungeons II companion introduced through the Domino's collaboration. Domino's calls it the first co-branded partnership pet to appear in Dungeons II."
    >
      <FactGrid
        items={[
          { label: 'Type', value: 'Cosmetic pet companion' },
          { label: 'Combat', value: 'Does not fight' },
          { label: 'Promotion', value: "Domino's x Minecraft Dungeons II" },
          { label: 'U.S. availability', value: 'Oct 26, 2026 → Jan 10, 2027' },
          { label: 'Reward method', value: 'Random 1 of 3 item codes' },
          { label: 'Redeem by', value: 'Dec 31, 2027' },
        ]}
      />
      <Section title="Does the Cheesy Cube Pet fight?">
        <p>
          No. Domino's official announcement explicitly describes the Cheesy Cube as a companion that follows
          the player but does not help fight battles.
        </p>
      </Section>
      <Section title="How to get it in the U.S.">
        <p>{collaboration.claim}</p>
        <p className="mt-4">
          Because rewards are random, a qualifying Domino purchase can award the Skin,{' '}
          <Link to="/capes/slice-slayer-cape" className="text-[var(--lime)] underline underline-offset-4">
            Slice Slayer Cape
          </Link>
          , or Cheesy Cube Pet.
        </p>
      </Section>
      <Section title="International availability">
        <p>
          Domino's announced collaboration activity in 19 additional markets, but it explicitly warns that
          timing, qualifying products and code distribution vary by country. Do not assume the U.S. acquisition
          rules apply elsewhere.
        </p>
      </Section>
      <SourceList
        sources={[
          { label: collaboration.sourceLabel, href: collaboration.sourceUrl },
          {
            label: "Domino's investor relations — official October 21 announcement",
            href:
              'https://ir.dominos.com/news-releases/news-release-details/building-ultimate-game-night-dominosr-and-minecraft-dungeons-ii',
          },
        ]}
      />
    </WikiPage>
  );
}
