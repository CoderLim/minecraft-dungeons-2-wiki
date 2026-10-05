import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/inventory')({
  head: () => pageHead('/inventory', 'Minecraft Dungeons 2 Inventory & Mini Inventory Guide', 'Minecraft Dungeons 2 inventory guide covering Mini Inventory, D-pad Up in the demonstrated controller layout and co-op gear management.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Gameplay', to: '/gameplay' }]} eyebrow="Interface" title="Minecraft Dungeons 2 Inventory" description="The sequel adds a Mini Inventory designed for multiplayer flow. In the demonstrated controller setup it opens with D-pad Up, allowing players to manage equipment without forcing the whole couch group through one inventory screen at a time.">
      <FactGrid items={[
        { label: 'Mini Inventory', value: 'Confirmed' },
        { label: 'Shown controller input', value: 'D-pad Up' },
        { label: 'Co-op purpose', value: 'Multiple players can manage gear simultaneously' },
      ]} />
      <Section title="What is Mini Inventory?"><p>Mini Inventory is a lighter-weight equipment interface intended to reduce co-op downtime. It is especially useful for couch multiplayer where a single full-screen inventory could otherwise block everyone else.</p></Section>
      <Section title="D-pad Up"><p>The developer demo explicitly uses D-pad Up to open Mini Inventory. Platform control layouts can differ, so this should be read as the demonstrated controller binding rather than a universal keyboard/controller mapping.</p></Section>
      <Section title="What still needs capture"><p>The complete slot layout, sorting/filter controls and keyboard bindings require direct UI captures.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
