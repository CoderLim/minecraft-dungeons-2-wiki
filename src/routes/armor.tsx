import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/armor')({
  head: () => pageHead('/armor', 'Minecraft Dungeons 2 Armor: Helmet, Chest, Legs & Boots', 'Minecraft Dungeons 2 armor guide covering the four armor slots, gear effects, upgrades and the current verified armor database status.', { noindex: true }),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Gear" title="Minecraft Dungeons 2 Armor" description="The sequel replaces the first game's single armor slot with four separate pieces: helmet, chestplate, leggings and boots. This page documents the system without pretending the complete item roster is already known.">
      <FactGrid items={[
        { label: 'Helmet', value: 'Separate armor slot' },
        { label: 'Chestplate', value: 'Separate armor slot' },
        { label: 'Leggings', value: 'Separate armor slot' },
        { label: 'Boots', value: 'Separate armor slot' },
        { label: 'Random effects', value: 'Gear can roll randomized effects' },
        { label: 'Upgrading', value: 'Blacksmith can raise lower item power' },
      ]} />
      <Section title="Four-piece armor system"><p>The armor split creates more combinations than the first game's one-piece armor system. Each named armor piece will get an entity page once its tooltip and icon are captured.</p></Section>
      <Section title="Effects and rerolls"><p>Gear may have random effects, and Echo Shards are used with the Blacksmith to reroll effects. Exact effect pools remain item-specific evidence rather than generic assumptions.</p></Section>
      <Section title="Complete armor list status"><p>The project still needs a full inventory capture before it can publish a complete armor index.</p></Section>
      <SourceList sources={[
        { label: 'Official gameplay systems overview', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
      ]} />
    </WikiPage>
  );
}
