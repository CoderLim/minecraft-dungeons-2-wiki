import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/capes/corrupted-creeper-cape')({
  head: () => pageHead('/capes/corrupted-creeper-cape', 'Corrupted Creeper Cape: Minecraft Dungeons 2 Guide', 'Corrupted Creeper Cape promotion dates, former watch requirements, redemption and current availability.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Cape" title="Corrupted Creeper Cape" description="The Corrupted Creeper Cape was a limited Minecraft Dungeons II watch-time reward. Mojang's official promotion ran from September 21 at 12:00 PM PST through September 26 at 11:59 PM PST, 2026.">
      <FactGrid items={[
        { label: 'Type', value: 'Limited promotional cape' },
        { label: 'Window', value: 'Sep 21 12:00 PM PST → Sep 26 11:59 PM PST, 2026' },
        { label: 'TikTok requirement', value: 'Watch an eligible Minecraft live stream for at least 3 minutes' },
        { label: 'Twitch requirement', value: 'Watch a Minecraft-category live stream for at least 15 minutes' },
        { label: 'Current status', value: 'Original campaign ended' },
      ]} />
      <Section title="How the TikTok reward worked"><p>During the promotion window, viewers had to watch an eligible Minecraft livestream with Game Rewards enabled for at least three minutes, then check TikTok notifications for the reward.</p></Section>
      <Section title="How the Twitch reward worked"><p>Viewers could watch a livestream in the Minecraft category on Twitch for at least fifteen minutes, then check their Twitch inventory.</p></Section>
      <Section title="How to redeem it"><p>After completing the watch requirement, the reward had to be redeemed for Minecraft Dungeons II through the promotion's account flow. The original campaign has ended.</p></Section>
      <Section title="Can you still get the Corrupted Creeper Cape?"><p>Not through the original September 21–26 campaign. Unless Mojang announces another acquisition path, the old watch instructions should be treated as historical.</p></Section>
      <SourceList sources={[{ label: 'Official Minecraft Dungeons II Capes & Promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
