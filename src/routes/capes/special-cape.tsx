import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/capes/special-cape')({
  head: () => pageHead('/capes/special-cape', 'Minecraft Dungeons 2 Special Cape: What We Know', 'Officially revealed Minecraft Dungeons 2 Special Cape appearance, acquisition status and verified updates.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Cape" title="Minecraft Dungeons 2 Special Cape" description="Official promo material shows a Special Cape, but the current evidence set does not establish its acquisition method. The missing field is intentionally left unresolved." level="Verification pending">
      <FactGrid items={[
        { label: 'Appearance', value: 'Officially revealed' },
        { label: 'Acquisition', value: 'Unknown / not yet verified' },
        { label: 'Status', value: 'Track official updates' },
      ]} />
      <Section title="What is confirmed?"><p>The cape itself appears in official Minecraft Dungeons II promotion material, which is enough to treat it as a real entity.</p></Section>
      <Section title="How do you get it?"><p>Not yet verified in the evidence collected for this wiki. Community speculation is not promoted to an unlock method.</p></Section>
      <SourceList sources={[{ label: 'Official capes and promos page', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
