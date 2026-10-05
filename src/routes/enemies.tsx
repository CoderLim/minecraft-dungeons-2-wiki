import { createFileRoute } from '@tanstack/react-router';

import { Section, SourceList, WikiCardGrid, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/enemies')({
  head: () =>
    pageHead(
      '/enemies',
      'Minecraft Dungeons 2 Enemies: Bosses & Corrupted Mobs',
      'Minecraft Dungeons 2 enemy hub linking verified bosses, Soul-Corrupted mobs and evidence-backed encounter coverage.',
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[]}
      eyebrow="Enemy database"
      title="Minecraft Dungeons 2 Enemies"
      description="Enemy coverage is organized by verified encounter type. Bosses have dedicated entity pages when mechanics and locations are supported; broader mob lists stay evidence-gated until names and behaviors can be captured reliably."
    >
      <WikiCardGrid
        items={[
          {
            href: '/bosses',
            title: 'Bosses',
            description: 'Copper Monstrosity, Twisted Warden, the repeatable Witch encounter and future verified boss entities.',
            meta: 'Entity index',
          },
          {
            href: '/soul-corrupted-mobs',
            title: 'Soul-Corrupted Mobs',
            description: 'Tough enemy variants connected to Echo Shards and the sequel’s corruption systems.',
            meta: 'Enemy family',
          },
        ]}
      />
      <Section title="Why there is no padded mob list">
        <p>
          A mature wiki needs canonical enemy entities, but publishing guessed names from silhouettes or incomplete footage would weaken the database. Normal mob pages should be added when the name, encounter context and useful mechanics can be verified.
        </p>
      </Section>
      <SourceList
        sources={[
          {
            label: 'Minecraft Dungeons II gameplay systems',
            href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems',
          },
          {
            label: 'Xbox Wire — interconnected world and repeatable bosses',
            href: 'https://news.xbox.com/en-us/2026/09/28/how-minecraft-dungeons-iis-interconnected-world-makes-every-journey-an-adventure/',
          },
        ]}
      />
    </WikiPage>
  );
}
