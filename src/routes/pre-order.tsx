import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/pre-order')({
  head: () => pageHead('/pre-order', 'Minecraft Dungeons 2 Pre-Order: Status & Bonuses', 'Post-launch guide to Minecraft Dungeons 2 pre-order status, former bonuses, redemption and account requirements.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Launch promotion" title="Minecraft Dungeons 2 Pre-Order" description="Minecraft Dungeons II launched on September 29, 2026, so the original pre-order offer is now historical. Mojang's official promotion listed two hero skins, the Twisted Cape and the Twisted Chicken pet as the pre-order rewards.">
      <FactGrid items={[
        { label: 'Current status', value: 'Pre-order period ended' },
        { label: 'Reward', value: 'Twisted Cape' },
        { label: 'Reward', value: 'Twisted Chicken pet' },
        { label: 'Reward', value: '2 hero skins: Alex and Steve' },
        { label: 'Cape crossover', value: 'Twisted Cape also unlocks in Java / Bedrock after qualification' },
      ]} />
      <Section title="Can you still pre-order Minecraft Dungeons 2?"><p>No. The game launched on September 29, 2026. Current purchases are post-launch purchases unless a retailer is specifically describing an old physical pre-order entitlement.</p></Section>
      <Section title="What were the pre-order rewards?"><p>The official promotion lists two hero skins, the Twisted Cape and the Twisted Chicken pet. These are separate from Deluxe Edition rewards such as Blub and the Soul Cape.</p></Section>
      <Section title="How were digital rewards claimed?"><p>After launch, eligible players were instructed to sign into Minecraft Dungeons II with the Microsoft Account tied to the pre-order and confirm the acquired pre-order items.</p></Section>
      <Section title="Physical-copy code redemption"><p>For physical copies that included a code, Mojang's promo instructions point players to the relevant platform redemption flow first, then to the in-game account-confirmation steps.</p></Section>
      <Section title="Twisted Cape in Java and Bedrock"><p>The official promotion says the Twisted Cape can also unlock in Minecraft: Java and Bedrock Edition after it appears as acquired in Minecraft Dungeons II, using the same Microsoft Account.</p></Section>
      <Section title="Related pages"><p>See <Link to="/pre-order-bonus" className="text-[var(--lime)] underline underline-offset-4">Pre-Order Bonus</Link>, <Link to="/capes/twisted-cape" className="text-[var(--lime)] underline underline-offset-4">Twisted Cape</Link> and <Link to="/pets/blub" className="text-[var(--lime)] underline underline-offset-4">Blub</Link>.</p></Section>
      <SourceList sources={[
        { label: 'Official Minecraft Dungeons II Capes & Promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' },
        { label: 'Xbox store listing', href: 'https://www.xbox.com/en-US/games/store/minecraft-dungeons-ii/9nsn56sl5hc0' },
      ]} />
    </WikiPage>
  );
}
