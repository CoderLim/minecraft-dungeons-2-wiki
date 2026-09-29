import { createFileRoute } from '@tanstack/react-router';
import { Section, SourceList, VideoEmbed, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/trailers')({
  head: () => pageHead('/trailers', 'Minecraft Dungeons 2 Trailers: Official Videos', 'Official Minecraft Dungeons 2 trailers and gameplay videos with notes on what each reveal actually confirms versus still-unverified community claims.'),
  component: Page,
});

const videos = [
  { id: 'DE7Z6uIz8Pg', title: 'Minecraft Dungeons II Exploration Gameplay', url: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg', note: 'Primary evidence for armor split, talismans, Blacksmith, Echo Shards, enchantment books, Mini Inventory and Copper Monstrosity.' },
  { id: 'WkDKJ_i8L-g', title: 'Extended Gameplay Demo — gamescom 2026', url: 'https://www.youtube.com/watch?v=WkDKJ_i8L-g', note: 'Overlaps the exploration demo and is useful as a visual cross-check for gameplay systems.' },
  { id: '1tINxp9ZPZA', title: 'Official Gameplay Trailer', url: 'https://www.youtube.com/watch?v=1tINxp9ZPZA', note: 'Useful for reveal visuals; item names and stats still require readable tooltips before entering the database.' },
] as const;

function Page() {
  return (
    <WikiPage eyebrow="Media" title="Minecraft Dungeons 2 Trailers & Gameplay Videos" description="Official and developer gameplay videos are treated as evidence sources. Spoken claims can establish mechanics; visual-only item names and numeric stats still require frame-level verification.">
      <Section title="Official / developer videos">
        <div className="space-y-6">
          {videos.map((video) => (
            <div key={video.id} className="space-y-3">
              <VideoEmbed youtubeId={video.id} title={video.title} />
              <p className="text-sm leading-6 text-[var(--muted)]">{video.note}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="How video evidence is used"><p>Timestamped transcript claims are recorded in the research folder. If a weapon or icon appears visually but is never named, the wiki waits for a readable tooltip instead of guessing from appearance.</p></Section>
      <SourceList sources={videos.map((v) => ({ label: v.title, href: v.url }))} />
    </WikiPage>
  );
}
