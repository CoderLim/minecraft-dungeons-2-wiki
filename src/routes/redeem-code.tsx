import { createFileRoute, Link } from '@tanstack/react-router';
import { Gamepad2, KeyRound, ShoppingBag } from 'lucide-react';
import { FactGrid, Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/redeem-code')({
  head: () => pageHead('/redeem-code', 'Minecraft Dungeons 2 Redeem Code Guide', 'Verified Minecraft Dungeons 2 redemption guide for official promo and platform codes, with fake-code warnings and storefront-specific steps.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[{ label: 'Game Info', to: '/game-info' }]} eyebrow="Codes & promotions" title="Minecraft Dungeons 2 Redeem Codes" description="Minecraft Dungeons II uses several different reward flows: platform purchase codes, account entitlements and time-limited promotion rewards. This page only lists redemption methods supported by Mojang or a platform store.">
      <FactGrid items={[
        { label: 'Universal free code list', value: 'No verified list published here' },
        { label: 'Xbox physical-code flow', value: 'Xbox redeem page' },
        { label: 'Nintendo physical-code flow', value: 'Nintendo eShop redemption' },
        { label: 'PlayStation physical-code flow', value: 'PlayStation Store → Redeem Code' },
        { label: 'Promo entitlements', value: 'May require Microsoft Account / platform inventory confirmation' },
      ]} />
      <Section title="Redemption paths">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
          {[
            { title: 'Xbox', text: 'Redeem the platform code, then confirm the entitlement in-game.', icon: Gamepad2 },
            { title: 'Nintendo', text: 'Use the Nintendo eShop code flow before checking the reward in-game.', icon: ShoppingBag },
            { title: 'PlayStation', text: 'Use PlayStation Store → Redeem Code, then verify the item entitlement.', icon: KeyRound },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-[var(--panel)] p-5">
                <Icon className="size-6 text-[var(--emerald)]" aria-hidden="true" />
                <h3 className="mt-4 font-black text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Section>
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
