import { createFileRoute } from '@tanstack/react-router';
import { Section, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/redeem-code')({
  head: () => pageHead('/redeem-code', 'Minecraft Dungeons 2 Redeem Code Guide', 'Verified Minecraft Dungeons 2 redemption guide for official promo and platform codes, with fake-code warnings.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Codes & promotions" title="Minecraft Dungeons 2 Redeem Codes" description="This page tracks only redemption flows backed by official platform or Minecraft promotion material. It does not publish unsourced “working code” lists." level="Verification pending">
      <Section title="Are there active universal redeem codes?"><p>No universal code is listed here unless it can be verified against an official promotion. Platform purchase codes, watch-time promo codes and account-entitlement rewards are different mechanisms.</p></Section>
      <Section title="Cape promotions"><p>Hero, Twisted, Soul and Corrupted Creeper Cape acquisition methods are documented on their dedicated pages. Some are account entitlements rather than codes, and expired promotions are marked as expired.</p></Section>
      <Section title="Fake-code warning"><p>Search results for game codes often attract copied or fabricated lists. A code should not enter this wiki without a source, promotion window and redemption context.</p></Section>
    </WikiPage>
  );
}
