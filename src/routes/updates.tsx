import { createFileRoute, Link } from '@tanstack/react-router';

import { Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';

const collab = findOfficialFact('dominos-collab-2026-10-21');
const giveaway = findOfficialFact('dominos-us-game-giveaway-2026-10-21');
const hotfix = findOfficialFact('hotfix-1-1-2-0-2026-10-07');
const steamDeck = findOfficialFact('steam-deck-playable-2026-10-01');
const emeraldCap = findOfficialFact('emerald-cap-99999-2026-10-01');

export const Route = createFileRoute('/updates')({
  head: () =>
    pageHead(
      '/updates',
      'Minecraft Dungeons 2 Verified Updates & Patch Changes',
      'Verified Minecraft Dungeons 2 update history with official changes, dates, sources and links to affected wiki pages.',
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[]}
      eyebrow="Change history"
      title="Minecraft Dungeons 2 Verified Updates"
      description="This is a durable change log for facts that affect the wiki, not a general news feed. Entries are added when an official update, event or platform change alters information players may need."
    >
      <Section title="October 21, 2026 — Domino's collaboration announced">
        <article className="border border-[var(--line)] bg-[var(--panel)] p-5">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--emerald)]">
            Official brand collaboration
          </p>
          <h3 className="mt-2 text-xl font-black text-[var(--text)]">
            Three exclusive cosmetics + U.S. game-code giveaway
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{collab.claim}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
            <li>Domino's Skin — cosmetic character skin.</li>
            <li>Slice Slayer Cape — pizza-themed cosmetic cape.</li>
            <li>Cheesy Cube Pet — cosmetic companion with no gameplay benefit.</li>
            <li>{giveaway.claim}</li>
          </ul>
          <Link
            to="/dominos-collaboration"
            className="mt-4 inline-block text-sm font-bold text-[var(--lime)] underline underline-offset-4"
          >
            Full Domino's collaboration guide →
          </Link>
        </article>
      </Section>

      <Section title="October 7, 2026 — Version 1.1.2.0">
        <article className="border border-[var(--line)] bg-[var(--panel)] p-5">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--emerald)]">
            Official hotfix
          </p>
          <h3 className="mt-2 text-xl font-black text-[var(--text)]">Crash and Ultra graphics fixes</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{hotfix.claim}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
            <li>Fixed several client and server crashes during gameplay.</li>
            <li>Fixed a crash when the Prime Enchanter's Lightning Slam hit the ground at the same moment as a TNT explosion.</li>
            <li>Fixed a crash when leaving an online game.</li>
            <li>Fixed blurry visuals when launching with Ultra graphics quality.</li>
          </ul>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            <strong className="text-[var(--text)]">Rollout:</strong> The official changelog now states that
            version 1.1.2.0 is available on Steam, Windows and Xbox Series X|S. The changelog does not confirm
            availability on PlayStation 5, Nintendo Switch or Nintendo Switch 2.
          </p>
          <a
            href={hotfix.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-bold text-[var(--lime)] underline underline-offset-4"
          >
            Official 1.1.2.0 patch notes →
          </a>
        </article>
      </Section>
      <Section title="October 1, 2026">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          <article className="bg-[var(--panel)] p-5">
            <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--emerald)]">Platform update</p>
            <h3 className="mt-2 text-xl font-black text-[var(--text)]">Steam Deck playable</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{steamDeck.claim}</p>
            <Link to="/steam-deck" className="mt-4 inline-block text-sm font-bold text-[var(--lime)] underline underline-offset-4">
              Affected page: Steam Deck →
            </Link>
          </article>
          <article className="bg-[var(--panel)] p-5">
            <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--emerald)]">Economy change</p>
            <h3 className="mt-2 text-xl font-black text-[var(--text)]">Emerald cap increased</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{emeraldCap.claim}</p>
            <Link to="/gameplay" className="mt-4 inline-block text-sm font-bold text-[var(--lime)] underline underline-offset-4">
              Related systems →
            </Link>
          </article>
        </div>
      </Section>
      <Section title="Update policy">
        <p>
          An entry belongs here when it changes a durable fact: balance, platform support, an event window, availability, progression or another system represented by the wiki. Routine commentary and secondary news coverage do not create update entries by themselves.
        </p>
      </Section>
      <SourceList
        sources={[
          { label: collab.sourceLabel, href: collab.sourceUrl },
          { label: hotfix.sourceLabel, href: hotfix.sourceUrl },
          { label: steamDeck.sourceLabel, href: steamDeck.sourceUrl },
        ]}
      />
    </WikiPage>
  );
}
