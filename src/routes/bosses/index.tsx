import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, MediaGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

const bosses = [
  {
    to: '/bosses/copper-monstrosity',
    name: 'Copper Monstrosity',
    status: 'Story boss · mechanics verified',
    location: 'Tower encounter shown in official hands-on coverage',
    detail: 'Heavy punches, lightning AoE and full-arena dashes are all described by Xbox Wire.',
  },
  {
    to: '/bosses/twisted-warden',
    name: 'Twisted Warden',
    status: 'Boss · official hands-on',
    location: 'Deep Dark dungeon / cave sequence',
    detail: 'Described as a supersized and extra-powerful version of Minecraft’s Warden.',
  },
  {
    name: 'Witch',
    status: 'Repeatable boss encounter · official hands-on',
    location: 'Northern Howling Woods',
    detail: 'A nearby Boss Totem reactivates the fight so players can repeatedly chase its loot drops.',
  },
] as const;

export const Route = createFileRoute('/bosses/')({
  head: () => pageHead('/bosses', 'Minecraft Dungeons 2 Bosses: Confirmed Boss List', 'Confirmed Minecraft Dungeons 2 bosses including Copper Monstrosity, Twisted Warden and the repeatable Witch encounter, with locations and mechanics.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Enemies', to: '/enemies' }]} eyebrow="Enemies" title="Minecraft Dungeons 2 Bosses" description="This launch-week boss guide only lists encounters supported by Mojang, Xbox hands-on coverage or direct developer gameplay. It is a confirmed boss list, not a claim that every hidden or late-game boss has already been discovered.">
      <FactGrid items={[
        { label: 'Confirmed named encounters', value: 'Copper Monstrosity, Twisted Warden, Witch' },
        { label: 'Repeatable bosses', value: 'Boss Totems can reactivate some encounters' },
        { label: 'Verified farming example', value: 'Witch in northern Howling Woods' },
        { label: 'Complete roster?', value: 'Not yet claimed' },
      ]} />

      <Section title="Confirmed bosses">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
          {bosses.map((boss) => {
            const body = (
              <>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-[var(--emerald)]">{boss.status}</p>
                <h3 className="mt-2 text-xl font-black text-[var(--text)]">{boss.name}</h3>
                <p className="mt-3 text-sm font-semibold text-[var(--text)]">{boss.location}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{boss.detail}</p>
              </>
            );
            return 'to' in boss ? (
              <Link key={boss.name} to={boss.to} className="bg-[var(--panel)] p-6 hover:bg-[var(--panel-2)]">{body}</Link>
            ) : (
              <article key={boss.name} className="bg-[var(--panel)] p-6">{body}</article>
            );
          })}
        </div>
      </Section>

      <Section title="Boss screenshots">
        <MediaGrid>
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_coop.jpg"
            alt="Minecraft Dungeons II heroes fighting the Twisted Warden"
            caption="Twisted Warden encounter from Mojang's official gameplay-systems article."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
          />
          <OfficialImage
            src="https://xboxwire.thesourcemediaassets.com/sites/2/2026/08/MCDII-Copper-Monstrosity-1-925fc7b31e7ccb5fe422-1024x576.jpg"
            alt="Copper Monstrosity boss fight in Minecraft Dungeons II"
            caption="Copper Monstrosity in official Xbox Wire hands-on coverage."
            sourceLabel="Xbox Wire"
            sourceHref="https://news.xbox.com/en-us/2026/08/26/minecraft-dungeons-ii-new-features-gamescom-2026/"
          />
        </MediaGrid>
      </Section>

      <Section title="Copper Monstrosity">
        <p>Xbox's gamescom hands-on describes a tower showdown against Copper Monstrosity. Its confirmed attacks include heavy punches, lightning area-of-effect attacks that telegraph with sparks underfoot, and full-arena dashes. The encounter can remove large chunks of health quickly if players fail to react.</p>
        <p><Link to="/bosses/copper-monstrosity" className="text-[var(--lime)] underline underline-offset-4">Open the Copper Monstrosity boss guide →</Link></p>
      </Section>

      <Section title="Twisted Warden">
        <p>Xbox's June hands-on describes Twisted Warden as the boss at the end of a dungeon sequence and calls it a supersized, extra-powerful version of the already dangerous Warden. The encounter is tied to Deep Dark / cave exploration in the preview material.</p>
        <p><Link to="/bosses/twisted-warden" className="text-[var(--lime)] underline underline-offset-4">Open the Twisted Warden guide →</Link></p>
      </Section>

      <Section title="Witch boss and Boss Totems">
        <p>Xbox's September 28 hands-on confirms a Witch boss encounter in the northern part of Howling Woods. A nearby Boss Totem can reactivate the fight repeatedly, making it a verified early-game route for rematches, build testing and chasing rare equipment.</p>
        <p>This also proves that some Dungeons II bosses are not strictly one-and-done story encounters: the world includes repeatable boss content with loot-farming value.</p>
      </Section>

      <Section title="Is this every boss in Minecraft Dungeons 2?">
        <p>No. This page deliberately uses “confirmed boss list” rather than “all bosses.” New named encounters will be added when they are supported by a boss health bar, quest progression, official material or first-hand gameplay evidence.</p>
      </Section>

      <SourceList sources={[
        { label: 'Xbox Wire — Twisted Warden hands-on', href: 'https://news.xbox.com/en-us/2026/06/10/minecraft-dungeons-2-arpg-details-demo-xbox-games-showcase-2026/' },
        { label: 'Xbox Wire — Copper Monstrosity hands-on', href: 'https://news.xbox.com/en-us/2026/08/26/minecraft-dungeons-ii-new-features-gamescom-2026/' },
        { label: 'Xbox Wire — Witch boss, Boss Totems and repeatable encounters', href: 'https://news.xbox.com/en-us/2026/09/28/how-minecraft-dungeons-iis-interconnected-world-makes-every-journey-an-adventure/' },
        { label: 'Minecraft Dungeons II gameplay systems', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
      ]} />
    </WikiPage>
  );
}
