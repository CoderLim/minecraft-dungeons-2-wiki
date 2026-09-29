import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/pre-order')({
  head: () => pageHead('/pre-order', 'Minecraft Dungeons 2 Pre-Order: Status & Bonuses', 'Post-launch guide to Minecraft Dungeons 2 pre-order status, former bonuses, redemption and account requirements.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Launch promotion" title="Minecraft Dungeons 2 Pre-Order" description="Minecraft Dungeons II has launched, so the original pre-order offer is historical. This page records the promotion without presenting expired bonuses as currently available.">
      <FactGrid items={[
        { label: 'Current status', value: 'Pre-order period ended after launch' },
        { label: 'Known reward', value: 'Twisted Cape' },
        { label: 'Other promo cosmetics', value: 'Tracked from official capes/promos material' },
      ]} />
      <Section title="Can you still pre-order Minecraft Dungeons 2?"><p>No: once the game launched on September 29, 2026, storefront purchases are normal post-launch purchases. Historical pre-order rewards remain documented for players checking entitlements.</p></Section>
      <Section title="Pre-order rewards"><p>The Twisted Cape is one verified pre-order reward. The wiki keeps pre-order rewards separate from Deluxe Edition contents so expired and currently purchasable entitlements are not mixed.</p></Section>
      <Section title="Redemption and missing rewards"><p>Account/platform redemption steps should follow the exact promotion terms. If a reward is missing, first verify the purchasing account and promotion eligibility before assuming a platform-wide issue.</p></Section>
      <SourceList sources={[{ label: 'Official Minecraft Dungeons II capes and promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
