import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/dungeons')({
  head: () => pageHead('/dungeons', 'Minecraft Dungeons 2 Dungeons Guide', 'Minecraft Dungeons 2 dungeons guide covering procedural dungeon entrances, Echo Shards, rewards and the current verified dungeon data status.', { noindex: true }),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="World" title="Minecraft Dungeons 2 Dungeons" description="Procedurally generated dungeons are confirmed as optional exploration content outside the core quest line. The current evidence is strong enough for the system page, but not yet for a claimed complete dungeon list.">
      <FactGrid items={[
        { label: 'Generation', value: 'Procedurally generated' },
        { label: 'Placement', value: 'Found while exploring the interconnected world' },
        { label: 'Known reward path', value: 'Echo Shards' },
        { label: 'Complete dungeon list', value: 'Not yet verified' },
      ]} />
      <Section title="How dungeons work"><p>Developer gameplay describes entering random dungeon entrances while exploring. This supports repeatable side content rather than a fixed one-time mission list.</p></Section>
      <Section title="Echo Shards"><p>Procedural dungeons are named as one way to obtain Echo Shards. See the <Link to="/echo-shards" className="text-[var(--lime)] underline underline-offset-4">Echo Shards guide</Link> for confirmed uses.</p></Section>
      <Section title="Dungeon database status"><p>Named dungeons should become individual entity pages only after their in-game names, entrances and rewards are captured. A launch-week fan list is not enough to label the index complete.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
