import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, OfficialImage, Section, SourceList, VideoEmbed, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/pets/blub')({
  head: () => pageHead('/pets/blub', 'Blub Pet in Minecraft Dungeons 2: How to Get It', 'Learn what Blub is, how to get the Blub pet in Minecraft Dungeons 2, which edition includes it, whether Blub fights, and related Deluxe Edition rewards.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Capes & Cosmetics', to: '/capes' }]} eyebrow="Pet" title="Blub in Minecraft Dungeons 2" description="Blub is an official Minecraft Dungeons II pet companion included with the Deluxe Edition. Mojang describes Blub as a cosmetic companion that does not fight battles.">
      <FactGrid items={[
        { label: 'Type', value: 'Pet companion' },
        { label: 'How to get', value: 'Minecraft Dungeons II Deluxe Edition' },
        { label: 'Combat', value: 'Does not fight' },
        { label: 'Role', value: 'Cosmetic companion' },
      ]} />
      <Section title="Official Blub image">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Pet_Blub.jpg"
          alt="Blub pet from Minecraft Dungeons II"
          caption="Official Blub pet asset from the Deluxe Edition promotion."
          sourceLabel="Minecraft.net"
          sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos"
        />
      </Section>
      <Section title="Blub in official footage"><VideoEmbed youtubeId="vBNE3bKMpu8" start={20} title="Minecraft Dungeons II official gameplay trailer — Blub-linked segment" /></Section>
      <Section title="What is Blub?"><p>Blub is a named companion included in the Deluxe Edition cosmetic bundle. The official promotion describes it as a squishy companion intended for appearance and companionship rather than combat.</p></Section>
      <Section title="How to get Blub"><p>Get the Minecraft Dungeons II Deluxe Edition. Blub is part of that edition's bundle rather than the historical pre-order bonus.</p></Section>
      <Section title="Does Blub fight?"><p>No. Mojang's official capes and promos article explicitly says Blub cannot fight battles.</p></Section>
      <Section title="Related Deluxe rewards"><p>The Deluxe Edition also includes the <Link to="/capes/soul-cape" className="text-[var(--lime)] underline underline-offset-4">Soul Cape</Link>, four hero skins and DLC 1 &amp; 2 as released.</p></Section>
      <SourceList sources={[
        { label: 'Minecraft Dungeons II Capes & Promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' },
        { label: 'Xbox Deluxe Edition listing', href: 'https://www.xbox.com/en-US/games/store/minecraft-dungeons-ii-deluxe-edition/9nfdxgj16m47' },
      ]} />
    </WikiPage>
  );
}
