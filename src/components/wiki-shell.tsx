import { useEffect, useId, useState, type ReactNode } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';

import { NAV, SITE, type NavItem } from '@/lib/site';

export type EvidenceLevel = 'Official confirmed' | 'Gameplay observed' | 'Community reported' | 'Verification pending';

function isExactPath(pathname: string, href: string) {
  return pathname === href || pathname === `${href}/`;
}

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return isExactPath(pathname, href) || pathname.startsWith(`${href}/`);
}

function isGroupActive(pathname: string, item: NavItem) {
  if (item.href && isActivePath(pathname, item.href)) return true;
  return Boolean(item.children?.some((child) => isActivePath(pathname, child.href)));
}

export function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  return (
    <span className="inline-flex rounded-sm border border-[var(--line)] bg-black/20 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--lime)]">
      {level}
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo-128.png"
            alt={`${SITE.name} logo`}
            width={36}
            height={36}
            className="size-9 shrink-0 object-contain"
            fetchPriority="high"
          />
          <div className="min-w-0">
            <div className="truncate font-black tracking-tight">{SITE.name}</div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Unofficial · Source audited</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-[var(--muted)] lg:flex" aria-label="Primary">
          {NAV.map((item, index) => {
            if (item.children?.length) {
              const groupActive = isGroupActive(pathname, item);
              const wide = item.children.length > 6;
              // Right-align trailing menus so wide panels don't spill past the viewport
              // (visibility:hidden absolute menus still expand scrollWidth).
              const alignEnd = index >= NAV.length - 2;
              return (
                <div key={item.label} className="group relative">
                  {item.href ? (
                    <Link
                      to={item.href}
                      aria-haspopup="menu"
                      aria-current={groupActive ? 'page' : undefined}
                      className={`inline-flex min-h-10 items-center gap-1 px-2.5 hover:text-[var(--text)] ${groupActive ? 'font-semibold text-[var(--text)]' : ''}`}
                    >
                      {item.label}
                      <ChevronDown className="size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" aria-hidden="true" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-current={groupActive ? 'true' : undefined}
                      className={`inline-flex min-h-10 items-center gap-1 px-2.5 hover:text-[var(--text)] ${groupActive ? 'font-semibold text-[var(--text)]' : ''}`}
                    >
                      {item.label}
                      <ChevronDown className="size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" aria-hidden="true" />
                    </button>
                  )}
                  <div
                    className={`invisible absolute top-full z-50 pt-2 opacity-0 transition-[opacity,visibility] group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${alignEnd ? 'right-0' : 'left-0'} ${wide ? 'w-[min(420px,calc(100vw-2rem))]' : 'w-56'}`}
                  >
                    <div
                      role="menu"
                      className={`border border-[var(--line)] bg-[var(--panel)] p-2 shadow-lg ${wide ? 'grid grid-cols-2 gap-x-1' : ''}`}
                    >
                      {item.children.map((child) => {
                        const active = isExactPath(pathname, child.href);
                        return (
                          <Link
                            key={child.href}
                            to={child.href}
                            role="menuitem"
                            aria-current={active ? 'page' : undefined}
                            className={`block px-3 py-2 text-sm transition-colors hover:bg-[var(--panel-2)] hover:text-[var(--text)] ${active ? 'font-semibold text-[var(--lime)]' : 'text-[var(--muted)]'}`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            if (!item.href) return null;
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.label}
                to={item.href}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex min-h-10 items-center px-2.5 hover:text-[var(--text)] ${active ? 'font-semibold text-[var(--text)]' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-[var(--line)] bg-[var(--panel)] text-[var(--text)] lg:hidden"
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="flex w-4 flex-col gap-1">
            <span className={`h-0.5 w-full bg-current transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="max-h-[min(70vh,32rem)] overflow-y-auto border-t border-[var(--line)] bg-[var(--bg)] px-4 py-4 lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAV.map((item) => {
              if (item.children?.length) {
                const groupActive = isGroupActive(pathname, item);
                return (
                  <li key={item.label}>
                    <details className="group/nav" open={groupActive || undefined}>
                      <summary className={`flex min-h-11 cursor-pointer list-none items-center justify-between border border-transparent px-3 text-base font-semibold text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--panel)] hover:text-[var(--text)] [&::-webkit-details-marker]:hidden ${groupActive ? 'text-[var(--text)]' : ''}`}>
                        <span>{item.label}</span>
                        <ChevronDown className="size-4 transition-transform group-open/nav:rotate-180" aria-hidden="true" />
                      </summary>
                      <ul className="mt-1 ml-3 space-y-1 border-l border-[var(--line)] pl-2">
                        {item.children.map((child) => {
                          const active = isExactPath(pathname, child.href);
                          return (
                            <li key={child.href}>
                              <Link
                                to={child.href}
                                aria-current={active ? 'page' : undefined}
                                className={`flex min-h-10 items-center px-3 text-sm hover:bg-[var(--panel)] hover:text-[var(--text)] ${active ? 'font-semibold text-[var(--lime)]' : 'text-[var(--muted)]'}`}
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </li>
                );
              }

              if (!item.href) return null;
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`flex min-h-11 items-center border border-transparent px-3 text-base font-semibold hover:border-[var(--line)] hover:bg-[var(--panel)] hover:text-[var(--text)] ${active ? 'text-[var(--text)]' : 'text-[var(--muted)]'}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-10 text-sm text-[var(--muted)] md:grid-cols-[1fr_auto] md:px-6">
        <div>
          <div className="font-semibold text-[var(--text)]">{SITE.name}</div>
          <p className="mt-2 max-w-3xl leading-6">
  <strong className="text-[var(--text)]">NOT AN OFFICIAL MINECRAFT WEBSITE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</strong>{' '}
  This independent fan project is responsible for its own content. Minecraft and related marks belong to Mojang Studios and Microsoft.
</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/world" className="min-h-10 inline-flex items-center">World</Link>
          <Link to="/gear" className="min-h-10 inline-flex items-center">Gear</Link>
          <Link to="/enemies" className="min-h-10 inline-flex items-center">Enemies</Link>
          <Link to="/guides" className="min-h-10 inline-flex items-center">Guides</Link>
        </div>
      </div>
    </footer>
  );
}

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

export function WikiPage({
  eyebrow,
  title,
  description,
  level = 'Official confirmed',
  breadcrumbs,
  lastVerified,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  level?: EvidenceLevel;
  breadcrumbs?: BreadcrumbItem[];
  lastVerified?: string;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const visibleBreadcrumbs = breadcrumbs ?? (eyebrow ? [{ label: eyebrow }] : []);
  const structuredBreadcrumbs =
    breadcrumbs === undefined
      ? null
      : [
          { label: 'Wiki', to: '/' },
          ...breadcrumbs.filter((item): item is BreadcrumbItem & { to: string } => Boolean(item.to)),
          { label: title, to: pathname },
        ];

  return (
    <>
      <SiteHeader />
      <main className="wiki-grid">
        {structuredBreadcrumbs ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: structuredBreadcrumbs.map((item, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  name: item.label,
                  item: new URL(item.to, SITE.url).href,
                })),
              }),
            }}
          />
        ) : null}
        <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
            <Link to="/" className="hover:text-[var(--text)]">Wiki</Link>
            {visibleBreadcrumbs.map((item) => (
              <span key={`${item.label}-${item.to ?? 'label'}`} className="contents">
                <span aria-hidden="true">/</span>
                {item.to ? (
                  <Link to={item.to} className="hover:text-[var(--text)]">{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            ))}
            <span aria-hidden="true">/</span>
            <span className="text-[var(--text)]">{title}</span>
          </nav>
          {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--emerald)]">{eyebrow}</p> : null}
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
            <EvidenceBadge level={level} />
            {lastVerified ? <span>Last verified: {lastVerified}</span> : null}
          </div>
          <div className="mt-10 space-y-10">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export function WikiCardGrid({
  items,
}: {
  items: { href: string; title: string; description: string; meta?: string }[];
}) {
  return (
    <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
      {items.map((item) => (
        <Link key={item.href} to={item.href} className="group bg-[var(--panel)] p-5 hover:bg-[var(--panel-2)]">
          {item.meta ? (
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--emerald)]">{item.meta}</p>
          ) : null}
          <h3 className="mt-2 text-lg font-black text-[var(--text)] group-hover:text-[var(--lime)]">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-[var(--line)] pt-8">
      <h2 className="text-2xl font-black tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export function FactGrid({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="bg-[var(--panel)] p-4">
          <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--emerald)]">{item.label}</dt>
          <dd className="mt-2 text-sm font-semibold leading-6 text-[var(--text)]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function VideoEmbed({
  youtubeId,
  title,
  start,
}: {
  youtubeId: string;
  title: string;
  start?: number;
}) {
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}${start ? `?start=${start}` : ''}`;
  return (
    <figure className="overflow-hidden border border-[var(--line)] bg-black">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption className="border-t border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
        {title}
      </figcaption>
    </figure>
  );
}

export function OfficialImage({
  src,
  alt,
  caption,
  sourceLabel,
  sourceHref,
  objectPosition = 'center',
}: {
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  sourceHref: string;
  objectPosition?: string;
}) {
  return (
    <figure className="overflow-hidden border border-[var(--line)] bg-[var(--panel)]">
      <div className="aspect-video overflow-hidden bg-black/30">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
      </div>
      <figcaption className="border-t border-[var(--line)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
        {caption}{' '}
        <a
          href={sourceHref}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--lime)] underline decoration-white/20 underline-offset-4"
        >
          Source: {sourceLabel}
        </a>
      </figcaption>
    </figure>
  );
}

export function MediaGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2">{children}</div>;
}

export function SourceList({ sources }: { sources: { label: string; href: string }[] }) {
  return (
    <Section title="Sources">
      <ul className="space-y-2">
        {sources.map((source) => (
          <li key={source.href}>
            <a className="text-[var(--lime)] underline decoration-white/20 underline-offset-4 hover:decoration-white" href={source.href} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
