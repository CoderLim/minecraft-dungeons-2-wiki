/**
 * Human-reviewed article translations. These take precedence over bulk machine output.
 * Keep proper names as published by Mojang when a verified localized term is unavailable.
 */
type ReviewedArticle = { title: string; description: string; html: string };
type LocaleCopy = {
  title: string; description: string; intro: string;
  facts: [string, string][];
  sections: [string, string][];
  sources: string;
};
const armor: Record<string, LocaleCopy> = {
  'zh-cn': {
    title: 'Minecraft Dungeons 2 护甲指南：头盔、胸甲、护腿与靴子',
    description: '了解 Minecraft Dungeons II 的四件式护甲系统、装备效果、升级与当前护甲图鉴的核实进度。',
    intro: '续作不再使用前作的单一护甲槽，而是将护甲拆分为头盔、胸甲、护腿和靴子四个独立装备槽。本页只介绍已核实的系统，不将尚未完整记录的护甲列表冒充为全图鉴。',
    facts: [['头盔','独立护甲槽'],['胸甲','独立护甲槽'],['护腿','独立护甲槽'],['靴子','独立护甲槽'],['随机效果','装备可能具有随机效果'],['装备升级','铁匠可以提高低战力装备的战力']],
    sections: [['四件式护甲系统','相比前作的一件式护甲，四件式护甲提供了更多效果组合。只有取得对应装备的游戏内说明与图标后，我们才会创建单件护甲资料页。'],['装备效果与重随','装备可能具有随机效果。玩家可以借助铁匠并消耗 Echo Shards（回响碎片）重新随机装备效果。具体效果池需要逐件核实，不能直接套用通用猜测。'],['完整护甲列表进度','在取得完整的游戏内背包及装备说明截图之前，本站不会声称已经收录全部护甲。']],
    sources:'官方游戏系统介绍与实机探索演示',
  },
  'zh-tw': {
    title:'Minecraft Dungeons 2 護甲指南：頭盔、胸甲、護腿與靴子',
    description:'了解 Minecraft Dungeons II 的四件式護甲、裝備效果、升級系統及護甲圖鑑查證進度。',
    intro:'續作將前作單一的護甲欄位改為頭盔、胸甲、護腿與靴子四個獨立欄位。本頁只介紹已確認的機制，不會把尚未完整蒐集的裝備當成完整清單。',
    facts:[['頭盔','獨立護甲欄位'],['胸甲','獨立護甲欄位'],['護腿','獨立護甲欄位'],['靴子','獨立護甲欄位'],['隨機效果','裝備可能附帶隨機效果'],['裝備升級','鐵匠可以提高低戰力裝備的戰力']],
    sections:[['四件式護甲系統','相較前作的一件式護甲，四件式系統帶來更多搭配方式。取得個別護甲的遊戲說明與圖示後，本站才會建立對應資料頁。'],['裝備效果與重骰','裝備可能帶有隨機效果。玩家可在鐵匠處消耗 Echo Shards（回響碎片）重新隨機產生效果。每件裝備的效果範圍仍須個別查證。'],['完整護甲清單進度','在取得完整背包與裝備提示截圖前，本站不會宣稱已收錄全部護甲。']],
    sources:'官方玩法系統介紹及實機探索影片',
  },
  ja: {
    title:'Minecraft Dungeons II 防具ガイド：ヘルメット・チェストプレート・レギンス・ブーツ',
    description:'Minecraft Dungeons II の4部位の防具システム、ランダム効果、強化方法、確認済み防具情報を解説。',
    intro:'続編では、前作の防具スロット1つがヘルメット、チェストプレート、レギンス、ブーツの4つに分かれました。このページでは確認済みの仕組みのみを紹介し、未確認の防具を網羅済みとは扱いません。',
    facts:[['ヘルメット','独立した防具スロット'],['チェストプレート','独立した防具スロット'],['レギンス','独立した防具スロット'],['ブーツ','独立した防具スロット'],['ランダム効果','装備にランダム効果が付く場合がある'],['強化','鍛冶屋で低パワー装備を強化できる']],
    sections:[['4部位の防具システム','前作の1部位制より装備の組み合わせが増えます。個別の防具ページは、ゲーム内の説明とアイコンを確認できたものから作成します。'],['効果の再抽選','装備にはランダムな効果が付く場合があります。鍛冶屋で Echo Shards を使用すると効果を再抽選できます。各装備の具体的な効果候補は、個別の証拠をもとに確認します。'],['防具一覧の収録状況','全装備のインベントリ画面と説明を確認できるまでは、完全な防具一覧として公開しません。']],
    sources:'公式ゲームシステム紹介と探索ゲームプレイ映像',
  },
  ko: {
    title:'Minecraft Dungeons II 방어구 가이드: 투구, 흉갑, 레깅스, 부츠',
    description:'Minecraft Dungeons II의 4부위 방어구 시스템과 무작위 효과, 강화 방식, 방어구 목록 검증 현황.',
    intro:'후속작에서는 전작의 단일 방어구 슬롯이 투구, 흉갑, 레깅스, 부츠의 네 슬롯으로 나뉩니다. 이 문서는 확인된 시스템만 설명하며, 아직 확인되지 않은 방어구까지 전부 수록했다고 주장하지 않습니다.',
    facts:[['투구','독립된 방어구 슬롯'],['흉갑','독립된 방어구 슬롯'],['레깅스','독립된 방어구 슬롯'],['부츠','독립된 방어구 슬롯'],['무작위 효과','장비에 무작위 효과가 붙을 수 있음'],['강화','대장장이가 낮은 장비 위력을 높일 수 있음']],
    sections:[['4부위 방어구 시스템','전작의 단일 방어구 시스템보다 다양한 조합이 가능합니다. 개별 방어구 문서는 게임 내 툴팁과 아이콘을 확인한 뒤에 추가합니다.'],['효과 재설정','장비에는 무작위 효과가 붙을 수 있습니다. 대장장이에게 Echo Shards를 사용하면 장비 효과를 다시 추첨할 수 있습니다. 각 아이템의 구체적인 효과 목록은 따로 검증해야 합니다.'],['전체 방어구 목록 현황','모든 장비의 인벤토리 화면과 설명을 확보하기 전에는 완전한 방어구 목록이라고 표기하지 않습니다.']],
    sources:'공식 게임 시스템 안내 및 탐험 게임플레이 영상',
  },
  de: {
    title:'Minecraft Dungeons II: Rüstungen, Helme, Brustpanzer, Beinschutz und Stiefel',
    description:'Der Rüstungsleitfaden für Minecraft Dungeons II erklärt die vier Rüstungsplätze, zufällige Effekte, Verbesserungen und den Stand der bestätigten Gegenstände.',
    intro:'Im Nachfolger wird der einzelne Rüstungsplatz des ersten Spiels durch vier separate Plätze ersetzt: Helm, Brustpanzer, Beinschutz und Stiefel. Dieser Artikel beschreibt nur bestätigte Spielmechaniken und gibt keine unvollständige Gegenstandsliste als vollständig aus.',
    facts:[['Helm','Eigener Rüstungsplatz'],['Brustpanzer','Eigener Rüstungsplatz'],['Beinschutz','Eigener Rüstungsplatz'],['Stiefel','Eigener Rüstungsplatz'],['Zufällige Effekte','Ausrüstung kann zufällige Effekte haben'],['Verbesserung','Der Schmied kann Gegenstände mit niedriger Stärke verbessern']],
    sections:[['Vier Rüstungsplätze','Das neue System ermöglicht mehr Kombinationen als die einzelne Rüstung des Vorgängers. Einzelne Rüstungsartikel werden erst angelegt, wenn ihre Symbole und Beschreibungen im Spiel nachgewiesen sind.'],['Effekte neu auswürfeln','Ausrüstung kann zufällige Effekte besitzen. Beim Schmied lassen sich diese mithilfe von Echo Shards neu auswürfeln. Die möglichen Effekte jedes Gegenstands müssen gesondert überprüft werden.'],['Stand der vollständigen Rüstungsliste','Vor einer vollständigen Dokumentation des Inventars und der Gegenstandsbeschreibungen veröffentlicht dieses Wiki keine vermeintlich vollständige Rüstungsliste.']],
    sources:'Offizielle Übersicht der Spielsysteme und Gameplay-Material',
  },
  fr: {
    title:'Minecraft Dungeons II : guide des armures, casques, plastrons, jambières et bottes',
    description:'Guide des quatre emplacements d’armure de Minecraft Dungeons II, des effets aléatoires, des améliorations et de l’inventaire vérifié.',
    intro:'Dans cette suite, l’emplacement d’armure unique du premier jeu est remplacé par quatre pièces distinctes : casque, plastron, jambières et bottes. Cette page présente les mécaniques confirmées sans prétendre disposer de la liste complète des armures.',
    facts:[['Casque','Emplacement d’armure distinct'],['Plastron','Emplacement d’armure distinct'],['Jambières','Emplacement d’armure distinct'],['Bottes','Emplacement d’armure distinct'],['Effets aléatoires','Les équipements peuvent recevoir des effets aléatoires'],['Amélioration','Le forgeron peut améliorer les objets de faible puissance']],
    sections:[['Quatre pièces d’armure','Ce système permet davantage de combinaisons que l’armure unique du premier jeu. Une fiche individuelle ne sera ajoutée qu’après vérification de son icône et de sa description en jeu.'],['Effets et relances','Certains équipements présentent des effets aléatoires. Le forgeron permet de les relancer à l’aide des Echo Shards. Les effets possibles restent à vérifier pour chaque objet.'],['État du catalogue complet','Le wiki ne publiera pas de liste présentée comme exhaustive avant d’avoir vérifié l’inventaire et les descriptions de toutes les pièces.']],
    sources:'Présentation officielle des mécaniques et vidéo de gameplay',
  },
  es: {
    title:'Minecraft Dungeons II: guía de armaduras, cascos, petos, grebas y botas',
    description:'Guía de los cuatro espacios de armadura de Minecraft Dungeons II, sus efectos aleatorios, mejoras y estado del catálogo verificado.',
    intro:'La secuela sustituye el único espacio de armadura del primer juego por cuatro piezas independientes: casco, peto, grebas y botas. Esta página explica únicamente las mecánicas confirmadas; no presenta como completa una lista de objetos que aún falta documentar.',
    facts:[['Casco','Espacio de armadura independiente'],['Peto','Espacio de armadura independiente'],['Grebas','Espacio de armadura independiente'],['Botas','Espacio de armadura independiente'],['Efectos aleatorios','El equipo puede tener efectos aleatorios'],['Mejoras','El herrero puede aumentar el poder de objetos inferiores']],
    sections:[['Armadura dividida en cuatro piezas','El nuevo sistema permite más combinaciones que la armadura única del juego anterior. Cada pieza tendrá su propia ficha cuando se hayan verificado su icono y su descripción dentro del juego.'],['Efectos y nuevas tiradas','Los objetos pueden incluir efectos aleatorios. El herrero permite volver a generarlos usando Echo Shards. Las opciones concretas deben comprobarse para cada pieza.'],['Estado de la lista completa','No publicaremos una lista supuestamente completa hasta obtener capturas de todo el inventario y de las descripciones de los objetos.']],
    sources:'Resumen oficial de sistemas y vídeo de exploración',
  },
  'pt-br': {
    title:'Minecraft Dungeons II: guia de armaduras, capacetes, peitorais, calças e botas',
    description:'Conheça os quatro espaços de armadura de Minecraft Dungeons II, os efeitos aleatórios, as melhorias e o progresso do catálogo verificado.',
    intro:'A sequência substitui o único espaço de armadura do primeiro jogo por quatro peças separadas: capacete, peitoral, calças e botas. Esta página apresenta apenas as mecânicas confirmadas, sem fingir que a lista de armaduras já está completa.',
    facts:[['Capacete','Espaço de armadura separado'],['Peitoral','Espaço de armadura separado'],['Calças','Espaço de armadura separado'],['Botas','Espaço de armadura separado'],['Efeitos aleatórios','Equipamentos podem receber efeitos aleatórios'],['Melhorias','O ferreiro pode aumentar o poder de equipamentos mais fracos']],
    sections:[['Armadura dividida em quatro peças','O novo sistema permite mais combinações que a armadura única do primeiro jogo. Cada peça receberá uma página própria depois que seu ícone e sua descrição no jogo forem confirmados.'],['Efeitos e novas tentativas','Equipamentos podem ter efeitos aleatórios. O ferreiro permite sorteá-los novamente usando Echo Shards. As opções exatas precisam ser verificadas para cada item.'],['Situação da lista completa','A wiki não publicará uma lista supostamente completa antes de reunir imagens de todo o inventário e das descrições dos equipamentos.']],
    sources:'Visão geral oficial dos sistemas e vídeo de exploração',
  },
};

