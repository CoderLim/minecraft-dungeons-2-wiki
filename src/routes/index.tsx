import { createFileRoute, Link } from '@tanstack/react-router';
import { Compass, Gamepad2, PackageOpen, Shield, Skull, Sparkles } from 'lucide-react';

import { EvidenceBadge, SiteFooter, SiteHeader } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';
import { SITE } from '@/lib/site';

const exploreLinks = [
  { to: '/world', title: 'World', text: 'Interconnected regions, dungeons, quests, the map and The Sift.', icon: Compass },
  { to: '/gear', title: 'Gear', text: 'Weapons, four-piece armor, talismans, artifacts and enchantments.', icon: PackageOpen },
  { to: '/enemies', title: 'Enemies', text: 'Bosses, Soul-Corrupted mobs and evidence-gated enemy coverage.', icon: Skull },
  { to: '/builds', title: 'Builds', text: 'Source-backed buildcraft, synergies and provisional tiering.', icon: Shield },
  { to: '/gameplay', title: 'Gameplay', text: 'Combat, jumping, co-op, inventory, merchants and progression systems.', icon: Gamepad2 },
  { to: '/guides', title: 'Guides', text: 'Task-focused routes for co-op, builds, controls, exploration and more.', icon: Sparkles },
] as const;

const databaseLinks = [
  ['/armor', 'Armor'],
  ['/talismans', 'Talismans'],
  ['/enchantments', 'Enchantments'],
  ['/bosses', 'Bosses'],
  ['/characters', 'Characters'],
  ['/capes', 'Capes'],
] as const;

const popularLinks = [
  ['/the-sift', 'The Sift'],
  ['/bosses/copper-monstrosity', 'Copper Monstrosity'],
  ['/bosses/twisted-warden', 'Twisted Warden'],
  ['/crossplay', 'Crossplay & Co-op'],
  ['/builds', 'Builds'],
  ['/steam-deck', 'Steam Deck'],
] as const;

const steamDeck = findOfficialFact('steam-deck-playable-2026-10-01');
const emeraldCap = findOfficialFact('emerald-cap-99999-2026-10-01');

export const Route = createFileRoute('/')({
  head: () =>
    pageHead(
      '/',
      'Minecraft Dungeons 2 Wiki: Gear, Bosses, Builds & Guides',
      'Source-audited Minecraft Dungeons 2 wiki with structured hubs for world exploration, gear, enemies, builds, gameplay systems, guides, platforms and verified updates.',
    ),
  component: Home,
});

