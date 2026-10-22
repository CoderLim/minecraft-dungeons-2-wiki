import { createFileRoute, Link } from '@tanstack/react-router';

import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { faqJsonLd, pageHead, webPageJsonLd } from '@/lib/seo';

const collaboration = findOfficialFact('dominos-collaboration-2026-10-21');
const giveaway = findOfficialFact('dominos-game-giveaway-2026-10-21');

export const Route = createFileRoute('/dominos-collaboration')({
  head: () =>
    pageHead(
      '/dominos-collaboration',
      "Minecraft Dungeons 2 x Domino's: Items, Codes & Dates",
      "Official Minecraft Dungeons 2 x Domino's collaboration guide covering the Slice Slayer Cape, Cheesy Cube Pet, Domino's Skin, U.S. promotion dates and game-code giveaway.",
      {
        jsonLd: [
          webPageJsonLd(
            '/dominos-collaboration',
            "Minecraft Dungeons 2 x Domino's Collaboration",
            "Officially confirmed Domino's collaboration items, U.S. promotion dates, redemption rules and game-code giveaway.",
          ),
          faqJsonLd([
            {
              question: "What are the Domino's x Minecraft Dungeons II in-game items?",
              answer:
                "The three confirmed cosmetic items are the Domino's Skin, Domino's Slice Slayer Cape, and Domino's Cheesy Cube Pet.",
            },
            {
              question: 'When does the U.S. in-game item promotion run?',
              answer:
                'The U.S. promotion runs from October 26, 2026 through January 10, 2027 for qualifying online prepaid Domino purchases by Domino’s Rewards members.',
            },
            {
              question: 'Does every Domino purchase include a free copy of Minecraft Dungeons II?',
              answer:
                'No. The separate U.S. giveaway provides a chance to win one of 20,000 Standard Edition digital game codes from October 26 through November 4, 2026.',
            },
          ]),
        ],
      },
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[{ label: 'Verified Updates', to: '/updates' }]}
      eyebrow="Official collaboration"
      title="Minecraft Dungeons 2 x Domino's"
      description="Domino's announced Minecraft Dungeons II's first brand partnership on October 21, 2026. The U.S. campaign starts October 26 with three exclusive cosmetic items, six collectible boxes, and a separate chance to win one of 20,000 Standard Edition digital game codes."
    >
      <FactGrid
        items={[
          { label: 'Announced', value: 'Oct 21, 2026' },
          { label: 'U.S. item promo', value: 'Oct 26, 2026 → Jan 10, 2027' },
          { label: 'Exclusive items', value: '3 cosmetic items' },
          { label: 'Collectible boxes', value: '6 designs' },
          { label: 'Game giveaway', value: '20,000 Standard Edition codes' },
          { label: 'Code redemption', value: 'By Dec 31, 2027' },
        ]}
      />

      <Section title="Three exclusive in-game items">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          <article className="bg-[var(--panel)] p-5">
            <h3 className="text-lg font-black">Domino's Skin</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A branded cosmetic hero skin. It is one of the three randomly awarded rewards in the U.S.
              promotion.
            </p>
          </article>
          <article className="bg-[var(--panel)] p-5">
            <h3 className="text-lg font-black">Slice Slayer Cape</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A Domino's-branded Dungeons II cape. See the{' '}
              <Link to="/capes/slice-slayer-cape" className="text-[var(--lime)] underline underline-offset-4">
                Slice Slayer Cape guide
              </Link>
              .
            </p>
          </article>
          <article className="bg-[var(--panel)] p-5">
            <h3 className="text-lg font-black">Cheesy Cube Pet</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A non-combat companion and the first co-branded partnership pet announced for Dungeons II. See the{' '}
              <Link to="/pets/cheesy-cube" className="text-[var(--lime)] underline underline-offset-4">
                Cheesy Cube Pet guide
              </Link>
              .
            </p>
          </article>
        </div>
      </Section>

      <Section title="How the U.S. item promotion works">
        <p>{collaboration.claim}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
          <li>Domino's Rewards membership is required.</li>
          <li>The Domino must be ordered and prepaid online or through the Domino's app.</li>
          <li>Each qualifying Domino earns one of the three item codes at random.</li>
          <li>Up to 10 item codes can be earned in one order, and duplicate rewards are possible.</li>
          <li>Each Microsoft account can redeem each in-game item once.</li>
          <li>Reward codes must be redeemed by December 31, 2027.</li>
        </ul>
      </Section>

      <Section title="20,000 Standard Edition game-code giveaway">
        <p>{giveaway.claim}</p>
        <p className="mt-4">
          Domino's describes the game as a $29.99 value in the promotion. This does not change the normal store
          price: buying a Domino gives an eligible customer a chance to win after submitting proof of purchase,
          not a guaranteed free copy.
        </p>
      </Section>

      <Section title="Six collectible box designs">
        <p>
          Domino's says the six U.S. box designs feature Corrupted Creeper, Prime Enchanter, Valorie, Zombie,
          Pig, and Creeper. Boxes are available while supplies last during the promotion.
        </p>
      </Section>

      <Section title="International rollout">
        <p>
          Domino's also announced a broader rollout across Australia, New Zealand, Belgium, the Netherlands,
          Brazil, Canada, China, France, Germany, Japan, Malaysia, Singapore, Mexico, Portugal, Saudi Arabia,
          the United Arab Emirates, Spain, Taiwan, and Turkey.
        </p>
        <p className="mt-4">
          The official announcement explicitly says qualifying products, code distribution, and timing vary by
          country. The U.S. dates and 20,000-code giveaway should not be copied onto those markets unless their
          local Domino's terms confirm the same rules.
        </p>
      </Section>

      <Section title="Where to redeem an item code">
        <p>
          Domino's instructs players to launch Minecraft Dungeons II, sign in with the relevant Microsoft
          account, open Settings, scroll to Exclusive Content, and redeem the code there.
        </p>
      </Section>

      <SourceList
        sources={[
          { label: collaboration.sourceLabel, href: collaboration.sourceUrl },
          {
            label: "Domino's investor relations — official October 21 announcement",
            href: giveaway.sourceUrl,
          },
          {
            label: "Domino's x Minecraft Dungeons II — terms and conditions",
            href: 'https://www.dominos.com/minecraft-dungeons-ii/terms/',
          },
        ]}
      />
    </WikiPage>
  );
}
