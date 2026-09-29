import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/platforms/steam')({
  head: () => pageHead('/platforms/steam', 'Minecraft Dungeons 2 on Steam: Release, Specs & Features', 'Minecraft Dungeons 2 Steam guide with release status, system requirements, editions, controller and multiplayer information.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Platform" title="Minecraft Dungeons 2 on Steam" description="The Steam listing provides the cleanest first-party source for PC system requirements. This page keeps minimum and recommended specs tied to that listing and avoids extrapolating console features to PC without evidence.">
      <FactGrid items={[
        { label: 'Release', value: 'Sep 29, 2026' },
        { label: 'Minimum CPU', value: 'Intel i3-8100 / Ryzen 3 2200G' },
        { label: 'Minimum RAM', value: '8 GB' },
        { label: 'Minimum GPU', value: 'GTX 1050 / RX 560' },
        { label: 'Recommended CPU', value: 'Intel i5-8400 / Ryzen 5 2600' },
        { label: 'Recommended RAM', value: '16 GB' },
        { label: 'Recommended GPU', value: 'GTX 1060 / RX 580' },
      ]} />
      <Section title="PC / Steam visual">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/key-art/Dungeons-II_Card-H_Trailer-3_760x450.png"
          alt="Official Minecraft Dungeons II gameplay art for the PC and Steam guide"
          caption="Official Dungeons II art; PC requirements on this page come from Steam."
          sourceLabel="Minecraft.net"
          sourceHref="https://www.minecraft.net/en-us/about-dungeons-ii"
        />
      </Section>
      <Section title="System requirements"><p>The values above come from the launch Steam store listing. If Mojang updates the requirements, the change should be recorded with a verification date rather than silently replacing history.</p></Section>
      <Section title="Achievements"><p>A complete achievement count is intentionally not shown yet because launch-week secondary sources have disagreed. The project is waiting for a reconciled platform list.</p></Section>
      <SourceList sources={[{ label: 'Steam store', href: 'https://store.steampowered.com/app/1912410/Minecraft_Dungeons_II/' }]} />
    </WikiPage>
  );
}
