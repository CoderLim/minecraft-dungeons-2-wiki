import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, OfficialImage, Section, SourceList, VideoEmbed, WikiPage } from '@/components/wiki-shell';
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
        { label: 'Confirmed attacks', value: 'Heavy punches, lightning AoE, full-arena dash' },
        { label: 'Loot', value: 'Unknown / not yet verified' },
      ]} />
      <Section title="Official boss screenshot">
        <OfficialImage
          src="https://xboxwire.thesourcemediaassets.com/sites/2/2026/08/MCDII-Copper-Monstrosity-1-925fc7b31e7ccb5fe422-1024x576.jpg"
          alt="Copper Monstrosity boss fight in Minecraft Dungeons II with lightning attacks across the arena"
          caption="Official Xbox Wire screenshot of the Copper Monstrosity fight."
          sourceLabel="Xbox Wire"
          sourceHref="https://news.xbox.com/en-us/2026/08/26/minecraft-dungeons-ii-new-features-gamescom-2026/"
        />
      </Section>
      <Section title="Gameplay evidence"><VideoEmbed youtubeId="DE7Z6uIz8Pg" start={630} title="Copper Monstrosity sequence in developer gameplay" /></Section>
      <Section title="Story encounter"><p>At roughly 10:33–11:44 in the supplied developer gameplay, the group is described as looking for Supreme Evoker before Copper Monstrosity appears as the major story encounter.</p></Section>
      <Section title="What happens after the fight?"><p>At roughly 12:00–12:40 the group picks up a Note Block. The developers state that this object is important to the story, while deliberately withholding the full explanation.</p></Section>
      <Section title="Attacks and strategy"><p>Xbox's gamescom hands-on confirms three major threats: heavy punches that demand careful dodging, lightning AoE attacks telegraphed by sparks crawling under the player's feet, and full-arena dashes. The fight punishes standing still and rewards keeping enough mobility or potion capacity to recover from mistakes.</p><p>The hands-on also describes the boss as capable of removing large portions of health in seconds, so the safest launch-week advice is to preserve dodge availability for its telegraphed attacks rather than spending every roll on basic movement.</p></Section>
      <SourceList sources={[
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
        { label: 'Xbox Wire — Copper Monstrosity mechanics', href: 'https://news.xbox.com/en-us/2026/08/26/minecraft-dungeons-ii-new-features-gamescom-2026/' },
      ]} />
    </WikiPage>
  );
}
