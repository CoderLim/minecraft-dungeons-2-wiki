import { createFileRoute, Link } from '@tanstack/react-router';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/redeem-code')({
  head: () => pageHead('/redeem-code', 'Minecraft Dungeons 2 Redeem Code Guide', 'Verified Minecraft Dungeons 2 redemption guide for official promo and platform codes, with fake-code warnings and storefront-specific steps.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage eyebrow="Codes & promotions" title="Minecraft Dungeons 2 Redeem Codes" description="Minecraft Dungeons II uses several different reward flows: platform purchase codes, account entitlements and time-limited promotion rewards. This page only lists redemption methods supported by Mojang or a platform store.">
      <FactGrid items={[
        { label: 'Universal free code list', value: 'No verified list published here' },
        { label: 'Xbox physical-code flow', value: 'Xbox redeem page' },
        { label: 'Nintendo physical-code flow', value: 'Nintendo eShop redemption' },
        { label: 'PlayStation physical-code flow', value: 'PlayStation Store → Redeem Code' },
        { label: 'Promo entitlements', value: 'May require Microsoft Account / platform inventory confirmation' },
      ]} />
      <Section title="Are there active universal Minecraft Dungeons 2 codes?"><p>This wiki does not currently list a universal “working codes” set. A code only appears here when its source, promotion window and redemption context can be verified.</p></Section>
      <Section title="Xbox code redemption"><p>Mojang's physical pre-order instructions direct Xbox players to Xbox's code-redemption flow before confirming the pre-order items inside Minecraft Dungeons II.</p></Section>
      <Section title="Nintendo code redemption"><p>Physical Nintendo codes use Nintendo's eShop code-redemption flow first, then the same in-game confirmation process described by the promotion.</p></Section>
      <Section title="PlayStation code redemption"><p>For PlayStation, the official promo instructions say to open the PlayStation Store from the account profile and choose Redeem Code.</p></Section>
      <Section title="Cape and account-entitlement rewards"><p>Not every reward is a typed code. The <Link to="/capes/hero-cape" className="text-[var(--lime)] underline underline-offset-4">Hero Cape</Link>, for example, is tied to qualifying play and the same Microsoft Account. The <Link to="/capes/corrupted-creeper-cape" className="text-[var(--lime)] underline underline-offset-4">Corrupted Creeper Cape</Link> used a watch-time promotion.</p></Section>
      <Section title="Fake-code warning"><p>Unsourced code lists are easy to copy and fabricate. This wiki requires an official promotion or platform redemption source before publishing a code as valid.</p></Section>
      <SourceList sources={[{ label: 'Minecraft Dungeons II Capes & Promos', href: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-capes-promos' }]} />
    </WikiPage>
  );
}
