import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

const tiers = [
  {
    tier: 'S',
    items: [
      { name: 'Healing Smite', why: 'Adds sustain through a chance to create a healing circle after defeating an enemy; broadly useful across aggressive builds.' },
      { name: 'Somersault', why: 'Stackable extra dodge rolls improve mobility, survival and any effect that triggers from dodging.' },
    ],
  },
  {
    tier: 'A',
    items: [
      { name: 'Ender Mines', why: 'Deploys exploding crystals and adds reliable offensive utility without forcing a narrow weapon archetype.' },
      { name: 'Lightning Surge', why: 'Officially recommended with Battlestaff for a conductive-mage setup; strong synergy, but more archetype-specific.' },
    ],
  },
  {
    tier: 'B',
    items: [
      { name: 'Soul Blast', why: 'Officially shown as a Battlestaff alternative, but current first-party material gives less detail on its scaling and broader synergies.' },
    ],
  },
] as const;

export const Route = createFileRoute('/tier-list')({
  head: () => pageHead('/tier-list', 'Minecraft Dungeons 2 Tier List: Launch Week Enchantments', 'Launch-week Minecraft Dungeons 2 tier list for confirmed enchantments and build tools, with transparent criteria and source-backed effects.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Builds', to: '/builds' }]} eyebrow="Editorial ranking" title="Minecraft Dungeons 2 Tier List" description="This is a provisional launch-week ranking of confirmed enchantments and build tools, not an official Mojang tier list. Rankings are based on versatility, survivability, synergy potential and how well the effect is documented in first-party material.">
      <FactGrid items={[
        { label: 'Scope', value: 'Confirmed enchantments / build tools only' },
        { label: 'Updated', value: 'Launch week · Sep 30, 2026' },
        { label: 'S tier means', value: 'Broad value across many builds' },
        { label: 'Not included yet', value: 'Unverified or poorly documented effects' },
      ]} />

      <Section title="Tier list">
        <div className="space-y-4">
          {tiers.map((group) => (
            <div key={group.tier} className="grid border border-[var(--line)] md:grid-cols-[90px_1fr]">
              <div className="grid place-items-center bg-[var(--panel-2)] p-6 text-4xl font-black text-[var(--lime)]">{group.tier}</div>
              <div className="divide-y divide-[var(--line)] bg-[var(--panel)]">
                {group.items.map((item) => (
                  <div key={item.name} className="p-5">
                    <h3 className="font-black text-[var(--text)]">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6">{item.why}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why Healing Smite and Somersault are S tier">
        <p>Healing Smite turns kills into a chance for area sustain, which is useful whether you are playing melee, ranged or with companions. Somersault is explicitly stackable, and extra dodge rolls have both defensive value and offensive synergy because Xbox's hands-on build combined frequent rolls with arrows fired on dodge.</p>
      </Section>

      <Section title="Why Ender Mines and Lightning Surge are A tier">
        <p>Ender Mines add direct explosive damage and fit a wide range of equipment setups. Lightning Surge is more specialized: Mojang specifically recommends it with the Battlestaff for a conductive-mage build, so its synergy is clear but its value is less universal.</p>
      </Section>

      <Section title="Why Soul Blast starts in B tier">
        <p>Mojang lists Soul Blast as another Battlestaff option, but current official material gives less detail on its trigger, scaling and interaction with other slots. Rather than infer strength from the name alone, it starts lower until direct endgame testing gives us better evidence.</p>
      </Section>

      <Section title="How this ranking will change">
        <p>A real endgame tier list needs drop rates, upgrade scaling, boss performance and a larger verified enchantment pool. This page will expand only when those values can be tested or documented. For practical combinations you can already build, see <Link to="/builds" className="text-[var(--lime)] underline underline-offset-4">Minecraft Dungeons 2 Builds</Link>.</p>
      </Section>

      <SourceList sources={[
        { label: 'Minecraft Dungeons II — official weapon overview', href: 'https://www.minecraft.net/en-us/about-dungeons-ii' },
        { label: 'Minecraft Dungeons II gameplay systems', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Xbox Wire — exploration and confirmed Enchantment Books', href: 'https://news.xbox.com/en-us/2026/09/28/how-minecraft-dungeons-iis-interconnected-world-makes-every-journey-an-adventure/' },
        { label: 'Xbox Wire — gamescom build synergy', href: 'https://news.xbox.com/en-us/2026/08/26/minecraft-dungeons-ii-new-features-gamescom-2026/' },
      ]} />
    </WikiPage>
  );
}
