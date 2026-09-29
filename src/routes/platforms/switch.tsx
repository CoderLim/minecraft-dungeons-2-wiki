import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/platforms/switch')({
  head: () => pageHead('/platforms/switch', 'Minecraft Dungeons 2 on Nintendo Switch', 'Minecraft Dungeons 2 Nintendo Switch release, multiplayer, editions and verified platform notes.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Platform" title="Minecraft Dungeons 2 on Nintendo Switch" description="Nintendo's store listing confirms the Switch version and up-to-four-player local/online multiplayer. File-size values are intentionally not frozen here because launch storefront pages have shown inconsistent numbers.">
      <FactGrid items={[
        { label: 'Platform', value: 'Nintendo Switch' },
        { label: 'Local players', value: '1–4 in Nintendo listing' },
        { label: 'Online players', value: '1–4 in Nintendo listing' },
        { label: 'File size', value: 'Re-check live store; conflicting launch listings observed' },
      ]} />
      <Section title="Multiplayer"><p>The Nintendo listing explicitly exposes player-count fields for local and online play. Cross-network compatibility is documented separately rather than inferred from these counts.</p></Section>
      <Section title="File size warning"><p>Launch research found conflicting size values across Nintendo pages. The wiki records the conflict instead of choosing one number and presenting it as settled.</p></Section>
      <SourceList sources={[{ label: 'Nintendo Switch store listing', href: 'https://www.nintendo.com/us/store/products/minecraft-dungeons-ii-switch/' }]} />
    </WikiPage>
  );
}
