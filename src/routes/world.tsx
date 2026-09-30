import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/world')({
  head: () => pageHead('/world', 'Minecraft Dungeons 2 World & Exploration Guide', 'Minecraft Dungeons 2 world guide covering interconnected regions, side quests, procedural dungeons, navigation and fast-travel-related systems.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="World" title="Minecraft Dungeons 2 World" description="Minecraft Dungeons II replaces the first game's mission-table structure with a larger interconnected world. Official and developer gameplay confirms side-quest markers, procedural dungeon entrances and navigation aids, while the full launch location list is still being captured.">
      <FactGrid items={[
        { label: 'Structure', value: 'Large interconnected world' },
        { label: 'Side quests', value: 'Shown on the map' },
        { label: 'Optional content', value: 'Procedurally generated dungeons' },
        { label: 'Navigation', value: 'Guiding Line can assist lost players' },
      ]} />
      <Section title="Interconnected regions"><p>Developer gameplay explicitly contrasts the sequel with choosing isolated missions from a table. Exploration is intended to continue across connected regions rather than resetting to a mission-select hub after every activity.</p></Section>
      <Section title="Side quests and map markers"><p>The demonstrated map includes side-quest indicators. Exact location names, node relationships and unlock requirements are being held until the launch map is captured in full.</p></Section>
      <Section title="Procedural dungeons"><p>Players can find entrances to procedurally generated dungeons outside the main quest line. These dungeons are also described as one path to Echo Shards.</p></Section>
      <Section title="Related guides"><p><Link to="/the-sift" className="text-[var(--lime)] underline underline-offset-4">The Sift</Link>, <Link to="/dungeons" className="text-[var(--lime)] underline underline-offset-4">Dungeons</Link> and <Link to="/quests" className="text-[var(--lime)] underline underline-offset-4">Quests</Link> are tracked separately.</p></Section>
      <SourceList sources={[
        { label: 'Official gameplay systems overview', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
      ]} />
    </WikiPage>
  );
}
