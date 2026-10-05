import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, MediaGrid, OfficialImage, Section, SourceList, VideoEmbed, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/gameplay')({
  head: () => pageHead('/gameplay', "Minecraft Dungeons 2 Gameplay: What's New", 'Minecraft Dungeons 2 gameplay changes explained from official footage and developer commentary: world, jumping, gear, enchantments and co-op.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[]} eyebrow="Systems guide" title="Minecraft Dungeons 2 Gameplay" description="The sequel keeps action-RPG combat but substantially changes exploration and buildcraft: the world is interconnected, armor is split across four slots, talismans add passive specialization, enchantment books are collected separately, and jump attacks add vertical combat and traversal.">
      <FactGrid items={[
        { label: 'Genre', value: 'Action RPG' },
        { label: 'Co-op', value: 'Up to 4 players' },
        { label: 'World', value: 'Large interconnected regions' },
        { label: 'Armor', value: 'Helmet, chestplate, leggings, boots' },
        { label: 'New gear', value: 'Talismans' },
        { label: 'New traversal', value: 'Jumping and jump attacks' },
      ]} />
      <Section title="Official gameplay video"><VideoEmbed youtubeId="DE7Z6uIz8Pg" title="Minecraft Dungeons II Exploration Gameplay" /></Section>
      <Section title="Official screenshots">
        <MediaGrid>
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_world.jpg"
            alt="Minecraft Dungeons II world map showing regions, quests and discovered locations"
            caption="The official world map demonstrates the sequel's interconnected structure."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
          />
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_Gear0.jpg"
            alt="Minecraft Dungeons II inventory showing weapons, four armor slots, artifacts and talismans"
            caption="Character inventory with the expanded equipment layout."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
          />
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_gear2.jpg"
            alt="Minecraft Dungeons II Blacksmith interface with a Battlestaff selected"
            caption="The Blacksmith interface used to improve and refine gear."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
          />
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_enchant3.jpg"
            alt="Minecraft Dungeons II Enchantsmith interface upgrading Frost Crescent"
            caption="The Enchantsmith UI showing an enchantment upgrade."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
          />
        </MediaGrid>
      </Section>
      <Section title="Interconnected exploration"><p>Developer gameplay explicitly contrasts the sequel with selecting isolated missions from a table. The world contains connected regions, side-quest markers and entrances to procedurally generated dungeons.</p></Section>
      <Section title="Expanded gear system"><p>Armor is no longer a single slot: helmet, chestplate, leggings and boots are equipped separately. Talismans provide passive bonuses; some can gain experience and become stronger.</p></Section>
      <Section title="Enchantments are collected as books"><p>Enchantments are described as books found in the world, then repeatedly applied to suitable gear. Inner Mines is one confirmed example: weapon attacks deploy two mines that explode when enemies approach.</p></Section>
      <Section title="Jumping changes combat and secrets"><p>Jumping is new to the sequel and supports jump attacks as well as traversal into spaces that would have been inaccessible in the first game.</p></Section>
      <Section title="Co-op quality-of-life"><p>The Mini Inventory lets players change gear without forcing the whole couch group into a turn-taking inventory flow. In the demonstrated controller layout it opens with D-pad Up, and multiple players reviving together speed up the revive.</p></Section>
      <SourceList sources={[
        { label: 'Official gameplay systems overview', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
        { label: 'Xbox Wire — gamescom 2026 features', href: 'https://news.xbox.com/en-us/2026/08/26/minecraft-dungeons-ii-new-features-gamescom-2026/' },
      ]} />
    </WikiPage>
  );
}
