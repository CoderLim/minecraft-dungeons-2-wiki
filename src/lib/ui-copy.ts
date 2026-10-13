import { LOCALES, type Locale } from '@/lib/locales';

/**
 * UI-only translations. Gameplay article copy is stored separately in
 * generated locale snapshots, so nav copy cannot silently fall back to English.
 */
export const UI_COPY: Record<Locale, { labels: Record<string, string>; disclaimer: string; language: string; tagline: string }> = {
  en: {
    labels: {}, language: 'Language', tagline: 'Unofficial · Source audited',
    disclaimer: 'NOT AN OFFICIAL MINECRAFT WEBSITE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT. This independent fan project is responsible for its own content. Minecraft and related marks belong to Mojang Studios and Microsoft.',
  },
  'zh-cn': {
    language: '语言', tagline: '非官方 · 资料已核验',
    labels: {
      World:'世界', Overview:'概览', Map:'地图', Dungeons:'地下城', Quests:'任务', Gear:'装备', Weapons:'武器', Armor:'护甲',
      Artifacts:'神器', Talismans:'护符', Enchantments:'附魔', Blacksmith:'铁匠', Enemies:'敌人', Bosses:'首领',
      'Soul-Corrupted Mobs':'灵魂腐化生物', Builds:'配装', 'Tier List':'强度排行', Gameplay:'玩法', Jump:'跳跃',
      Controls:'操作', Inventory:'物品栏', 'Crossplay & Co-op':'跨平台联机', Guides:'攻略', 'Guide hub':'攻略中心',
      More:'更多', 'Capes & Cosmetics':'披风与外观', Characters:'角色', Platforms:'平台',
      'Verified Updates':'已核实的更新', 'Game Info':'游戏信息', Trailers:'预告片',
    },
    disclaimer:'本网站并非 Minecraft 官方网站，也未获得 Mojang 或 Microsoft 的认可或授权，与其没有关联。本网站为独立粉丝项目，内容由本站自行负责。Minecraft 及相关商标归 Mojang Studios 和 Microsoft 所有。',
  },
  'zh-tw': {
    language:'語言', tagline:'非官方 · 資料已查證',
    labels:{
      World:'世界', Overview:'概覽', Map:'地圖', Dungeons:'地城', Quests:'任務', Gear:'裝備', Weapons:'武器', Armor:'護甲',
      Artifacts:'神器', Talismans:'護符', Enchantments:'附魔', Blacksmith:'鐵匠', Enemies:'敵人', Bosses:'首領',
      'Soul-Corrupted Mobs':'靈魂腐化生物', Builds:'配裝', 'Tier List':'強度排行', Gameplay:'玩法', Jump:'跳躍',
      Controls:'操作', Inventory:'物品欄', 'Crossplay & Co-op':'跨平台合作', Guides:'攻略', 'Guide hub':'攻略中心',
      More:'更多', 'Capes & Cosmetics':'披風與外觀', Characters:'角色', Platforms:'平台',
      'Verified Updates':'已查證更新', 'Game Info':'遊戲資訊', Trailers:'預告片',
    },
    disclaimer:'本網站並非 Minecraft 官方網站，也未經 Mojang 或 Microsoft 核准或授權，與其沒有關聯。本網站為獨立粉絲專案，內容由本站自行負責。Minecraft 及相關商標均屬 Mojang Studios 和 Microsoft。',
  },
  ja: {
    language:'言語', tagline:'非公式・出典確認済み',
    labels:{
      World:'ワールド', Overview:'概要', Map:'マップ', Dungeons:'ダンジョン', Quests:'クエスト', Gear:'装備', Weapons:'武器',
      Armor:'防具', Artifacts:'アーティファクト', Talismans:'タリスマン', Enchantments:'エンチャント', Blacksmith:'鍛冶屋',
      Enemies:'敵', Bosses:'ボス', 'Soul-Corrupted Mobs':'ソウルに侵されたモブ', Builds:'ビルド',
      'Tier List':'強さランキング', Gameplay:'ゲームプレイ', Jump:'ジャンプ', Controls:'操作方法', Inventory:'インベントリ',
      'Crossplay & Co-op':'クロスプレイと協力プレイ', Guides:'攻略', 'Guide hub':'攻略一覧',
      More:'その他', 'Capes & Cosmetics':'マントと外見アイテム', Characters:'登場人物', Platforms:'対応機種',
      'Verified Updates':'確認済みアップデート', 'Game Info':'ゲーム情報', Trailers:'トレーラー',
    },
    disclaimer:'これは公式 Minecraft ウェブサイトではありません。Mojang または Microsoft の承認・提携を受けていません。この独立したファンサイトは掲載内容に責任を負います。Minecraft と関連する商標は Mojang Studios および Microsoft に帰属します。',
  },
  ko: {
    language:'언어', tagline:'비공식 · 출처 검증',
    labels:{
      World:'세계', Overview:'개요', Map:'지도', Dungeons:'던전', Quests:'퀘스트', Gear:'장비', Weapons:'무기',
      Armor:'방어구', Artifacts:'유물', Talismans:'부적', Enchantments:'마법 부여', Blacksmith:'대장장이',
      Enemies:'적', Bosses:'보스', 'Soul-Corrupted Mobs':'영혼에 오염된 몹', Builds:'빌드',
      'Tier List':'등급표', Gameplay:'게임 플레이', Jump:'점프', Controls:'조작', Inventory:'인벤토리',
      'Crossplay & Co-op':'크로스플레이 및 협동', Guides:'공략', 'Guide hub':'공략 모음',
      More:'더 보기', 'Capes & Cosmetics':'망토와 외형 아이템', Characters:'등장인물', Platforms:'플랫폼',
      'Verified Updates':'확인된 업데이트', 'Game Info':'게임 정보', Trailers:'예고편',
    },
    disclaimer:'이 사이트는 공식 Minecraft 웹사이트가 아니며 Mojang 또는 Microsoft의 승인이나 제휴를 받지 않았습니다. 독립 팬 프로젝트로서 자체 콘텐츠에 책임을 집니다. Minecraft 및 관련 상표는 Mojang Studios와 Microsoft에 귀속됩니다.',
  },
  de: {
    language:'Sprache', tagline:'Inoffiziell · Quellengeprüft',
    labels:{
      World:'Welt', Overview:'Übersicht', Map:'Karte', Dungeons:'Dungeons', Quests:'Quests', Gear:'Ausrüstung',
      Weapons:'Waffen', Armor:'Rüstung', Artifacts:'Artefakte', Talismans:'Talismane',
      Enchantments:'Verzauberungen', Blacksmith:'Schmied', Enemies:'Gegner', Bosses:'Bosse',
      'Soul-Corrupted Mobs':'Seelenverderbte Kreaturen', Builds:'Builds', 'Tier List':'Rangliste',
      Gameplay:'Spielmechanik', Jump:'Springen', Controls:'Steuerung', Inventory:'Inventar',
      'Crossplay & Co-op':'Crossplay und Koop', Guides:'Anleitungen', 'Guide hub':'Anleitungen',
      More:'Mehr', 'Capes & Cosmetics':'Umhänge und Kosmetik', Characters:'Charaktere', Platforms:'Plattformen',
      'Verified Updates':'Bestätigte Updates', 'Game Info':'Spielinfos', Trailers:'Trailer',
    },
    disclaimer:'DIES IST KEINE OFFIZIELLE MINECRAFT-WEBSITE. Sie ist weder von Mojang noch von Microsoft genehmigt oder mit ihnen verbunden. Für die Inhalte ist dieses unabhängige Fanprojekt selbst verantwortlich. Minecraft und zugehörige Marken gehören Mojang Studios und Microsoft.',
  },
  fr: {
    language:'Langue', tagline:'Non officiel · Sources vérifiées',
    labels:{
      World:'Monde', Overview:'Présentation', Map:'Carte', Dungeons:'Donjons', Quests:'Quêtes', Gear:'Équipement',
      Weapons:'Armes', Armor:'Armures', Artifacts:'Artefacts', Talismans:'Talismans', Enchantments:'Enchantements',
      Blacksmith:'Forgeron', Enemies:'Ennemis', Bosses:'Boss', 'Soul-Corrupted Mobs':'Créatures corrompues',
      Builds:'Configurations', 'Tier List':'Classement', Gameplay:'Gameplay', Jump:'Saut', Controls:'Commandes',
      Inventory:'Inventaire', 'Crossplay & Co-op':'Jeu multiplateforme et coopération', Guides:'Guides', 'Guide hub':'Tous les guides',
      More:'Plus', 'Capes & Cosmetics':'Capes et apparences', Characters:'Personnages', Platforms:'Plateformes',
      'Verified Updates':'Mises à jour vérifiées', 'Game Info':'Infos sur le jeu', Trailers:'Bandes-annonces',
    },
    disclaimer:'CE SITE N’EST PAS UN SITE OFFICIEL DE MINECRAFT. Il n’est ni approuvé par Mojang ou Microsoft, ni associé à ces entreprises. Ce projet indépendant de fans est responsable de son propre contenu. Minecraft et les marques associées appartiennent à Mojang Studios et Microsoft.',
  },
  es: {
    language:'Idioma', tagline:'No oficial · Fuentes verificadas',
    labels:{
      World:'Mundo', Overview:'Resumen', Map:'Mapa', Dungeons:'Mazmorras', Quests:'Misiones', Gear:'Equipo',
      Weapons:'Armas', Armor:'Armaduras', Artifacts:'Artefactos', Talismans:'Talismanes', Enchantments:'Encantamientos',
      Blacksmith:'Herrero', Enemies:'Enemigos', Bosses:'Jefes', 'Soul-Corrupted Mobs':'Criaturas corrompidas',
      Builds:'Configuraciones', 'Tier List':'Clasificación', Gameplay:'Jugabilidad', Jump:'Salto', Controls:'Controles',
      Inventory:'Inventario', 'Crossplay & Co-op':'Juego cruzado y cooperativo', Guides:'Guías', 'Guide hub':'Todas las guías',
      More:'Más', 'Capes & Cosmetics':'Capas y cosméticos', Characters:'Personajes', Platforms:'Plataformas',
      'Verified Updates':'Actualizaciones verificadas', 'Game Info':'Información del juego', Trailers:'Tráileres',
    },
    disclaimer:'ESTE NO ES UN SITIO OFICIAL DE MINECRAFT. No cuenta con la aprobación de Mojang ni Microsoft y no está asociado con ellas. Este proyecto independiente de fans es responsable de su contenido. Minecraft y sus marcas relacionadas pertenecen a Mojang Studios y Microsoft.',
  },
  'pt-br': {
    language:'Idioma', tagline:'Não oficial · Fontes verificadas',
    labels:{
      World:'Mundo', Overview:'Visão geral', Map:'Mapa', Dungeons:'Masmorras', Quests:'Missões', Gear:'Equipamentos',
      Weapons:'Armas', Armor:'Armaduras', Artifacts:'Artefatos', Talismans:'Talismãs', Enchantments:'Encantamentos',
      Blacksmith:'Ferreiro', Enemies:'Inimigos', Bosses:'Chefes', 'Soul-Corrupted Mobs':'Criaturas corrompidas',
      Builds:'Builds', 'Tier List':'Classificação', Gameplay:'Jogabilidade', Jump:'Pulo', Controls:'Controles',
      Inventory:'Inventário', 'Crossplay & Co-op':'Jogo entre plataformas e cooperativo', Guides:'Guias', 'Guide hub':'Todos os guias',
      More:'Mais', 'Capes & Cosmetics':'Capas e itens cosméticos', Characters:'Personagens', Platforms:'Plataformas',
      'Verified Updates':'Atualizações verificadas', 'Game Info':'Informações do jogo', Trailers:'Trailers',
    },
    disclaimer:'ESTE NÃO É UM SITE OFICIAL DO MINECRAFT. Não é aprovado pela Mojang ou Microsoft nem associado a elas. Este projeto independente de fãs é responsável por seu conteúdo. Minecraft e as marcas relacionadas pertencem à Mojang Studios e à Microsoft.',
  },
};

export function getUiCopy(pathname: string) {
  const segment = pathname.split('/').filter(Boolean)[0];
  const locale = LOCALES.find((item) => item.code === segment)?.code ?? 'en';
  return { locale, ...UI_COPY[locale] };
}

export function uiLabel(copy: ReturnType<typeof getUiCopy>, label: string): string {
  return copy.labels[label] ?? label;
}


export const NOT_FOUND_COPY: Record<Locale, { title: string; back: string }> = {
  en: { title: 'Page not found', back: 'Back to the wiki' },
  'zh-cn': { title: '页面不存在', back: '返回百科首页' },
  'zh-tw': { title: '找不到頁面', back: '返回百科首頁' },
  ja: { title: 'ページが見つかりません', back: 'Wikiのトップに戻る' },
  ko: { title: '페이지를 찾을 수 없습니다', back: '위키 홈으로 돌아가기' },
  de: { title: 'Seite nicht gefunden', back: 'Zurück zum Wiki' },
  fr: { title: 'Page introuvable', back: 'Retour au wiki' },
  es: { title: 'Página no encontrada', back: 'Volver al wiki' },
  'pt-br': { title: 'Página não encontrada', back: 'Voltar à wiki' },
};
