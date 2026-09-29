import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

const capes = [
  { to: '/capes/hero-cape', name: 'Hero Cape', status: 'Former-player reward', note: 'Same Microsoft Account requirement; deadline tracked from official promo.' },
  { to: '/capes/twisted-cape', name: 'Twisted Cape', status: 'Pre-order reward', note: 'No longer a current pre-order offer after launch.' },
  { to: '/capes/soul-cape', name: 'Soul Cape', status: 'Deluxe Edition', note: 'Part of the Deluxe cosmetic bundle.' },
  { to: '/capes/corrupted-creeper-cape', name: 'Corrupted Creeper Cape', status: 'Limited watch promotion', note: 'Twitch/TikTok promotion window has ended.' },
  { to: '/capes/special-cape', name: 'Special Cape', status: 'Acquisition unknown', note: 'Official appearance exists; unlock method remains unresolved.' },
] as const;

export const Route = createFileRoute('/capes/')({
  head: () => pageHead('/capes', 'Minecraft Dungeons 2 Capes: Every Confirmed Cape', 'Browse every confirmed Minecraft Dungeons 2 cape, availability, unlock method, promotion window and crossover notes.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Cosmetics" title="Minecraft Dungeons 2 Capes" description="This cape index tracks only cosmetics that can be tied to official Minecraft Dungeons II promotion material. Adjacent Minecraft cape trends are not automatically treated as Dungeons II content.">
      <FactGrid items={[
        { label: 'Hero Cape', value: 'Verified official reward' },
        { label: 'Twisted Cape', value: 'Verified pre-order reward' },
        { label: 'Soul Cape', value: 'Verified Deluxe Edition reward' },
        { label: 'Corrupted Creeper', value: 'Verified limited watch promotion' },
        { label: 'Special Cape', value: 'Appearance revealed; acquisition unresolved' },
      ]} />
      <Section title="Confirmed capes">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {capes.map((cape) => (
            <Link key={cape.to} to={cape.to} className="bg-[var(--panel)] p-5 hover:bg-[var(--panel-2)]">
              <h3 className="font-black text-white">{cape.name}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[.12em] text-[var(--emerald)]">{cape.status}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{cape.note}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section title="Why unrelated Minecraft capes are excluded"><p>Search trends around Minecraft can surface NameMC, Moonlight Trail Cape and other cape terms. They only enter this wiki if a verifiable Dungeons II relationship exists.</p></Section>
      <SourceList sources={[
        { label: 'Minecraft Dungeons II — capes and promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' },
      ]} />
    </WikiPage>
  );
}
