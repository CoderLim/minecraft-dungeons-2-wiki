import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/pre-order-bonus')({
  head: () => pageHead('/pre-order-bonus', 'Minecraft Dungeons 2 Pre-Order Bonus: All Rewards', 'See every verified Minecraft Dungeons 2 pre-order reward, how the former promotion worked, redemption requirements and current availability.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Launch promotion" title="Minecraft Dungeons 2 Pre-Order Bonus" description="The official Minecraft Dungeons II pre-order bundle contained two hero skins, the Twisted Cape and the Twisted Chicken pet. The promotion ended when the game launched.">
      <FactGrid items={[
        { label: 'Twisted Cape', value: 'Pre-order reward' },
        { label: 'Twisted Chicken', value: 'Pre-order pet' },
        { label: 'Hero skins', value: 'Alex and Steve' },
        { label: 'Availability', value: 'Original pre-order window ended' },
      ]} />
      <Section title="All verified pre-order rewards"><p>Mojang's promotion names the Twisted Cape, Twisted Chicken pet and two hero skins featuring Alex and Steve.</p></Section>
      <Section title="Twisted Cape"><p>The Twisted Cape is also eligible to appear in Minecraft Java and Bedrock after the Dungeons II entitlement is confirmed on the same Microsoft Account.</p></Section>
      <Section title="Twisted Chicken"><p>The Twisted Chicken is the pet tied to the pre-order bundle. It should not be confused with <Link to="/pets/blub" className="text-[var(--lime)] underline underline-offset-4">Blub</Link>, which belongs to the Deluxe Edition.</p></Section>
      <Section title="Current availability"><p>The original promotion is over. This wiki will only describe a post-launch acquisition path if Mojang or an official platform store publishes one.</p></Section>
      <Section title="Redemption"><p>Digital entitlements were confirmed after signing into Dungeons II with the qualifying Microsoft Account. Physical-code copies first use the corresponding Xbox, Nintendo or PlayStation code redemption flow.</p></Section>
      <SourceList sources={[{ label: 'Official Minecraft Dungeons II Capes & Promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
