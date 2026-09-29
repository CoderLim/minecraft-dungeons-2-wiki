import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/note-block')({
  head: () => pageHead('/note-block', 'Minecraft Dungeons 2 Note Block: Story Role', 'Minecraft Dungeons 2 story Note Block, Copper Monstrosity connection and distinction from the Launcher note-block puzzle.', { noindex: true }),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Story item" title="Minecraft Dungeons 2 Note Block" description="A Note Block is picked up after the Copper Monstrosity encounter in developer gameplay. The developers explicitly say it is important to the story, but withhold the complete explanation." level="Gameplay observed">
      <FactGrid items={[
        { label: 'Acquired after', value: 'Copper Monstrosity encounter in shown gameplay' },
        { label: 'Story importance', value: 'Explicitly confirmed by developers' },
        { label: 'Full function', value: 'Not yet revealed in the captured segment' },
      ]} />
      <Section title="Copper Monstrosity connection"><p>The Note Block is shown immediately after the boss sequence, making the encounter a useful cross-link between the boss and story-item pages.</p></Section>
      <Section title="Music-box clue"><p>The interview acknowledges a music-box interpretation but intentionally avoids explaining the item further. That is not enough evidence to invent its final function.</p></Section>
      <Section title="Not the same as the Launcher code page"><p>The Launcher note-block ARG is documented at /note-block-code. This page is for the in-game story object.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
