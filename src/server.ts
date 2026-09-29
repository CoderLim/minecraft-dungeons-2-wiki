import handler from '@tanstack/react-start/server-entry';

// Stash Cloudflare Workers bindings (D1 `DB`, …) on globalThis for SSR.
const CF_WORKERS_MODULE = 'cloudflare:workers';
let cfEnvPromise: Promise<void> | null = null;

function ensureCloudflareEnv(): Promise<void> {
  if (!cfEnvPromise) {
    cfEnvPromise = import(/* @vite-ignore */ CF_WORKERS_MODULE)
      .then((mod) => {
        (globalThis as any).__CF_ENV__ = mod.env;
      })
      .catch(() => {
        // Not running on Cloudflare Workers.
      });
  }
  return cfEnvPromise;
}

export default {
  async fetch(req: Request): Promise<Response> {
    await ensureCloudflareEnv();
    return handler.fetch(req);
  },
};
