import { createFileRoute, Link, notFound } from '@tanstack/react-router';

import { SiteFooter, SiteHeader } from '@/components/wiki-shell';
import { isTranslatedLocale, LOCALES, type NonEnglishLocale } from '@/lib/locales';
import { absoluteUrl, pageHead } from '@/lib/seo';

type Copy = {
  title: string;
  description: string;
  intro: string;
  latest: string;
  patch: string;
  patchDescription: string;
  explore: string;
  world: string;
  worldDescription: string;
  gear: string;
  gearDescription: string;
  enemies: string;
  enemiesDescription: string;
  coop: string;
  coopDescription: string;
  cosmetics: string;
  cosmeticsDescription: string;
  sources: string;
  sourcesDescription: string;
  translations: string;
  englishOnly: string;
  readEnglish: string;
};

const translations: Record<NonEnglishLocale, Copy> = {
  'zh-cn': {
    title: 'Minecraft Dungeons II 中文百科',
    description: 'Minecraft Dungeons II 非官方中文百科：世界探索、装备、首领、多人联机与官方更新。',
    intro: '本百科以 Mojang 官方资料和可核实的游戏画面为依据，将已证实的信息与尚待核实的内容明确区分。',
    latest: '最新官方更新', patch: '1.1.2.0 热修复（2026 年 10 月 7 日）',
    patchDescription: '修复客户端与服务器崩溃、原初附魔师技能与 TNT 爆炸引发的崩溃、退出在线游戏时的崩溃，以及 Ultra 画质下的模糊问题。',
    explore: '探索游戏百科', world: '世界与探索', worldDescription: '探索相互连接的地区、地下城、任务和 The Sift 异界。',
    gear: '装备系统', gearDescription: '了解武器、头盔、胸甲、护腿、靴子、护符、神器与附魔。',
    enemies: '敌人与首领', enemiesDescription: '查阅首领、灵魂腐化生物及已核实的战斗资料。',
    coop: '跨平台联机', coopDescription: '支持最多四人组队、跨平台联机，以及本地与在线玩家混合游玩。',
    cosmetics: '披风与外观', cosmeticsDescription: '查看披风、限时活动和奖励的获取条件与有效期限。',
    sources: '资料可靠性', sourcesDescription: '优先引用官方消息。未确认的掉落、数值和机制不会作为事实发布。',
    translations: '语言', englishOnly: '详细攻略仍在翻译中，以下链接将打开英文原文。',
    readEnglish: '查看英文详细页面',
  },
  'zh-tw': {
    title: 'Minecraft Dungeons II 繁體中文百科',
    description: 'Minecraft Dungeons II 非官方繁體中文百科：世界探索、裝備、首領、多人遊戲與官方更新。',
    intro: '本百科以 Mojang 官方資料與可驗證的遊戲畫面為依據，清楚區分已確認與尚待查證的資訊。',
    latest: '最新官方更新', patch: '1.1.2.0 修正更新（2026 年 10 月 7 日）',
    patchDescription: '修正用戶端與伺服器當機、Prime Enchanter 技能與 TNT 爆炸造成的當機、離開線上遊戲時的當機，以及 Ultra 畫質下影像模糊的問題。',
    explore: '探索遊戲百科', world: '世界與探索', worldDescription: '探索相互連接的地區、地城、任務以及 The Sift 異界。',
    gear: '裝備系統', gearDescription: '了解武器、頭盔、胸甲、護腿、靴子、護符、神器與附魔。',
    enemies: '敵人與首領', enemiesDescription: '查閱首領、靈魂腐化生物和已驗證的戰鬥資料。',
    coop: '跨平台多人遊戲', coopDescription: '最多四人合作，支援跨平台、同機與線上玩家一起遊玩。',
    cosmetics: '披風與外觀', cosmeticsDescription: '查看披風、限時活動以及獎勵的取得條件與期限。',
    sources: '資料可信度', sourcesDescription: '優先使用官方來源；未證實的掉落與數值不會當作事實。',
    translations: '語言', englishOnly: '詳細攻略仍在翻譯，以下連結將開啟英文原文。',
    readEnglish: '閱讀英文詳細內容',
  },
  ja: {
    title: 'Minecraft Dungeons II 日本語Wiki',
    description: 'Minecraft Dungeons II の非公式日本語Wiki。ワールド、装備、ボス、協力プレイ、公式アップデートを紹介。',
    intro: 'Mojangの公式情報と確認可能なゲーム映像を優先し、確定情報と未確認情報を区別して掲載しています。',
    latest: '最新の公式アップデート', patch: 'バージョン1.1.2.0 修正パッチ（2026年10月7日）',
    patchDescription: 'クライアントとサーバーのクラッシュ、Prime Enchanterの技とTNTによるクラッシュ、オンラインゲーム終了時のクラッシュ、Ultra画質でのぼやけを修正しました。',
    explore: 'Wikiを探索', world: 'ワールドと探索', worldDescription: 'つながった地域、ダンジョン、クエスト、異世界「The Sift」を紹介します。',
    gear: '装備システム', gearDescription: '武器、ヘルメット、チェストプレート、レギンス、ブーツ、タリスマン、アーティファクト、エンチャントを解説します。',
    enemies: '敵とボス', enemiesDescription: 'ボス、ソウルに侵されたモブ、確認済みの戦闘情報をまとめます。',
    coop: 'クロスプレイ', coopDescription: '最大4人で協力プレイ。異なる機種やローカル・オンラインを組み合わせて遊べます。',
    cosmetics: 'マントと外見アイテム', cosmeticsDescription: '入手条件、期間限定キャンペーン、報酬の期限を確認できます。',
    sources: '情報の信頼性', sourcesDescription: '公式情報を優先し、未確認のドロップ率や数値を事実として掲載しません。',
    translations: '言語', englishOnly: '詳細記事は現在翻訳中です。以下のリンクは英語版へ移動します。',
    readEnglish: '英語の詳細記事を読む',
  },
  ko: {
    title: 'Minecraft Dungeons II 한국어 위키',
    description: 'Minecraft Dungeons II 비공식 한국어 위키. 세계, 장비, 보스, 협동 플레이, 공식 업데이트.',
    intro: 'Mojang의 공식 자료와 확인 가능한 게임 영상을 우선하여 검증된 사실과 미확인 정보를 명확히 구분합니다.',
    latest: '최신 공식 업데이트', patch: '1.1.2.0 핫픽스 (2026년 10월 7일)',
    patchDescription: '클라이언트 및 서버 충돌, Prime Enchanter의 기술과 TNT 폭발로 인한 충돌, 온라인 게임 종료 시 충돌, Ultra 그래픽의 흐릿한 화면을 수정했습니다.',
    explore: '위키 둘러보기', world: '세계와 탐험', worldDescription: '서로 연결된 지역, 던전, 퀘스트, The Sift 차원을 살펴보세요.',
    gear: '장비 시스템', gearDescription: '무기, 투구, 흉갑, 레깅스, 부츠, 부적, 유물, 마법 부여를 소개합니다.',
    enemies: '적과 보스', enemiesDescription: '보스, 영혼에 오염된 몹, 확인된 전투 정보를 제공합니다.',
    coop: '크로스플레이', coopDescription: '최대 4명이 플랫폼을 넘나들며 로컬 및 온라인 협동 플레이를 할 수 있습니다.',
    cosmetics: '망토와 외형 아이템', cosmeticsDescription: '망토 획득 조건과 기간 한정 이벤트 및 보상 기한을 확인하세요.',
    sources: '정보 검증', sourcesDescription: '공식 출처를 우선하며 확인되지 않은 전리품과 수치를 사실처럼 소개하지 않습니다.',
    translations: '언어', englishOnly: '상세 공략은 번역 중입니다. 다음 링크는 영어 원문으로 연결됩니다.',
    readEnglish: '영어 상세 문서 보기',
  },
  de: {
    title: 'Minecraft Dungeons II Wiki auf Deutsch',
    description: 'Inoffizielles deutsches Minecraft Dungeons II Wiki mit Infos zu Welt, Ausrüstung, Bossen, Koop und Updates.',
    intro: 'Dieses Wiki stützt sich auf offizielle Angaben von Mojang und überprüfbares Spielmaterial. Bestätigte Fakten werden klar von unbestätigten Informationen getrennt.',
    latest: 'Neuestes offizielles Update', patch: 'Hotfix 1.1.2.0 (7. Oktober 2026)',
    patchDescription: 'Behebt Client- und Serverabstürze, einen Absturz durch Lightning Slam des Prime Enchanters zusammen mit TNT, Abstürze beim Verlassen einer Online-Partie und verschwommene Grafik auf der Einstellung Ultra.',
    explore: 'Wiki erkunden', world: 'Welt und Erkundung', worldDescription: 'Entdecke verbundene Regionen, Dungeons, Quests und die Dimension The Sift.',
    gear: 'Ausrüstung', gearDescription: 'Informationen zu Waffen, Helm, Brustplatte, Beinschutz, Stiefeln, Talismanen, Artefakten und Verzauberungen.',
    enemies: 'Gegner und Bosse', enemiesDescription: 'Bestätigte Informationen zu Bossen, seelenverderbten Kreaturen und Kämpfen.',
    coop: 'Crossplay und Koop', coopDescription: 'Bis zu vier Spieler können plattformübergreifend lokal und online zusammenspielen.',
    cosmetics: 'Umhänge und Kosmetik', cosmeticsDescription: 'Erfahre mehr über Freischaltbedingungen, Aktionen und Fristen für Belohnungen.',
    sources: 'Verlässliche Quellen', sourcesDescription: 'Offizielle Quellen stehen an erster Stelle; unbestätigte Werte oder Beute werden nicht als Fakten ausgegeben.',
    translations: 'Sprache', englishOnly: 'Die ausführlichen Artikel werden noch übersetzt. Diese Links führen zur englischen Originalfassung.',
    readEnglish: 'Ausführlichen Artikel auf Englisch lesen',
  },
  fr: {
    title: 'Wiki Minecraft Dungeons II en français',
    description: 'Wiki non officiel de Minecraft Dungeons II : monde, équipement, boss, coopération et mises à jour officielles.',
    intro: 'Ce wiki privilégie les informations officielles de Mojang et les séquences de jeu vérifiables, en distinguant clairement les faits confirmés des informations incertaines.',
    latest: 'Dernière mise à jour officielle', patch: 'Correctif 1.1.2.0 (7 octobre 2026)',
    patchDescription: 'Corrige plusieurs plantages du client et du serveur, un plantage lié à une attaque du Prime Enchanter et à la TNT, un plantage à la sortie d’une partie en ligne et un affichage flou avec les graphismes Ultra.',
    explore: 'Explorer le wiki', world: 'Monde et exploration', worldDescription: 'Découvrez les régions interconnectées, les donjons, les quêtes et la dimension The Sift.',
    gear: 'Équipement', gearDescription: 'Armes, casques, plastrons, jambières, bottes, talismans, artefacts et enchantements.',
    enemies: 'Ennemis et boss', enemiesDescription: 'Consultez les informations vérifiées sur les boss, les créatures corrompues et les combats.',
    coop: 'Jeu multiplateforme', coopDescription: 'Jusqu’à quatre joueurs peuvent jouer ensemble entre plateformes, en local ou en ligne.',
    cosmetics: 'Capes et apparences', cosmeticsDescription: 'Découvrez les conditions d’obtention et les dates limites des récompenses.',
    sources: 'Fiabilité des informations', sourcesDescription: 'Les sources officielles priment : les statistiques et butins non vérifiés ne sont pas présentés comme des faits.',
    translations: 'Langue', englishOnly: 'Les guides détaillés sont en cours de traduction. Les liens suivants mènent à la version anglaise.',
    readEnglish: 'Voir les détails en anglais',
  },
  es: {
    title: 'Wiki de Minecraft Dungeons II en español',
    description: 'Wiki no oficial de Minecraft Dungeons II: mundo, equipo, jefes, cooperativo y novedades oficiales.',
    intro: 'Este wiki prioriza la información oficial de Mojang y el material de juego verificable, y distingue entre datos confirmados e información pendiente de comprobar.',
    latest: 'Última actualización oficial', patch: 'Parche 1.1.2.0 (7 de octubre de 2026)',
    patchDescription: 'Corrige fallos del cliente y del servidor, un cierre inesperado relacionado con el Prime Enchanter y la dinamita, errores al salir de partidas en línea y gráficos borrosos con el ajuste Ultra.',
    explore: 'Explorar el wiki', world: 'Mundo y exploración', worldDescription: 'Descubre las regiones conectadas, las mazmorras, las misiones y la dimensión The Sift.',
    gear: 'Equipo', gearDescription: 'Armas, cascos, petos, pantalones, botas, talismanes, artefactos y encantamientos.',
    enemies: 'Enemigos y jefes', enemiesDescription: 'Consulta información verificada sobre jefes, criaturas corrompidas y combates.',
    coop: 'Juego cruzado', coopDescription: 'Hasta cuatro jugadores pueden colaborar entre plataformas, en modo local y en línea.',
    cosmetics: 'Capas y cosméticos', cosmeticsDescription: 'Consulta cómo obtener las recompensas y cuándo terminan las promociones.',
    sources: 'Fuentes fiables', sourcesDescription: 'Damos prioridad a las fuentes oficiales y nunca presentamos estadísticas o botines sin verificar como hechos.',
    translations: 'Idioma', englishOnly: 'Las guías detalladas siguen en traducción. Estos enlaces llevan a la versión original en inglés.',
    readEnglish: 'Ver guía detallada en inglés',
  },
  'pt-br': {
    title: 'Wiki Minecraft Dungeons II em português',
    description: 'Wiki não oficial de Minecraft Dungeons II: mundo, equipamentos, chefes, cooperativo e atualizações.',
    intro: 'Esta wiki prioriza informações oficiais da Mojang e vídeos de jogo verificáveis, distinguindo fatos confirmados de informações ainda não verificadas.',
    latest: 'Atualização oficial mais recente', patch: 'Correção 1.1.2.0 (7 de outubro de 2026)',
    patchDescription: 'Corrige falhas do cliente e servidor, um erro envolvendo o golpe Lightning Slam do Prime Enchanter e TNT, travamentos ao sair de partidas online e gráficos desfocados na qualidade Ultra.',
    explore: 'Explorar a wiki', world: 'Mundo e exploração', worldDescription: 'Conheça regiões interligadas, masmorras, missões e a dimensão The Sift.',
    gear: 'Equipamentos', gearDescription: 'Armas, capacetes, peitorais, calças, botas, talismãs, artefatos e encantamentos.',
    enemies: 'Inimigos e chefes', enemiesDescription: 'Veja informações verificadas sobre chefes, criaturas corrompidas e combates.',
    coop: 'Jogo entre plataformas', coopDescription: 'Até quatro jogadores podem cooperar entre plataformas, localmente e online.',
    cosmetics: 'Capas e itens cosméticos', cosmeticsDescription: 'Confira como obter recompensas e os prazos de cada promoção.',
    sources: 'Fontes confiáveis', sourcesDescription: 'Priorizamos fontes oficiais e não apresentamos estatísticas ou saques não confirmados como fatos.',
    translations: 'Idioma', englishOnly: 'Os guias detalhados ainda estão sendo traduzidos. Os links abaixo abrem as páginas originais em inglês.',
    readEnglish: 'Ver guia detalhado em inglês',
  },
};

