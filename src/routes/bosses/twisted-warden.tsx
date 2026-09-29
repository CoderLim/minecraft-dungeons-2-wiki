import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/bosses/twisted-warden')({
  head: () => pageHead('/bosses/twisted-warden', 'Twisted Warden - Minecraft Dungeons 2 Boss Guide', 'Verified Twisted Warden information with encounter context, official media and clearly marked unknown attacks and drops.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Boss" title="Twisted Warden" description="Twisted Warden is an officially revealed Minecraft Dungeons II encounter associated with Deep Dark reveal material. The page is published because the entity is confirmed, while granular attacks, phases and loot remain partial.">
      <FactGrid items={[
        { label: 'Entity status', value: 'Officially revealed' },
        { label: 'Reveal context', value: 'Deep Dark / portal-related footage and official event material' },
        { label: 'Combat description', value: 'Slow-moving but dangerous/high-damage framing appears in official recap material' },
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
      <Section title="Encounter context"><p>Official reveal coverage places Twisted Warden in the sequel's Deep Dark-related material. This wiki will add the exact quest/location chain only after the launch map and quest log are captured.</p></Section>
      <Section title="Attacks and phases"><p>Not yet documented as a complete mechanic list. Trailer or recap descriptions are not enough to infer phase thresholds, hitboxes or cooldowns.</p></Section>
      <Section title="Loot"><p>Unknown in the current evidence set. Any fan-wiki drop list remains discovery material rather than a confirmed table.</p></Section>
      <SourceList sources={[
        { label: 'Official Minecraft Dungeons II gameplay systems', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' },
        { label: 'Minecraft Live / TwitchCon recap', href: 'https://www.minecraft.net/pl-pl/article/minecraft-live-twitchcon-rotterdam-recap' },
      ]} />
    </WikiPage>
  );
}
