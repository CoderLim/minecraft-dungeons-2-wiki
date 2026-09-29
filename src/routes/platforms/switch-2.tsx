import { createFileRoute } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/platforms/switch-2')({
  head: () => pageHead('/platforms/switch-2', 'Minecraft Dungeons 2 on Nintendo Switch 2', 'Minecraft Dungeons 2 Switch 2 release, multiplayer, editions and verified platform-specific notes.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Platform" title="Minecraft Dungeons 2 on Switch 2" description="Minecraft Dungeons II has a Switch 2 storefront presence. Platform-specific performance and file-size claims remain evidence-gated rather than copied from nearby Switch listings.">
      <FactGrid items={[
        { label: 'Platform', value: 'Nintendo Switch 2' },
        { label: 'Release', value: 'Sep 29, 2026' },
        { label: 'Multiplayer', value: 'Track from current Nintendo listing' },
        { label: 'File size', value: 'Unresolved due launch listing inconsistencies' },
      ]} />
      <Section title="Switch vs Switch 2"><p>Separate pages prevent Switch 1 and Switch 2 store data from being accidentally merged. Performance, resolution and file size need platform-specific evidence.</p></Section>
      <Section title="Why file size is unresolved"><p>Launch Nintendo pages surfaced inconsistent values, so the field remains explicitly unresolved until the listing stabilizes or an installed build is measured directly.</p></Section>
      <SourceList sources={[{ label: 'Nintendo store', href: 'https://www.nintendo.com/us/store/products/minecraft-dungeons-ii-switch/' }]} />
    </WikiPage>
  );
}
