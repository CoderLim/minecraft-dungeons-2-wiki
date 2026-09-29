import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, MediaGrid, OfficialImage, Section, SourceList, VideoEmbed, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/editions')({
  head: () => pageHead('/editions', 'Minecraft Dungeons 2 Editions: Standard vs Deluxe', 'Compare Minecraft Dungeons 2 Standard and Deluxe Editions, Soul Cape, Blub, four hero skins, DLC 1 & 2 access and storefront pricing differences.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Buying guide" title="Minecraft Dungeons 2 Editions" description="Minecraft Dungeons II is sold in Standard and Deluxe configurations. The Deluxe Edition adds the Soul Cape, Blub pet, four dark-golden hero skins and DLC 1 & 2 as released. Historical pre-order bonuses are separate.">
      <FactGrid items={[
        { label: 'Standard', value: 'Base game' },
        { label: 'Deluxe', value: 'Base game + Deluxe bundle' },
        { label: 'Soul Cape', value: 'Deluxe reward' },
        { label: 'Blub', value: 'Deluxe pet; does not fight' },
        { label: 'Hero skins', value: 'Valorie, Kellen, Ren and Flores variants' },
        { label: 'DLC', value: 'DLC 1 & 2 as released' },
      ]} />
      <Section title="Deluxe Edition cosmetics">
        <MediaGrid>
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Cape_Soul.jpg"
            alt="Soul Cape from Minecraft Dungeons II Deluxe Edition"
            caption="Soul Cape, included with the Deluxe Edition."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos"
          />
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Pet_Blub.jpg"
            alt="Blub pet from Minecraft Dungeons II Deluxe Edition"
            caption="Blub, the cosmetic pet included with the Deluxe Edition."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos"
          />
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Skin_Fancy.jpg"
            alt="Four dark-golden hero skins from Minecraft Dungeons II Deluxe Edition"
            caption="The Deluxe Edition hero-skin variants for Valorie, Kellen, Ren and Flores."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos"
          />
        </MediaGrid>
      </Section>
      <Section title="Official gameplay trailer"><VideoEmbed youtubeId="vBNE3bKMpu8" title="Minecraft Dungeons II official gameplay trailer" /></Section>
      <Section title="Standard Edition"><p>The Standard Edition contains the base Minecraft Dungeons II game. Pricing varies by storefront and region.</p></Section>
      <Section title="Deluxe Edition"><p>Official promotion material identifies Blub, the Soul Cape and four dark-golden variations of Valorie, Kellen, Ren and Flores. The Xbox Deluxe listing also includes DLC 1 &amp; 2 as released.</p></Section>
      <Section title="Blub"><p><Link to="/pets/blub" className="text-[var(--lime)] underline underline-offset-4">Blub</Link> is a cosmetic companion. Mojang explicitly says Blub cannot fight battles.</p></Section>
      <Section title="Soul Cape"><p>The <Link to="/capes/soul-cape" className="text-[var(--lime)] underline underline-offset-4">Soul Cape</Link> is part of the Deluxe bundle rather than the pre-order offer.</p></Section>
      <Section title="Deluxe is not the same as pre-order"><p>The Twisted Cape, Twisted Chicken and Alex/Steve pre-order skins belonged to the pre-launch promotion. They should not be presented as normal Deluxe Edition contents.</p></Section>
      <SourceList sources={[
        { label: 'Official Minecraft Dungeons II Capes & Promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' },
        { label: 'Xbox Deluxe Edition listing', href: 'https://www.xbox.com/en-US/games/store/minecraft-dungeons-ii-deluxe-edition/9nfdxgj16m47' },
      ]} />
    </WikiPage>
  );
}
