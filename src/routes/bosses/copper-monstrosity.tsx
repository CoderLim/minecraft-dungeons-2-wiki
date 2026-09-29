import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/bosses/copper-monstrosity')({
  head: () => pageHead('/bosses/copper-monstrosity', 'Copper Monstrosity - Minecraft Dungeons 2 Boss Guide', 'Copper Monstrosity story encounter, developer-confirmed context, fight evidence and the Note Block sequence after the battle.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Boss" title="Copper Monstrosity" description="Copper Monstrosity is explicitly identified in developer gameplay as a major story boss. The demonstrated party encounters it while searching for Supreme Evoker, then picks up a story-important Note Block after the fight." level="Gameplay observed">
      <FactGrid items={[
        { label: 'Type', value: 'Story boss' },
        { label: 'Story target before encounter', value: 'Supreme Evoker' },
        { label: 'Post-fight item', value: 'Note Block' },
        { label: 'Attacks / phases', value: 'Needs frame-by-frame gameplay capture' },
        { label: 'Loot', value: 'Unknown / not yet verified' },
      ]} />
      <Section title="Story encounter"><p>At roughly 10:33–11:44 in the supplied developer gameplay, the group is described as looking for Supreme Evoker before Copper Monstrosity appears as the major story encounter.</p></Section>
      <Section title="What happens after the fight?"><p>At roughly 12:00–12:40 the group picks up a Note Block. The developers state that this object is important to the story, while deliberately withholding the full explanation.</p></Section>
      <Section title="Attacks and strategy"><p>The transcript proves the boss name and story context, but it is not enough to write a reliable phase/attack guide. Those fields remain open until the actual fight footage is reviewed frame by frame.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
