export const SITE = {
  name: 'Minecraft Dungeons 2 Wiki',
  domain: 'minecraftdungeons2wiki.com',
  url: import.meta.env.VITE_APP_URL || 'https://minecraftdungeons2wiki.com',
  description:
    'Unofficial, source-audited Minecraft Dungeons II wiki for world exploration, gear, enemies, builds, gameplay systems, guides, platforms and verified updates.',
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
      { label: 'Blacksmith', href: '/blacksmith' },
      { label: 'Echo Shards', href: '/echo-shards' },
    ],
  },
  {
    label: 'Enemies',
    href: '/enemies',
    children: [
      { label: 'Overview', href: '/enemies' },
      { label: 'Bosses', href: '/bosses' },
      { label: 'Soul-Corrupted Mobs', href: '/soul-corrupted-mobs' },
    ],
  },
  {
    label: 'Builds',
    href: '/builds',
    children: [
      { label: 'Builds', href: '/builds' },
      { label: 'Tier List', href: '/tier-list' },
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
      { label: 'Crossplay & Co-op', href: '/crossplay' },
      { label: 'Note Block', href: '/note-block' },
    ],
  },
  {
    label: 'Guides',
    href: '/guides',
    children: [
      { label: 'Guide hub', href: '/guides' },
      { label: 'Builds', href: '/builds' },
      { label: 'Tier List', href: '/tier-list' },
      { label: 'Crossplay & Co-op', href: '/crossplay' },
      { label: 'The Sift', href: '/the-sift' },
      { label: 'Controls', href: '/controls' },
    ],
  },
  {
    label: 'More',
    children: [
      { label: 'Capes & Cosmetics', href: '/capes' },
      { label: 'Characters', href: '/characters' },
      { label: 'Platforms', href: '/platforms' },
      { label: 'Verified Updates', href: '/updates' },
      { label: 'Game Info', href: '/game-info' },
      { label: 'Trailers', href: '/trailers' },
    ],
  },
];
