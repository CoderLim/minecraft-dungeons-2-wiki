import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/capes/soul-cape')({
  head: () => pageHead('/capes/soul-cape', 'Soul Cape in Minecraft Dungeons 2: Deluxe Edition Reward', 'Soul Cape availability, Deluxe Edition relationship and related Minecraft Dungeons 2 cosmetic rewards.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Cape" title="Soul Cape" description="The Soul Cape is part of the Minecraft Dungeons II Deluxe Edition cosmetic package.">
      <FactGrid items={[
        { label: 'Edition', value: 'Deluxe Edition' },
        { label: 'Type', value: 'Cape cosmetic' },
        { label: 'Related Deluxe rewards', value: 'Blub and four hero skins are also identified in official promo material' },
      ]} />
      <Section title="How to get the Soul Cape"><p>The cape is associated with the Deluxe Edition. Regional store contents should still be checked against the current platform listing before quoting price or bundle language.</p></Section>
      <Section title="Related Deluxe cosmetics"><p>Official promotion material also highlights Blub and four hero skins. Each gets its own entity page once the art and acquisition details are fully captured.</p></Section>
      <SourceList sources={[{ label: 'Official capes and promos page', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
