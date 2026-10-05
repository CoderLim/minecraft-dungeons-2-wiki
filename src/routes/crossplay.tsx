import { createFileRoute } from '@tanstack/react-router';

import { FactGrid, OfficialImage, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { findOfficialFact } from '@/lib/official-facts';
import { breadcrumbJsonLd, faqJsonLd, pageHead, webPageJsonLd } from '@/lib/seo';

const maxPlayers = findOfficialFact('multiplayer-four-players-2026-09-29');
const mixedCoop = findOfficialFact('mixed-local-online-coop-2026-09-29');
const oneClickCrossplay = findOfficialFact('crossplay-one-click-2026-09-29');
const heroProgress = findOfficialFact('cross-platform-hero-progress-2026-09-29');
const partyCode = findOfficialFact('party-code-eight-characters-2026-09-29');
const matchmaking = findOfficialFact('matchmaking-criteria-2026-09-29');
const dedicatedServers = findOfficialFact('dedicated-servers-2026-09-29');

export const Route = createFileRoute('/crossplay')({
  head: () =>
    pageHead(
      '/crossplay',
      'Minecraft Dungeons 2 Crossplay & Multiplayer Guide',
      'Official Minecraft Dungeons 2 crossplay guide covering four-player co-op, mixed couch and online play, party codes, cross-platform hero progression, matchmaking and dedicated servers.',
      {
        jsonLd: [
          webPageJsonLd(
            '/crossplay',
            'Minecraft Dungeons 2 Crossplay & Multiplayer',
            'Officially documented crossplay, mixed co-op, party codes, matchmaking and cross-platform hero progression in Minecraft Dungeons II.',
          ),
          breadcrumbJsonLd([
            { name: 'Wiki', path: '/' },
            { name: 'Gameplay', path: '/gameplay' },
            { name: 'Crossplay', path: '/crossplay' },
          ]),
          faqJsonLd([
            {
              question: 'Is Minecraft Dungeons 2 cross-platform?',
              answer:
                'Yes. Mojang describes Dungeons II around a one-click crossplay design and says party codes work regardless of which platform party members are using.',
            },
            {
              question: 'How many players can play Minecraft Dungeons 2 together?',
              answer: 'Minecraft Dungeons II supports a party of up to four players.',
            },
            {
              question: 'Can local and online players play together?',
              answer:
                'Yes. A couch co-op session can be taken online so remote players can fill open slots in the same four-player party.',
            },
            {
              question: 'Does Minecraft Dungeons 2 have cross-platform progression?',
              answer:
                'Hero data is stored online. Linking platform accounts to the same Microsoft account lets players continue the same hero on another supported platform.',
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
      breadcrumbs={[{ label: 'Gameplay', to: '/gameplay' }]}
      eyebrow="Multiplayer"
      title="Minecraft Dungeons 2 Crossplay & Multiplayer"
      description="Yes. Mojang’s official co-op deep dive confirms crossplay, mixed couch-and-online co-op, party codes, online hero data, matchmaking and dedicated servers. This page keeps crossplay and cross-platform progression separate because they solve different problems."
    >
      <FactGrid
        items={[
          { label: 'Max party size', value: '4 players' },
          { label: 'Crossplay', value: 'Officially confirmed' },
          { label: 'Couch co-op', value: 'Online and offline' },
          { label: 'Mixed local + online', value: 'Confirmed' },
          { label: 'Party code', value: '8 letters / numbers' },
          { label: 'Online hosting', value: 'Dedicated servers' },
        ]}
      />

      <Section title="Official co-op visual">
        <OfficialImage
          src="https://www.minecraft.net/content/dam/minecraftnet/games/spicewood/screenshots/d2_systems_coop4.jpg"
          alt="Four Minecraft Dungeons II heroes standing together in a co-op party"
          caption="Official co-op screenshot showing a four-hero party."
          sourceLabel="Minecraft.net"
          sourceHref={maxPlayers.sourceUrl}
        />
      </Section>

      <Section title="Is Minecraft Dungeons 2 cross-platform?">
        <p>{oneClickCrossplay.claim}</p>
        <p className="mt-4">
          The newer first-party co-op article is stronger evidence than the launch-week store-only wording this
          page previously relied on: Mojang explicitly describes playing with friends on another platform and
          says party codes work regardless of platform.
        </p>
      </Section>

      <Section title="Can couch and online players mix?">
        <p>{mixedCoop.claim}</p>
        <p className="mt-4">
          Couch co-op therefore does not force the whole party to remain local. A local group can take the
          session online and fill remaining slots remotely.
        </p>
      </Section>

      <Section title="Crossplay vs cross-platform hero progression">
        <p>
          Crossplay is about playing together across devices. Cross-platform progression is about carrying your
          hero with you. {heroProgress.claim}
        </p>
        <p className="mt-4">
          Mojang also says that, where the platform supports it, a player can sign into their own platform
          account on a friend’s device and continue with their own hero.
        </p>
      </Section>

      <Section title="Party Codes">
        <p>{partyCode.claim}</p>
        <p className="mt-4">
          This is separate from the in-game friends list and is designed as a direct way to join the current
          party even after play has already started.
        </p>
      </Section>

      <Section title="How matchmaking works">
        <p>{matchmaking.claim}</p>
        <p className="mt-4">
          Matchmaking can be used when friends are unavailable or simply to fill remaining party slots.
        </p>
      </Section>

      <Section title="Dedicated servers">
        <p>{dedicatedServers.claim}</p>
        <p className="mt-4">
          That is a direct change from the first Minecraft Dungeons, where the party leader hosted the online
          session.
        </p>
      </Section>

      <Section title="Co-op inventory and revives">
        <p>
          The Mini Inventory lets multiple players manage equipment without taking turns in a single full
          inventory. Multiple teammates reviving the same downed player also speed up the revive.
        </p>
      </Section>

      <SourceList
        sources={[
          { label: oneClickCrossplay.sourceLabel, href: oneClickCrossplay.sourceUrl },
          {
            label: 'Minecraft.net — New gameplay systems in Minecraft Dungeons II',
            href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems',
          },
        ]}
      />
    </WikiPage>
  );
}
