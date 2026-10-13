import type { ReviewedArticle } from './verified-translations';

type CrossplayCopy = {
 title:string; description:string; intro:string; facts:[string,string][]; sections:[string,string][]; faq:[string,string][]; sourceTitle:string;
};
const copies:Record<string,CrossplayCopy>={
 'zh-cn':{
  title:'Minecraft Dungeons 2 跨平台联机与多人游戏指南',
  description:'官方确认 Minecraft Dungeons II 支持最多四人、跨平台联机、本地与在线混合组队、八位房间码、跨平台角色进度、匹配及专用服务器。',
  intro:'支持跨平台联机。Mojang 的官方多人游戏介绍确认，玩家可以跨平台组队，也可以将本地双人或多人游戏接入在线房间。跨平台联机指在不同设备上一起玩；跨平台进度则是用同一角色在不同平台继续游戏，两者应当区分。',
  facts:[['队伍人数上限','4 人'],['跨平台联机','官方确认支持'],['同屏合作','支持在线及离线'],['本地和在线混合组队','支持'],['房间代码','8 位字母或数字'],['在线房间','专用服务器']],
  sections:[
   ['官方联机演示','Mojang 发布了四名英雄一起游玩的官方截图，为多人合作模式提供了直接证据。'],
   ['能跨平台联机吗？','可以。Mojang 明确描述了与其他平台上的好友组队的方式。八位房间码也可用于不同平台的玩家加入同一队伍。'],
   ['同屏玩家与在线玩家能一起玩吗？','可以。本地合作队伍能够开启在线联机，其他玩家可以远程加入队伍空缺位置，但队伍总人数仍不能超过四人。'],
   ['跨平台联机与跨平台角色进度','联机解决不同设备的玩家能否一起游戏；进度同步解决是否能在另一台设备继续使用同一英雄。角色资料在线保存，将平台账号绑定至同一 Microsoft 账号即可在受支持平台延续角色进度。若平台支持，也能在朋友的设备上登录自己的平台账号使用自己的英雄。'],
   ['八位房间码','房间码由八个字母或数字组成，可从大厅或正在进行的游戏中加入朋友的队伍，与普通好友列表入口不同。'],
   ['自动匹配机制','匹配会参考主线任务进度、玩家所在地区及战力，也可以将玩家匹配进已经开始的游戏，以补足队伍位置。'],
   ['专用服务器','续作使用专用服务器承载在线队伍，不再采用初代中由队长托管联机的模式。系统会根据队员延迟选择服务器。'],
   ['多人背包与救援','迷你背包允许多名玩家同时调整装备，无须轮流占用整屏背包。多名队友一起救援倒地玩家还能加快救援速度。'],
  ],
  faq:[['Minecraft Dungeons II 支持跨平台联机吗？','支持。Mojang 明确确认跨平台组队和跨平台房间码。'],['最多几人一起玩？','最多四人。'],['可以混合同屏和在线玩家吗？','可以。本地队伍可以在线开放空余位置。'],['能跨平台同步英雄吗？','可以。将不同平台账号绑定到同一 Microsoft 账号即可在受支持平台继续使用英雄。']],
  sourceTitle:'官方资料',
 },
 'zh-tw':{
  title:'Minecraft Dungeons 2 跨平台連線與多人遊戲指南',
  description:'Minecraft Dungeons II 官方確認最多四人合作、跨平台連線、同機與線上混合組隊、八碼隊伍代碼、角色進度同步、配對與專用伺服器。',
  intro:'本作支援跨平台合作。Mojang 的官方說明確認，不同平台的玩家可以一起遊玩，也能讓同機合作中的玩家邀請線上朋友。跨平台連線與跨平台角色進度是兩種不同的功能，本頁分別說明。',
  facts:[['隊伍人數上限','4 人'],['跨平台連線','官方已確認'],['同機合作','可在線上或離線遊玩'],['同機與線上混合','支援'],['隊伍代碼','8 個字母或數字'],['線上連線','專用伺服器']],
  sections:[
   ['官方合作模式畫面','Mojang 公開了四名英雄一起冒險的畫面，直接展示四人合作模式。'],
   ['可以跨平台一起遊玩嗎？','可以。Mojang 明確說明玩家可以與其他平台的朋友組隊，跨平台也能使用隊伍代碼加入。'],
   ['同機與線上玩家能混合組隊嗎？','可以。同機合作可以接入線上遊戲，遠端朋友能加入尚未額滿的四人隊伍。'],
   ['跨平台連線與角色進度','跨平台連線是不同裝置間一起遊玩；角色進度同步則是換平台後繼續使用原本的英雄。英雄資料儲存在網路上，將平台帳號連結至同一 Microsoft 帳號即可在支援的平台延續進度。若平台允許，也能在朋友的裝置上登入自己的帳號遊玩。'],
   ['八位隊伍代碼','隊伍代碼由八個字母或數字組成，可以從大廳或進行中的遊戲加入隊伍，不受平台差異影響。'],
   ['配對運作方式','配對會考量主線任務進度、地區及裝備戰力，也能加入已開始的遊戲以補足隊伍名額。'],
   ['專用伺服器','續作改為使用專用伺服器，而非前作由隊長負責主機連線。伺服器位置會參考隊員的延遲。'],
   ['小型背包與救援','小型背包讓多名玩家能同時調整裝備。多位隊友共同救援倒地玩家時，救援速度也會提高。'],
  ],
  faq:[['支援跨平台多人遊戲嗎？','支援，官方已確認。'],['最多能有幾位玩家？','最多四人。'],['同機與線上玩家可以一起玩嗎？','可以，只要隊伍仍有空位。'],['角色進度能跨平台同步嗎？','可以，須將支援平台的帳號連結到同一 Microsoft 帳號。']],
  sourceTitle:'官方來源',
 },
 ja:{
  title:'Minecraft Dungeons II クロスプレイ・協力プレイガイド',
  description:'Minecraft Dungeons II の最大4人協力プレイ、機種間クロスプレイ、ローカルとオンラインの混合参加、8文字のパーティーコード、進行状況共有、マッチメイキング、専用サーバーを解説。',
  intro:'Mojangはクロスプレイ、ローカルとオンラインを組み合わせた協力プレイ、パーティーコード、英雄データのオンライン保存を公式に確認しています。異なる機種で一緒に遊ぶ「クロスプレイ」と、同じ英雄を別の機種で使う「クロスプログレッション」は別の機能です。',
  facts:[['パーティー人数','最大4人'],['クロスプレイ','公式確認済み'],['ローカル協力','オフライン・オンライン対応'],['ローカル＋オンライン','併用可能'],['パーティーコード','英数字8文字'],['オンライン接続','専用サーバー']],
  sections:[
   ['公式の協力プレイ画像','Mojangが公開したスクリーンショットには4人の英雄が一緒に映っており、協力プレイの構成を確認できます。'],
   ['異なる機種で一緒に遊べる？','はい。Mojangは機種の異なるフレンドと遊ぶ仕組みを明示しており、パーティーコードもプラットフォームを問わず利用できます。'],
   ['ローカルとオンラインを混ぜられる？','はい。同じ画面で遊んでいるグループがオンライン接続し、残りの空き枠に遠隔地のプレイヤーを招待できます。合計人数は4人までです。'],
   ['クロスプレイと進行状況の共有','クロスプレイは機種が違っても協力して遊べること、進行状況の共有は別の機種でも同じ英雄を使えることです。英雄データはオンラインに保存され、対応機種のアカウントを同じMicrosoftアカウントへ関連付けると引き継げます。機種が対応していれば、友人の端末で自分のアカウントにログインして遊ぶこともできます。'],
   ['8文字のパーティーコード','現在のパーティーに割り当てられる英数字8文字のコードです。ロビーからでも進行中のゲームからでも参加でき、フレンドリストとは別の参加方法です。'],
   ['マッチメイキング','メインクエストの進行度、地域、パワーレベルを考慮してマッチングします。進行中のセッションに参加して空き枠を埋めることもできます。'],
   ['専用サーバー','前作のパーティーリーダーによるホスト方式とは異なり、専用サーバーがオンラインセッションを担当します。参加者の通信遅延を考慮してサーバーが選ばれます。'],
   ['ミニインベントリと復活','ミニインベントリなら各プレイヤーが順番待ちせずに装備を変更できます。複数人で倒れた仲間を助けると復活も速くなります。'],
  ],
  faq:[['クロスプレイに対応していますか？','はい。Mojangが公式に確認しています。'],['最大何人で協力できますか？','4人です。'],['ローカルとオンラインを組み合わせられますか？','はい。空き枠にオンラインの仲間が参加できます。'],['英雄データを別の機種に引き継げますか？','はい。対応機種のアカウントを同じMicrosoftアカウントへ紐付けます。']],
  sourceTitle:'公式情報源',
 },
 ko:{
  title:'Minecraft Dungeons II 크로스플레이 및 협동 플레이 가이드',
  description:'Minecraft Dungeons II의 최대 4인 협동, 플랫폼 간 플레이, 로컬·온라인 혼합 참가, 8자리 파티 코드, 캐릭터 진행 상황 공유, 매치메이킹과 전용 서버 안내.',
  intro:'Mojang의 공식 안내는 크로스플레이, 로컬과 온라인을 혼합한 협동 플레이, 파티 코드, 온라인 영웅 데이터를 확인합니다. 서로 다른 기기에서 함께 플레이하는 기능과 다른 기기에서도 같은 영웅을 이어 사용하는 기능은 구분해야 합니다.',
  facts:[['최대 파티 인원','4명'],['크로스플레이','공식 확인'],['로컬 협동','온라인 및 오프라인 지원'],['로컬·온라인 혼합','지원'],['파티 코드','영문자·숫자 8자리'],['온라인 연결','전용 서버']],
  sections:[
   ['공식 협동 플레이 이미지','Mojang의 공식 스크린샷에는 네 명의 영웅이 함께 등장하며 4인 파티 구성을 보여 줍니다.'],
   ['플랫폼이 달라도 함께 플레이할 수 있나요?','네. Mojang는 서로 다른 플랫폼의 친구와 함께 플레이하는 기능을 설명하며, 파티 코드도 플랫폼과 관계없이 사용할 수 있다고 밝힙니다.'],
   ['로컬 플레이어와 온라인 플레이어를 섞을 수 있나요?','네. 한 기기에서 협동 플레이 중인 파티가 온라인으로 전환한 뒤 빈 자리에 원격 플레이어를 초대할 수 있습니다. 총 인원은 최대 4명입니다.'],
   ['크로스플레이와 영웅 진행 상황 공유','크로스플레이는 기기가 달라도 함께 플레이하는 것이고, 진행 상황 공유는 다른 기기에서 같은 영웅을 이어 사용하는 것입니다. 영웅 데이터는 온라인에 저장됩니다. 지원 플랫폼의 계정을 같은 Microsoft 계정에 연결하면 진행 상황을 이어갈 수 있습니다. 플랫폼이 허용하면 친구 기기에서도 자신의 계정으로 로그인해 플레이할 수 있습니다.'],
   ['8자리 파티 코드','현재 파티에 연결된 영문자와 숫자 8자리 코드입니다. 로비 또는 이미 시작한 게임에서도 참여할 수 있으며 친구 목록과는 별도 방식입니다.'],
   ['매치메이킹 방식','주요 퀘스트 진행도, 지역, 장비 위력을 고려합니다. 이미 시작된 세션의 빈자리를 채우는 방식으로 참가할 수도 있습니다.'],
   ['전용 서버','전작의 파티장 호스팅 방식과 달리 후속작은 전용 서버를 사용합니다. 서버 선택에는 파티원들의 네트워크 지연이 반영됩니다.'],
   ['간편 인벤토리와 부활','간편 인벤토리 덕분에 여러 플레이어가 순서를 기다리지 않고 장비를 바꿀 수 있습니다. 여러 명이 쓰러진 아군을 함께 구조하면 부활 속도가 빨라집니다.'],
  ],
  faq:[['플랫폼 간 플레이를 지원하나요?','네, 공식적으로 지원합니다.'],['최대 몇 명이 함께할 수 있나요?','4명입니다.'],['로컬과 온라인 플레이어가 같이할 수 있나요?','네. 로컬 파티의 빈자리에 온라인 플레이어가 참여할 수 있습니다.'],['다른 기기에서 같은 영웅을 사용할 수 있나요?','네. 지원 플랫폼의 계정을 같은 Microsoft 계정에 연결하면 됩니다.']],
  sourceTitle:'공식 자료',
 },
 de:{
  title:'Minecraft Dungeons II: Crossplay und Koop-Mehrspielermodus',
  description:'Alle bestätigten Fakten zum Vier-Spieler-Koop, plattformübergreifenden Spielen, gemeinsamen lokalen und Online-Partys, achtstelligen Codes, Heldenfortschritt und dedizierten Servern.',
  intro:'Mojang hat Crossplay, gemischte lokale und Online-Koop-Gruppen, Partykodes, online gespeicherte Helden und dedizierte Server offiziell bestätigt. Crossplay bedeutet gemeinsames Spielen auf verschiedenen Plattformen. Plattformübergreifender Fortschritt bedeutet, denselben Helden auf einem anderen Gerät weiterzuspielen.',
  facts:[['Gruppengröße','Bis zu 4 Spieler'],['Crossplay','Offiziell bestätigt'],['Lokaler Koop','Online und offline'],['Lokaler und Online-Koop','Kombinierbar'],['Partycode','8 Buchstaben oder Ziffern'],['Online-Sitzungen','Dedizierte Server']],
  sections:[
   ['Offizielles Koop-Bild','Ein offizieller Screenshot von Mojang zeigt vier Helden in einer gemeinsamen Gruppe.'],
   ['Ist Crossplay möglich?','Ja. Mojang beschreibt ausdrücklich das Zusammenspiel mit Freunden auf anderen Plattformen. Partykodes funktionieren unabhängig von der Plattform.'],
   ['Können lokale und Online-Spieler gemeinsam spielen?','Ja. Eine lokale Koop-Gruppe kann ihre Sitzung online öffnen und freie Plätze durch Freunde aus der Ferne besetzen lassen. Insgesamt bleibt die Gruppe auf vier Personen begrenzt.'],
   ['Crossplay und plattformübergreifender Fortschritt','Crossplay ermöglicht gemeinsames Spielen auf unterschiedlichen Geräten. Für den Heldenfortschritt werden die Charakterdaten online gespeichert. Werden unterstützte Plattformkonten demselben Microsoft-Konto zugeordnet, lässt sich derselbe Held auf einer anderen Plattform fortsetzen. Wo die Plattform es erlaubt, kann man sich auch auf dem Gerät eines Freundes mit dem eigenen Konto anmelden.'],
   ['Achtstellige Partykodes','Der Partycode besteht aus acht Buchstaben oder Zahlen und erlaubt den Beitritt aus der Lobby oder zu einer laufenden Sitzung. Das ist eine zusätzliche Möglichkeit neben der Freundesliste.'],
   ['So funktioniert das Matchmaking','Berücksichtigt werden der Fortschritt der Hauptquest, die Region und die Ausrüstungsstärke. Man kann auch einer bereits laufenden Sitzung beitreten, um freie Plätze zu füllen.'],
   ['Dedizierte Server','Im Gegensatz zum ersten Minecraft Dungeons hostet nicht mehr der Gruppenleiter die Online-Sitzung. Dedizierte Server werden anhand der Verbindungsverzögerungen der Gruppenmitglieder ausgewählt.'],
   ['Mini-Inventar und Wiederbelebung','Mit dem Mini-Inventar können mehrere Spieler ihre Ausrüstung verwalten, ohne nacheinander das große Inventar zu öffnen. Helfen mehrere Teammitglieder gleichzeitig bei der Wiederbelebung, geht diese schneller.'],
  ],
  faq:[['Unterstützt das Spiel Crossplay?','Ja. Mojang hat Crossplay und plattformübergreifende Partykodes bestätigt.'],['Wie viele Spieler können gemeinsam spielen?','Bis zu vier.'],['Lassen sich lokaler und Online-Koop mischen?','Ja, solange die Gruppe noch freie Plätze hat.'],['Wird der Heldenfortschritt plattformübergreifend gespeichert?','Ja, bei Verknüpfung unterstützter Plattformkonten mit demselben Microsoft-Konto.']],
  sourceTitle:'Offizielle Quellen',
 },
 fr:{
  title:'Minecraft Dungeons II : guide du cross-play et du multijoueur coopératif',
  description:'Guide officiel du jeu coopératif à quatre, du cross-play, des groupes locaux et en ligne, des codes de groupe à huit caractères, de la progression des héros et des serveurs dédiés.',
  intro:'Mojang confirme le cross-play, la coopération mêlant joueurs locaux et en ligne, les codes de groupe, la sauvegarde des héros en ligne et les serveurs dédiés. Le cross-play permet de jouer ensemble sur différentes plateformes, tandis que la progression multiplateforme permet de retrouver le même héros sur un autre appareil.',
  facts:[['Taille maximale du groupe','4 joueurs'],['Cross-play','Officiellement confirmé'],['Coopération locale','En ligne et hors ligne'],['Local + en ligne','Compatible'],['Code de groupe','8 lettres ou chiffres'],['Hébergement en ligne','Serveurs dédiés']],
  sections:[
   ['Image officielle du mode coopératif','Mojang a publié une capture d’écran montrant quatre héros réunis dans un groupe.'],
   ['Peut-on jouer entre différentes plateformes ?','Oui. Mojang décrit explicitement le jeu avec des amis sur d’autres plateformes. Les codes de groupe fonctionnent quel que soit l’appareil utilisé.'],
   ['Peut-on mélanger joueurs locaux et en ligne ?','Oui. Un groupe en coopération locale peut ouvrir sa session en ligne afin que des amis à distance occupent les places restantes, dans la limite de quatre joueurs.'],
   ['Cross-play et progression multiplateforme','Le cross-play permet de jouer ensemble sur des appareils différents. La progression multiplateforme permet de conserver son héros lorsque l’on change d’appareil. Les données du héros sont stockées en ligne : il faut associer les comptes des plateformes compatibles au même compte Microsoft. Si la plateforme le permet, on peut également se connecter avec son propre compte sur l’appareil d’un ami.'],
   ['Codes de groupe à huit caractères','Un code alphanumérique de huit caractères permet de rejoindre le groupe depuis le salon ou pendant une partie en cours, sans passer nécessairement par la liste d’amis.'],
   ['Fonctionnement du matchmaking','La recherche prend en compte la progression dans la quête principale, la région et le niveau de puissance. Un joueur peut aussi rejoindre une partie déjà commencée pour compléter le groupe.'],
   ['Serveurs dédiés','Contrairement au premier opus, les parties en ligne ne sont plus hébergées par le chef du groupe. Le serveur dédié est sélectionné en tenant compte de la latence des joueurs.'],
   ['Mini-inventaire et réanimation','Le mini-inventaire permet à plusieurs joueurs de modifier leur équipement sans attendre leur tour dans un inventaire partagé. Plusieurs alliés qui réaniment le même joueur accélèrent sa réanimation.'],
  ],
  faq:[['Le cross-play est-il pris en charge ?','Oui, Mojang le confirme.'],['Combien de joueurs peuvent coopérer ?','Quatre au maximum.'],['Peut-on mélanger le jeu local et en ligne ?','Oui, les places libres peuvent accueillir des joueurs à distance.'],['Peut-on conserver un héros sur une autre plateforme ?','Oui, en associant les comptes des plateformes compatibles au même compte Microsoft.']],
  sourceTitle:'Sources officielles',
 },
 es:{
  title:'Minecraft Dungeons II: guía de juego cruzado y multijugador cooperativo',
  description:'Información confirmada sobre el cooperativo para cuatro jugadores, el juego cruzado, las partidas locales y en línea, los códigos de ocho caracteres, el progreso entre plataformas y los servidores dedicados.',
  intro:'Mojang ha confirmado el juego cruzado, las partidas con jugadores locales y en línea, los códigos de grupo, el guardado del héroe en línea y los servidores dedicados. El juego cruzado permite que usuarios de distintas plataformas jueguen juntos; la progresión cruzada permite continuar con el mismo héroe en otro dispositivo.',
  facts:[['Tamaño máximo del grupo','4 jugadores'],['Juego cruzado','Confirmado oficialmente'],['Cooperativo local','En línea y sin conexión'],['Local + en línea','Se pueden combinar'],['Código de grupo','8 letras o números'],['Partidas en línea','Servidores dedicados']],
  sections:[
   ['Imagen oficial del cooperativo','Mojang ha mostrado una captura oficial con cuatro héroes en el mismo grupo.'],
   ['¿Se puede jugar entre plataformas?','Sí. Mojang indica expresamente que los amigos pueden jugar desde plataformas distintas. Los códigos de grupo también funcionan independientemente de la plataforma.'],
   ['¿Se pueden combinar jugadores locales y en línea?','Sí. Un grupo de cooperativo local puede abrir su partida en línea para que otros jugadores ocupen las plazas libres, hasta un máximo total de cuatro.'],
   ['Juego cruzado y progreso entre plataformas','El juego cruzado permite jugar juntos desde distintos dispositivos. El progreso entre plataformas permite usar el mismo héroe en otro aparato. Los datos del héroe se guardan en línea; al vincular las cuentas compatibles con una misma cuenta Microsoft, se puede continuar la aventura. Cuando la plataforma lo permita, también se puede iniciar sesión en el dispositivo de un amigo.'],
   ['Códigos de grupo de ocho caracteres','Un código de ocho letras o números permite entrar en el grupo desde el vestíbulo o durante una partida ya iniciada. Es un método adicional a la lista de amigos.'],
   ['Cómo funciona el emparejamiento','El sistema tiene en cuenta el avance de la misión principal, la región y el nivel de poder. También puede introducir al jugador en partidas que ya estén en marcha.'],
   ['Servidores dedicados','A diferencia del primer Minecraft Dungeons, el líder del grupo ya no aloja la sesión. Se elige un servidor dedicado teniendo en cuenta la latencia de los integrantes.'],
   ['Mininventario y reanimación','El mininventario permite a varios jugadores cambiar su equipo sin esperar turnos. Si varios aliados ayudan a reanimar al mismo compañero, la acción se acelera.'],
  ],
  faq:[['¿Minecraft Dungeons II permite juego cruzado?','Sí, confirmado por Mojang.'],['¿Cuántos pueden jugar juntos?','Hasta cuatro.'],['¿Pueden jugar juntos usuarios locales y en línea?','Sí, pueden completar las plazas libres del grupo.'],['¿Se puede continuar con el mismo héroe en otra plataforma?','Sí, al vincular cuentas compatibles a la misma cuenta Microsoft.']],
  sourceTitle:'Fuentes oficiales',
 },
 'pt-br':{
  title:'Minecraft Dungeons II: guia de crossplay e multijogador cooperativo',
  description:'Guia confirmado de cooperação para quatro jogadores, crossplay, partidas locais e online, códigos de oito caracteres, progresso entre plataformas, busca de partidas e servidores dedicados.',
  intro:'A Mojang confirmou o crossplay, a cooperação com jogadores locais e online, os códigos de grupo, os dados de heróis salvos online e os servidores dedicados. Crossplay significa jogar com amigos de outras plataformas; progresso compartilhado permite continuar com o mesmo herói em outro dispositivo.',
  facts:[['Tamanho máximo do grupo','4 jogadores'],['Crossplay','Confirmado oficialmente'],['Cooperação local','Online e offline'],['Local + online','Podem ser combinados'],['Código do grupo','8 letras ou números'],['Partidas online','Servidores dedicados']],
  sections:[
   ['Imagem oficial do modo cooperativo','A Mojang publicou uma captura de tela mostrando quatro heróis em um mesmo grupo.'],
   ['É possível jogar entre plataformas?','Sim. A Mojang descreve explicitamente como amigos de plataformas diferentes podem jogar juntos. Os códigos de grupo funcionam independentemente da plataforma.'],
   ['Jogadores locais e online podem jogar juntos?','Sim. Um grupo de cooperação local pode abrir a sessão online para preencher as vagas com amigos à distância, respeitando o limite total de quatro pessoas.'],
   ['Crossplay e progresso entre plataformas','O crossplay permite jogar com amigos em aparelhos diferentes. O progresso entre plataformas permite usar o mesmo herói em outro dispositivo. Os dados são salvos online; basta vincular contas de plataformas compatíveis à mesma conta Microsoft. Quando a plataforma permite, também é possível entrar com sua conta no aparelho de um amigo.'],
   ['Códigos de grupo com oito caracteres','Um código de oito letras ou números permite entrar no grupo pelo lobby ou por uma partida em andamento, sem depender apenas da lista de amigos.'],
   ['Como funciona a busca de partidas','O sistema considera o progresso da missão principal, a região e o nível de poder. Também é possível entrar em partidas já iniciadas para completar vagas.'],
   ['Servidores dedicados','Ao contrário do primeiro Minecraft Dungeons, a sessão online não depende mais do líder do grupo como anfitrião. O servidor dedicado é escolhido levando em conta a latência dos integrantes.'],
   ['Mini-inventário e reviver aliados','O mini-inventário permite que vários jogadores ajustem seus equipamentos sem esperar sua vez. Quando mais de um aliado ajuda a reviver um jogador, a recuperação fica mais rápida.'],
  ],
  faq:[['Minecraft Dungeons II tem crossplay?','Sim, a Mojang confirmou o recurso.'],['Quantos jogadores podem cooperar?','Até quatro.'],['É possível misturar jogadores locais e online?','Sim, amigos online podem ocupar as vagas disponíveis.'],['Posso continuar com meu herói em outra plataforma?','Sim, vinculando as contas compatíveis à mesma conta Microsoft.']],
  sourceTitle:'Fontes oficiais',
 }
};