export const Route = createFileRoute('/$locale/')({
  beforeLoad: ({ params }) => {
    if (!isTranslatedLocale(params.locale)) throw notFound();
  },
  head: ({ params }) => {
    const locale = params.locale;
    if (!isTranslatedLocale(locale)) return pageHead('/', 'Page not found', '', { noindex: true });
    const t = translations[locale];
    const lang = LOCALES.find((item) => item.code === locale)!.languageTag;
    const head = pageHead(`/${locale}/`, t.title, t.description);
    return {
      ...head,
      meta: [...head.meta, { name: 'language', content: lang }],
      links: [
        ...head.links,
        { rel: 'alternate', hrefLang: 'en', href: absoluteUrl('/') },
        ...LOCALES.filter((item) => item.code !== 'en').map((item) => ({
          rel: 'alternate',
          hrefLang: item.languageTag,
          href: absoluteUrl(`/${item.code}/`),
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl('/') },
      ],
    };
  },
  component: LocalizedHome,
});

function LocalizedHome() {
  const { locale } = Route.useParams();
  if (!isTranslatedLocale(locale)) return null;
  const t = translations[locale];
  const areas = [
    { title: t.world, description: t.worldDescription, path: '/world' },
    { title: t.gear, description: t.gearDescription, path: '/gear' },
    { title: t.enemies, description: t.enemiesDescription, path: '/enemies' },
    { title: t.coop, description: t.coopDescription, path: '/crossplay' },
    { title: t.cosmetics, description: t.cosmeticsDescription, path: '/capes' },
    { title: t.sources, description: t.sourcesDescription, path: '/updates' },
  ];
  return (
    <>
      <SiteHeader />
      <main className="wiki-grid">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <nav aria-label={t.translations} className="mb-10 flex flex-wrap gap-3 text-sm">
            {LOCALES.map((item) => (
              <a
                key={item.code}
                href={item.code === 'en' ? '/' : `/${item.code}/`}
                hrefLang={item.languageTag}
                aria-current={item.code === locale ? 'page' : undefined}
                className={`border px-3 py-2 ${item.code === locale ? 'border-[var(--emerald)] text-[var(--lime)]' : 'border-[var(--line)] text-[var(--muted)]'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{t.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{t.intro}</p>
          <section className="mt-12 border border-[var(--line)] bg-[var(--panel)] p-6">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[var(--emerald)]">{t.latest}</p>
            <h2 className="mt-3 text-2xl font-black">{t.patch}</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">{t.patchDescription}</p>
            <a className="mt-4 inline-block font-semibold text-[var(--lime)] underline" href="https://feedback.minecraft.net/hc/en-us/articles/49427995539981-Minecraft-Dungeons-II-1-1-2-0-Hotfix">{t.readEnglish}</a>
          </section>
          <h2 className="mt-14 text-3xl font-black">{t.explore}</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">{t.englishOnly}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {areas.map((area) => (
              <article key={area.path} className="border border-[var(--line)] bg-[var(--panel)] p-6">
                <h3 className="text-xl font-black">{area.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{area.description}</p>
                <Link to={area.path} className="mt-4 inline-block text-sm font-semibold text-[var(--lime)] underline">
                  {t.readEnglish} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
