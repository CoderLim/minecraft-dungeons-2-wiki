import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/quests')({
  head: () => pageHead('/quests', 'Minecraft Dungeons 2 Quests: Main & Side Quests', 'Minecraft Dungeons 2 quest guide covering main quests, side quests, quest UI and the current verified quest-data status.'),
  component: Page,
});

export function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'World', to: '/world' }]} eyebrow="Quests" title="Minecraft Dungeons 2 Quests" description="Official gameplay material confirms separate Main Quests and Side Quests. This hub publishes the system now, while individual quest pages wait for complete quest-log captures.">
      <FactGrid items={[
        { label: 'Quest types', value: 'Main Quests and Side Quests' },
        { label: 'Map integration', value: 'Side-quest indicators are shown' },
        { label: 'Quest UI', value: 'Shown in official gameplay-systems material' },
        { label: 'Complete list', value: 'Not yet verified' },
      ]} />
      <Section title="Main quests"><p>Main quests carry the core story progression. Named story objectives should be recorded from the in-game log so descriptions and reward fields can be quoted accurately.</p></Section>
      <Section title="Side quests"><p>Side quests are surfaced on the world map and support exploration beyond the main path. The map/quest relationship is one reason locations and quests are modeled as linked entities.</p></Section>
      <Section title="Why the quest list is not complete yet"><p>A full quest database needs the launch Quest Log opened one entry at a time so names, descriptions, objectives, rewards and related locations can be verified directly.</p></Section>
      <SourceList sources={[
        { label: 'Official gameplay systems overview', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
      ]} />
    </WikiPage>
  );
}
