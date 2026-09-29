import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/characters/grand-illusioner')({
  head: () => pageHead('/characters/grand-illusioner', 'Grand Illusioner - Minecraft Dungeons 2', 'Grand Illusioner character page covering confirmed Illager High Council membership, verified story information and current unknown fields.', { noindex: true }),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Character" title="Grand Illusioner" description="Grand Illusioner is one of the three officially named members of the Illager High Council. Detailed abilities and encounter data remain evidence-gated.">
      <FactGrid items={[
        { label: 'Faction / group', value: 'Illager High Council' },
        { label: 'Status', value: 'Officially named character' },
        { label: 'Encounter details', value: 'Not yet fully verified' },
      ]} />
      <Section title="Illager High Council"><p>Official material identifies Grand Illusioner as part of the council with Prime Enchanter and Supreme Evoker.</p></Section>
      <Section title="Story and abilities"><p>The wiki will not infer mechanics from the name alone. Abilities, location, boss status and drops require direct evidence.</p></Section>
      <SourceList sources={[{ label: 'Official Minecraft Dungeons II character reveal', href: 'https://www.minecraft.net/zh-hant/article/dungeons-ii-battle-for-tokyo' }]} />
    </WikiPage>
  );
}
