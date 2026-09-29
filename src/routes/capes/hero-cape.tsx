import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/capes/hero-cape')({
  head: () => pageHead('/capes/hero-cape', 'Minecraft Dungeons 2 Hero Cape: How to Get It', 'Hero Cape requirements, December 31, 2026 deadline, same Microsoft Account steps and Java/Bedrock unlock details.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Cape" title="How to Get the Hero Cape" description="To get the Hero Cape, play Minecraft Dungeons I, then log into Minecraft Dungeons II before December 31, 2026 using the same Microsoft Account. After the cape appears in Dungeons II, the same account can unlock it in Minecraft Java and Bedrock Edition.">
      <FactGrid items={[
        { label: 'Reward', value: 'Hero Cape' },
        { label: 'Requirement', value: 'Play Minecraft Dungeons I, then log into Dungeons II' },
        { label: 'Deadline', value: 'Before Dec 31, 2026' },
        { label: 'Account', value: 'Use the same Microsoft Account across the games' },
        { label: 'Java / Bedrock', value: 'Unlocks after Dungeons II entitlement is confirmed' },
      ]} />
      <Section title="Hero Cape requirements"><p>Mojang's instructions are straightforward: play Minecraft Dungeons I, then log into Minecraft Dungeons II before December 31, 2026. The same Microsoft Account must be used across the games.</p></Section>
      <Section title="How to unlock the Hero Cape in Java and Bedrock"><p>First wait until Dungeons II shows that the Hero Cape can be equipped. Then log into Minecraft Java and/or Bedrock Edition with the same Microsoft Account to unlock the cape there as well.</p></Section>
      <Section title="Does couch co-op count?"><p>The official promo explicitly says the same-account rule applies whether playing solo or joining a friend's couch co-op session.</p></Section>
      <Section title="Deadline"><p>The published deadline is December 31, 2026. If Mojang later extends the promotion, this page should record that as a dated update rather than silently replacing the original terms.</p></Section>
      <Section title="Troubleshooting"><p>If the cape does not appear, verify the Microsoft Account used in Dungeons I, Dungeons II and Java/Bedrock. Mojang also notes that online confirmation can be delayed for promotions that require playtime verification.</p></Section>
      <SourceList sources={[{ label: 'Official Minecraft Dungeons II Capes & Promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
