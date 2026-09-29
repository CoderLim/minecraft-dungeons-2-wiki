import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/soul-corrupted-mobs')({
  head: () => pageHead('/soul-corrupted-mobs', 'Soul-Corrupted Mobs in Minecraft Dungeons 2', 'Minecraft Dungeons 2 Soul-Corrupted mobs explained: difficulty, Echo Shard drops and the current verified variant status.', { noindex: true }),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Enemies" title="Soul-Corrupted Mobs" description="Soul-Corrupted mobs are described in developer gameplay as tougher enemy variants that can drop Echo Shards. Individual variants are not listed until their in-game names can be read directly.">
      <FactGrid items={[
        { label: 'Type', value: 'Enhanced/tough enemy variants' },
        { label: 'Reward', value: 'Can drop Echo Shards' },
        { label: 'Complete variant list', value: 'Not yet verified' },
      ]} />
      <Section title="Why they matter"><p>These enemies tie combat difficulty directly to progression because they are one of the confirmed sources of <Link to="/echo-shards" className="text-[var(--lime)] underline underline-offset-4">Echo Shards</Link>.</p></Section>
      <Section title="Variant database status"><p>The project will only add named Soul-Corrupted variants after readable health bars, tooltips, bestiary entries or equivalent direct evidence is captured.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
