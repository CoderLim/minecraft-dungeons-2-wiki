import { createFileRoute, Link } from '@tanstack/react-router';

import { Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';

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
      lastVerified="Oct 2, 2026"
    >
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
      <SourceList sources={[{ label: steamDeck.sourceLabel, href: steamDeck.sourceUrl }]} />
    </WikiPage>
  );
}
