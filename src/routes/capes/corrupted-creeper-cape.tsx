import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/capes/corrupted-creeper-cape')({
  head: () => pageHead('/capes/corrupted-creeper-cape', 'Corrupted Creeper Cape: Minecraft Dungeons 2 Guide', 'Corrupted Creeper Cape promotion dates, former watch requirements, redemption and current availability.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Cape" title="Corrupted Creeper Cape" description="The Corrupted Creeper Cape was tied to a limited Minecraft Dungeons II watch-time promotion. The documented promotion window has ended, so this page distinguishes historical acquisition from current availability.">
      <FactGrid items={[
        { label: 'Type', value: 'Limited promotional cape' },
        { label: 'Promotion', value: 'Twitch / TikTok watch campaign' },
        { label: 'Window', value: 'Sep 21–26, 2026 in official promo material' },
        { label: 'Current status', value: 'Original campaign ended' },
      ]} />
      <Section title="How the promotion worked"><p>Official promotion material tied the cape to watch-time activity on supported social platforms during a fixed launch-period window.</p></Section>
      <Section title="Can you still get it?"><p>The original published campaign window has ended. Unless Mojang announces a rerun or alternate path, this wiki will not present expired instructions as currently active.</p></Section>
      <Section title="Redeeming a reward"><p>Any redemption steps should be tied to the code/account flow specified by the original platform promotion. Generic “free code” lists from unrelated sites are not treated as evidence.</p></Section>
      <SourceList sources={[{ label: 'Official capes and promos page', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
