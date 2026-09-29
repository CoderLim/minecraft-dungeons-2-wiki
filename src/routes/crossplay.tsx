import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/crossplay')({
  head: () => pageHead('/crossplay', 'Is Minecraft Dungeons 2 Cross-Platform? Crossplay Guide', 'Minecraft Dungeons 2 crossplay and multiplayer guide covering couch co-op, online play, mixed local/online groups and player count.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Multiplayer" title="Minecraft Dungeons 2 Crossplay & Co-op" description="Developer gameplay confirms up to four players, couch co-op, online play and a mixed local/online setup. Platform-by-platform cross-network requirements should still be checked against the current store/network rules.">
      <FactGrid items={[
        { label: 'Max players', value: '4' },
        { label: 'Couch co-op', value: 'Confirmed' },
        { label: 'Online co-op', value: 'Confirmed' },
        { label: 'Mixed local + online', value: 'Confirmed in developer explanation' },
      ]} />
      <Section title="Can local and online players mix?"><p>Yes in the demonstrated design: the developers describe filling a couch group locally and then bringing in another player online when there is an open slot.</p></Section>
      <Section title="Does that automatically prove every platform can crossplay with every other platform?"><p>No. The mixed-mode statement confirms local plus online co-op behavior, but a platform-pair compatibility matrix must still be grounded in current platform documentation. This page will not convert a generic “online” statement into an unsupported all-platform claim.</p></Section>
      <Section title="Co-op inventory and revives"><p>Mini Inventory exists partly to solve multiplayer friction: multiple players can manage equipment at once. Multiple teammates reviving a downed player also speed up the revive.</p></Section>
      <SourceList sources={[
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
        { label: 'Nintendo Switch store listing', href: 'https://www.nintendo.com/us/store/products/minecraft-dungeons-ii-switch/' },
      ]} />
    </WikiPage>
  );
}
