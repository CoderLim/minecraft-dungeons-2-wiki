import { Link } from '@tanstack/react-router';

import { SiteFooter, SiteHeader } from '@/components/wiki-shell';
import { getLocalizedPage } from '@/lib/i18n-content';
import { LOCALES } from '@/lib/locales';

export function LocalizedArticle({ locale, path }: { locale: string; path: string }) {
  const page = getLocalizedPage(locale, path);
  if (!page) return null;
  return (
    <>
      <SiteHeader />
      <main className="wiki-grid" dangerouslySetInnerHTML={{ __html: page.html }} />
      <SiteFooter />
    </>
  );
}
