import { createFileRoute, Link } from '@tanstack/react-router';

import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/$')({
  head: () =>
    pageHead(
      '/',
      'Page not found | Minecraft Dungeons 2 Wiki',
      'This Minecraft Dungeons 2 Wiki page does not exist. Return to the verified guides hub.',
      { noindex: true },
    ),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--bg)] px-6 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[.18em] text-[var(--emerald)]">404</p>
        <h1 className="mt-3 text-4xl font-black">Page not found</h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
          This URL is not part of the verified wiki. It may have been removed or never published.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-[var(--lime)] underline underline-offset-4"
        >
          Back to the wiki
        </Link>
      </div>
    </main>
  );
}
