import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/jump')({
  head: () => pageHead('/jump', 'How to Jump in Minecraft Dungeons 2 & Use Jump Attacks', 'Minecraft Dungeons 2 jumping guide covering traversal, hidden spaces and jump attacks based on official developer gameplay.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Gameplay', to: '/gameplay' }]} eyebrow="Movement" title="Jumping in Minecraft Dungeons 2" description="Jumping is a new sequel mechanic used both for traversal and combat. Developer gameplay explicitly calls out jump attacks and the ability to reach spaces that would not have been accessible in the first game.">
      <FactGrid items={[
        { label: 'New in sequel', value: 'Yes' },
        { label: 'Traversal use', value: 'Reach elevated/hidden spaces' },
        { label: 'Combat use', value: 'Jump attacks' },
        { label: 'Exact keybinds', value: 'Platform-specific capture pending' },
      ]} />
      <Section title="Traversal"><p>Jumping expands level navigation beyond the first game's movement model and supports environmental exploration.</p></Section>
      <Section title="Jump attacks"><p>Jump attacks are directly described in developer gameplay, adding another combat approach rather than making jump purely cosmetic.</p></Section>
      <Section title="Controls"><p>The mechanic is confirmed, but exact Xbox/PlayStation/Switch/keyboard bindings still need the in-game Controls screens.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
