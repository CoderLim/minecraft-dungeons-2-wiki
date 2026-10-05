import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead, faqJsonLd, webPageJsonLd } from '@/lib/seo';

export const Route = createFileRoute('/price')({
  head: () => pageHead('/price', 'Minecraft Dungeons 2 Price: Standard, Deluxe & Game Pass', 'Compare Minecraft Dungeons 2 Standard and Deluxe pricing, included content and Game Pass availability using first-party store data.', { jsonLd: [
      webPageJsonLd('/price', 'Minecraft Dungeons 2 Price', 'Compare Standard and Deluxe pricing with Game Pass availability using first-party store data.'),
          faqJsonLd([
        { question: 'How much does Minecraft Dungeons 2 cost?', answer: 'The U.S. Xbox listing recorded Standard at $29.99 and Deluxe at $49.99. Other regions and storefronts can differ, so always check the current platform store.' },
        { question: 'Is Minecraft Dungeons 2 on Game Pass?', answer: 'Launch-day Game Pass availability was announced for eligible plans; confirm the current Xbox listing for your region.' },
      ]),
    ] }),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Game Info', to: '/game-info' }]} eyebrow="Buying guide" title="Minecraft Dungeons 2 Price" description="Store pricing can vary by region and platform. The launch research set records the U.S. Xbox listing at $29.99 for Standard and $49.99 for Deluxe; this page keeps regional prices tied to their storefront instead of pretending one number is universal.">
      <FactGrid items={[
        { label: 'Standard (US Xbox listing)', value: '$29.99' },
        { label: 'Deluxe (US Xbox listing)', value: '$49.99' },
        { label: 'Game Pass', value: 'Launch-day availability announced for eligible plans' },
        { label: 'Regional pricing', value: 'Check the current platform storefront' },
      ]} />
      <Section title="Official game art">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/key-art/Dungeons-II_Card-H_Trailer-2_760x450.png"
          alt="Official Minecraft Dungeons II promotional art"
          caption="Official Minecraft Dungeons II promotional art used alongside launch information."
          sourceLabel="Minecraft.net"
          sourceHref="https://www.minecraft.net/en-us/about-dungeons-ii"
        />
      </Section>
      <Section title="Standard vs Deluxe"><p>The Standard Edition is the base game. The Deluxe Edition adds cosmetic rewards and DLC-related content identified in official store/promo material. The exact bundle should always be checked against the current platform listing.</p></Section>
      <Section title="Why prices are labeled by storefront"><p>Currency, tax and regional pricing differ. A U.S. Xbox price should not be silently reused as a Steam, Nintendo or Taiwan price.</p></Section>
      <SourceList sources={[
        { label: 'Xbox store — Minecraft Dungeons II', href: 'https://www.xbox.com/en-US/games/store/minecraft-dungeons-ii/9nsn56sl5hc0' },
        { label: 'Steam store', href: 'https://store.steampowered.com/app/1912410/Minecraft_Dungeons_II/' },
      ]} />
    </WikiPage>
  );
}
