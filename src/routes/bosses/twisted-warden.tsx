import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/bosses/twisted-warden')({
  head: () => pageHead('/bosses/twisted-warden', 'Minecraft Dungeons 2 Warden Boss: Twisted Warden Guide', 'Verified Twisted Warden information with encounter context, official media and clearly marked unknown attacks and drops.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Boss" title="Minecraft Dungeons 2 Warden Boss: Twisted Warden" description="Twisted Warden is an officially revealed Minecraft Dungeons II encounter associated with Deep Dark reveal material. The page is published because the entity is confirmed, while granular attacks, phases and loot remain partial.">
      <FactGrid items={[
        { label: 'Entity status', value: 'Officially revealed' },
        { label: 'Encounter context', value: 'Dungeon / cave sequence in official Xbox hands-on' },
        { label: 'Combat description', value: 'Supersized, extra-powerful version of Minecraft’s Warden' },
        { label: 'Drops', value: 'Unknown / not yet verified' },
      ]} />
      <Section title="Official Twisted Warden screenshot">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_coop.jpg"
          alt="Four Minecraft Dungeons II heroes fighting the Twisted Warden"
          caption="The Twisted Warden encounter shown in Mojang's official gameplay systems article."
          sourceLabel="Minecraft.net"
          sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems"
        />
      </Section>
      <Section title="Is the Minecraft Dungeons 2 Warden the Twisted Warden?"><p>The named boss shown in official Dungeons II preview coverage is the Twisted Warden, described by Xbox Wire as a supersized and extra-powerful take on Minecraft's Warden. This page is the canonical guide for both “minecraft dungeons 2 warden” and “twisted warden” searches.</p></Section>
      <Section title="Encounter context"><p>Xbox's June hands-on says the demo's dungeon run culminated in a boss battle against Twisted Warden, describing it as a supersized and extra-powerful version of Minecraft's Warden. The preview route included cave and Deep Dark-style exploration before the boss.</p></Section>
      <Section title="Attacks and phases"><p>Not yet documented as a complete mechanic list. Trailer or recap descriptions are not enough to infer phase thresholds, hitboxes or cooldowns.</p></Section>
      <Section title="Loot"><p>Unknown in the current evidence set. Any fan-wiki drop list remains discovery material rather than a confirmed table.</p></Section>
      <SourceList sources={[
        { label: 'Official Minecraft Dungeons II gameplay systems', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Xbox Wire — Twisted Warden hands-on', href: 'https://news.xbox.com/en-us/2026/06/10/minecraft-dungeons-2-arpg-details-demo-xbox-games-showcase-2026/' },
      ]} />
    </WikiPage>
  );
}
