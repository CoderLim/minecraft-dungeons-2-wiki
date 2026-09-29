import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/note-block-code')({
  head: () => pageHead('/note-block-code', 'Minecraft Dungeons 2 Note Block Code & Launcher Puzzle', 'Minecraft Dungeons 2 Launcher note-block ARG guide: community-reported solution, how it differs from the story Note Block, and current verification status.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="ARG / puzzle" title="Minecraft Dungeons 2 Note Block Code" description="The Launcher note-block puzzle and the story Note Block are related by theme but should not be treated as the same mechanic. The puzzle solution currently available in this research set is community-reported, not Mojang-confirmed." level="Community reported">
      <FactGrid items={[
        { label: 'Launcher puzzle', value: 'Eight-note-block interactive ARG is documented' },
        { label: 'Reported sequence', value: '1 → 3 → 7 → 6 → 5 → 2 → 4 → 8' },
        { label: 'Reported decode', value: '1NF3C7ED → INFECTED' },
        { label: 'Official solution?', value: 'Not confirmed in the current first-party evidence set' },
      ]} />
      <Section title="Community puzzle sequence visual">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {[1, 3, 7, 6, 5, 2, 4, 8].map((value, index) => (
            <div key={value} className="border border-[var(--line)] bg-[var(--panel)] p-3 text-center">
              <div
                className="mx-auto grid size-12 place-items-center border border-white/15 text-lg font-black text-white"
                style={{ background: `hsl(${index * 45} 58% 42%)` }}
              >
                {value}
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[.12em] text-[var(--muted)]">Step {index + 1}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-5 text-[var(--muted)]">Diagram of the community-reported order only. It is not an official Mojang solution image.</p>
      </Section>
      <Section title="Community-reported solution"><p>The currently recorded community solution uses the sequence 1-3-7-6-5-2-4-8 and interprets the result as INFECTED. Because this comes from community reporting, it remains labeled as such.</p></Section>
      <Section title="Is this a redeem code?"><p>There is no basis in the current evidence to present the puzzle result as a free cape or store redemption code. That is a separate search intent from official platform/promo code redemption.</p></Section>
      <Section title="Story Note Block vs Launcher puzzle"><p>Developer gameplay shows the party picking up a Note Block after Copper Monstrosity and says it matters to the story. The Launcher ARG is documented separately to avoid merging two different contexts.</p></Section>
      <SourceList sources={[
        { label: 'Minecraft Launcher documentation / community archive', href: 'https://wiki.sasgaming.net/wiki/Minecraft%3AMinecraft_Launcher' },
        { label: 'Developer gameplay with story Note Block', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
      ]} />
    </WikiPage>
  );
}
