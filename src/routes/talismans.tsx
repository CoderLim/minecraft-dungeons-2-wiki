import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/talismans')({
  head: () => pageHead('/talismans', 'Minecraft Dungeons 2 Talismans Guide', 'Minecraft Dungeons 2 talismans explained: passive bonuses, leveling, Tasty Bone and the current verified talisman database status.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Gear', to: '/gear' }]} eyebrow="Gear" title="Minecraft Dungeons 2 Talismans" description="Talismans are a new gear category that provides passive bonuses. Some talismans are described as gaining experience and becoming stronger, adding another progression layer to a loadout.">
      <FactGrid items={[
        { label: 'Category', value: 'New gear type' },
        { label: 'Function', value: 'Passive playstyle bonuses' },
        { label: 'Progression', value: 'Some talismans gain experience' },
        { label: 'Confirmed example', value: 'Tasty Bone' },
      ]} />
      <Section title="What do talismans do?"><p>Talismans specialize the player's setup without introducing fixed classes. This fits the developers' “you are what you wear” framing for build identity.</p></Section>
      <Section title="Tasty Bone"><p>Tasty Bone is the clearest named example in the supplied gameplay transcript: it gives the player a wolf companion. A dedicated item page will be added once the tooltip and acquisition path are captured.</p></Section>
      <Section title="Talisman list"><p>The system is confirmed, but a complete list is not. New entries should come from readable inventory tooltips, not from guessing at icons shown briefly in trailers.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
