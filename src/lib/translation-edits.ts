/**
 * Editorial vocabulary corrections for machine-assisted article translations.
 *
 * Translations are generated offline and checked for route completeness.
 * This map fixes recurrent domain-specific false friends, keeping the site's
 * terminology consistent without changing game facts or external references.
 *
 * Never run blanket "Gear => Equipment" replacements on the English source.
 */
type ArticleCopy = { title: string; description: string; html: string };

const common: Record<string, ReadonlyArray<readonly [string, string]>> = {
  'zh-cn': [
    ['维基百科', 'Wiki'],
    ['我的世界地下城 2', 'Minecraft Dungeons 2'],
    ['《我的世界地下城 II》', 'Minecraft Dungeons II'],
    ['我的世界地下城 II', 'Minecraft Dungeons II'],
    ['斗篷', '披风'],
    ['海角', '披风'],
    ['化妆品', '外观道具'],
    ['装饰化妆', '外观装饰'],
    ['收购未解决', '获取方式尚未确认'],
    ['外貌显露出来', '外观已公开'],
    ['游戏通行证', 'Game Pass'],
    ['首发日', '发售日'],
    ['老板图腾', '首领图腾'],
    ['党派代码', '队伍代码'],
    ['派对代码', '队伍代码'],
    ['沙发合作', '同屏合作'],
    ['无固定班级', '无固定职业'],
    ['文物', '神器'],
    ['结界', '附魔'],
    ['重新滚动', '重新随机生成'],
    ['重新掷骰', '重新随机生成'],
    ['官方发布艺术', '官方宣传图'],
  ],
  'zh-tw': [
    ['維基百科', 'Wiki'],
    ['我的世界地下城 2', 'Minecraft Dungeons 2'],
    ['我的世界地下城 II', 'Minecraft Dungeons II'],
    ['斗篷', '披風'],
    ['海角', '披風'],
    ['化妝品', '外觀道具'],
    ['收購未解決', '取得方式尚未確認'],
    ['派對代碼', '隊伍代碼'],
    ['遊戲通行證', 'Game Pass'],
    ['無固定班級', '無固定職業'],
    ['重新滾動', '重新隨機產生'],
  ],
  ja: [
    ['岬', 'マント'],
    ['化粧品', '外見アイテム'],
    ['ソファ協力', 'ローカル協力'],
    ['公式が確認した', '公式確認済み'],
    ['ギアデータベース', '装備データベース'],
    ['装備データ ファミリ', '装備カテゴリ'],
    ['ゲームパス', 'Game Pass'],
    ['エコーシャード', 'Echo Shards'],
  ],
  ko: [
    ['팟캐스트', '방어구'],
    ['기갑', '방어구'],
    ['화장품', '치장 아이템'],
    ['기어 데이터베이스', '장비 데이터베이스'],
    ['고정 수업', '고정 직업'],
    ['게임 패스', 'Game Pass'],
    ['소파 협동', '로컬 협동'],
  ],
  de: [
    ['Getriebe', 'Ausrüstung'],
    ['Wiederholungswürfel', 'Neue Auswürfelung'],
  ],
  fr: [
    ['index des caps', 'index des capes'],
    ['jeu sur canapé', 'coopération locale'],
  ],
  es: [
    ['códigos de fiesta', 'códigos de grupo'],
    ['cooperativo de sofá', 'cooperativo local'],
  ],
  'pt-br': [
    ['códigos de festa', 'códigos de grupo'],
    ['cooperação de sofá', 'cooperação local'],
  ],
};

const byPath: Record<string, Record<string, ReadonlyArray<readonly [string, string]>>> = {
  'zh-cn': {
    '/gear': [
      ['齿轮', '装备'],
      ['盔甲', '护甲'],
      ['护身符', '护符'],
      ['有些可以水平', '部分护符可以升级'],
    ],
    '/builds': [
      ['Minecraft Dungeons 2 版本', 'Minecraft Dungeons 2 配装'],
      ['建造工艺', '配装思路'],
      ['构建层', '配装组成'],
      ['版本创意', '配装思路'],
    ],
    '/tier-list': [
      ['等级列表', '强度排行'],
      ['等级制度', '职业系统'],
      ['编辑排名', '编辑部评估排名'],
    ],
    '/bosses': [
      ['老板', '首领'],
      ['Boss', 'Boss'],
    ],
  },
  'zh-tw': {
    '/gear': [['齒輪', '裝備'], ['盔甲', '護甲']],
    '/builds': [['Minecraft Dungeons 2 版本', 'Minecraft Dungeons 2 配裝']],
    '/tier-list': [['等級列表', '強度排行']],
    '/bosses': [['老闆', '首領']],
  },
  ja: {
    '/gear': [['ギア', '装備']],
  },
  ko: {
    '/gear': [['기어', '장비']],
    '/tier-list': [['계층 목록', '티어 목록']],
  },
};

export function polishTranslation(locale: string, path: string, page: ArticleCopy): ArticleCopy {
  const fixes = [...(common[locale] ?? []), ...(byPath[locale]?.[path] ?? [])];
  if (fixes.length === 0) return page;
  const edit = (value: string) => fixes.reduce((copy, [oldTerm, newTerm]) => copy.replaceAll(oldTerm, newTerm), value);
  return {
    title: edit(page.title),
    description: edit(page.description),
    html: edit(page.html),
  };
}
