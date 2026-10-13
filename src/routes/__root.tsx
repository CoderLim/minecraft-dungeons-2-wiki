/// <reference types="vite/client" />
import type { ReactNode } from 'react';
import { useRouterState } from '@tanstack/react-router';
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

import { loadAnalyticsConfig } from '@/lib/analytics-config';
import { SITE } from '@/lib/site';
import { LOCALES } from '@/lib/locales';
import { getUiCopy, NOT_FOUND_COPY } from '@/lib/ui-copy';
import '@/styles/globals.css';

const getAnalyticsConfigs = createServerFn().handler(async () => loadAnalyticsConfig());

function isSafeGaId(id: string) {
  return /^G-[A-Z0-9]+$/i.test(id);
}

function isSafeUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function isSafeDomain(domain: string) {
  return /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain);
}

export const Route = createRootRoute({
  loader: () => getAnalyticsConfigs(),
  head: ({ loaderData }) => {
    const gaId = loaderData?.gaId && isSafeGaId(loaderData.gaId) ? loaderData.gaId : '';
    const plausibleDomain =
      loaderData?.plausibleDomain && isSafeDomain(loaderData.plausibleDomain)
        ? loaderData.plausibleDomain
        : '';
    const plausibleSrc =
      loaderData?.plausibleSrc && isSafeUrl(loaderData.plausibleSrc)
        ? loaderData.plausibleSrc
        : plausibleDomain
          ? 'https://plausible.io/js/script.js'
          : '';

    const scripts: Array<Record<string, unknown>> = [];

    if (gaId) {
      scripts.push({
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
        async: true,
      });
      scripts.push({
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
      });
    }

    if (plausibleSrc) {
      scripts.push({
        src: plausibleSrc,
        async: true,
        ...(plausibleDomain ? { 'data-domain': plausibleDomain } : {}),
      });
      scripts.push({
        children: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();`,
      });
    }

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: SITE.name },
        { name: 'description', content: SITE.description },
        { name: 'theme-color', content: '#0d1114' },
      ],
      links: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      scripts,
    };
  },
  component: () => <Outlet />,
  shellComponent: RootDocument,
  notFoundComponent: LocalizedNotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const locale = pathname.split('/')[1];
  const lang = LOCALES.find((item) => item.code === locale)?.languageTag ?? 'en';
  return (
    <html lang={lang}>
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function LocalizedNotFound() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { locale } = getUiCopy(pathname);
  const copy = NOT_FOUND_COPY[locale];
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--bg)] px-6 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[.18em] text-[var(--emerald)]">404</p>
        <h1 className="mt-3 text-4xl font-black">{copy.title}</h1>
        <a
          className="mt-6 inline-block text-[var(--lime)] underline underline-offset-4"
          href={locale === 'en' ? '/' : `/${locale}/`}
        >
          {copy.back}
        </a>
      </div>
    </main>
  );
}
