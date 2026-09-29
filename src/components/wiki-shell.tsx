import type { ReactNode } from 'react';
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
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[#0d1114]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid size-9 shrink-0 place-items-center border border-[var(--emerald)] bg-[var(--panel-2)] text-sm font-black text-[var(--lime)]">II</div>
          <div className="min-w-0">
            <div className="truncate font-black tracking-tight">{SITE.name}</div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Unofficial · Source audited</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-[var(--muted)] lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} to={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-10 text-sm text-[var(--muted)] md:grid-cols-[1fr_auto] md:px-6">
        <div>
          <div className="font-semibold text-white">{SITE.name}</div>
          <p className="mt-2 max-w-2xl leading-6">Unofficial fan project. Minecraft and related marks belong to Mojang Studios and Microsoft. Facts are separated by evidence level and unresolved fields stay marked as unknown.</p>
        </div>
        <div className="flex gap-4">
          <Link to="/release-date">Release</Link>
          <Link to="/capes">Capes</Link>
          <Link to="/bosses">Bosses</Link>
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
          <dd className="mt-2 text-sm font-semibold leading-6 text-white">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
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
