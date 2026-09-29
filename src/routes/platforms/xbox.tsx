import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/platforms/xbox')({
  head: () => pageHead('/platforms/xbox', 'Minecraft Dungeons 2 on Xbox: Game Pass & Features', 'Minecraft Dungeons 2 Xbox guide covering Game Pass, editions, local co-op, online multiplayer, cross-play notes and platform-specific features.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Platform" title="Minecraft Dungeons 2 on Xbox" description="Xbox is both a storefront source and a major first-party publishing source for Minecraft Dungeons II. Launch material confirms the September 29 release and Game Pass availability announcement.">
      <FactGrid items={[
        { label: 'Release', value: 'Sep 29, 2026' },
        { label: 'Game Pass', value: 'Announced for launch-day availability on eligible plans' },
        { label: 'Standard US price', value: '$29.99 in launch research' },
        { label: 'Deluxe US price', value: '$49.99 in launch research' },
      ]} />
      <Section title="Game Pass"><p>Xbox's September 2026 Wave 2 announcement lists Minecraft Dungeons II for September 29. Plan names and cloud/console availability should follow the live Xbox listing as subscriptions change over time.</p></Section>
      <Section title="Co-op"><p>Developer gameplay confirms up to four players, couch co-op and online multiplayer. A separate crossplay page tracks which claims are explicitly supported versus still platform-specific.</p></Section>
      <SourceList sources={[
        { label: 'Xbox Game Pass September 2026 Wave 2', href: 'https://news.xbox.com/en-us/2026/09/15/xbox-game-pass-september-2026-wave-2/' },
        { label: 'Xbox store', href: 'https://www.xbox.com/en-US/games/store/minecraft-dungeons-ii/9nsn56sl5hc0' },
      ]} />
    </WikiPage>
  );
}