function h(v:string):string {
 return v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
export function getReviewedCrossplay(locale:string):ReviewedArticle|undefined {
 const c=copies[locale]; if(!c)return undefined;
 const facts=c.facts.map(([k,v])=>`<div class="border border-[var(--line)] bg-[var(--panel)] p-4"><dt class="text-xs font-bold text-[var(--emerald)]">${h(k)}</dt><dd class="mt-2 text-sm">${h(v)}</dd></div>`).join('');
 const sections=c.sections.map(([k,v])=>`<section><h2 class="mb-4 text-2xl font-black">${h(k)}</h2><p class="leading-7 text-[var(--muted)]">${h(v)}</p></section>`).join('');
 const faq=c.faq.map(([q,a])=>`<div><h3 class="font-bold">${h(q)}</h3><p class="mt-1 text-[var(--muted)]">${h(a)}</p></div>`).join('');
 return {
  title:c.title,description:c.description,
  html:`<section class="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16"><h1 class="text-4xl font-black md:text-6xl">${h(c.title)}</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">${h(c.intro)}</p><dl class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${facts}</dl><div class="mt-12 space-y-10">${sections}<section><h2 class="mb-4 text-2xl font-black">FAQ</h2><div class="space-y-5">${faq}</div></section><section><h2 class="mb-4 text-2xl font-black">${h(c.sourceTitle)}</h2><ul class="list-disc space-y-2 pl-6"><li><a class="text-[var(--lime)] underline" href="https://www.minecraft.net/en-us/article/dungeons-ii-co-op">Minecraft.net — Dungeons II co-op</a></li><li><a class="text-[var(--lime)] underline" href="https://www.minecraft.net/en-us/article/minecraft-dungeons-ii-gameplay-systems">Minecraft.net — Gameplay systems</a></li></ul></section></div></section>`,
 };
}
