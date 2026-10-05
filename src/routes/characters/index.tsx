import { createFileRoute, Link } from '@tanstack/react-router';
import { Section, SourceList, WikiPage } from '@/components/wiki-shell';
import { pageHead } from '@/lib/seo';

const council = [
  { to: '/characters/prime-enchanter', name: 'Prime Enchanter' },
  { to: '/characters/grand-illusioner', name: 'Grand Illusioner' },
  { to: '/characters/supreme-evoker', name: 'Supreme Evoker' },
] as const;

export const Route = createFileRoute('/characters/')({
  head: () => pageHead('/characters', 'Minecraft Dungeons 2 Characters & NPCs', 'Minecraft Dungeons 2 character hub covering the Illager High Council, story characters, verified NPCs and pages that still lack confirmed details.'),
  component: Page,
});

function Page() {
  return (
    <WikiPage breadcrumbs={[]} eyebrow="Characters" title="Minecraft Dungeons 2 Characters" description="Character pages are split by named story entities and NPCs. Official material confirms the three members of the Illager High Council; broader NPC coverage will expand from quest and town captures.">
      <Section title="Illager High Council">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
          {council.map((member) => (
            <Link key={member.to} to={member.to} className="bg-[var(--panel)] p-5 font-black hover:bg-[var(--panel-2)] hover:text-[var(--lime)]">
              {member.name}
            </Link>
          ))}
        </div>
      </Section>
      <Section title="NPC database status"><p>Merchants such as Blacksmith and Enchantsmith have confirmed gameplay roles, while a complete NPC roster needs the launch quest log and settlement/town captures.</p></Section>
      <SourceList sources={[{ label: 'Official Minecraft Dungeons II character/reveal material', href: 'https://www.minecraft.net/zh-hant/article/dungeons-ii-battle-for-tokyo' }]} />
    </WikiPage>
  );
}
