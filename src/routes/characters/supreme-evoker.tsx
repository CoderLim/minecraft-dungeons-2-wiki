import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/characters/supreme-evoker')({
  head: () => pageHead('/characters/supreme-evoker', 'Supreme Evoker - Minecraft Dungeons 2', 'Supreme Evoker character page covering Illager High Council membership and the verified Copper Monstrosity story connection.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Characters', to: '/characters' }]} eyebrow="Character" title="Supreme Evoker" description="Supreme Evoker is an officially named Illager High Council member and is also explicitly referenced in developer gameplay: the party is looking for Supreme Evoker when it encounters Copper Monstrosity.">
      <FactGrid items={[
        { label: 'Faction / group', value: 'Illager High Council' },
        { label: 'Gameplay story link', value: 'Party searches for Supreme Evoker before Copper Monstrosity encounter' },
        { label: 'Full encounter data', value: 'Not yet verified' },
      ]} />
      <Section title="Copper Monstrosity connection"><p>In the exploration gameplay demo, the developers state that the party is looking for Supreme Evoker before the Copper Monstrosity story boss appears.</p></Section>
      <Section title="Illager High Council"><p>Supreme Evoker is named alongside Prime Enchanter and Grand Illusioner in official character material.</p></Section>
      <SourceList sources={[
        { label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' },
        { label: 'Official Minecraft Dungeons II character reveal', href: 'https://www.minecraft.net/zh-hant/article/dungeons-ii-battle-for-tokyo' },
      ]} />
    </WikiPage>
  );
}
