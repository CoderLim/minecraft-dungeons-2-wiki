import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/artifacts')({
  head: () => pageHead('/artifacts', 'Minecraft Dungeons 2 Artifacts: Verified List', 'Minecraft Dungeons 2 artifacts hub with an evidence-gated database, confirmed systems notes and fields that remain verification pending.', { noindex: true }),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Gear', to: '/gear' }]} eyebrow="Gear database" title="Minecraft Dungeons 2 Artifacts" description="Artifacts remain a distinct gear/system category, but the current launch research is not enough to publish a complete artifact catalog. Individual entries require readable names and tooltips.">
      <FactGrid items={[
        { label: 'Database status', value: 'Partial / capture pending' },
        { label: 'Required evidence', value: 'Readable item name and tooltip' },
        { label: 'Effect fields', value: 'Stored per item once verified' },
      ]} />
      <Section title="What each artifact page will include"><p>Name, icon, effect text, cooldown/charges if shown, how to obtain, combat use, related enchantments/builds and source screenshots.</p></Section>
      <Section title="Why the list is intentionally incomplete"><p>Trailer frames can show icons without names. This wiki does not assign a name to an icon by resemblance alone.</p></Section>
      <SourceList sources={[{ label: 'Official gameplay systems overview', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems' }]} />
    </WikiPage>
  );
}
