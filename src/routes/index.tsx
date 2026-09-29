import { createFileRoute, Link } from '@tanstack/react-router';
import { Compass, Gamepad2, PackageOpen, Shield, Skull, Sparkles } from 'lucide-react';

import { pageHead } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { SiteFooter, SiteHeader, EvidenceBadge } from '@/components/wiki-shell';

const quickLinks = [
  { to: '/the-sift', title: 'The Sift', text: 'New dimension, rifts, regions and verified reveal details.', icon: Compass },
  { to: '/gear', title: 'Gear', text: '12 combat slots, four armor pieces, talismans and enchantment books.', icon: PackageOpen },
  { to: '/bosses', title: 'Bosses', text: 'Verified boss index with unknown fields left explicitly unresolved.', icon: Skull },
  { to: '/capes', title: 'Capes', text: 'Hero, Twisted, Soul, Corrupted Creeper and the still-mysterious Special Cape.', icon: Sparkles },
  { to: '/gameplay', title: 'Gameplay', text: 'Jump attacks, interconnected exploration, procedural dungeons and merchants.', icon: Gamepad2 },
  { to: '/crossplay', title: 'Crossplay & Co-op', text: 'Four-player local/online co-op details from developer gameplay.', icon: Shield },
] as const;

export const Route = createFileRoute('/')({
  head: () => pageHead('/', 'Minecraft Dungeons 2 Wiki: Guides, Gear, Bosses & The Sift', 'Source-audited Minecraft Dungeons 2 wiki with verified guides for The Sift, gear, bosses, capes, platforms, co-op and launch updates.'),
  component: Home,
});

function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: `${SITE.url}/`,
  };

  return (
    <>
      <SiteHeader />
      <main className="wiki-grid">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <EvidenceBadge level="Official confirmed" />
              <span className="text-xs uppercase tracking-[.14em] text-[var(--muted)]">Launch-week wiki · Sep 29, 2026</span>
            </div>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.055em] md:text-7xl">Minecraft Dungeons 2 Wiki</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              A source-audited guide and database for Minecraft Dungeons II. Official statements and direct gameplay evidence take priority; community-only claims are labeled, and missing values stay unknown instead of being invented.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/the-sift" className="border border-[var(--emerald)] bg-[var(--emerald)]/10 px-5 py-3 text-sm font-bold text-[var(--lime)]">Explore The Sift</Link>
              <Link to="/gameplay" className="border border-[var(--line)] bg-[var(--panel)] px-5 py-3 text-sm font-bold">Gameplay systems</Link>
            </div>
          </div>
          <figure className="overflow-hidden border border-[var(--line)] bg-[var(--panel)]">
            <img
              src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/key-art/Dungeons-II_FullBleedA_Art01_Tablet_768x600.jpg"
              alt="Official Minecraft Dungeons II key art showing heroes fighting through a colorful landscape"
              width={768}
              height={600}
              fetchPriority="high"
              className="h-full min-h-[360px] w-full object-cover"
            />
            <figcaption className="border-t border-[var(--line)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
              Official Minecraft Dungeons II key art.{' '}
              <a className="text-[var(--lime)] underline underline-offset-4" href="https://www.minecraft.net/en-us/about-dungeons-ii" target="_blank" rel="noreferrer">Source: Minecraft.net</a>
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">Start here</p>
              <h2 className="mt-2 text-3xl font-black">Verified topic hubs</h2>
            </div>
          </div>
          <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
              <Link key={item.to} to={item.to} className="group bg-[var(--panel)] p-6 hover:bg-[var(--panel-2)]">
                <Icon className="mb-5 size-6 text-[var(--emerald)]" aria-hidden="true" />
                <h3 className="text-xl font-black group-hover:text-[var(--lime)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[.14em] text-[var(--emerald)]">Open guide →</span>
              </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">Launch guides</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            {[
              ['/release-date', 'Release date'],
              ['/price', 'Price'],
              ['/editions', 'Standard vs Deluxe'],
              ['/pre-order', 'Pre-order'],
              ['/trailers', 'Trailers'],
              ['/platforms/steam', 'Steam'],
              ['/platforms/xbox', 'Xbox'],
              ['/platforms/switch', 'Switch'],
              ['/platforms/switch-2', 'Switch 2'],
            ].map(([to, label]) => (
              <Link key={to} to={to} className="border border-[var(--line)] bg-[var(--panel)] px-4 py-2 hover:border-[var(--emerald)] hover:text-[var(--lime)]">
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <div className="grid gap-6 border-y border-[var(--line)] py-10 md:grid-cols-3">
            <div><div className="text-3xl font-black">12</div><p className="mt-2 text-sm text-[var(--muted)]">combat gear slots confirmed in the sequel's expanded loadout system.</p></div>
            <div><div className="text-3xl font-black">4 players</div><p className="mt-2 text-sm text-[var(--muted)]">local couch and online co-op are both described in developer gameplay.</p></div>
            <div><div className="text-3xl font-black">Evidence first</div><p className="mt-2 text-sm text-[var(--muted)]">official, gameplay-observed, community-reported and pending claims stay separated.</p></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
