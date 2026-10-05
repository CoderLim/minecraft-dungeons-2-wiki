/**
 * Single source of truth for crawl/index intent.
 * - `index: true`  → sitemap + intended to rank (no `noindex` in pageHead)
 * - `index: false` → keep `noindex,follow` until content depth justifies opening
 *
 * When you add a page: register it here AND set pageHead noindex to match.
 */
export type SeoPageEntry = {
  path: string;
  title: string;
  blurb: string;
  index: boolean;
};

export const SEO_PAGES: SeoPageEntry[] = [
  { path: '/', title: 'Minecraft Dungeons 2 Wiki', blurb: 'Source-audited home and topic hubs', index: true },
  { path: '/release-date', title: 'Release Date', blurb: 'Launch date, status and Game Pass', index: true },
  { path: '/price', title: 'Price', blurb: 'Store-specific Standard and Deluxe pricing', index: true },
  { path: '/editions', title: 'Editions', blurb: 'Standard vs Deluxe', index: true },
  { path: '/pre-order', title: 'Pre-Order', blurb: 'Post-launch pre-order status and former bonuses', index: true },
  { path: '/pre-order-bonus', title: 'Pre-Order Bonus', blurb: 'Verified former pre-order rewards', index: true },
  { path: '/gameplay', title: 'Gameplay', blurb: 'Interconnected world, jumping, gear and co-op', index: true },
  { path: '/guides', title: 'Guides', blurb: 'Task-oriented gameplay and progression guide hub', index: true },
  { path: '/builds', title: 'Builds', blurb: 'Source-backed launch-week build ideas and synergies', index: true },
  { path: '/tier-list', title: 'Tier List', blurb: 'Provisional launch-week enchantment rankings', index: true },
  { path: '/trailers', title: 'Trailers', blurb: 'Official and developer video evidence index', index: true },
  { path: '/crossplay', title: 'Crossplay and Co-op', blurb: 'Crossplay, mixed co-op, party codes and matchmaking', index: true },
  { path: '/controls', title: 'Controls', blurb: 'Verified controls and missing platform mappings', index: true },
  { path: '/jump', title: 'Jump', blurb: 'Traversal, hidden spaces and jump attacks', index: true },
  { path: '/inventory', title: 'Inventory', blurb: 'Mini Inventory and co-op equipment management', index: true },
  { path: '/world', title: 'World', blurb: 'Interconnected exploration and side content', index: true },
  { path: '/enemies', title: 'Enemies', blurb: 'Bosses and verified enemy families', index: true },
  { path: '/map', title: 'Map', blurb: 'Verified map functions and location-data status', index: true },
  { path: '/the-sift', title: 'The Sift', blurb: 'New dimension and verified reveal details', index: true },
  { path: '/dungeons', title: 'Dungeons', blurb: 'Procedural dungeon system', index: true },
  { path: '/quests', title: 'Quests', blurb: 'Main and side quest structure', index: true },
  { path: '/gear', title: 'Gear', blurb: 'Expanded loadout overview', index: true },
  // Empty item databases — keep noindex until verified entity lists exist
  { path: '/weapons', title: 'Weapons', blurb: 'Evidence-gated weapon database', index: false },
  { path: '/armor', title: 'Armor', blurb: 'Four-piece armor system', index: true },
  { path: '/talismans', title: 'Talismans', blurb: 'Passive bonuses and Tasty Bone', index: true },
  { path: '/artifacts', title: 'Artifacts', blurb: 'Evidence-gated artifact database', index: false },
  { path: '/enchantments', title: 'Enchantments', blurb: 'Enchantment Books and known examples', index: true },
  { path: '/blacksmith', title: 'Blacksmith', blurb: 'Power upgrades and effect rerolls', index: true },
  { path: '/echo-shards', title: 'Echo Shards', blurb: 'Sources and confirmed uses', index: true },
  { path: '/soul-corrupted-mobs', title: 'Soul-Corrupted Mobs', blurb: 'Tough enemy variants and Echo Shards', index: true },
  { path: '/bosses', title: 'Bosses', blurb: 'Confirmed boss list, repeatable encounters and mechanics', index: true },
  { path: '/bosses/copper-monstrosity', title: 'Copper Monstrosity', blurb: 'Story boss and Note Block sequence', index: true },
  { path: '/bosses/twisted-warden', title: 'Twisted Warden', blurb: 'Officially revealed encounter with partial fields', index: true },
  { path: '/characters', title: 'Characters', blurb: 'Illager High Council and NPC index', index: true },
  { path: '/characters/prime-enchanter', title: 'Prime Enchanter', blurb: 'Illager High Council member', index: true },
  { path: '/characters/grand-illusioner', title: 'Grand Illusioner', blurb: 'Illager High Council member', index: true },
  { path: '/characters/supreme-evoker', title: 'Supreme Evoker', blurb: 'Council member and Copper Monstrosity story link', index: true },
  { path: '/capes', title: 'Capes', blurb: 'Confirmed cape index and current official promotions', index: true },
  { path: '/capes/hero-cape', title: 'Hero Cape', blurb: 'Former-player reward with deadline', index: true },
  { path: '/capes/twisted-cape', title: 'Twisted Cape', blurb: 'Former pre-order cape', index: true },
  { path: '/capes/soul-cape', title: 'Soul Cape', blurb: 'Deluxe Edition cape', index: true },
  { path: '/capes/corrupted-creeper-cape', title: 'Corrupted Creeper Cape', blurb: 'Promotional cape with future event opportunities', index: true },
  { path: '/capes/special-cape', title: 'Special Cape', blurb: 'Appearance revealed; acquisition unresolved', index: true },
  { path: '/pets/blub', title: 'Blub', blurb: 'Deluxe Edition pet companion', index: true },
  { path: '/note-block', title: 'Note Block', blurb: 'Story item after Copper Monstrosity', index: true },
  { path: '/note-block-code', title: 'Note Block Code', blurb: 'Launcher ARG with community-reported solution', index: true },
  { path: '/redeem-code', title: 'Redeem Code', blurb: 'Official promo and platform redemption guide', index: true },
  { path: '/platforms', title: 'Platforms', blurb: 'Platform availability, compatibility and co-op links', index: true },
  { path: '/game-info', title: 'Game Info', blurb: 'Release, pricing, editions and launch information hub', index: true },
  { path: '/updates', title: 'Verified Updates', blurb: 'Durable official changes and affected wiki areas', index: true },
  { path: '/platforms/steam', title: 'Steam', blurb: 'PC Steam release, specs and Steam Deck status', index: true },
  { path: '/steam-deck', title: 'Steam Deck', blurb: 'Playable status, known limitation and verification progress', index: true },
  { path: '/platforms/xbox', title: 'Xbox', blurb: 'Game Pass, editions and multiplayer', index: true },
  { path: '/platforms/switch', title: 'Nintendo Switch', blurb: 'Switch release and platform notes', index: true },
  { path: '/platforms/switch-2', title: 'Nintendo Switch 2', blurb: 'Switch 2 release and platform notes', index: true },
];

export function indexablePaths(): string[] {
  return SEO_PAGES.filter((page) => page.index).map((page) => page.path);
}

export function allSeoPages(): SeoPageEntry[] {
  return SEO_PAGES;
}
