import { createFileRoute } from '@tanstack/react-router';
import { Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/trailers')({
  head: () => pageHead('/trailers', 'Minecraft Dungeons 2 Trailers: Official Videos', 'Official Minecraft Dungeons 2 trailers and gameplay videos with notes on what each reveal actually confirms.'),
  component: Page,
});

const videos = [
  { title: 'Minecraft Dungeons II Exploration Gameplay', url: 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg', note: 'Best current evidence for armor split, talismans, Blacksmith, Echo Shards, enchantment books, Mini Inventory and Copper Monstrosity.' },
  { title: 'Extended Gameplay Demo — gamescom 2026', url: 'https://www.youtube.com/watch?v=WkDKJ_i8L-g', note: 'Overlaps the exploration demo and is useful as a cross-check for gameplay systems.' },
  { title: 'Official Gameplay Trailer', url: 'https://www.youtube.com/watch?v=1tINxp9ZPZA', note: 'Useful for reveal visuals; names and stats still need tooltip/frame verification before entering entity data.' },
] as const;

function Page() {
  return (
    <WikiPage eyebrow="Media" title="Minecraft Dungeons 2 Trailers & Gameplay Videos" description="Official and developer gameplay videos are treated as evidence sources. Spoken claims can establish mechanics; visual-only item names and numeric stats still require frame-level verification.">
      <Section title="Official / developer videos">
        <div className="space-y-3">
          {videos.map((video) => (
            <a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="block border border-[var(--line)] bg-[var(--panel)] p-5 hover:bg-[var(--panel-2)]">
              <h3 className="font-black text-white">{video.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{video.note}</p>
            </a>
          ))}
        </div>
      </Section>
      <Section title="How video evidence is used"><p>Timestamped transcript claims are recorded in the research folder. If a weapon or icon appears visually but is never named, the wiki waits for a readable tooltip instead of guessing from appearance.</p></Section>
      <SourceList sources={videos.map((v) => ({ label: v.title, href: v.url }))} />
    </WikiPage>
  );
}
