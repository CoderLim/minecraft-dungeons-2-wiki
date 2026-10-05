import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead, faqJsonLd, webPageJsonLd } from '@/lib/seo';

export const Route = createFileRoute('/release-date')({
  head: () => pageHead('/release-date', 'Minecraft Dungeons 2 Release Date & Release Time', 'Minecraft Dungeons 2 release date, launch status, platforms, Game Pass availability and verified release-time notes for every supported storefront.', { jsonLd: [
      webPageJsonLd('/release-date', 'Minecraft Dungeons 2 Release Date', 'Minecraft Dungeons II launched on September 29, 2026.')([{ name: 'Wiki', path: '/' }, { name: 'Release Date', path: '/release-date' }]),
      faqJsonLd([
        { question: 'When did Minecraft Dungeons 2 release?', answer: 'Minecraft Dungeons II released on September 29, 2026.' },
        { question: 'Is Minecraft Dungeons 2 out now?', answer: 'Yes. The release date is September 29, 2026. Exact store unlock timing can still vary by platform or region.' },
        { question: 'Is Minecraft Dungeons 2 on Game Pass?', answer: 'Xbox announced Minecraft Dungeons II for launch-day Game Pass availability; check the current Xbox listing for plan and regional details.' },
      ]),
    ] }),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Game Info', to: '/game-info' }]} eyebrow="Launch guide" title="Minecraft Dungeons 2 Release Date" description="Minecraft Dungeons II launched on September 29, 2026. This page tracks launch status separately from platform-specific unlock timing so regional storefront differences are not flattened into a single unsupported time.">
      <FactGrid items={[
        { label: 'Release date', value: 'September 29, 2026' },
        { label: 'Status', value: 'Released' },
        { label: 'Game Pass', value: 'Listed for launch-day availability' },
        { label: 'Platforms', value: 'PC/Steam, Xbox, PlayStation, Nintendo Switch and Switch 2 storefronts are tracked separately' },
      ]} />
      <Section title="Official launch art">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/key-art/Dungeons-II_Card-H_Trailer-3_760x450.png"
          alt="Official Minecraft Dungeons II promotional art"
          caption="Official Minecraft Dungeons II promotional art used on the game's overview page."
          sourceLabel="Minecraft.net"
          sourceHref="https://www.minecraft.net/en-us/about-dungeons-ii"
        />
      </Section>
      <Section title="When is Minecraft Dungeons 2 coming out?"><p>Minecraft Dungeons II came out on September 29, 2026. If you searched “when does Minecraft Dungeons 2 come out?”, the game is now released; exact store unlock timing can still vary by region and platform.</p></Section>
      <Section title="Is Minecraft Dungeons 2 out now?"><p>Yes. The release date is September 29, 2026. Store unlocks can still differ by platform or region, so this wiki does not invent a universal hour when first-party stores do not state one.</p></Section>
      <Section title="Release time"><p>Where a platform publishes an exact unlock time, it should be recorded here with the storefront and region. A date-only store listing is not converted into a guessed midnight launch time.</p></Section>
      <Section title="Game Pass"><p>Xbox's September Game Pass announcement listed Minecraft Dungeons II for September 29. Edition, cloud and regional availability should continue to be checked against the current Xbox listing.</p></Section>
      <SourceList sources={[
        { label: 'Minecraft Dungeons II official overview', href: 'https://www.minecraft.net/en-us/about-dungeons-ii' },
        { label: 'Xbox Game Pass — September 2026 Wave 2', href: 'https://news.xbox.com/en-us/2026/09/15/xbox-game-pass-september-2026-wave-2/' },
        { label: 'Steam store', href: 'https://store.steampowered.com/app/1912410/Minecraft_Dungeons_II/' },
      ]} />
    </WikiPage>
  );
}
