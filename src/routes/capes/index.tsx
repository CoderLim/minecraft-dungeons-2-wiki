import { createFileRoute, Link } from '@tanstack/react-router';

import { FactGrid, MediaGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';

const corruptedCreeper = findOfficialFact('corrupted-creeper-future-promos-2026-09-29');
const auroraPromo = findOfficialFact('aurora-cape-watch-promo-2026-09-29');

const capes = [
  {
    to: '/capes/hero-cape',
    name: 'Hero Cape',
    status: 'Former-player reward',
    note: 'Same Microsoft Account requirement; deadline tracked from official promo.',
    image: 'https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Cape_Hero.jpg',
  },
  {
    to: '/capes/twisted-cape',
    name: 'Twisted Cape',
    status: 'Pre-order reward',
    note: 'No longer a current pre-order offer after launch.',
    image: 'https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Cape_Twisted.jpg',
  },
  {
    to: '/capes/soul-cape',
    name: 'Soul Cape',
    status: 'Deluxe Edition',
    note: 'Part of the Deluxe cosmetic bundle.',
    image: 'https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Cape_Soul.jpg',
  },
  {
    to: '/capes/corrupted-creeper-cape',
    name: 'Corrupted Creeper Cape',
    status: 'Promotional reward',
    note: 'Past campaign ended; Mojang says to watch for future promotional opportunities.',
    image:
      'https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Cape_CorruptedCreeper.jpg',
  },
  {
    to: '/capes/special-cape',
    name: 'Special Cape',
    status: 'Acquisition unknown',
    note: 'Official appearance exists; unlock method remains unresolved.',
    image: 'https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Cape_Special.jpg',
  },
] as const;

export const Route = createFileRoute('/capes/')({
  head: () =>
    pageHead(
      '/capes',
      'Minecraft Dungeons 2 Capes: Every Confirmed Cape',
      'Browse confirmed Minecraft Dungeons 2 capes, availability windows, unlock methods, promotion dates and clearly separated Minecraft-only crossover rewards.',
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      eyebrow="Cosmetics"
      title="Minecraft Dungeons 2 Capes"
      description="This cape index tracks cosmetics that can be tied to official Minecraft Dungeons II material. Minecraft-only rewards promoted through Dungeons II events are listed separately so they are not mistaken for in-game Dungeons II capes."
    >
      <FactGrid
        items={[
          { label: 'Hero Cape', value: 'Verified official reward' },
          { label: 'Twisted Cape', value: 'Verified pre-order reward' },
          { label: 'Soul Cape', value: 'Verified Deluxe Edition reward' },
          { label: 'Corrupted Creeper', value: 'Promotional; future opportunities possible' },
          { label: 'Special Cape', value: 'Appearance revealed; acquisition unresolved' },
          { label: 'Aurora Cape', value: 'Minecraft only; active watch promo through Oct 14' },
        ]}
      />

      <Section title="Cape visuals">
        <MediaGrid>
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Cape_CorruptedCreeper.jpg"
            alt="Corrupted Creeper Cape cosmetic from Minecraft Dungeons II"
            caption="Corrupted Creeper Cape, an official Dungeons II promotional cape."
            sourceLabel="Minecraft.net"
            sourceHref={corruptedCreeper.sourceUrl}
          />
          <OfficialImage
            src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/key-art/Dungeons-II_Card-H_Trailer-2_760x450.png"
            alt="Minecraft Dungeons II heroes in official promotional art"
            caption="Official Minecraft Dungeons II promotional art used alongside the game's cosmetic campaign."
            sourceLabel="Minecraft.net"
            sourceHref="https://www.minecraft.net/en-us/about-dungeons-ii"
          />
        </MediaGrid>
      </Section>

      <Section title="Confirmed Dungeons II capes">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {capes.map((cape) => (
            <Link
              key={cape.to}
              to={cape.to}
              className="overflow-hidden bg-[var(--panel)] hover:bg-[var(--panel-2)]"
            >
              <img
                src={cape.image}
                alt={`${cape.name} in Minecraft Dungeons II`}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-black text-[var(--text)]">{cape.name}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[.12em] text-[var(--emerald)]">
                  {cape.status}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{cape.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Active Aurora Cape watch promotion — Minecraft only">
        <p>{auroraPromo.claim}</p>
        <p className="mt-4">
          The official requirements are at least 3 minutes on an eligible TikTok Game Rewards livestream or at
          least 15 minutes on an eligible Twitch livestream during the promotion window. This cape is for
          Minecraft Java/Bedrock and should not be counted as a Dungeons II in-game cape.
        </p>
      </Section>

      <Section title="Corrupted Creeper Cape availability">
        <p>{corruptedCreeper.claim}</p>
        <p className="mt-4">
          The older September watch campaign is historical, but the current official page no longer describes
          the cape as permanently unavailable.
        </p>
      </Section>

      <Section title="Why unrelated Minecraft capes are excluded">
        <p>
          Search trends around Minecraft can surface NameMC, Moonlight Trail Cape and other cape terms. They
          only enter this wiki if a verifiable Dungeons II relationship exists, and Minecraft-only rewards are
          labeled as such.
        </p>
      </Section>

      <SourceList sources={[{ label: auroraPromo.sourceLabel, href: auroraPromo.sourceUrl }]} />
    </WikiPage>
  );
}
