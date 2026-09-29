import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/capes/twisted-cape')({
  head: () => pageHead('/capes/twisted-cape', 'Twisted Cape: Minecraft Dungeons 2 Pre-Order Reward', 'Twisted Cape appearance, former pre-order acquisition, account requirements and current availability.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Cape" title="Twisted Cape" description="The Twisted Cape is an official Minecraft Dungeons II pre-order reward. Because the game has launched, the original acquisition method is historical unless Mojang reissues it.">
      <FactGrid items={[
        { label: 'Reward type', value: 'Pre-order cosmetic' },
        { label: 'Availability', value: 'Original pre-order window ended' },
        { label: 'Evidence', value: 'Official promo page' },
      ]} />
      <Section title="How it was obtained"><p>The cape was attached to the pre-order promotion. Post-launch listings should not imply it remains generally obtainable without a new official offer.</p></Section>
      <Section title="Current availability"><p>No alternative acquisition path is added here unless it is supported by Mojang/Minecraft account or store documentation.</p></Section>
      <SourceList sources={[{ label: 'Official capes and promos page', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
