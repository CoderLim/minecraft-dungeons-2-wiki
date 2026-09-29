import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/the-sift')({
  head: () => pageHead('/the-sift', 'The Sift in Minecraft Dungeons 2: Dimension Guide', 'Verified guide to The Sift in Minecraft Dungeons 2, including rifts, known regions, mobs, story role and official media.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="World" title="The Sift in Minecraft Dungeons 2" description="The Sift is a newly introduced dimension with its own ecosystem and creatures adapted to the environment. This page separates official reveal facts from location, loot and encounter details that still need launch-game verification.">
      <FactGrid items={[
        { label: 'Type', value: 'Dimension' },
        { label: 'Status', value: 'Officially revealed' },
        { label: 'Known feature', value: 'Distinct ecosystem and adapted creatures' },
        { label: 'Entry / rifts', value: 'Mechanics referenced in official reveal material; full in-game route still being documented' },
      ]} />
      <Section title="What is The Sift?"><p>Official Xbox/Minecraft material describes The Sift as a new dimension rather than simply another overworld biome. It has its own environmental identity and creatures adapted to conditions there.</p></Section>
      <Section title="How do you enter The Sift?"><p>Rifts are part of the reveal language around The Sift, but the wiki is holding back a step-by-step entry guide until the exact in-game sequence is captured from launch gameplay.</p></Section>
      <Section title="Regions and map"><p>Named regions and a complete Sift map will become entity pages only when their names and boundaries can be verified in first-party material or direct gameplay. This avoids copying launch-week fan lists that may mix reveal concepts with final game data.</p></Section>
      <Section title="Mobs and bosses"><p>Creatures shown or named inside The Sift will link to dedicated mob/boss pages. Each page will track location, attacks, drops and evidence separately instead of treating trailer appearances as a complete bestiary.</p></Section>
      <SourceList sources={[
        { label: 'Xbox Wire — The Sift, new mechanics and exploration', href: 'https://news.xbox.com/en-us/2026/09/26/minecraft-dungeons-ii-the-sift-new-mechanics-better-exploration-and-more-official-xbox-podcast/' },
        { label: 'Minecraft Dungeons II official overview', href: 'https://www.minecraft.net/en-us/about-dungeons-ii' },
      ]} />
    </WikiPage>
  );
}
