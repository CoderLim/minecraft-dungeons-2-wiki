import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/map')({
  head: () => pageHead('/map', 'Minecraft Dungeons 2 Map: Regions & Locations', 'Minecraft Dungeons 2 map guide covering the interconnected world, side-quest markers, navigation and the current verified location-data status.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="World map" title="Minecraft Dungeons 2 Map" description="Official material shows a world map with quest/location information, and developer gameplay confirms side-quest indicators. The full annotated map is still waiting on a high-resolution launch capture, so this page avoids inventing region boundaries or node names.">
      <FactGrid items={[
        { label: 'World structure', value: 'Interconnected' },
        { label: 'Side quests', value: 'Indicators shown on map' },
        { label: 'Navigation aid', value: 'Guiding Line available' },
        { label: 'Complete labeled map', value: 'Capture pending' },
      ]} />
      <Section title="What the map confirms"><p>The sequel's map is part of a connected exploration structure rather than only a mission-select menu. Side quests appear as map indicators in the developer demo.</p></Section>
      <Section title="Locations"><p>Location pages will be generated from verified map labels and quest data. Until the high-resolution capture is available, the wiki does not publish a supposedly complete location list.</p></Section>
      <Section title="Related world pages"><p>See <Link to="/world" className="text-[var(--lime)] underline underline-offset-4">World</Link>, <Link to="/quests" className="text-[var(--lime)] underline underline-offset-4">Quests</Link> and <Link to="/dungeons" className="text-[var(--lime)] underline underline-offset-4">Dungeons</Link>.</p></Section>
      <SourceList sources={[
        { label: 'Official gameplay systems overview', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
      ]} />
    </WikiPage>
  );
}
