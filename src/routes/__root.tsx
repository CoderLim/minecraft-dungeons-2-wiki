/// <reference types="vite/client" />
import type { ReactNode } from 'react';
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';

import { SITE } from '@/lib/site';
import '@/styles/globals.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SITE.name },
      { name: 'description', content: SITE.description },
    ],
  }),
  component: () => <Outlet />,
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-[var(--bg)] px-6 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[.18em] text-[var(--emerald)]">404</p>
        <h1 className="mt-3 text-4xl font-black">Page not found</h1>
        <a className="mt-6 inline-block text-[var(--lime)] underline underline-offset-4" href="/">Back to the wiki</a>
      </div>
    </main>
  ),
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
