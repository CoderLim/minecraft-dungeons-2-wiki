import { useEffect, useId, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';

import { NAV, SITE } from '@/lib/site';

export type EvidenceLevel = 'Official confirmed' | 'Gameplay observed' | 'Community reported' | 'Verification pending';

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

        <nav className="hidden items-center gap-5 text-sm text-[var(--muted)] lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} to={item.href} className="min-h-10 inline-flex items-center hover:text-[var(--text)]">
              {item.label}
            </Link>
          ))}
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
          className="border-t border-[var(--line)] bg-[var(--bg)] px-4 py-4 lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="flex min-h-11 items-center border border-transparent px-3 text-base font-semibold text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--panel)] hover:text-[var(--text)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
          <p className="mt-2 max-w-2xl leading-6">Unofficial fan project. Minecraft and related marks belong to Mojang Studios and Microsoft. Facts are separated by evidence level and unresolved fields stay marked as unknown.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/release-date" className="min-h-10 inline-flex items-center">Release</Link>
          <Link to="/capes" className="min-h-10 inline-flex items-center">Capes</Link>
          <Link to="/bosses" className="min-h-10 inline-flex items-center">Bosses</Link>
        </div>
      </div>
    </footer>
  );
}

export function WikiPage({
  eyebrow,
  title,
  description,
  level = 'Official confirmed',
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  level?: EvidenceLevel;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="wiki-grid">
        <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
            <Link to="/" className="hover:text-[var(--text)]">Wiki</Link>
            {eyebrow ? <><span aria-hidden="true">/</span><span>{eyebrow}</span></> : null}
            <span aria-hidden="true">/</span>
            <span className="text-[var(--text)]">{title}</span>
          </nav>
          {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--emerald)]">{eyebrow}</p> : null}
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
            <EvidenceBadge level={level} />
            <span>Last verified: Sep 29, 2026</span>
          </div>
          <div className="mt-10 space-y-10">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </>
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
