import { createFileRoute, Link } from '@tanstack/react-router';

import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { faqJsonLd, pageHead, webPageJsonLd } from '@/lib/seo';

const steamDeck = findOfficialFact('steam-deck-playable-2026-10-01');
const emeraldCap = findOfficialFact('emerald-cap-99999-2026-10-01');

export const Route = createFileRoute('/steam-deck')({
  head: () =>
    pageHead(
      '/steam-deck',
      'Minecraft Dungeons 2 Steam Deck: Playable Status & Update',
      'Minecraft Dungeons 2 Steam Deck status after the October 1 update: playable now, full verification still pending, known on-screen keyboard limitation and update details.',
      {
        jsonLd: [
          webPageJsonLd(
            '/steam-deck',
            'Minecraft Dungeons 2 on Steam Deck',
            'Current official Steam Deck status, known limitations and the October 1 Minecraft Dungeons II update.',
          ),
          faqJsonLd([
            {
              question: 'Does Minecraft Dungeons 2 work on Steam Deck?',
              answer:
                'Mojang says Minecraft Dungeons II should now be playable on Steam Deck after the October 1, 2026 Steam update.',
            },
            {
              question: 'Is Minecraft Dungeons 2 Steam Deck Verified?',
              answer:
                'Not yet according to Mojang’s October 1 update. More improvements are planned to bring full Steam Deck verification.',
            },
            {
              question: 'What Steam Deck issues are still known?',
              answer:
                'Mojang specifically warns that issues may remain, including missing on-screen keyboard functionality.',
            },
          ]),
        ],
      },
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      breadcrumbs={[{ label: 'Platforms', to: '/platforms' }]}
      eyebrow="Platform update"
      title="Minecraft Dungeons 2 on Steam Deck"
      description="Minecraft Dungeons II should now be playable on Steam Deck after the October 1, 2026 Steam update. Mojang has not called the game fully Steam Deck Verified yet and warns that some issues can remain."
    >
      <FactGrid
        items={[
          { label: 'Current status', value: 'Playable' },
          { label: 'Official update', value: 'Oct 1, 2026' },
          { label: 'Full verification', value: 'Still pending' },
          { label: 'Known example issue', value: 'On-screen keyboard may be missing' },
          { label: 'Steam version', value: 'Update available' },
          { label: 'Emerald cap', value: '99,999 on all platforms' },
        ]}
      />

      <Section title="Official Minecraft Dungeons II visual">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/key-art/Dungeons-II_Card-H_Trailer-3_760x450.png"
          alt="Official Minecraft Dungeons II promotional art"
          caption="Official Minecraft Dungeons II art. Steam Deck status comes from the October 1 changelog."
          sourceLabel="Minecraft.net"
          sourceHref="https://www.minecraft.net/en-us/about-dungeons-ii"
        />
      </Section>

      <Section title="Is Minecraft Dungeons 2 playable on Steam Deck?">
        <p>{steamDeck.claim}</p>
        <p className="mt-4">
          “Playable” is the important wording here. The official update does not say the game has already
          reached full Steam Deck Verified status.
        </p>
      </Section>

      <Section title="Known Steam Deck limitations">
        <p>
          Mojang gives missing on-screen keyboard functionality as one example of an issue that may still occur
          and says more improvements are coming in a future update.
        </p>
      </Section>

      <Section title="The same update raised the Emerald cap">
        <p>{emeraldCap.claim}</p>
        <p className="mt-4">
          This part of the October 1 change is not Steam-only: the official changelog says the balance update
          applies to all platforms.
        </p>
      </Section>

      <Section title="Steam and multiplayer guides">
        <p>
          For PC requirements and the Steam store listing, see the{' '}
          <Link to="/platforms/steam" className="text-[var(--lime)] underline underline-offset-4">
            Steam guide
          </Link>
          . For party size, crossplay, party codes, matchmaking and hero progression, see the{' '}
          <Link to="/crossplay" className="text-[var(--lime)] underline underline-offset-4">
            crossplay and multiplayer guide
          </Link>
          .
        </p>
      </Section>

      <SourceList sources={[{ label: steamDeck.sourceLabel, href: steamDeck.sourceUrl }]} />
    </WikiPage>
  );
}
