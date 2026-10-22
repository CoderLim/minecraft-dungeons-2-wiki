export type OfficialFact = {
  id: string;
  claim: string;
  publishedAt: string;
  sourceLabel: string;
  sourceUrl: string;
  status: 'confirmed';
  note?: string;
};

export const OFFICIAL_FACTS = {
  'dominos-collaboration-2026-10-21': {
    id: 'dominos-collaboration-2026-10-21',
    claim:
      "Domino's announced Minecraft Dungeons II's first brand partnership with three exclusive cosmetic in-game items: the Domino's Skin, Domino's Slice Slayer Cape, and Domino's Cheesy Cube Pet. In the U.S. promotion, eligible Domino's Rewards purchases of a Domino made online or in the app from October 26, 2026 through January 10, 2027 award one of the three items at random.",
    publishedAt: '2026-10-21',
    sourceLabel: "Domino's — Minecraft Dungeons II collaboration",
    sourceUrl: 'https://www.dominos.com/minecraft-dungeons-ii',
    status: 'confirmed',
    note:
      'The U.S. promotion requires an eligible online prepaid Domino purchase and Domino’s Rewards membership. Local rules, rewards, products, and timing vary in the broader international rollout.',
  },
  'dominos-game-giveaway-2026-10-21': {
    id: 'dominos-game-giveaway-2026-10-21',
    claim:
      "Domino's announced a U.S. giveaway of 20,000 Minecraft Dungeons II Standard Edition digital game codes from October 26 through November 4, 2026, with 2,000 codes available each day. A qualifying Domino purchase and proof-of-purchase submission provide a chance to win; the codes are for PC and Xbox Series X|S.",
    publishedAt: '2026-10-21',
    sourceLabel: "Domino's investor relations — Minecraft Dungeons II partnership announcement",
    sourceUrl:
      'https://ir.dominos.com/news-releases/news-release-details/building-ultimate-game-night-dominosr-and-minecraft-dungeons-ii',
    status: 'confirmed',
    note:
      'This is a promotional chance to win, not a permanent price change and not a guaranteed free copy with every purchase.',
  },
  'hotfix-1-1-2-0-2026-10-07': {
    id: 'hotfix-1-1-2-0-2026-10-07',
    claim:
      'Minecraft Dungeons II 1.1.2.0 fixes multiple client and server crashes, a Lightning Slam/TNT crash involving the Prime Enchanter, an online-exit crash, and blurry visuals at Ultra graphics quality.',
    publishedAt: '2026-10-07',
    sourceLabel: 'Minecraft Dungeons II 1.1.2.0 Hotfix — Minecraft Feedback',
    sourceUrl:
      'https://feedback.minecraft.net/hc/en-us/articles/49427995539981-Minecraft-Dungeons-II-1-1-2-0-Hotfix',
    status: 'confirmed',
    note:
      'The current official changelog states that version 1.1.2.0 is available on Steam, Windows, and Xbox Series X|S. It does not confirm this hotfix on PlayStation 5, Nintendo Switch, or Nintendo Switch 2.',
  },
  'steam-deck-playable-2026-10-01': {
    id: 'steam-deck-playable-2026-10-01',
    claim:
      'Minecraft Dungeons II should now be playable on Steam Deck, while full Steam Deck verification is still pending and some issues such as missing on-screen keyboard functionality may occur.',
    publishedAt: '2026-10-01',
    sourceLabel: 'Minecraft Dungeons II Changelog — New Update: Steam Deck Playable',
    sourceUrl:
      'https://feedback.minecraft.net/hc/en-us/articles/49305373167629-New-Update-Steam-Deck-Playable',
    status: 'confirmed',
  },
  'emerald-cap-99999-2026-10-01': {
    id: 'emerald-cap-99999-2026-10-01',
    claim:
      'The emerald cap was increased from 9,999 to 99,999 on all platforms. The balance change takes effect after the next login and does not require a game update.',
    publishedAt: '2026-10-01',
    sourceLabel: 'Minecraft Dungeons II Changelog — New Update: Steam Deck Playable',
    sourceUrl:
      'https://feedback.minecraft.net/hc/en-us/articles/49305373167629-New-Update-Steam-Deck-Playable',
    status: 'confirmed',
  },
  'multiplayer-four-players-2026-09-29': {
    id: 'multiplayer-four-players-2026-09-29',
    claim: 'Minecraft Dungeons II supports solo play or a party of up to four players.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Better together in Dungeons II',
    sourceUrl: 'https://www.minecraft.net/en-us/article/dungeons-ii-co-op',
    status: 'confirmed',
  },
  'mixed-local-online-coop-2026-09-29': {
    id: 'mixed-local-online-coop-2026-09-29',
    claim:
      'Couch co-op sessions can go online so remote players can join open slots in the same four-player party.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Better together in Dungeons II',
    sourceUrl: 'https://www.minecraft.net/en-us/article/dungeons-ii-co-op',
    status: 'confirmed',
  },
  'crossplay-one-click-2026-09-29': {
    id: 'crossplay-one-click-2026-09-29',
    claim:
      'Mojang describes Dungeons II around a one-click crossplay goal so friends can play together even when they are on another platform.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Better together in Dungeons II',
    sourceUrl: 'https://www.minecraft.net/en-us/article/dungeons-ii-co-op',
    status: 'confirmed',
  },
  'cross-platform-hero-progress-2026-09-29': {
    id: 'cross-platform-hero-progress-2026-09-29',
    claim:
      'Hero data is stored online. Linking platform accounts to the same Microsoft account lets players continue with the same hero on another supported platform.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Better together in Dungeons II',
    sourceUrl: 'https://www.minecraft.net/en-us/article/dungeons-ii-co-op',
    status: 'confirmed',
  },
  'party-code-eight-characters-2026-09-29': {
    id: 'party-code-eight-characters-2026-09-29',
    claim:
      'A party code is an eight-character letters-and-numbers code for the current party. Friends can use it to join through the lobby or an ongoing game regardless of platform.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Better together in Dungeons II',
    sourceUrl: 'https://www.minecraft.net/en-us/article/dungeons-ii-co-op',
    status: 'confirmed',
  },
  'matchmaking-criteria-2026-09-29': {
    id: 'matchmaking-criteria-2026-09-29',
    claim:
      'Matchmaking considers core quest progress, region, and power level, and can place a player into a session already in progress.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Better together in Dungeons II',
    sourceUrl: 'https://www.minecraft.net/en-us/article/dungeons-ii-co-op',
    status: 'confirmed',
  },
  'dedicated-servers-2026-09-29': {
    id: 'dedicated-servers-2026-09-29',
    claim:
      'Dungeons II moved online sessions from party-leader hosting to dedicated servers and selects a server for the party using each player’s ping.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Better together in Dungeons II',
    sourceUrl: 'https://www.minecraft.net/en-us/article/dungeons-ii-co-op',
    status: 'confirmed',
  },
  'corrupted-creeper-future-promos-2026-09-29': {
    id: 'corrupted-creeper-future-promos-2026-09-29',
    claim:
      'The Corrupted Creeper Cape is distributed through selected events and promotional activities, and Mojang tells players to watch for future opportunities.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Minecraft Dungeons II Capes & Promos',
    sourceUrl: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos',
    status: 'confirmed',
  },
  'aurora-cape-watch-promo-2026-09-29': {
    id: 'aurora-cape-watch-promo-2026-09-29',
    claim:
      'The Aurora Cape can be earned for Minecraft Java/Bedrock, not Dungeons II, by completing an eligible Twitch or TikTok Dungeons II watch challenge during the September 29 to October 14, 2026 promotion window.',
    publishedAt: '2026-09-29',
    sourceLabel: 'Minecraft.net — Minecraft Dungeons II Capes & Promos',
    sourceUrl: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos',
    status: 'confirmed',
    note: 'The official article says reward codes must be redeemed by October 31, 2026.',
  },
} as const satisfies Record<string, OfficialFact>;

export type OfficialFactId = keyof typeof OFFICIAL_FACTS;

export function findOfficialFact(id: OfficialFactId) {
  return OFFICIAL_FACTS[id];
}
