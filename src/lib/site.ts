export const SITE = {
  name: 'Minecraft Dungeons 2 Wiki',
  domain: 'minecraftdungeons2wiki.online',
  url: import.meta.env.VITE_APP_URL || 'https://minecraftdungeons2wiki.online',
  description:
    'Unofficial, source-audited Minecraft Dungeons II wiki with verified guides for The Sift, gear, bosses, capes, platforms, co-op and launch updates.',
} as const;

export const NAV = [
  { href: '/world', label: 'World' },
  { href: '/the-sift', label: 'The Sift' },
  { href: '/gear', label: 'Gear' },
  { href: '/bosses', label: 'Bosses' },
  { href: '/characters', label: 'Characters' },
  { href: '/capes', label: 'Capes' },
  { href: '/gameplay', label: 'Gameplay' },
] as const;
