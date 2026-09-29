import { createFileRoute } from '@tanstack/react-router';
import { Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/pre-order-bonus')({
  head: () => pageHead('/pre-order-bonus', 'Minecraft Dungeons 2 Pre-Order Bonus: All Rewards', 'See every verified Minecraft Dungeons 2 pre-order reward and how the former promotion worked.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Launch promotion" title="Minecraft Dungeons 2 Pre-Order Bonus" description="This page is a historical record of confirmed Minecraft Dungeons II pre-order rewards. It does not add reward names from unsourced retailer pages or community lists.">
      <Section title="Verified rewards"><p>The Twisted Cape is confirmed in official promotional material. Other launch cosmetics are documented on their own pages when their acquisition route is clear.</p></Section>
      <Section title="Pre-order vs Deluxe"><p>Deluxe rewards such as Soul Cape and Blub are not automatically pre-order bonuses. Keeping these categories separate prevents a common launch-week error in comparison pages.</p></Section>
      <Section title="Current availability"><p>The pre-order period is over. A reward can only be described as currently obtainable if Mojang or a platform store publishes a post-launch path.</p></Section>
      <SourceList sources={[{ label: 'Official Minecraft Dungeons II capes and promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
