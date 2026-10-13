import { createFileRoute, notFound } from '@tanstack/react-router';

import { LocalizedArticle } from '@/components/localized-article';
import { getLocalizedPage, localizedHead } from '@/lib/i18n-content';
import { isTranslatedLocale } from '@/lib/locales';

export const Route = createFileRoute('/$locale/$')({
  beforeLoad: ({ params }) => {
    if (!isTranslatedLocale(params.locale)) throw notFound();
  },
  loader: ({ params }) => {
    const path = '/' + (params._splat ?? '').replace(/^\\/+|\\/+$/g, '');
    if (path === '/' || !getLocalizedPage(params.locale, path)) throw notFound();
    return { path };
  },
  head: ({ params }) => {
    const path = '/' + (params._splat ?? '').replace(/^\\/+|\\/+$/g, '');
    return localizedHead(params.locale, path);
  },
  component: Page,
});

function Page() {
  const params = Route.useParams();
  const { path } = Route.useLoaderData();
  return <LocalizedArticle locale={params.locale} path={path} />;
}
