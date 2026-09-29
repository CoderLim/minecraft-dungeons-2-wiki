import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/crossplay')({
  head: () => pageHead('/crossplay', 'Is Minecraft Dungeons 2 Cross-Platform? Crossplay Guide', 'Minecraft Dungeons 2 crossplay and multiplayer guide covering couch co-op, online play, mixed local/online groups and player count.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Multiplayer" title="Minecraft Dungeons 2 Crossplay & Co-op" description="Yes, Minecraft Dungeons II supports cross-platform multiplayer in the Xbox/PC ecosystem: the current Xbox Store explicitly lists Xbox cross-platform multiplayer and cross-platform co-op. Developer gameplay also confirms up to four players, couch co-op, online play and mixed local/online groups.">
      <FactGrid items={[
        { label: 'Max players', value: '4' },
        { label: 'Couch co-op', value: 'Confirmed' },
        { label: 'Online co-op', value: 'Confirmed' },
        { label: 'Xbox cross-platform co-op', value: 'Explicitly listed by Xbox Store' },
        { label: 'Xbox cross-platform multiplayer', value: 'Explicitly listed by Xbox Store' },
        { label: 'Mixed local + online', value: 'Confirmed in developer explanation' },
      ]} />
      <Section title="Co-op in action">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_coop4.jpg"
          alt="Four Minecraft Dungeons II heroes standing together in a colorful co-op scene"
          caption="Official co-op screenshot showing a four-hero party."
          sourceLabel="Minecraft.net"
          sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
        />
      </Section>
      <Section title="Is Minecraft Dungeons 2 cross-platform?"><p>The Xbox Store lists both Xbox cross-platform multiplayer and Xbox cross-platform co-op for Minecraft Dungeons II. That directly supports cross-platform play across the Xbox/PC ecosystem.</p></Section>
      <Section title="Can local and online players mix?"><p>Yes in the demonstrated design: the developers describe filling a couch group locally and then bringing in another player online when there is an open slot.</p></Section>
      <Section title="What about every possible platform pair?"><p>The Xbox listing is strong evidence for Xbox/PC cross-platform capabilities, but this wiki does not automatically claim every PlayStation/Switch/Xbox/PC pairing until those platform combinations are documented by current first-party sources.</p></Section>
      <Section title="Co-op inventory and revives"><p>Mini Inventory lets multiple players manage equipment without taking turns in a single full inventory. Multiple teammates reviving the same downed player also speed up the revive.</p></Section>
      <SourceList sources={[
        { label: 'Xbox Store — capabilities', href: 'https://www.xbox.com/en-US/games/store/minecraft-dungeons-ii/9nsn56sl5hc0' },
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
        { label: 'Nintendo Switch store listing', href: 'https://www.nintendo.com/us/store/products/minecraft-dungeons-ii-switch/' },
      ]} />
    </WikiPage>
  );
}
