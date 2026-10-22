import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/characters/prime-enchanter')({
  head: () => pageHead('/characters/prime-enchanter', 'Prime Enchanter - Minecraft Dungeons 2', 'Prime Enchanter character page covering confirmed Illager High Council membership, verified story information and unresolved fields left unknown.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Characters', to: '/characters' }]} eyebrow="Character" title="Prime Enchanter" description="Prime Enchanter is one of the three officially named members of the Illager High Council. This page publishes the confirmed identity now and leaves unrevealed encounter details open.">
      <FactGrid items={[
        { label: 'Faction / group', value: 'Illager High Council' },
        { label: 'Status', value: 'Officially named character' },
        { label: 'Confirmed ability', value: 'Lightning Slam' },
        { label: 'Encounter details', value: 'Not yet fully verified' },
      ]} />
      <Section title="Illager High Council"><p>Official material names Prime Enchanter alongside Grand Illusioner and Supreme Evoker.</p></Section>
      <Section title="Story and abilities">
        <p>
          Mojang's official 1.1.2.0 hotfix names <strong>Lightning Slam</strong> as a Prime Enchanter ability:
          the patch fixed a crash when the Prime Enchanter hit the floor with Lightning Slam at the same moment
          as a TNT explosion. Other granular encounter details remain evidence-gated.
        </p>
      </Section>
      <SourceList sources={[{ label: 'Official Minecraft Dungeons II character reveal', href: 'https://www.minecraft.net/zh-hant/article/dungeons-ii-battle-for-tokyo' },
        { label: 'Minecraft Dungeons II 1.1.2.0 Hotfix', href: 'https://feedback.minecraft.net/hc/en-us/articles/49427995539981-Minecraft-Dungeons-II-1-1-2-0-Hotfix' }]} />
    </WikiPage>
  );
}
