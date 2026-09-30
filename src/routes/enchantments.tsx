import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/enchantments')({
  head: () => pageHead('/enchantments', 'Minecraft Dungeons 2 Enchantments & Enchantment Books', 'Minecraft Dungeons 2 enchantment guide covering collectible enchantment books, reusable applications and confirmed examples like Inner Mines.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Gear" title="Minecraft Dungeons 2 Enchantments" description="Enchantments are no longer simply baked into a dropped item. Developer gameplay describes collecting Enchantment Books in the world and applying them repeatedly to suitable gear.">
      <FactGrid items={[
        { label: 'Acquisition', value: 'Collect Enchantment Books' },
        { label: 'Application', value: 'Apply to compatible gear' },
        { label: 'Reuse', value: 'Books can be used repeatedly' },
        { label: 'Confirmed example', value: 'Inner Mines' },
      ]} />
      <Section title="Enchantment Books"><p>The key sequel change is separation between the enchantment and the item. That makes enchantments durable collection entities rather than one-off properties attached to a single drop.</p></Section>
      <Section title="Inner Mines"><p>Inner Mines is a confirmed example: weapon attacks deploy two mines that explode when enemies approach.</p></Section>
      <Section title="Enchantment database status"><p>A complete list still needs the Enchantment Library or item UI captured in-game. Names, compatibility and rank values should be stored per enchantment with evidence.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
