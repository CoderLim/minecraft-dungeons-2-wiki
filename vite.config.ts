import { readFileSync } from 'node:fs';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

import { loadEnvFiles } from './src/lib/env';

// Populate process.env from .env.local / .env.{NODE_ENV} / .env for the
// dev server and build process (Vite only exposes VITE_* via import.meta.env;
// server code reads secrets from process.env). In production, env comes
// from the actual host/container environment.
loadEnvFiles();

// Cloudflare Workers build (pnpm cf:build / cf:deploy): stub out unused DB
// drivers — mysql2 crashes workerd at module evaluation (node:net,
// node:process requires); postgres.js runs fine under nodejs_compat but is
// dead weight when the backend is D1. Which driver the bundle keeps follows
// wrangler.jsonc `vars.DATABASE_PROVIDER` (the runtime truth on workerd) —
// d1 stubs both, postgresql keeps postgres.js for the Hyperdrive binding.
const isCloudflareBuild = (process.env.NITRO_PRESET || '').includes(
  'cloudflare'
);
const driverStub = new URL('./src/core/db/driver-stub.ts', import.meta.url)
  .pathname;

// Prefer wrangler.jsonc over the build-time env, which can be polluted by
// .env.local (e.g. DATABASE_PROVIDER=sqlite for local dev).
function workersDbProvider(): string {
  try {
    const raw = readFileSync(
      new URL('./wrangler.jsonc', import.meta.url),
      'utf8'
    );
    const m = raw.match(/"DATABASE_PROVIDER"\s*:\s*"([^"]+)"/);
    if (m) return m[1];
  } catch {
    // no wrangler.jsonc yet (fresh clone) — fall through
  }
  return process.env.DATABASE_PROVIDER || 'd1';
}

const workersDb = isCloudflareBuild ? workersDbProvider() : '';
const keepPostgres = workersDb === 'postgresql' || workersDb === 'postgres';

export default defineConfig({
  server: {
    port: 3000,
    // Cloud sandboxes (ShipAny Code / e2b) proxy the dev server through a
    // per-sandbox subdomain; without this Vite's host check blocks the
    // preview with "Blocked request. This host is not allowed."
    allowedHosts: ['.e2b.app'],
  },
  resolve: {
    tsconfigPaths: true,
    alias: isCloudflareBuild
      ? {
          mysql2: driverStub,
          ...(keepPostgres ? {} : { postgres: driverStub }),
        }
      : {},
  },
  plugins: [
    // MDX must run before the react plugin so JSX in compiled MDX gets transformed.
    { enforce: 'pre', ...mdx({ providerImportSource: '@mdx-js/react' }) },
    tailwindcss(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
      outputStructure: 'message-modules',
      cookieName: 'PARAGLIDE_LOCALE',
      strategy: ['url', 'cookie', 'baseLocale'],
      urlPatterns: [
        // API endpoints are never locale-prefixed.
        {
          pattern: '/api/:path(.*)?',
          localized: [
            ['en', '/api/:path(.*)?'],
            ['zh', '/api/:path(.*)?'],
            ['zh-TW', '/api/:path(.*)?'],
            ['de', '/api/:path(.*)?'],
            ['fr', '/api/:path(.*)?'],
            ['es', '/api/:path(.*)?'],
            ['pt-BR', '/api/:path(.*)?'],
          ],
        },
        // Bare locale homes match without a trailing-slash redirect.
        // Prefixed locales MUST be listed before the unprefixed English
        // pattern — extractLocaleFromUrl() / deLocalizeUrl() take the first
        // URLPattern hit, and `/:path(.*)?` would otherwise swallow
        // `/zh-cn/races` as English.
        {
          pattern: '/',
          localized: [
            ['zh', '/zh-cn'],
            ['zh-TW', '/zh-tw'],
            ['de', '/de'],
            ['fr', '/fr'],
            ['es', '/es'],
            ['pt-BR', '/pt-br'],
            ['en', '/'],
          ],
        },
        // English remains unprefixed; Chinese variants use explicit region
        // paths so search engines and users can distinguish the two locales.
        {
          pattern: '/:path(.*)?',
          localized: [
            ['zh', '/zh-cn/:path(.*)?'],
            ['zh-TW', '/zh-tw/:path(.*)?'],
            ['de', '/de/:path(.*)?'],
            ['fr', '/fr/:path(.*)?'],
            ['es', '/es/:path(.*)?'],
            ['pt-BR', '/pt-br/:path(.*)?'],
            ['en', '/:path(.*)?'],
          ],
        },
      ],
    }),
    tanstackStart({
      srcDirectory: 'src',
    }),
    viteReact(),
    nitro(),
  ],
});
