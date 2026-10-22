import { createFileRoute, Link } from '@tanstack/react-router';

import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { breadcrumbJsonLd, faqJsonLd, pageHead, webPageJsonLd } from '@/lib/seo';

const collab = findOfficialFact('dominos-collab-2026-10-21');
const giveaway = findOfficialFact('dominos-us-game-giveaway-2026-10-21');

export const Route = createFileRoute('/dominos-collaboration')({
  head: () =>
    pageHead(
      '/dominos-collaboration',
      "Minecraft Dungeons 2 Domino's Collab: Codes, Cape & Pet",
      "Official Domino's x Minecraft Dungeons II collaboration guide covering the Slice Slayer Cape, Cheesy Cube Pet, Domino's Skin, U.S. dates, redemption and the 20,000-game giveaway.",
      {
        jsonLd: [
          webPageJsonLd(
            '/dominos-collaboration',
            "Minecraft Dungeons 2 Domino's Collaboration",
            "Official dates, cosmetics, redemption details and regional notes for the Domino's x Minecraft Dungeons II promotion.",
          ),
          breadcrumbJsonLd([
            { name: 'Wiki', path: '/' },
            { name: "Domino's Collaboration", path: '/dominos-collaboration' },
          ]),
          faqJsonLd([
            {
              question: "What are the Domino's Minecraft Dungeons 2 rewards?",
              answer:
                "The three exclusive cosmetics are the Domino's Skin, Slice Slayer Cape and Cheesy Cube Pet. Qualifying U.S. orders receive one of the three at random.",
            },
            {
              question: "When does the U.S. Domino's Minecraft Dungeons 2 promotion run?",
              answer:
                'The U.S. cosmetic promotion runs from October 26, 2026 through January 10, 2027.',
            },
            {
              question: 'Is the 20,000-copy giveaway guaranteed with a purchase?',
              answer:
                'No. The U.S.-only offer is a chance to receive one of 20,000 Standard Edition digital codes. Two thousand copies are available per day from October 26 through November 4, 2026.',
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
      eyebrow="Limited-time collaboration"
      title="Domino's x Minecraft Dungeons II"
      description="Mojang and Domino's announced Minecraft Dungeons II's first brand partnership on October 21, 2026. The collaboration adds three exclusive cosmetics, collectible packaging in some markets and a separate U.S.-only chance to receive one of 20,000 digital game codes."
    >
      <FactGrid
        items={[
          { label: 'Announced', value: 'Oct 21, 2026' },
          { label: 'U.S. cosmetics', value: 'Oct 26, 2026 → Jan 10, 2027' },
          { label: 'Exclusive cosmetics', value: "Domino's Skin · Slice Slayer Cape · Cheesy Cube Pet" },
          { label: 'U.S. game giveaway', value: '20,000 Standard Edition codes' },
          { label: 'Giveaway window', value: 'Oct 26 → Nov 4, 2026' },
          { label: 'Evidence', value: 'Official Minecraft + Domino’s' },
        ]}
      />

      <Section title="Three exclusive Dungeons II cosmetics">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          <article className="bg-[var(--panel)] p-5">
            <h3 className="font-black">Domino's Skin</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A Domino's-inspired character skin. Mojang classifies it as a cosmetic with no gameplay benefit.
            </p>
          </article>
          <article className="bg-[var(--panel)] p-5">
            <h3 className="font-black">Slice Slayer Cape</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A pizza-themed Dungeons II cape. See the dedicated{' '}
              <Link to="/capes/slice-slayer-cape" className="text-[var(--lime)] underline underline-offset-4">
                Slice Slayer Cape guide
              </Link>
              .
            </p>
          </article>
          <article className="bg-[var(--panel)] p-5">
            <h3 className="font-black">Cheesy Cube Pet</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A cosmetic companion that follows the player. Mojang explicitly says the promotion cosmetics do
              not provide gameplay benefits.
            </p>
          </article>
        </div>
      </Section>

      <Section title="How the U.S. cosmetic promotion works">
        <p>{collab.claim}</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
          <li>Sign in to Domino's Rewards.</li>
          <li>Order and prepay for a qualifying Domino through the Domino's website or app.</li>
          <li>After the order completes, allow up to 24 hours for the reward to appear under My Deals & Rewards.</li>
          <li>Use the 12-character code in Minecraft Dungeons II under Settings → Exclusive Content.</li>
        </ol>
        <p className="mt-4">
          U.S. rewards are allocated randomly. Codes can be shared or swapped with friends, and the official
          terms limit each Microsoft account to one of each in-game item.
        </p>
      </Section>

      <Section title="20,000-copy U.S. game giveaway">
        <p>{giveaway.claim}</p>
        <p className="mt-4">
          This is <strong className="text-[var(--text)]">not a guaranteed free copy with every purchase</strong>.
          The official article describes it as a chance to receive a code after buying a qualifying Domino and
          submitting proof of purchase. The prize is Minecraft Dungeons II Standard Edition for PC or Xbox
          Series X|S, and game codes must be redeemed by December 31, 2027.
        </p>
      </Section>

      <Section title="International availability">
        <p>
          Mojang lists participating markets outside the U.S. including Australia, Canada, New Zealand, Belgium,
          the Netherlands, Brazil, France, Germany, Japan, Malaysia, Mexico, Singapore, Portugal, Saudi Arabia,
          the UAE, Spain, Taiwan and Turkey. Qualifying products, timing and distribution vary by country.
        </p>
        <p className="mt-4">
          China is described separately in the official article with a MyWorld-themed Domino's activation.
          This wiki does not assume the Dungeons II cosmetic-code rules apply there.
        </p>
      </Section>

      <SourceList
        sources={[
          { label: collab.sourceLabel, href: collab.sourceUrl },
          {
            label: "Domino's — Minecraft Dungeons II promotion",
            href: 'https://www.dominos.com/minecraft-dungeons-ii',
          },
          {
            label: "Domino's official announcement — October 21, 2026",
            href: 'https://ir.dominos.com/news-releases/news-release-details/building-ultimate-game-night-dominosr-and-minecraft-dungeons-ii',
          },
        ]}
      />
    </WikiPage>
  );
}
