import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/the-sift')({
  head: () => pageHead('/the-sift', 'The Sift in Minecraft Dungeons 2: Dimension Guide', 'Verified guide to The Sift in Minecraft Dungeons 2, including rifts, Meadows, Carapace, shifting tides, mobs and official reveal details.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="World" title="The Sift in Minecraft Dungeons 2" description="The Sift is a new dimension introduced through Minecraft Dungeons II. Official reveal material confirms that rifts in the interconnected world can transport players there, where new biomes, unique mobs, hazardous blocks and shifting environmental rules change exploration.">
      <FactGrid items={[
        { label: 'Type', value: 'New dimension' },
        { label: 'How to reach it', value: 'Enter rifts found throughout the world' },
        { label: 'Confirmed biomes', value: 'Meadows and Carapace' },
        { label: 'Environment', value: 'Shifting tides and hazardous blocks' },
        { label: 'Mobs', value: 'Unique companions and threats' },
        { label: 'Minecraft future', value: 'Announced for Java & Bedrock in 2027' },
      ]} />
      <Section title="What is The Sift?"><p>The Sift is described by Mojang and Xbox as a distinct new dimension with a colorful ecosystem, new rules, new mobs and hazards rather than a normal Overworld region.</p></Section>
      <Section title="How do you enter The Sift?"><p>Minecraft LIVE's official recap states that rifts appear throughout the interconnected world and that entering one transports the player to The Sift. Exact quest-gating or story requirements can still vary by the point of progression and will be documented from launch gameplay.</p></Section>
      <Section title="Rifts"><p>Rifts are the transition points between the main world and The Sift. Because they are part of exploration rather than a simple menu option, their locations and unlock conditions belong in the future map/location database.</p></Section>
      <Section title="Known regions and biomes"><p>Official material names Meadows and Carapace as Sift biomes. Mojang has deliberately kept additional areas secret, so this wiki does not publish an unsupported “complete biome list.”</p></Section>
      <Section title="Shifting tides and hazards"><p>Xbox Wire says shifting tides within The Sift can affect the player and nearby entities, while hazardous new blocks change how exploration works. Detailed effects and counters need direct gameplay evidence before they become mechanic tables.</p></Section>
      <Section title="Mobs"><p>The Sift includes new companions and threats unique to the dimension. Individual mob pages will be created only once official names or readable in-game labels can be verified.</p></Section>
      <Section title="The Sift in Minecraft Java and Bedrock"><p>Mojang announced that The Sift will also come to Minecraft Java and Bedrock Edition in 2027. Dungeons II is therefore the first playable introduction to the dimension.</p></Section>
      <SourceList sources={[
        { label: 'Minecraft LIVE September 2026 recap', href: 'https://www.minecraft.net/en-us/article/mclive_sept2026_recap' },
        { label: 'Xbox Wire — Minecraft Dungeons II new dimension', href: 'https://news.xbox.com/en-us/2026/09/26/minecraft-new-dimension-sift-dungeons-2/' },
        { label: 'Official Minecraft Dungeons II overview', href: 'https://www.minecraft.net/en-us/about-dungeons-ii' },
      ]} />
    </WikiPage>
  );
}
