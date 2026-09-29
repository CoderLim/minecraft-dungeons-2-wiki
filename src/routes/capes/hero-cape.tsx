import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/capes/hero-cape')({
  head: () => pageHead('/capes/hero-cape', 'Minecraft Dungeons 2 Hero Cape: How to Get It', 'Hero Cape requirements, deadline, Microsoft account steps and Java/Bedrock crossover details.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Cape" title="How to Get the Hero Cape" description="The Hero Cape is an official Minecraft Dungeons II reward tied to prior play in the first Minecraft Dungeons and use of the same Microsoft Account.">
      <FactGrid items={[
        { label: 'Reward', value: 'Hero Cape' },
        { label: 'Requirement', value: 'Play history in Minecraft Dungeons and same Microsoft Account in Dungeons II' },
        { label: 'Deadline', value: 'Official promotion specifies Dec 31, 2026' },
        { label: 'Crossover', value: 'Official promo material references Java/Bedrock availability for qualifying cape rewards' },
      ]} />
      <Section title="Requirements"><p>The account relationship matters: the promotion is tied to the same Microsoft Account rather than simply owning both games on unrelated accounts.</p></Section>
      <Section title="Deadline"><p>The official promo specifies a December 31, 2026 deadline. If Mojang later extends or re-runs the reward, that change should be recorded as a dated update rather than silently overwriting the original terms.</p></Section>
      <Section title="Troubleshooting"><p>If a qualifying player does not see the cape, first verify the Microsoft Account used in both games and the promotion window. Platform-specific sync delays should only be documented after evidence appears.</p></Section>
      <SourceList sources={[{ label: 'Official capes and promos page', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
