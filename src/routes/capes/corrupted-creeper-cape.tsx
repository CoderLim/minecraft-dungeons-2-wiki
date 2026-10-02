import { createFileRoute } from '@tanstack/react-router';

import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { pageHead } from '@/lib/seo';

const currentAvailability = findOfficialFact('corrupted-creeper-future-promos-2026-09-29');

export const Route = createFileRoute('/capes/corrupted-creeper-cape')({
  head: () =>
    pageHead(
      '/capes/corrupted-creeper-cape',
      'Corrupted Creeper Cape: Minecraft Dungeons 2 Guide',
      'Corrupted Creeper Cape guide for Minecraft Dungeons 2: past promotion details, current official availability wording and future promotional opportunities.',
    ),
  component: Page,
});

function Page() {
  return (
    <WikiPage
      eyebrow="Cape"
      title="Corrupted Creeper Cape"
      description="The Corrupted Creeper Cape is a Minecraft Dungeons II promotional reward. A September 21–26 watch-time campaign has ended, but Mojang’s current official page says the cape can appear through events and promotional activities and tells players to watch for future opportunities."
    >
      <FactGrid
        items={[
          { label: 'Type', value: 'Promotional Dungeons II cape' },
          { label: 'Past window', value: 'Sep 21 12:00 PM PST → Sep 26 11:59 PM PST, 2026' },
          { label: 'Past TikTok requirement', value: 'Eligible live stream · at least 3 minutes' },
          { label: 'Past Twitch requirement', value: 'Minecraft-category live stream · at least 15 minutes' },
          { label: 'Current official status', value: 'Future promo opportunities may appear' },
        ]}
      />

      <Section title="Official cape image">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/game-characters/Cape_CorruptedCreeper.jpg"
          alt="Corrupted Creeper Cape from Minecraft Dungeons II"
          caption="Official Corrupted Creeper Cape asset."
          sourceLabel="Minecraft.net"
          sourceHref={currentAvailability.sourceUrl}
          objectPosition="center"
        />
      </Section>

      <Section title="What is the current availability?">
        <p>{currentAvailability.claim}</p>
        <p className="mt-4">
          That means the old September 21–26 instructions should be treated as a past campaign, not as proof
          that the cape can never be obtained again.
        </p>
      </Section>

      <Section title="How the September TikTok reward worked">
        <p>
          During that earlier campaign, viewers had to watch an eligible Minecraft livestream with Game
          Rewards enabled for at least three minutes, then check TikTok notifications for the reward.
        </p>
      </Section>

      <Section title="How the September Twitch reward worked">
        <p>
          Viewers could watch a livestream in the Minecraft category on Twitch for at least fifteen minutes,
          then check their Twitch inventory.
        </p>
      </Section>

      <Section title="Can you still use the old watch instructions?">
        <p>
          No. The September 21–26 campaign has ended. Follow the rules of any new event Mojang announces rather
          than reusing the old watch window or redemption flow.
        </p>
      </Section>

      <SourceList
        sources={[
          {
            label: 'Official Minecraft Dungeons II Capes & Promos',
            href: currentAvailability.sourceUrl,
          },
        ]}
      />
    </WikiPage>
  );
}
