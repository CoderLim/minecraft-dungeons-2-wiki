import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/gear')({
  head: () => pageHead('/gear', 'Minecraft Dungeons 2 Gear: Armor, Talismans & Enchants', 'Verified Minecraft Dungeons 2 gear systems: expanded slots, four-piece armor, talismans, Blacksmith upgrades, Echo Shards and enchantment books.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[]} eyebrow="Gear database" title="Minecraft Dungeons 2 Gear" description="Minecraft Dungeons II expands the loadout to 12 combat gear slots. The wiki treats weapons, four armor pieces, talismans, artifacts and enchantments as separate data families so each can grow into a verified database.">
      <FactGrid items={[
        { label: 'Combat slots', value: '12 confirmed' },
        { label: 'Armor slots', value: 'Helmet, chestplate, leggings, boots' },
        { label: 'Talismans', value: 'Passive specialization; some can level' },
        { label: 'Blacksmith', value: 'Raises lower-power gear and rerolls effects' },
        { label: 'Reroll currency', value: 'Echo Shards' },
        { label: 'Enchantments', value: 'Collected as reusable books' },
      ]} />
      <Section title="Armor is split into four pieces"><p>The original game's single armor slot is replaced by separate helmet, chestplate, leggings and boots. This creates more effect combinations and makes individual armor pieces first-class wiki entities.</p></Section>
      <Section title="Talismans"><p>Talismans add passive bonuses and are intended to specialize a playstyle. Tasty Bone is a named example that grants a wolf companion; some talismans are described as gaining experience.</p></Section>
      <Section title="Blacksmith and Echo Shards"><p>The Blacksmith can bring lower item-power equipment upward. Echo Shards are used to reroll random gear effects, making the system more about refining a favored drop than immediately discarding it.</p></Section>
      <Section title="Enchantment Books"><p>Enchantments are found as books in the world and can be applied repeatedly to compatible items. Inner Mines is a confirmed example that causes weapon attacks to deploy two proximity mines.</p></Section>
      <Section title="Database status"><p>The system-level facts are strong enough to publish. A complete weapon/armor/talisman list is not yet claimed because the project still needs full launch inventory and tooltip captures.</p></Section>
      <SourceList sources={[
        { label: 'Official gameplay systems', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
      ]} />
    </WikiPage>
  );
}
