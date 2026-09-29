import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/editions')({
  head: () => pageHead('/editions', 'Minecraft Dungeons 2 Editions: Standard vs Deluxe', 'Compare Minecraft Dungeons 2 Standard and Deluxe Editions, cosmetics, pets and DLC-related inclusions.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Buying guide" title="Minecraft Dungeons 2 Editions" description="Minecraft Dungeons II is sold in Standard and Deluxe configurations. This comparison separates confirmed Deluxe rewards from historical pre-order bonuses so the two are not mixed together.">
      <FactGrid items={[
        { label: 'Standard', value: 'Base game' },
        { label: 'Deluxe', value: 'Base game + Deluxe cosmetic/content bundle' },
        { label: 'Soul Cape', value: 'Deluxe reward' },
        { label: 'Blub', value: 'Deluxe reward' },
        { label: 'Hero skins', value: 'Four hero skins highlighted in official promo material' },
        { label: 'Pre-order rewards', value: 'Tracked separately from Deluxe entitlements' },
      ]} />
      <Section title="Standard Edition"><p>The Standard Edition is the base game. Platform pricing and included platform services should be read from the current store page.</p></Section>
      <Section title="Deluxe Edition"><p>Official launch material ties the Deluxe Edition to the Soul Cape, Blub, four hero skins and DLC-related content. The wiki will keep DLC names/dates versioned as they are officially announced.</p></Section>
      <Section title="Deluxe is not the same as pre-order"><p>The Twisted Cape and other pre-order incentives belong to a historical purchase window and should not be represented as generic Deluxe contents after launch.</p></Section>
      <SourceList sources={[
        { label: 'Official capes and promos page', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' },
        { label: 'Xbox store', href: 'https://www.xbox.com/en-US/games/store/minecraft-dungeons-ii/9nsn56sl5hc0' },
      ]} />
    </WikiPage>
  );
}
