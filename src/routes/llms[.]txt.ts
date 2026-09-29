import { createFileRoute } from '@tanstack/react-router';
import { SITE } from '@/lib/site';

const pages = [
  ['/', 'Minecraft Dungeons 2 Wiki', 'Source-audited home and topic hubs'],
  ['/release-date', 'Release Date', 'Launch date, status and Game Pass'],
  ['/price', 'Price', 'Store-specific Standard and Deluxe pricing'],
  ['/editions', 'Editions', 'Standard vs Deluxe'],
  ['/gameplay', 'Gameplay', 'Interconnected world, jumping, gear and co-op'],
  ['/the-sift', 'The Sift', 'New dimension and verified reveal details'],
  ['/gear', 'Gear', 'Armor slots, talismans, Blacksmith, Echo Shards and enchantments'],
  ['/bosses', 'Bosses', 'Verified boss index'],
  ['/bosses/copper-monstrosity', 'Copper Monstrosity', 'Story boss and Note Block sequence'],
  ['/bosses/twisted-warden', 'Twisted Warden', 'Officially revealed encounter with partial fields'],
  ['/capes', 'Capes', 'Confirmed cape index'],
  ['/crossplay', 'Crossplay and Co-op', 'Four-player local/online multiplayer evidence'],
  ['/trailers', 'Trailers', 'Official and developer video evidence index'],
];

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: () => {
        const body = [
          `# ${SITE.name}`,
          '',
          `> ${SITE.description}`,
          '',
          '## Evidence policy',
          '',
          '- Official / first-party evidence has highest priority.',
          '- Direct gameplay observation is recorded with timestamps where possible.',
          '- Community-only claims are labeled and never silently promoted to fact.',
          '- Unknown fields remain unknown instead of being guessed.',
          '',
          '## Core pages',
          '',
          ...pages.map(([path, title, description]) => `- [${title}](${new URL(path, SITE.url).href}): ${description}`),
          '',
        ].join('\n');
        return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      },
    },
  },
});
