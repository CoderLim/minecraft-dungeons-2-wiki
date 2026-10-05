import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, MediaGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

const builds = [
  {
    name: 'Dodge-Roll Fire Archer',
    status: 'Official hands-on synergy',
    core: 'Extra dodge rolls + arrows on dodge + fire on arrows',
    use: 'Mobile ranged DPS that turns movement into damage.',
  },
  {
    name: 'Companion Sustain',
    status: 'Official hands-on synergy',
    core: 'Tasty Bone wolf + regen spots on kill',
    use: 'Keeps both the hero and companion healthy while clearing packs.',
  },
  {
    name: 'Battlestaff Lightning Mage',
    status: 'Official weapon guidance',
    core: 'Battlestaff + Lightning Surge',
    use: 'Leans into the Battlestaff as a conductive, enchantment-driven melee caster.',
  },
  {
    name: 'Endgame Sustain Hammer',
    status: 'First-hand review build',
    core: 'Emerald Hammer + piercing crossbow + healing / potion armor effects',
    use: 'A reviewer-tested endgame setup built around damage plus heavy sustain.',
  },
] as const;

export const Route = createFileRoute('/builds')({
  head: () => pageHead('/builds', 'Minecraft Dungeons 2 Builds: Starter & Endgame Ideas', 'Verified Minecraft Dungeons 2 build ideas using official gear synergies, enchantments, companions and early endgame hands-on testing.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[]} eyebrow="Buildcraft" title="Minecraft Dungeons 2 Builds" description="Minecraft Dungeons II has no fixed classes: your build comes from weapons, four armor slots, three artifacts, three talismans and enchantments. These launch-week build ideas only use combinations that have been described in first-party hands-on coverage or a first-hand review.">
      <FactGrid items={[
        { label: 'Combat slots', value: '12 total' },
        { label: 'Class system', value: 'No fixed classes' },
        { label: 'Build layers', value: 'Weapons, armor, artifacts, talismans, enchantments' },
        { label: 'Status', value: 'Launch-week build ideas, not a solved meta' },
      ]} />

      <Section title="Build ideas">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {builds.map((build) => (
            <article key={build.name} className="bg-[var(--panel)] p-6">
              <p className="text-xs font-bold uppercase tracking-[.12em] text-[var(--emerald)]">{build.status}</p>
              <h3 className="mt-2 text-xl font-black text-[var(--text)]">{build.name}</h3>
              <p className="mt-4 text-sm leading-6"><strong className="text-[var(--text)]">Core:</strong> {build.core}</p>
              <p className="mt-2 text-sm leading-6">{build.use}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Dodge-Roll Fire Archer">
        <p>Xbox's gamescom hands-on describes a synergy made from increasing dodge-roll frequency, firing arrows on every dodge roll, then adding fire to those arrows. The result was used as part of a ranged-DPS setup before the Copper Monstrosity fight.</p>
        <p><strong className="text-[var(--text)]">Build around:</strong> extra dodge rolls, effects that trigger on dodge, projectile modifiers and ranged damage. Somersault is a confirmed stackable Enchantment Book that grants additional dodge rolls, making it a natural fit for this archetype.</p>
      </Section>

      <Section title="Companion Sustain">
        <p>In an earlier Xbox hands-on, Tasty Bone summoned a dog companion that attacked, drew aggro and respawned after going down. The player then enchanted a weapon so kills could create regeneration spots, keeping both hero and companion healthy.</p>
        <p><strong className="text-[var(--text)]">Build around:</strong> Tasty Bone, on-kill healing or regeneration, companion-supporting armor effects and steady melee or ranged clearing.</p>
      </Section>

      <Section title="Battlestaff Lightning Mage">
        <p>Mojang's official weapon page explicitly suggests Lightning Surge for a “conductive mage” Battlestaff setup. Soul Blast is another named Battlestaff option if you prefer a more direct damage-oriented variant.</p>
        <p><strong className="text-[var(--text)]">Build around:</strong> Battlestaff, Lightning Surge, effects that reward repeated melee hits, and survivability from armor or talismans.</p>
      </Section>

      <Section title="Endgame Sustain Hammer">
        <p>Game Informer's launch review describes an endgame character using an Emerald Hammer that electrocuted nearby enemies, a piercing crossbow, and armor pieces enchanted to heal the player or improve potion effectiveness.</p>
        <p><strong className="text-[var(--text)]">Build around:</strong> reliable area damage, piercing ranged cleanup, healing effects and potion efficiency. This is useful as first-hand endgame evidence, but it should not be treated as a universal best-in-slot setup.</p>
      </Section>

      <Section title="Buildcraft screenshots">
        <MediaGrid>
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_Gear0.jpg"
            alt="Minecraft Dungeons II equipment screen showing the expanded gear slots"
            caption="The 12-slot equipment layout gives builds more layers than the first game."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
          />
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_enchant3.jpg"
            alt="Minecraft Dungeons II Enchantsmith interface"
            caption="Enchantment Books let players intentionally shape a build instead of relying only on random drops."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
          />
        </MediaGrid>
      </Section>

      <Section title="What to farm first">
        <p>Repeated dungeons are a confirmed source of Enchantment Books and Echo Shards. The Witch boss in northern Howling Woods can also be reactivated with a nearby Boss Totem, which makes repeatable boss encounters useful for testing builds and chasing rare equipment.</p>
        <p>For mechanics and confirmed enchantment effects, see <Link to="/tier-list" className="text-[var(--lime)] underline underline-offset-4">the launch-week tier list</Link>.</p>
      </Section>

      <SourceList sources={[
        { label: 'Minecraft Dungeons II gameplay systems', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Dungeons II — official weapon overview', href: 'https://www.minecraft.net/en-us/about-dungeons-ii' },
        { label: 'Xbox Wire — gamescom buildcraft and Copper Monstrosity', href: 'https://news.xbox.com/en-us/2026/08/26/minecraft-dungeons-ii-new-features-gamescom-2026/' },
        { label: 'Xbox Wire — ARPG hands-on and companion build', href: 'https://news.xbox.com/en-us/2026/06/10/minecraft-dungeons-2-arpg-details-demo-xbox-games-showcase-2026/' },
        { label: 'Xbox Wire — exploration, boss rematches and Enchantment Books', href: 'https://news.xbox.com/en-us/2026/09/28/how-minecraft-dungeons-iis-interconnected-world-makes-every-journey-an-adventure/' },
        { label: 'Game Informer — launch review / endgame build', href: 'https://gameinformer.com/review/minecraft-dungeons-ii/built-better-than-before' },
      ]} />
    </WikiPage>
  );
}
