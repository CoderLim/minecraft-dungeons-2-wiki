export const SITE = {
  name: 'Minecraft Dungeons 2 Wiki',
  domain: 'minecraftdungeons2wiki.com',
  url: import.meta.env.VITE_APP_URL || 'https://minecraftdungeons2wiki.com',
  description:
    'Unofficial, source-audited Minecraft Dungeons II wiki with verified guides for The Sift, gear, bosses, capes, platforms, co-op and launch updates.',
  logo: '/logo.png',
  logoMark: '/logo-128.png',
} as const;

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  {
    label: 'World',
    href: '/world',
    children: [
      { label: 'Overview', href: '/world' },
      { label: 'Map', href: '/map' },
      { label: 'Dungeons', href: '/dungeons' },
      { label: 'Quests', href: '/quests' },
      { label: 'The Sift', href: '/the-sift' },
    ],
  },
  {
    label: 'Gear',
    href: '/gear',
    children: [
      { label: 'Overview', href: '/gear' },
      { label: 'Weapons', href: '/weapons' },
      { label: 'Armor', href: '/armor' },
      { label: 'Artifacts', href: '/artifacts' },
      { label: 'Talismans', href: '/talismans' },
      { label: 'Enchantments', href: '/enchantments' },
      { label: 'Builds', href: '/builds' },
      { label: 'Tier List', href: '/tier-list' },
      { label: 'Blacksmith', href: '/blacksmith' },
      { label: 'Echo Shards', href: '/echo-shards' },
    ],
  },
  {
    label: 'Bosses',
    href: '/bosses',
    children: [
      { label: 'All bosses', href: '/bosses' },
      { label: 'Copper Monstrosity', href: '/bosses/copper-monstrosity' },
      { label: 'Twisted Warden', href: '/bosses/twisted-warden' },
    ],
  },
  {
    label: 'Characters',
    href: '/characters',
    children: [
      { label: 'Overview', href: '/characters' },
      { label: 'Prime Enchanter', href: '/characters/prime-enchanter' },
      { label: 'Grand Illusioner', href: '/characters/grand-illusioner' },
      { label: 'Supreme Evoker', href: '/characters/supreme-evoker' },
      { label: 'Blub', href: '/pets/blub' },
    ],
  },
  {
    label: 'Capes',
    href: '/capes',
    children: [
      { label: 'All capes', href: '/capes' },
      { label: 'Hero Cape', href: '/capes/hero-cape' },
      { label: 'Twisted Cape', href: '/capes/twisted-cape' },
      { label: 'Soul Cape', href: '/capes/soul-cape' },
      { label: 'Corrupted Creeper', href: '/capes/corrupted-creeper-cape' },
      { label: 'Special Cape', href: '/capes/special-cape' },
    ],
  },
  {
    label: 'Gameplay',
    href: '/gameplay',
    children: [
      { label: 'Overview', href: '/gameplay' },
      { label: 'Jump', href: '/jump' },
      { label: 'Controls', href: '/controls' },
      { label: 'Inventory', href: '/inventory' },
      { label: 'Crossplay', href: '/crossplay' },
      { label: 'Soul Corrupted Mobs', href: '/soul-corrupted-mobs' },
      { label: 'Note Block', href: '/note-block' },
    ],
  },
  {
    label: 'Launch',
    children: [
      { label: 'Release date', href: '/release-date' },
      { label: 'Price', href: '/price' },
      { label: 'Editions', href: '/editions' },
      { label: 'Pre-order', href: '/pre-order' },
      { label: 'Pre-order bonus', href: '/pre-order-bonus' },
      { label: 'Redeem code', href: '/redeem-code' },
      { label: 'Steam', href: '/platforms/steam' },
      { label: 'Xbox', href: '/platforms/xbox' },
      { label: 'Switch', href: '/platforms/switch' },
      { label: 'Switch 2', href: '/platforms/switch-2' },
      { label: 'Trailers', href: '/trailers' },
    ],
  },
];
