import type { ReviewedArticle } from './verified-translations';

type Copy={title:string;description:string;intro:string;hotfix:string;fixes:string[];
rollout:string;oct1:string;deck:string;deckText:string;emerald:string;emeraldText:string;policy:string;policyText:string;sources:string};
const C:Record<string,Copy>={
'zh-cn':{
 title:'Minecraft Dungeons II 官方更新与补丁记录',description:'按日期整理 Minecraft Dungeons II 已核实的官方补丁、平台变化与机制调整，包括 1.1.2.0 热修复及 Steam Deck 更新。',
 intro:'本页只记录会改变玩家需要了解的持久事实的官方更新，包括游戏平衡、平台支持、活动期限与系统修复。未经证实的社区传闻不在这里当作更新发布。',
 hotfix:'2026 年 10 月 7 日：1.1.2.0 热修复',
 fixes:['修复了多种客户端和服务器崩溃问题。','修复原初附魔师施展 Lightning Slam 时恰逢 TNT 爆炸导致的崩溃。','修复退出在线游戏时的崩溃。','修复以 Ultra 图形质量启动游戏时画面模糊的问题。'],
 rollout:'官方公告称更新首先推送 Steam，Windows 与 Xbox Series X|S 随后跟进。该公告没有确认其他平台已经完成推送。',
 oct1:'2026 年 10 月 1 日：平台与经济调整',
 deck:'Steam Deck 已可游玩',deckText:'Mojang 表示更新后游戏现在应该可以在 Steam Deck 上游玩。不过完整 Steam Deck Verified 认证尚未获得，屏幕键盘等功能仍可能存在问题。',
 emerald:'绿宝石上限提高',emeraldText:'所有平台的绿宝石持有上限由 9,999 提高到 99,999；在下次登录后生效，无须下载游戏更新。',
 policy:'更新收录标准',policyText:'只有改变玩家需要的信息、并有官方出处的变更才会写入本页。一般评论和二次转载不单独作为更新。',
 sources:'官方来源',
},
'zh-tw':{
 title:'Minecraft Dungeons II 官方更新與版本紀錄',description:'按日期整理 Minecraft Dungeons II 經官方確認的修正、平台支援與遊戲系統變更，包括 1.1.2.0 修正更新及 Steam Deck。',
 intro:'本頁記錄對玩家有持續影響的官方變更，例如平衡調整、平台支援、活動期限與系統修正。不會把未查證的社群傳聞當作正式更新。',
 hotfix:'2026 年 10 月 7 日：版本 1.1.2.0 修正更新',
 fixes:['修正多種用戶端與伺服器當機問題。','修正 Prime Enchanter 使用 Lightning Slam 的瞬間遇上 TNT 爆炸而導致的當機。','修正離開線上遊戲時的當機。','修正以 Ultra 畫質啟動時畫面模糊的問題。'],
 rollout:'Mojang 表示先向 Steam 推送，Windows 與 Xbox Series X|S 隨後跟進。該公告並未確認其他平台已完成更新。',
 oct1:'2026 年 10 月 1 日：平台與經濟調整',
 deck:'Steam Deck 已可遊玩',deckText:'Mojang 表示更新後應可在 Steam Deck 上遊玩，但仍未獲得完整 Steam Deck Verified 認證，螢幕鍵盤等功能可能仍有問題。',
 emerald:'綠寶石上限提升',emeraldText:'所有平台的綠寶石上限由 9,999 提高至 99,999，下次登入後生效，毋須下載更新。',
 policy:'更新收錄標準',policyText:'只有具官方來源、會改變玩家所需資訊的變更才會列在此處。一般評論與二手新聞不會單獨成為更新項目。',
 sources:'官方來源',
},
ja:{
 title:'Minecraft Dungeons II 公式アップデート・パッチノート',description:'Minecraft Dungeons II の検証済みアップデートを時系列で掲載。1.1.2.0修正パッチ、Steam Deckへの対応、エメラルド上限変更など。',
 intro:'このページには、ゲームバランス、対応プラットフォーム、イベント期間、ゲームシステムなど、プレイヤーに継続して影響する公式変更だけを記録します。未確認の噂は更新情報として扱いません。',
 hotfix:'2026年10月7日：バージョン1.1.2.0 修正パッチ',
 fixes:['クライアントとサーバーで発生する複数のクラッシュを修正。','Prime Enchanter の Lightning Slam と TNT の爆発が同時に発生した際のクラッシュを修正。','オンラインゲームを退出する際のクラッシュを修正。','グラフィック品質を Ultra にして起動すると画面がぼやける問題を修正。'],
 rollout:'公式発表ではSteam版への配信が先行し、Windows版とXbox Series X|S版はその後に続くとされています。他の機種への配信完了はこの発表だけでは確認できません。',
 oct1:'2026年10月1日：機種対応とゲーム内通貨の変更',
 deck:'Steam Deck でプレイ可能に',deckText:'Mojangによると、アップデート後はSteam Deckで遊べる状態になりました。ただしSteam Deck Verifiedの正式認証はまだ取得しておらず、スクリーンキーボードが表示されないなどの問題が残る場合があります。',
 emerald:'エメラルドの所持上限を引き上げ',emeraldText:'全機種で所持上限が9,999から99,999へ上がりました。次回ログイン時に反映され、ゲーム更新のダウンロードは不要です。',
 policy:'更新の掲載基準',policyText:'確認済みの公式発表があり、プレイヤーに必要な情報を変える更新だけを掲載します。一般的な意見や二次記事だけでは追加しません。',
 sources:'公式情報源',
},
ko:{
 title:'Minecraft Dungeons II 공식 업데이트 및 패치 노트',description:'Minecraft Dungeons II의 검증된 패치와 플랫폼 변경 사항. 1.1.2.0 핫픽스, Steam Deck 지원, 에메랄드 보유 한도를 안내합니다.',
 intro:'이 페이지는 밸런스, 플랫폼 지원, 이벤트 기간 및 게임 시스템처럼 플레이어에게 지속적인 영향을 주는 공식 변경 사항을 기록합니다. 확인되지 않은 소문은 업데이트 사실로 취급하지 않습니다.',
 hotfix:'2026년 10월 7일: 버전 1.1.2.0 핫픽스',
 fixes:['클라이언트와 서버에서 발생하는 여러 충돌 문제를 수정했습니다.','Prime Enchanter의 Lightning Slam과 TNT 폭발이 동시에 일어날 때 발생하는 충돌을 수정했습니다.','온라인 게임에서 나갈 때 발생하는 충돌을 수정했습니다.','그래픽 품질 Ultra로 시작하면 화면이 흐릿해지는 문제를 수정했습니다.'],
 rollout:'공식 발표에 따르면 Steam에 먼저 배포되고 Windows 및 Xbox Series X|S가 뒤따릅니다. 이 발표만으로 다른 플랫폼의 배포 완료를 확인할 수는 없습니다.',
 oct1:'2026년 10월 1일: 플랫폼 및 게임 내 경제 변경',
 deck:'Steam Deck 플레이 가능',deckText:'Mojang는 업데이트 이후 Steam Deck에서 플레이할 수 있다고 안내했습니다. 다만 정식 Steam Deck Verified 인증은 아직 완료되지 않았으며 화면 키보드 등 일부 문제가 남아 있을 수 있습니다.',
 emerald:'에메랄드 보유 한도 증가',emeraldText:'모든 플랫폼의 보유 한도가 9,999에서 99,999로 증가했습니다. 다음 로그인부터 적용되며 게임 업데이트 다운로드는 필요하지 않습니다.',
 policy:'업데이트 수록 기준',policyText:'플레이어에게 필요한 정보를 실제로 변경하고 공식 근거가 있는 내용만 포함합니다. 일반 의견이나 2차 보도는 단독 업데이트로 수록하지 않습니다.',
 sources:'공식 자료',
},
de:{
 title:'Minecraft Dungeons II: Offizielle Updates und Patchnotes',description:'Chronologische Liste bestätigter Minecraft Dungeons II Updates: Hotfix 1.1.2.0, Steam Deck und die Erhöhung des Smaragdlimits.',
 intro:'Diese Übersicht enthält offizielle Änderungen mit dauerhaftem Nutzen für Spieler, darunter Balance-Anpassungen, Plattformunterstützung, Aktionszeiträume und Fehlerbehebungen. Unbestätigte Gerüchte werden nicht als Updates ausgegeben.',
 hotfix:'7. Oktober 2026: Hotfix 1.1.2.0',
 fixes:['Mehrere Abstürze von Client und Server wurden behoben.','Ein Absturz wurde behoben, der auftrat, wenn der Lightning Slam des Prime Enchanters zeitgleich mit einer TNT-Explosion einsetzte.','Ein Absturz beim Verlassen einer Online-Partie wurde behoben.','Verschwommene Grafik beim Start mit der Qualitätseinstellung Ultra wurde behoben.'],
 rollout:'Laut Ankündigung erschien das Update zuerst auf Steam; Windows und Xbox Series X|S sollten folgen. Die Mitteilung bestätigt keine abgeschlossene Veröffentlichung auf weiteren Plattformen.',
 oct1:'1. Oktober 2026: Plattform- und Wirtschaftsanpassungen',
 deck:'Steam Deck jetzt spielbar',deckText:'Mojang zufolge sollte das Spiel nach dem Update auf Steam Deck spielbar sein. Die vollständige Steam-Deck-Verifizierung stand noch aus; unter anderem konnte die Bildschirmtastatur fehlen.',
 emerald:'Smaragdlimit erhöht',emeraldText:'Das Besitzlimit für Smaragde wurde auf allen Plattformen von 9.999 auf 99.999 angehoben. Die Änderung gilt nach der nächsten Anmeldung und erfordert kein Spieleupdate.',
 policy:'Aufnahmekriterien',policyText:'Wir dokumentieren nur offiziell belegte Änderungen, die wichtige Spielerinformationen betreffen. Reine Kommentare und Sekundärberichte führen nicht automatisch zu einem Eintrag.',
 sources:'Offizielle Quellen',
},
fr:{
 title:'Minecraft Dungeons II : mises à jour officielles et notes de patch',description:'Historique des mises à jour vérifiées de Minecraft Dungeons II : correctif 1.1.2.0, Steam Deck et augmentation du plafond des émeraudes.',
 intro:'Ce journal recense les changements officiels qui ont des conséquences durables pour les joueurs : équilibrage, plateformes, périodes de promotion et correctifs. Les rumeurs non vérifiées n’y sont pas présentées comme des faits.',
 hotfix:'7 octobre 2026 : correctif 1.1.2.0',
 fixes:['Correction de plusieurs plantages du client et du serveur.','Correction d’un plantage lorsque le Lightning Slam du Prime Enchanter coïncidait avec une explosion de TNT.','Correction d’un plantage en quittant une partie en ligne.','Correction des graphismes flous au lancement avec la qualité Ultra.'],
 rollout:'Mojang a annoncé un déploiement d’abord sur Steam, suivi de Windows et de Xbox Series X|S. Cette annonce ne confirme pas que la mise à jour est déjà disponible partout.',
 oct1:'1er octobre 2026 : plateforme et économie',
 deck:'Steam Deck désormais jouable',deckText:'Selon Mojang, le jeu devrait fonctionner sur Steam Deck depuis cette mise à jour. La certification Steam Deck Verified restait en attente et certains problèmes, notamment le clavier à l’écran, pouvaient subsister.',
 emerald:'Plafond des émeraudes augmenté',emeraldText:'Sur toutes les plateformes, le plafond passe de 9 999 à 99 999 émeraudes. Le changement prend effet à la prochaine connexion, sans téléchargement de mise à jour.',
 policy:'Critères de publication',policyText:'Nous ajoutons uniquement les changements confirmés officiellement qui modifient des informations utiles aux joueurs. Un commentaire ou un article secondaire ne constitue pas à lui seul une mise à jour.',
 sources:'Sources officielles',
},
es:{
 title:'Minecraft Dungeons II: actualizaciones oficiales y notas de parche',description:'Historial verificado de Minecraft Dungeons II: parche 1.1.2.0, compatibilidad con Steam Deck y aumento del límite de esmeraldas.',
 intro:'Este registro contiene cambios oficiales con efectos duraderos para los jugadores, como ajustes de equilibrio, compatibilidad con plataformas, promociones y correcciones. No presentamos rumores sin verificar como actualizaciones.',
 hotfix:'7 de octubre de 2026: parche 1.1.2.0',
 fixes:['Se corrigieron varios cierres inesperados del cliente y del servidor.','Se corrigió un fallo cuando el Lightning Slam del Prime Enchanter coincidía con una explosión de TNT.','Se corrigió un cierre inesperado al abandonar una partida en línea.','Se corrigieron los gráficos borrosos al iniciar el juego con la calidad Ultra.'],
 rollout:'Mojang anunció el lanzamiento primero en Steam, seguido de Windows y Xbox Series X|S. El anuncio no confirma que el parche ya esté disponible en todas las plataformas.',
 oct1:'1 de octubre de 2026: plataforma y economía',
 deck:'Jugable en Steam Deck',deckText:'Según Mojang, el juego debería poder ejecutarse en Steam Deck después de la actualización. Todavía no disponía de la certificación Steam Deck Verified completa y podían persistir problemas como la falta de teclado en pantalla.',
 emerald:'Aumentó el límite de esmeraldas',emeraldText:'El límite de esmeraldas aumentó de 9.999 a 99.999 en todas las plataformas. Se aplica después del siguiente inicio de sesión sin descargar una actualización del juego.',
 policy:'Política de actualizaciones',policyText:'Solo incluimos cambios respaldados por fuentes oficiales que modifiquen información útil para los jugadores. Los comentarios y las noticias de terceros no bastan por sí solos.',
 sources:'Fuentes oficiales',
},
'pt-br':{
 title:'Minecraft Dungeons II: atualizações oficiais e notas de patch',description:'Histórico verificado de Minecraft Dungeons II: correção 1.1.2.0, suporte ao Steam Deck e aumento do limite de esmeraldas.',
 intro:'Este histórico registra mudanças oficiais que afetam permanentemente informações importantes para os jogadores, como balanceamento, suporte a plataformas, eventos e correções. Rumores não confirmados não são tratados como atualizações.',
 hotfix:'7 de outubro de 2026: correção 1.1.2.0',
 fixes:['Várias falhas no cliente e no servidor foram corrigidas.','Foi corrigida uma falha quando o Lightning Slam do Prime Enchanter ocorria ao mesmo tempo que uma explosão de TNT.','Foi corrigida uma falha ao sair de uma partida online.','Foram corrigidos gráficos desfocados ao iniciar o jogo com qualidade Ultra.'],
 rollout:'A Mojang anunciou lançamento primeiro no Steam, seguido pelo Windows e pelo Xbox Series X|S. O comunicado não confirma que a atualização já chegou a todas as plataformas.',
 oct1:'1º de outubro de 2026: plataforma e economia',
 deck:'Steam Deck agora jogável',deckText:'Segundo a Mojang, o jogo deve estar jogável no Steam Deck após a atualização. A verificação completa Steam Deck Verified ainda estava pendente, e problemas como a ausência do teclado na tela poderiam continuar.',
 emerald:'Limite de esmeraldas aumentado',emeraldText:'O limite de esmeraldas subiu de 9.999 para 99.999 em todas as plataformas. A alteração vale após o próximo login e não exige baixar uma atualização do jogo.',
 policy:'Critérios de atualização',policyText:'Incluímos apenas mudanças oficialmente confirmadas que alteram informações úteis aos jogadores. Comentários e matérias secundárias não geram novas entradas por conta própria.',
 sources:'Fontes oficiais',
}
};
const patchUrl='https://feedback.minecraft.net/hc/en-us/articles/49427995539981-Minecraft-Dungeons-II-1-1-2-0-Hotfix';
const oldUrl='https://feedback.minecraft.net/hc/en-us/articles/49305373167629-New-Update-Steam-Deck-Playable';
const h=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function getReviewedUpdates(locale:string):ReviewedArticle|undefined{
 const c=C[locale];if(!c)return undefined;
 const fixes=c.fixes.map(f=>`<li>${h(f)}</li>`).join('');
 const html=`<section class="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16"><h1 class="text-4xl font-black md:text-6xl">${h(c.title)}</h1><p class="mt-5 text-lg leading-8 text-[var(--muted)]">${h(c.intro)}</p><div class="mt-10 space-y-10"><section class="border border-[var(--line)] bg-[var(--panel)] p-6"><h2 class="text-2xl font-black">${h(c.hotfix)}</h2><ul class="mt-5 list-disc space-y-3 pl-6 text-[var(--muted)]">${fixes}</ul><p class="mt-5 text-[var(--muted)]">${h(c.rollout)}</p></section><section><h2 class="text-2xl font-black">${h(c.oct1)}</h2><div class="mt-5 grid gap-4 md:grid-cols-2"><article class="border border-[var(--line)] bg-[var(--panel)] p-5"><h3 class="text-lg font-bold">${h(c.deck)}</h3><p class="mt-3 leading-7 text-[var(--muted)]">${h(c.deckText)}</p></article><article class="border border-[var(--line)] bg-[var(--panel)] p-5"><h3 class="text-lg font-bold">${h(c.emerald)}</h3><p class="mt-3 leading-7 text-[var(--muted)]">${h(c.emeraldText)}</p></article></div></section><section><h2 class="text-2xl font-black">${h(c.policy)}</h2><p class="mt-4 leading-7 text-[var(--muted)]">${h(c.policyText)}</p></section><section><h2 class="text-2xl font-black">${h(c.sources)}</h2><ul class="mt-4 list-disc space-y-2 pl-6"><li><a class="text-[var(--lime)] underline" href="${patchUrl}">Minecraft Feedback — 1.1.2.0</a></li><li><a class="text-[var(--lime)] underline" href="${oldUrl}">Minecraft Feedback — Steam Deck</a></li></ul></section></div></section>`;
 return {title:c.title,description:c.description,html};
}
