import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/weapons')({
  head: () => pageHead('/weapons', 'Minecraft Dungeons 2 Weapons: Verified List', 'Minecraft Dungeons 2 weapons hub for melee and ranged gear, effects, enchantments and verified item data.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Gear database" title="Minecraft Dungeons 2 Weapons" description="Weapons are a core part of the expanded 12-slot loadout, but this wiki does not yet claim a complete weapon list. Named weapons only enter the database when their in-game tooltip or first-party material is readable.">
      <FactGrid items={[
        { label: 'Melee', value: 'Core weapon category' },
        { label: 'Ranged', value: 'Core weapon category' },
        { label: 'Enchantments', value: 'Applied via collected Enchantment Books' },
        { label: 'Complete list', value: 'Inventory capture pending' },
      ]} />
      <Section title="Weapon database policy"><p>Every weapon page should store name, type, rarity, power/stat fields, intrinsic effects, enchantment compatibility, acquisition source, icon and verification evidence.</p></Section>
      <Section title="Why visual guesses are excluded"><p>The supplied gameplay transcript refers to a showcased unique melee weapon without naming it. That is not enough to create an entity page; the tooltip needs to be read from the actual frame.</p></Section>
      <Section title="Enchantments"><p>Inner Mines is one confirmed enchantment example applied to a main-hand weapon, but the full compatibility matrix is still being captured.</p></Section>
      <SourceList sources={[
        { label: 'Official gameplay systems overview', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
      ]} />
    </WikiPage>
  );
}
