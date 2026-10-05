/**
 * Page-level verification dates.
 *
 * These values are intentionally maintained by hand and must never be derived
 * from build, deploy, request, file modification time, or today's date.
 * Update a path only after its source set has actually been re-checked.
 *
 * Baseline used in this migration:
 * - Sep 29: launch/source-audit content that has not had a later fact re-check.
 * - Oct 2: pages re-checked when the Oct 1 official facts were integrated.
 * - Oct 5: new P0 hubs or pages explicitly re-checked during the mature-wiki pass.
 */
export const LAST_VERIFIED_BY_PATH: Readonly<Record<string, string>> = {
  '/world': 'Sep 29, 2026',
  '/map': 'Sep 29, 2026',
  '/dungeons': 'Sep 29, 2026',
  '/quests': 'Sep 29, 2026',
  '/the-sift': 'Sep 29, 2026',

  '/gear': 'Sep 29, 2026',
  '/weapons': 'Sep 29, 2026',
  '/armor': 'Sep 29, 2026',
  '/artifacts': 'Sep 29, 2026',
  '/talismans': 'Sep 29, 2026',
  '/enchantments': 'Sep 29, 2026',
  '/blacksmith': 'Sep 29, 2026',
  '/echo-shards': 'Sep 29, 2026',

  '/gameplay': 'Sep 29, 2026',
  '/jump': 'Sep 29, 2026',
  '/controls': 'Sep 29, 2026',
  '/inventory': 'Sep 29, 2026',
  '/note-block': 'Sep 29, 2026',
  '/note-block-code': 'Sep 29, 2026',
  '/crossplay': 'Oct 2, 2026',

  '/enemies': 'Oct 5, 2026',
  '/bosses': 'Sep 29, 2026',
  '/bosses/copper-monstrosity': 'Sep 29, 2026',
  '/bosses/twisted-warden': 'Sep 29, 2026',
  '/soul-corrupted-mobs': 'Sep 29, 2026',

  '/builds': 'Sep 29, 2026',
  '/tier-list': 'Sep 29, 2026',

  '/capes': 'Oct 2, 2026',
  '/capes/hero-cape': 'Sep 29, 2026',
  '/capes/twisted-cape': 'Sep 29, 2026',
  '/capes/soul-cape': 'Sep 29, 2026',
  '/capes/corrupted-creeper-cape': 'Oct 2, 2026',
  '/capes/special-cape': 'Sep 29, 2026',
  '/pets/blub': 'Sep 29, 2026',

  '/characters': 'Sep 29, 2026',
  '/characters/prime-enchanter': 'Sep 29, 2026',
  '/characters/grand-illusioner': 'Sep 29, 2026',
  '/characters/supreme-evoker': 'Sep 29, 2026',

  '/platforms': 'Oct 5, 2026',
  '/platforms/steam': 'Oct 2, 2026',
  '/platforms/xbox': 'Sep 29, 2026',
  '/platforms/switch': 'Sep 29, 2026',
  '/platforms/switch-2': 'Oct 5, 2026',
  '/steam-deck': 'Oct 2, 2026',

  '/game-info': 'Oct 5, 2026',
  '/release-date': 'Sep 29, 2026',
  '/price': 'Sep 29, 2026',
  '/editions': 'Sep 29, 2026',
  '/pre-order': 'Sep 29, 2026',
  '/pre-order-bonus': 'Sep 29, 2026',
  '/redeem-code': 'Sep 29, 2026',
  '/trailers': 'Sep 29, 2026',

  '/guides': 'Oct 5, 2026',
  '/updates': 'Oct 5, 2026',
};
