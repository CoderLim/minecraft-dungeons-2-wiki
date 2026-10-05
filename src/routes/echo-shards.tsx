import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/echo-shards')({
  head: () => pageHead('/echo-shards', 'Echo Shards in Minecraft Dungeons 2: How to Get & Use', 'Minecraft Dungeons 2 Echo Shards guide covering confirmed sources, Blacksmith rerolls, merchant upgrades and how shards fit the loot economy.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Gear', to: '/gear' }]} eyebrow="Currency" title="Echo Shards in Minecraft Dungeons 2" description="Echo Shards are a confirmed progression currency used in gear refinement and merchant progression. Developer gameplay names procedural dungeons and Soul-Corrupted mobs as acquisition routes.">
      <FactGrid items={[
        { label: 'Source', value: 'Procedural dungeon activity' },
        { label: 'Source', value: 'Soul-Corrupted mobs' },
        { label: 'Use', value: 'Blacksmith effect rerolls' },
        { label: 'Use', value: 'Merchant upgrades in town' },
      ]} />
      <Section title="How to get Echo Shards"><p>Developer commentary names procedurally generated dungeons and Soul-Corrupted enemies as ways to obtain Echo Shards.</p></Section>
      <Section title="What are Echo Shards used for?"><p>The confirmed uses include rerolling gear effects at the Blacksmith and upgrading merchants in town. Exact prices should wait for UI captures rather than being copied from secondary lists.</p></Section>
      <Section title="Farming status"><p>A “best Echo Shard farm” guide is not published yet because efficient routes require launch-game testing. Until then, this page stays descriptive rather than pretending an optimal loop is proven.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
