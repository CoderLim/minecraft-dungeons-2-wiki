import { createFileRoute, Link } from '@tanstack/react-router';
import { Section, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

const bosses = [
  { to: '/bosses/copper-monstrosity', name: 'Copper Monstrosity', status: 'Story boss · gameplay verified', detail: 'Encountered while the party is searching for Supreme Evoker.' },
  { to: '/bosses/twisted-warden', name: 'Twisted Warden', status: 'Officially revealed · details partial', detail: 'Dedicated page keeps attacks, loot and exact encounter fields separate until verified.' },
] as const;

export const Route = createFileRoute('/bosses/')({
  head: () => pageHead('/bosses', 'Minecraft Dungeons 2 Bosses: Verified Boss List', 'Verified Minecraft Dungeons 2 boss index with evidence labels, locations, encounter context and clearly marked unknown fields.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Enemies" title="Minecraft Dungeons 2 Bosses" description="This is a verified boss index, not a launch-week claim that every boss has already been discovered. Named encounters become pages only when first-party material or direct gameplay supports them.">
      <Section title="Verified boss pages">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {bosses.map((boss) => (
            <Link key={boss.to} to={boss.to} className="bg-[var(--panel)] p-6 hover:bg-[var(--panel-2)]">
              <h3 className="text-xl font-black text-[var(--text)]">{boss.name}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[.12em] text-[var(--emerald)]">{boss.status}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{boss.detail}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section title="Why this is not labeled a complete boss list"><p>Launch-week fan lists can mix bosses, minibosses and trailer enemies. This wiki only uses “complete” after the roster is reconciled against direct game evidence such as boss health bars, quest progression or an official database.</p></Section>
    </WikiPage>
  );
}
