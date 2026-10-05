import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/blacksmith')({
  head: () => pageHead('/blacksmith', 'Minecraft Dungeons 2 Blacksmith Guide', 'Minecraft Dungeons 2 Blacksmith guide covering power upgrades, effect rerolls, Echo Shard costs and how merchant upgrades fit the gear loop.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Gear', to: '/gear' }]} eyebrow="Merchant" title="Blacksmith in Minecraft Dungeons 2" description="The Blacksmith helps preserve useful drops instead of forcing constant replacement: lower item-power gear can be brought upward, and random effects can be rerolled using Echo Shards.">
      <FactGrid items={[
        { label: 'Role', value: 'Gear upgrading / refinement' },
        { label: 'Power upgrades', value: 'Can raise lower item-power gear' },
        { label: 'Effect rerolls', value: 'Confirmed' },
        { label: 'Reroll currency', value: 'Echo Shards' },
      ]} />
      <Section title="Raise item power"><p>Developer gameplay describes bringing lower-power gear closer to the player's current level so a favored item is not automatically discarded just because a stronger-numbered drop appears.</p></Section>
      <Section title="Reroll random effects"><p>Gear can appear with randomized effects. Echo Shards are named as the currency used to reroll those effects.</p></Section>
      <Section title="Related systems"><p>See <Link to="/echo-shards" className="text-[var(--lime)] underline underline-offset-4">Echo Shards</Link>, <Link to="/gear" className="text-[var(--lime)] underline underline-offset-4">Gear</Link> and <Link to="/enchantments" className="text-[var(--lime)] underline underline-offset-4">Enchantments</Link>.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