function Home() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: `${SITE.url}/`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: 'Minecraft Dungeons II',
      alternateName: 'Minecraft Dungeons 2',
      gamePlatform: ['PC', 'Xbox Series X|S', 'PlayStation 5', 'Nintendo Switch', 'Nintendo Switch 2'],
      genre: ['Action RPG', 'Dungeon crawler'],
      datePublished: '2026-09-29',
      publisher: { '@type': 'Organization', name: 'Xbox Game Studios' },
      developer: { '@type': 'Organization', name: 'Mojang Studios' },
      url: `${SITE.url}/`,
      sameAs: [
        'https://www.minecraft.net/en-us/about-dungeons-ii',
        'https://store.steampowered.com/app/1912410/Minecraft_Dungeons_II/',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When did Minecraft Dungeons II release?',
          acceptedAnswer: { '@type': 'Answer', text: 'Minecraft Dungeons II released on September 29, 2026.' },
        },
        {
          '@type': 'Question',
          name: 'Is Minecraft Dungeons II the same as Minecraft Dungeons 2?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mojang confirms Minecraft Dungeons II and Minecraft Dungeons 2 refer to the same game.' },
        },
        {
          '@type': 'Question',
          name: 'How many players can play Minecraft Dungeons II?',
          acceptedAnswer: { '@type': 'Answer', text: 'Minecraft Dungeons II supports solo play and co-op for up to four players.' },
        },
      ],
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="wiki-grid">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <EvidenceBadge level="Official confirmed" />
              <span className="text-xs uppercase tracking-[.14em] text-[var(--muted)]">
                Database-first · source audited
              </span>
            </div>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.055em] md:text-7xl">
              Minecraft Dungeons 2 Wiki
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              A structured, evidence-first knowledge base for Minecraft Dungeons II. Browse world exploration,
              gear, enemies, builds and gameplay systems without mixing verified facts with unconfirmed guesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/world"
                className="border border-[var(--emerald)] bg-[var(--emerald)]/10 px-5 py-3 text-sm font-bold text-[var(--lime)]"
              >
                Explore the wiki
              </Link>
              <Link
                to="/gear"
                className="border border-[var(--line)] bg-[var(--panel)] px-5 py-3 text-sm font-bold"
              >
                Browse gear
              </Link>
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
              <a
                className="text-[var(--lime)] underline underline-offset-4"
                href="https://www.minecraft.net/en-us/about-dungeons-ii"
                target="_blank"
                rel="noreferrer"
              >
                Source: Minecraft.net
              </a>
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">Explore the wiki</p>
            <h2 className="mt-2 text-3xl font-black">Browse by knowledge area</h2>
          </div>
          <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {exploreLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.to} to={item.to} className="group bg-[var(--panel)] p-6 hover:bg-[var(--panel-2)]">
                  <Icon className="mb-5 size-6 text-[var(--emerald)]" aria-hidden="true" />
                  <h3 className="text-xl font-black group-hover:text-[var(--lime)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                  <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[.14em] text-[var(--emerald)]">
                    Browse →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 md:px-6 lg:grid-cols-2">
          <div className="border border-[var(--line)] bg-[var(--panel)] p-6">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">Databases</p>
            <h2 className="mt-2 text-2xl font-black">Verified collections</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {databaseLinks.map(([to, label]) => (
                <Link key={to} to={to} className="border border-[var(--line)] px-3 py-2 text-sm font-semibold hover:border-[var(--emerald)] hover:text-[var(--lime)]">
                  {label}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
              Incomplete item families stay evidence-gated instead of being padded with placeholder entities.
            </p>
          </div>

          <div className="border border-[var(--line)] bg-[var(--panel)] p-6">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">Popular</p>
            <h2 className="mt-2 text-2xl font-black">Useful entry points</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {popularLinks.map(([to, label]) => (
                <Link key={to} to={to} className="border border-[var(--line)] px-3 py-2 text-sm font-semibold hover:border-[var(--emerald)] hover:text-[var(--lime)]">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <div className="border border-[var(--emerald)]/50 bg-[var(--emerald)]/5 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">
                  Latest verified update · Oct 1
                </p>
                <h2 className="mt-2 text-3xl font-black">Steam Deck playable + Emerald cap raised</h2>
              </div>
              <Link
                to="/updates"
                className="border border-[var(--emerald)] bg-[var(--panel)] px-4 py-2 text-sm font-bold text-[var(--lime)]"
              >
                View updates →
              </Link>
            </div>
            <div className="mt-6 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              <div className="bg-[var(--panel)] p-5">
                <h3 className="font-black">Steam Deck</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{steamDeck.claim}</p>
              </div>
              <div className="bg-[var(--panel)] p-5">
                <h3 className="font-black">Emeralds</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{emeraldCap.claim}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">Guides</p>
              <h2 className="mt-2 text-3xl font-black">Solve a gameplay task</h2>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                {[
                  ['/guides', 'All guides'],
                  ['/builds', 'Builds'],
                  ['/tier-list', 'Tier list'],
                  ['/crossplay', 'Crossplay & co-op'],
                  ['/controls', 'Controls'],
                  ['/the-sift', 'The Sift'],
                ].map(([to, label]) => (
                  <Link key={to} to={to} className="border border-[var(--line)] bg-[var(--panel)] px-4 py-2 hover:border-[var(--emerald)] hover:text-[var(--lime)]">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">Game info</p>
              <h2 className="mt-2 text-3xl font-black">Release and platform details</h2>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                {[
                  ['/release-date', 'Release date'],
                  ['/price', 'Price'],
                  ['/editions', 'Editions'],
                  ['/platforms', 'Platforms'],
                  ['/steam-deck', 'Steam Deck'],
                  ['/trailers', 'Trailers'],
                ].map(([to, label]) => (
                  <Link key={to} to={to} className="border border-[var(--line)] bg-[var(--panel)] px-4 py-2 hover:border-[var(--emerald)] hover:text-[var(--lime)]">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <div className="border-t border-[var(--line)] pt-10">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--emerald)]">FAQ</p>
            <h2 className="mt-2 text-3xl font-black">Frequently asked questions</h2>
            <div className="mt-6 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
              <div className="bg-[var(--panel)] p-5">
                <h3 className="font-black">When did Minecraft Dungeons II release?</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">September 29, 2026.</p>
              </div>
              <div className="bg-[var(--panel)] p-5">
                <h3 className="font-black">Is Minecraft Dungeons II the same as Minecraft Dungeons 2?</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Yes. Mojang uses both names for the same game.
                </p>
              </div>
              <div className="bg-[var(--panel)] p-5">
                <h3 className="font-black">How many players can play?</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Solo or co-op with up to four players.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