function escapeHtml(input: string): string {
  return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

const sourceLinks = [
  ['Official gameplay systems overview', 'https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems'],
  ['Minecraft Dungeons II Exploration Gameplay', 'https://www.youtube.com/watch?v=DE7Z6uIz8Pg'],
] as const;

export function getReviewedTranslation(locale: string, path: string): ReviewedArticle | undefined {
  if (path !== '/armor') return undefined;
  const copy = armor[locale];
  if (!copy) return undefined;
  const h = escapeHtml;
  const facts = copy.facts.map(([label, value]) =>
    `<div class="border border-[var(--line)] bg-[var(--panel)] p-4"><dt class="text-xs font-bold text-[var(--emerald)]">${h(label)}</dt><dd class="mt-2 text-sm text-[var(--text)]">${h(value)}</dd></div>`
  ).join('');
  const sections = copy.sections.map(([heading, paragraph]) =>
    `<section><h2 class="mb-4 text-2xl font-black">${h(heading)}</h2><p class="leading-7 text-[var(--muted)]">${h(paragraph)}</p></section>`
  ).join('');
  const sources = sourceLinks.map(([label, href]) =>
    `<li><a class="text-[var(--lime)] underline" href="${href}" rel="noreferrer" target="_blank">${h(label)}</a></li>`
  ).join('');
  return {
    title: copy.title,
    description: copy.description,
    html: `<section class="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16"><h1 class="text-4xl font-black md:text-6xl">${h(copy.title)}</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">${h(copy.intro)}</p><dl class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${facts}</dl><div class="mt-12 space-y-10">${sections}<section><h2 class="mb-4 text-2xl font-black">${h(copy.sources)}</h2><ul class="list-disc space-y-2 pl-6">${sources}</ul></section></div></section>`,
  };
}
