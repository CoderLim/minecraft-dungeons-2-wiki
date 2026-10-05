import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/controls')({
  head: () => pageHead('/controls', 'Minecraft Dungeons 2 Controls: Jump, Inventory & More', 'Minecraft Dungeons 2 controls guide covering verified inputs and mechanics, including jumping, Mini Inventory and navigation aids.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Gameplay', to: '/gameplay' }]} eyebrow="Controls" title="Minecraft Dungeons 2 Controls" description="Only controls explicitly shown or stated in first-party gameplay are listed as confirmed. A complete platform-by-platform control chart still needs direct settings-screen captures.">
      <FactGrid items={[
        { label: 'Mini Inventory', value: 'D-pad Up in the demonstrated controller setup' },
        { label: 'Jump', value: 'New sequel mechanic; exact per-platform binding still needs capture' },
        { label: 'Guiding Line', value: 'Navigation aid can be triggered when lost' },
        { label: 'Complete control map', value: 'Not yet verified' },
      ]} />
      <Section title="Jumping"><p>Jumping and jump attacks are new to the sequel. See the <Link to="/jump" className="text-[var(--lime)] underline underline-offset-4">jump guide</Link> for the confirmed gameplay role.</p></Section>
      <Section title="Mini Inventory"><p>D-pad Up opens Mini Inventory in the developer demo. This is currently the strongest explicit input in the evidence set.</p></Section>
      <Section title="Guiding Line"><p>A Guiding Line can be triggered to help orient players who lose the route through the interconnected world.</p></Section>
      <Section title="Why there is no full keybind table yet"><p>Xbox, PlayStation, Switch and keyboard/mouse mappings should be captured from each platform's control/settings screen rather than inferred from one demo controller.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Exploration Gameplay', href: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg' }]} />
    </WikiPage>
  );
}
