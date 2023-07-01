ondragstart =()=> !1;

{
oninput =e=> {
  let v = e.target.value;
  if (prev != v) {
    prev = v;
    let s, i = 504;
    while (
      s = a[--i].textContent,
      a[i].setAttribute("style", s.includes(v) ? "display:flex" : "display:none"),
    i);
  }
}

let d = document,
    a = d.getElementsByTagName("a"),
    i = 2012,
    s,
    header = d.body.lastElementChild.children,
    mode = 0,
    prev;

d.title="Thoroughbred Myostatin List";

while (
  (s = [
  "", "1209439", "1234092", "1110914",     // -,タワーオブロンドン,キャッツアイ,スピルバーグ
  "1355121","1213491","1122613","722158",  // -,モズアスコット,ゴッドフロアー,ハーツクライ
  "1358351","1213491","1188202","725485",  // -,モズアスコット,シンボリバーグ,ダイワメジャー
  "1361510","1157711","1296859","1240926", // -,リアルスティール,ストームハート,Uncaptured
  "","1192943","11","1000885",             // -,So You Think,Coralina,Dylan Thomas
  "","1351610","7","375619",               // -,Blue Point,Tack,Redoute's Choice
  "1334656","1173702","1096989","1039506", // スカイキャンバス,ファインニードル,アポロフィオリーナ,Snitzel
  "1338824","1162685","1186655","310467",  // ズングリムックリ,ダノンレジェンド,ハタノオヌール,サウスヴィグラス
  "1338519","888832","1174877","729458",   // バインドロック,エスポワールシチー,ジョリガーニャント,キングカメハメハ
  "1339469","1028940","1203303","901749",  // パリッドキャリア,Henny Hughes,サンライズシェル,キンシャサノキセキ
  "1341176","1128881","1209242","1110554", // ホーリーブライト,Makfi,ラブリランテ,ディープブリランテ
  "1338498","1107477","1174487","901749",  // レモンシフォン,ホッコータルマエ,ゼロカラノキセキ,キンシャサノキセキ
  "/","1343050","/","1176909",             // The Spirit Of Zero,Needs Further,Fuji Spirit,Pierro
  "1326521","1134867","1219242","1178418", // -,レッドファルクス,プシュケ,Novellist
  "1320679","1089850","1046875","337421",  // トリフィス,ロードカナロア,キョウエイカルラ,Afleet
  "1327418","1127395","1148828","619835",  // マコトヴィクラント,Dunkirk,マコトカンパネッロ,デュランダル
  "1322686","1127395","1122613","722158",  // ヴァリアントゴッド,Dunkirk,ゴッドフロアー,ハーツクライ
  "/","1225444","/","1180621",             // Brung King,Crackerjack King,Wild Cliffs,Canford Cliffs
  "1310451","1124405","1141700","891931",  // カリグラフィー,ロゴタイプ,コートリーラッシュ,ディープスカイ
  "1310433","615577","1141447","262443",   // クールフォルテ,クロフネ,シュシュブリーズ,フジキセキ
  "1307442","1127395","1086752","369621",  // ルーシッド,Dunkirk,スイートマカロン,Tale of the Cat
  "","1036137","4","848826",               // Brooklyn,Bully Pulpit,Brynhild,Simplex
  "","848826","/","1036137",               // Chin Chin,Simplex,Chiaraluna,Bully Pulpit
  "12","1210979","4","361055",             // Hong Kong,Move Your Vision,Heliconia,Hernando
  "/","1036137","/","337435",              // Kontroll,Bully Pulpit,Kespark,Kendor 
  "","1177537","2","621128",               // Loire,George Vancouver,Ligurian Sea,Medicean
  "","1036137","3","769436",               // Manet,Bully Pulpit,Macabea,Look Honey <!--sire: Sadler's Wells--
  "","1036137","","342963",                // Marshmallow,Bully Pulpit,Mazsola,Horatio Luro
  "/","1177402","/","342963",              // Meglepetes,Penny's Picnic,Megerto,Horatio Luro
  "/","1003684","1111988","369845",        // Mont Negro,Stormy River,Montmarie,Montjeu
  "3","1177402","/","369587",              // Mr. Penny,Penny's Picnic,Miss Brooch,Areion
  "1346307","1194537","1211385","714421",  // Poetic Flare,Dawn Approach,Maria Lee,Rock of Gibraltar
  "","1036137","3","/",                    // Sasha,Bully Pulpit,Salalah,Fairlypi
  "","1036137","7","782854",               // Sue,Bully Pulpit,Sunny Girl,Jolly Groom
  "","1210979","/","1003766",              // Sunday,Move Your Vision,Szombatesti Lany <!--mare:Sunny Girl--,Steady As A Rock <!--sire: Rock of Gibraltar--
  "17","1210979","5","362560",             // Turbina,Move Your Vision,Tunic,Danehill Dancer <!--sire: Danehill--
  "1267632","1177896","298465","262443",   // アジアノジュンシン,アジアエクスプレス,バトルアンコール,フジキセキ
  "1268900","888832","1142745","626815",   // アヴォカド,エスポワールシチー,アップライジング,Commands <!--sire: Danehill--
  "1262985","1127395","758780","262443",   // エベーヌ,Dunkirk,ラズベリータイム,フジキセキ
  "1265862","1110554","1051710","714421",  // ギガインパクト,ディープブリランテ,グレイスフルソング,Rock of Gibraltar
  "1270626","1042049","1139859","619768",  // ゴールドレッグス,ルーラーシップ,ファンシーミューズ,ゴールドアリュール
  "1262332","1170063","728812","361855",   // マミリアス,リオンディーズ,ハニーハント,エンドスウィープ
  "1267531","1151936","1113708","347814",  // マーテル,ドゥラメンテ,Malvern Spring,Silver Deputy
  "1264297","1106251","899740","336572",   // ラヴマイウェイ,ジャスタウェイ,Higher Love,Sadler's Wells
  "1317590","1238289","1114664","849372",  // リフレイム,American Pharoah,Careless Jewel,Tapit
  "1266716","1090360","1101171","372610",  // ヴィジャーヤ,オルフェーヴル,デプロマトウショウ,Fasliyev
  "1345677","1068216","1109003","731452",  // Anders,Not A Single Doubt,Madame Andree,War Emblem
  "/","1068216","3","975364",              // Doubtland,Not A Single Doubt,Miss Sharapova,Ustinov
  "1346155","1286574","1055526","337444",  // Ilalliqa,Muhaarar,Sun Bittern,Seeking The Gold
  "10","1239485","/","714371",             // Lady Penelope,Night of Thunder,Step Sequence,Nayef
  "1346790","1032583","1331655","369639",  // Repossession,War Front,Life Happened,Stravinsky
  "1349383","1228789","1347358","363470",  // Russian Camelot,Camelot,Lady Babooshka,Cape Cross
  "1237607","1088803","611749","225628",   // スノージュエリー,ウインバリアシオン,サクラバーベナ, サクラバクシンオー
  "1235403","722158","1108866","225628",   // プライムライン,ハーツクライ,バートラムガーデン,サクラバクシンオー
  "1220875","1089850","1111253","356574",  // アントリューズ,ロードカナロア,Shes All Eltish,Eltish
  "1219539","1127395","1086752","369621",  // グランソヴァール,Dunkirk,スイートマカロン,Tale of the Cat
  "1296859","1240926","986306","622228",   // ストームハート,Uncaptured,Miss Fear Factor,Siphon
  "5","999168","1226699","1039599",        // Extrema,Bernardini <!--CT from sire:A.P. Indy TT--,Streama,Stratum
  "/","1157888","/","621989",              // Written By,Written Tycoon,Yau Chin,Tobougg
  "/","1296846","/","369144",              // Zousain,Zoustar,Pasar Silbano,Elnadim
  "1211839","1209642","1144132","731473",  // アドバンスマルス,Jimmy Creed,Bijoux Miss,Buddha
  "1204988","722158","899740","336572",    // キングオブハーツ,ハーツクライ,Higher Love,Sadler's Wells
  "1209316","1110554","1086752","369621",  // パワーバンド,ディープブリランテ,スイートマカロン,Tale of the Cat
  "1244591","1161935","1225274","365118",  // Cracksman,Frankel,Rhadegunda,Pivotal
  "1292040","1003266","1299905","745340",  // Dynamic,Teofilo,White Cay,Dalakhani
  "/","1016646","2","369845",              // Elegantly Bound,Choisir,Boundless Joy,Montjeu
  "1240187","372680","1146331","347989",   // National Defense,Invincible Spirit <!--sire:Green Desert bro: Kodiac--,Angle Falls,Kingmambo 
  "/","1193305","/","237717",              // Plata O Plomo,Paco Boy,BranStom Gem,So Factual
  "1249697","1146082","1146082","714422",  // Samran Says,Dark Angel,Chachalacas,Hawk Wing
  "1350388","1193305","1277210","714343",  // Galileo Gold,Paco Boy,Galicuix,Galileo
  "/","904771","2","365118",               // Smash Williams,Fracas,Take Flight,Pivotal
  "1296648","1039506","1112767","372807",  // Thronum,Snitzel,Helena's Secret,Five Star Day
  "","1194104","/","275458",               // Washington DC,Zoffany <!--sire: Dansili--,How's she Cuttin,シンコウフォレスト <!--Green Desert x Park Express--
  "1166859","901749","313524","339861",    // エネルムサシ,キンシャサノキセキ,クリノトップレディ,Salt Lake
  "1173834","887465","1040580","237704",   // ヴァイスクリガー,キャプテントゥーレ,バトルキクヒメ,White Muzzle
  "1197495","1115412","745091","337424",   // Belardo,Lope de Vega,Danaskaya,Danehill
  "3","1051578","2","365118",              // Icy Lady,New Approach,,Kitty Kiernan,Pivotal
  "/","1022351","/","369582",              // Mattmu  <!--sire: Danehill Dancer--,Katie Boo,Namid
  "3","794335","13","343464",              // Outreach,Exceed And Excel,Bahira,Snippets
  "2","1003266","/","337576",              // Palentino,Teofilo,Palatine Hill,Palace Music
  "/","372626","9","342033",               // Ready For Victory,More Than Ready,Crillon,Zabeel
  "/","1027109","/","766524",              // Well In Flight,Just As Well,Flight Prospect,Secret Prospector
  "1224708","1113706","1100371","634933",  // AeriAlist,Sea The Stars,Maoineach,Congaree
  "1283438","1003266","1175504","335964",  // County Wexford,Teofilo,Tiffed,Seattle Slew
  "1328157","1051353","722017","340580",   // Curlin to Mischief <!--bro: Mendelssohn Beholder Into Mischief--,Curlin,Leslie's Lady,Tricky Creek
  "1343319","1112035","1350159","367971",  // Fighting Sun,Northern Meteor,Irish Darling,Ivorys Irish
  "1283893","745493","879605","339566",    // Fountain Of Youth,Oasis Dream,Attraction,Efisio
  "/","1039599","/","718137",              // Stratum Star,Stratum,Purely Spectacular,Pins
  "1239885","1178081","707332","3338442",  // Supido,Sebring,レディサクシード,Brian's Time
  "1178046","1040048","986306","622228",   // エイシンブルズアイ,Belgravia,Miss Fear Factor,Siphon
  "1138044","704212","727656","337848",    // ワンハート,アサクサデンエン,カガヤケラビット,Dehere
  "1194537","1051578","1194526","336875",  // Dawn Approach,New Approach,Hymn Of The Dawn,Phone Trick
  "1296846","1112035","1068188","375619",  // Zoustar,Northern Meteor,Zouzou,Redoute's Choice
  "1144181","369621","875292","361396",    // エーシントップ,Tale of the Cat,Ecology,Unbridled's Song
  "1227531","1000965","1227447","369059",  // An Ghalanta,Holy Roman Emperor <!--sire Danehill--,Alamanta,Ali-Royal
  "7","362868","16","719054",              // Crusade,Mr. Greeley,La Traviata,Johannesburg
  "/","844073","/","342037",               // Sessions,Lonhro,Seances,Canny Lad
  "/","371697","/","341009",               // Shamexpress,O'reilly <!--sire: Last Tycoon--,Volkrose,Volksraad <!--sire: Green Desert--
  "/","336430","897198","372784",          // Vastitas,reen Desert,Kahira,King's Best
  "1176681","1019761","1145813","262443",  // Your Song,Fastnet Rock,Zembu,フジキセキ
  "1147205","744351","621557","337102",    // Dialed In,Mineshaft,Miss Doolittle,Storm Cat
  "1180907","611101","444285","342671",    // Dream Ahead,Diktat,Land of Dreams,Cadeaux Genereux
  "1147585","620969","791683","339552",    // Gig Harbor,City Zip,Miss Blue Grass,St. Jovite
  "2","719408","/","336202",               // Whisper Gently,High Chaparral,Whisper Light,Caerleon
  "1089850","729458","308961","337102",    // ロードカナロア,キングカメハメハ,レディブラッサム,Storm Cat
  "1241319","962836","1242518","340107",   // Moshe,Bel Esprit,Helsinge,Desert Sun
  "1296597","1068216","792415","343051",   // Squamosa,Not A Single Doubt,Class Success,Success Express
  "1194118","1113851","1039082","364748",  // Star Witness,Starcraft,Leone Chiara,Lion Hunter
  "1180281","369106","1062976","339566",   // Bushranger,Danetime <!--sire Danehill--,Danz Danz,Efisio
  "1177657","372708","714706","337424",    // Intense Focus,Giant's Causeway,Daneleta,Danehill1
  "1223314","375619","384232","341172",    // Rogano,Redoute's Choice,Singles Bar <!--bro: Snippets--,Rory's Jester
  "1180320","620969","1226005","339965",   // Run Away and Hide,City Zip,Jilted,Runaway Groom
  "1195144","1016646","1227792","341059",  // Starspangledbanner,Choisir,Gold Anthem,Made of Gold
  "1224590","1019761","1001548","337445",  // Stryker,Fastnet Rock,Laetitia,Woodman
  "/","372662","/","365583",               // Unionize,Dixie Union,Silent Sighs,Benchmark
  "1114813","745249","792358","335975",    // Vocalised,Vindication. <!--sire: Seattle Slew--,Serena's Tune,Mr. Prospector
  "8","1019761","/","343464",              // Wanted,Fastnet Rock,Fragmentation,Snippets
  "989119","225628","272448","179892",     // アフィニティ,サクラバクシンオー,オギブルービーナス,スーパークリーク
  "1086752","369621","793682","361724",    // スイートマカロン,Tale of the Cat,Pastel Colour,Distant View
  "1099945","1016646","1008324","337436",  // Dreamscape,Choisir,Faith In Dreams,Ferdinand
  "/","375619","/","337436",               // Drumbeats,Redoute's Choice,Delicate Choice,Last Tycoon
  "1298140","337563","447370","343051",    // Duporth,Red Ransom,Stanging,Success Express
  "1098347","745418","1063846","336370",   // Equiano,Acclamation,Entente Cordiale,Ela-Mana-Mou
  "1146059","375619","787428","337436",    // Master of Design,Redoute's Choice,Urgo To Merge,Last Tycoon
  "1194998","369627","718753","341896",    // Nicconi,Bianconi,Nicola Lass,Scenic <!--CT sire: Sadler's Wells-- 
  "1112035","368799","439775","336225",    // Northern Meteor,Encosta De Lago,Explosive,Fappiano
  "1053652","369621","312873","333862",    // Tale of Ekati,Tale of the Cat,サイレンスビューティ,Sunday Silence
  "1082430","369314","869776","362799",    // Visionaire,Grand Slam,Scarlet Tango,French Deputy
  "/","361406","2","346488",               // Warm White Night,Western Winter,Thousand Nights,Foveros
  "1175557","336082","837880","341713",    // Astronomer Royal,Danzig,Sheepscot,Easy Goer
  "1180044","365583","1179748","339972",   // Idiot Proof,Benchmark,Perfectly Pretty,Bertrando
  "1003306","342671","625230","337445",    // Major Cadeaux,Cadeaux Genereux,Maine Lobster,Woodman
  "1076874","714421","436264","344065",    // Murtajill,Rock of Gibraltar,Skating,At Talaq <!--sire:Roberto--
  "1076306","714421","960924","344080",    // Seventh Rock,Rock of Gibraltar,Ruby Clipper,Rubiton
  "1028940","362819","865068","337483",    // Henny Hughes,Hennessy,Meadow Flyer,Meadowlake
  "1039962","362915","1038783","342217",   // Kildonan,Rich Man's Gold,Cathay Firth,Philippi
  "1022220","337424","718633","342033",    // Darci Brahma,Danehill,Grand Echezeaux,Zabeel
  "1039666","375619","452267","342033",    // Fast 'N' Famous,Redoute's Choice,Zalinda,Zabeel
  "1039552","375619","867062","171986",    // God's Own,Redoute's Choice,Angel In Disguise,Sky Chase
  "984276","363038","447344","343464",     // Magnus,Flying Spur,Scandinavia,Snippets
  "1039599","375619","1038516","340269",   // Stratum,Redoute's Choice,Bourgeois,Luskin Star
  "1157888","375120","1226831","336570",   // Written Tycoon,Iglesia <!--sire: Last Tycoon--,Party Miss,Kenmare
  "896484","337424","840175","337427",     // Assafa,Danehill,Marigot Bay,Fairy King
  "1019772","337424","405988","340272",    // Dane Shadow,Danehill,Slight Chance,Centaine
  "904635","343464","787979","342688",     //  Snippetson <!--bro: Singles Bar - son: Not A Single Doubt--,Snippets,Snowdrift,Polish Precedent
  "861633","337424","852127","335975",     // Way West,anehill,Prospect Fever,Mr. Prospector
  "743908","337102","424416","335964",     // Statue of Liberty <!--bro: Lemon Drop Kid--,Storm Cat,Charming Lassie,Seattle Slew
  "962836","341457","962837","334722",     // Bel Esprit,Royal Academy,Bespoken,Vain
  "719727","362552","719604","335151",     // Firebreak,Charnwood Forest,Breakaway,Song
  "878926","337424","442415","341477",     // Hidden Dragon,Danehill,Ballroom Babe,Citidancer
  "1194526","336875","866839","335991",    // Hymn Of The Dawn,Phone Trick,Colonial Debut,Pleasant Colony
  "1016573","337424","865656","337515",    // Lucky Owners,Danehill,Miss Priority,Kaapstad
  "714421","337424","426859","335936",     // Rock of Gibraltar,Danehill,Offshore Boom,Be My Guest
  "858242","347989","427086","336499",     // Dexterity,Kingmambo,Diese,Diesis <!--bro: Kris--
  "375042","336082","404719","335975",     // Monashee Mountain <!--bro: MineShaft--,Danzig,Prospectors Delite,Mr. Prospector
  "843795","336085","4440392","336773",    // St Petersburg,Nureyev,Miss Bold Appeal,Valid Appeal
  "963103","342881","963104","780167",     // Captain Al,Al Mufti <!--sire: Roberto--,Off To War,Complete Warrior
  "375619","337424","451254","342037",     // Redoute's Choice,Danehill,Shantha's Choice,Canny Lad
  "747661","337102","404842","333978",     // Tiger Ridge <!--bro: A.P. Indy--,Storm Cat,Weekend Surprise,Secretariat
  "369621","337102","445014","335975",     // Tale of the Cat,Storm Cat,Yarn,Mr. Prospector
  "362873","337421","2436004","336085",     // Northern Afleet,Afleet,Nuryette,Nureyev
  "225628","145106","169374","333544",     // サクラバクシンオー,サクラユタカオー,サクラハゴロモ,Northern Taste
  "337424","336082","394662","335990",     // Danehill,Danzig,Razyana,His Majesty
  "336430","336082","391704","333957",     // Green Desert,Danzig,Foreign Courier <!--bro: Twining--,Sir Ivor
  "337102","336177","393602","333978",     // Storm Cat,Storm Bird,Terlingua,Secretariat
  "336082","334002","389652","334079",     // Danzig,Northern Dancer,Pas de Nom,Admiral's Voyage
  "333544","334002","386266","335344",     // Northern Taste,Northern Dancer,Lady Victoria,Victoria Park
  "334378","334377","387922","338878",     // Nearctic,Nearco,Lady Angela,Hyperion
  "1352732","1189721","899740","336572",   // -,レイデオロ,Higher Love,Sadler's Wells
  "1360501","1171845","1328547","897467",  // -,シルバーステート,Forever Yours,Motivator
  "","1090360","1222746","1178418",        // -,オルフェーヴル,エレナレジーナ,Novellist
  "1353543","1042049","1048499","293624",  // -,ルーラーシップ,ステラリード,スペシャルウィーク
  "1358728","1177896","1192324","700008",  // -,アジアエクスプレス,スプリングノート,シンボリクリスエス
  "1359791","1162905","1218594","1106251", // -,サトノクラウン,スーンシャイン,ジャスタウェイ
  "1357867","1134867","1174487","901749",  // -,レッドファルクス,ゼロカラノキセキ,キンシャサノキセキ
  "","1089850","1188244","742976",         // -,ロードカナロア,ディメンシオン,ディープインパクト 
  "1356575","1042049","1151934","742976",  // -,ルーラーシップ,レトロクラシック,ディープインパクト
  "1338680","1141719","11836982","881793",  // -,ミッキーアイル,ローズシュクレ,スマートファルコン
  "1332230","1127395","758780","262443",   // アフタヌーンティー,Dunkirk,ラズベリータイム,フジキセキ
  "1339626","1293348","1207115","619768",  // アンモシエラ,Bricks and Mortar,サンドクイーン,ゴールドアリュール
  "1333830","1083691","1046156","362799",  // カプセル,Majestic Warrior,フライトオブスワン,French Deputy
  "1341411","1123166","1192324","700008",  // スプリットキャスト,コパノリッキー,スプリングノート,シンボリクリスエス
  "1339278","1090360","1194122","1127380", // トレベルオール,オルフェーヴル,トレサンセール,Rip Van Winkle
  "1332989","1240055","899928","372708",   // ドレアンティア,Drefong,スズカシャンティー,Giant's Causeway
  "1341896","1328548","1328548","858233",  // ホームアンドドライ,シュヴァルグラン,Sailing Home,Shamardal
  "1334729","1120570","1101171","372610",  // リヤンイヴェール,キズナ,デプロマトウショウ,Fasliyev
  "1327613","1083691","1151744","749845",  // マジックブルー,Majestic Warrior<!--sire: A.P. Indy--,エンパイアブルー,Empire Maker
  "1340841","1124297","1190679","1046333", // メタシアター,エピファネイア,ミッシングリンク,ヴィクトワールピサ
  "1341783","1162905","1237775","1341783", // ラヴシュプリーム,サトノクラウン,パーフェクトラヴ,オルフェーヴル
  "1319031","1083691","1319031","324933",  // イエルバブエナ,Majestic Warrior,ミンティエアー,アグネスタキオン
  "1318725","1052586","758780","262443",   // グランツベリー,エイシンフラッシュ,ラズベリータイム,フジキセキ
  "1326088","1137571","1227544","1128881", // セントアイヴス,サトノアラジン,Quest For Wonder,Makfi
  "1320751","1138240","1048499","293624",  // テラステラ,モーリス,ステラリード,スペシャルウィーク
  "1324236","1240055","11519342","742976",  // ドンカルロ,Drefong,レトロクラシック,ディープインパクト
  "1327597","1120570","899740","336572",   // ボンドオブラヴ,キズナ,Higher Love,Sadler's Wells
  "1325233","1127395","1174487","901749",  // メグルキセキ,Dunkirk,ゼロカラノキセキ,キンシャサノキセキ
  "1323783","1138240","1141447","262443",  // モーメントキャッチ,モーリス,シュシュブリーズ,フジキセキ
  "1351767","365171","1250088","1003260",  // モダナイズクィーン,Distorted Humor,Never Grow Old,Scat Daddy
  "1325753","1141719","1192967","372784",  // ランドオブラヴ,ミッキーアイル,ルックオブラヴ <!--mare: Higher Love--,King's Best
  "1321386","1162905","1094387","729458",  // レインシュプリーム,サトノクラウン,グルーヴィクイーン,キングカメハメハ
  "","1197223","/","621945",               // -,Adelaide. <!--sire: Galileo--,Anantha,Hussonet <!--sire: Mr.Prospector--
  "","3","/","852660",                     // - ,De Gaulle <!--sire: Exceed And Excel--,Avienus,Reset
  "1305404","1120570","853083","369845",   // アシタカ,キズナ,ミスペンバリー,Montjeu
  "1306822","1124297","1042314","615577",  // アリシアン,エピファネイア,ベネディーレ,クロフネ
  "1313028","1162685","1138743","615577",  // アンダーレ,ダノンレジェンド,アラマサクロフネ,クロフネ
  "1312217","1141719","1227544","1128881", // ウィンダミア,ミッキーアイル,Quest For Wonder,Makfi
  "1305437","760084","862103","362679",    // オトニエル,メイショウサムソン,Lady Bountiful,Spectrum
  "1313232","1083691","1174487","901749",  // キセキノセンシ,Majestic Warrior,ゼロカラノキセキ,キンシャサノキセキ
  "1307185","1089850","1048499","293624",  // キングエルメス,ロードカナロア,ステラリード,スペシャルウィーク
  "1307506","1028940","1087908","294840",  // スパルタレオニダス,Henny Huges,ゼフィランサス,キングヘイロー
  "1305263","1138240","806779","324933",   // タレントゥーサ,モーリス,ショウナンタレント,アグネスタキオン
  "1306732","1155349","1040671","333844",  // ドグマ,キタサンブラック,ショウナンカラット,Brian's Time
  "1303945","1083691","705382","333862",   // ハキ,Majestic Warrior,レフィナーダ,Sunday Silence
  "1310478","1177896","1142018","626923",  // ミルニュイ,アジアエクスプレス,アルーシュ,Chichicastenango
  "","/","/","347970",                     // Allur,Chardonney Tcheque,Allonya,Protektor
  "","1210979","/","1000885",              // Arnika,Move Your Vision,Aeronwy Thomas,Dylan Thomas <!--sire: Danehill--
  "","1210979","/","745105",               // Friseur,Move Your Vision,Fashion Icon,Van Nistelrooy <!--sire: Storm Cat--
  "12","848826","/","777061",              // Juvenile,Simplex,Jubilantka,Byron <!--sire: Green Dersert--
  "1349478","1051578","1349479","1003266", // Mac Swiney,New Approach,Halla Na Saoire,Teofilo
  "","1181647","/","337286",               // Rain Man,Anodin,Rainfire,Rainbow Quest
  "","1210979","984905","372784",          // Schafer,Move Your Vision,Saffwah,King's Best
  "","1210979","/","1111214",              // Shy Boy,Move Your Vision,Sougy,Naaqoos
  "","1181647","2","719111",               // Surrogate,Anodin,Surveyance,Broken Vow <!--sire: Unbridled--
  "1262084","1090394","713693","372626",   // カーディフ,グランプリボス,ウェルシュステラ,Zafonic
  "1265962","1110914","1086752","369621",  // キャットウォーク,スピルバーグ,スイートマカロン,Tale of the Cat
  "1270679","1120570","1227544","1128881", // クエストフォーラヴ,キズナ,Quest For Wonder,Makfi
  "1261858","888832","634454","337445",    // スターリーソング,エスポワールシチー,ウディバードソング,Woodman
  "1270615","1120570","1127401","1051578", // バスラットレオン,キズナ,バスラットアマル,New Approach
  "1270121","905163","1120991","324933",   // フィルメーザ,タートルボウル,コスモライセンス,アグネスタキオン
  "1264239","901749","891679","615577",    // ランペロニキ,キンシャサノキセキ,チェルカ,クロフネ
  "1269968","729458","1239592","714343",   // リナーシェ,キングカメハメハ,Vapour,Galileo
  "1229710","1040066","705382","333862",   // アレアシオン,カジノドライヴ,レフィナーダ,Sunday Silence
  "1235170","1124297","1105398","274883",  // エピファレーヌ,エピファネイア,ウインアルエット,ダンスインザダーク
  "1234092","1110914","1086752","369621",  // キャッツアイ,スピルバーグ,スイートマカロン,Tale of the Cat
  "1235702","1129430","1117351","742976",  // スマイリンフィット,Workforce,スマイリンアスク,ディープインパクト
  "1237701","1089850","853083","369845",   // パンサラッサ,ロードカナロア,ミスペンバリー,Montjeu
  "1232568","1090394","989837","321138",   // モズピンポン,グランプリボス,グランプリエンゼル,アグネスデジタル
  "3","1157888","/","9054892",             // Dirty Work,Written Tycoon,Maidel,Ad Valorem
  "/","1132659","/","365073",              // Prince Elzaam,Elzaam <!--sire: Redoute's Choise s__m: Kingmambo--,Emma Princess,Bahhare
  "1222746","1178418","1102843","626942",  // エレナレジーナ,Novellist,フェニーチェ,Falbrav
  "1215530","1089850","736165","333862",   // カナロアガール,ロードカナロア,サンデーローザ,Sunday Silence
  "1214886","1106251","713693","372626",   // スパーブアゲイン,ジャスタウェイ,ウェルシュステラ,Zafonic
  "1219242","1178418","1048499","293624",  // プシュケ,Novellist,ステラリード,スペシャルウィーク
  "1244471","1111493","1195882","1029544", // ヴァッシュモン,Dubawi,Daksha,Authorized
  "12","1019744","/","337282",             // Strategic,Kodiac <!--sire:Danehill bro: Invincible Spirit--,Run To Jane,Doyoun
  "1206175","286968","1042633","729458",   // インディチャンプ,ステイゴールド,ウィルパワー,キングカメハメハ
  "1205954","1042049","1029578","361091",  // ウェディングソング,ルーラーシップ,Monsoon Wedding,Monsun
  "1209293","1042049","713693","372626",   // シーザライト,ルーラーシップ,ウェルシュステラ,Zafonic
  "1209311","1164976","1047703","294840",  // ソイカウボーイ <!--bro: ウォーターナビレラ--,Toby's Corner,シャイニングサヤカ,キングヘイロー
  "1207417","881793","1098776","263172",   // フッフール,スマートファルコン,ベイビーローズ,Singspiel
  "1201748","1028940","705382","333862",   // レイナグラシア,Henny Hughes,レフィナーダ,Sunday Silence
  "2","1194118","3","1111479",             // Berkshire Lady,Star Witness,Placement,Savabeel
  "10","1178081","/","626869",             // Gold Standard,Sebring,Coniston Gem,Greig
  "1241210","1112380","1083760","372662",  // Klimt,Quality Road,Inventive,Dixie Union
  "1293380","372708","986108","621146",    // Not This Time,Giant's Causeway,Miss Macy Sue,Trippi
  "1314304","1077228","1113658","375619",  // Overshare,I Am Invincible,Savannah's Choice,Redoute's Choice
  "2","1036918","6","714343",              // Swing Valley,Lawman,Gaze,Galileo
  "1226963","1143755","1114462","714910",  // Thunder Snow,Helmet,Eastern Joy,Dubai Destination
  "5","1039506","/","1023337",             // Trapeze Artist,Snitzel,Trappes,Domesday
  "1193288","719250","1192903","361247",   // オールザベスト,Speightstown,Fandangle,Holy Bull
  "1189284","619768","989119","225628",    // オニダツ,ゴールドアリュール,アフィニティ,サクラバクシンオー
  "1192099","286968","899740","336572",    // クレッシェンドラヴ,ステイゴールド,Higher Love,Sadler's Wells
  "1190660","701577","1051710","714421",   // コンフォルツァ,ネオユニヴァース,グレイスフルソング,Rock of Gibraltar
  "1192324","700008","1047404","293624",   // スプリングノート,シンボリクリスエス,グリューネワルト,スペシャルウィーク
  "1188165","1031979","808410","336572",   // ディグアップセンス,Street Sense,Atarama,Sadler's Wells
  "1186323","324971","732852","287925",    // ハニートリップ,マンハッタンカフェ,ネヴァーピリオド,タイキシャトル
  "1191672","701577","1157852","365118",   // ブライトメモリー,ネオユニヴァース,Majestic Bright,Pivotal
  "5","1194118","1298193","700018",        // Lycurgus,Star Witness,Star Witness,Geblitzt,Testa Rossa
  "6","1036918","4","341019",              // Marcel,Lawman,Mauresmo,Marju
  "1212779","363470","621484","362599",    // Moonlight Magic,Cape Cross,Melikah <!--mare: Urban Sea--,Lammtarra
  "/","861088","/","361072",               // On The Go Again,Arakan,Lady Bolino,King's Theatre <!--sire: Sadler's Wells--
  "/","1223318","1023777","362681",        // Tay Swift,Rothesay <!--sire: Fastnet Rock--,Perfect Feeling,Spinning World
  "1224396","1019761","1051446","714343",  // Turret Rocks,Fastnet Rock,Beyond Compare,Galileo
  "1167975","299089","615084","161740",    // エネルワンダー,グラスワンダー,フラッシュカード,Tony Bin
  "1172347","1148419","888245","321292",   // チタンクレバー,Behkabad,ウインプラチナム,ゼンノエルシド
  "1170063","729458","743110","293624",    // リオンディーズ,キングカメハメハ,シーザリオ,スペシャルウィーク
  "1238289","1127396","1238284","1015914", // American Pharoah,Pioneerof the Nile,Littleprincessemma,Yankee Gentleman
  "/","1027109","796292","369182",         // Just Positive,Just As Well,Positive Thoughts,King of Kings <!--sire: Sadler's Wells--
  "1212721","1003266","1053644","361977",  // Pleascach,Teofilo,Toirneach,Thunder Gulch
  "1157625","742996","1098777","621167",   // グランデサムライ,サムライハート,パラダイスコースト,Fusaichi Pegasus
  "1149141","722158","298204","214492",    // サウンドアラムシャ,ハーツクライ,メジロレーマー,リンドシェーバー
  "1193275","1127214","1031933","339861",  // サウンドジャンゴ,Desert Party,Salt Water Reign,Salt Lake
  "1150915","725485","614382","333707",    // サウンドフォース,ダイワメジャー,レーヴドゲラン,Real Shadai
  "1150673","722797","447217","336430",    // シェアザジョイフル,ブラックタイド,Peridot,Green Desert
  "1157776","742976","1143075","361396",   // ダノンプラチナ,ディープインパクト,Badeelah,Unbridled's Song
  "1150084","849057","324992","161740",    // ヒトミヲトジテ,Bago,セトアフロディーデ,Tony Bin
  "1151936","729458","713851","333862",    // ドゥラメンテ,キングカメハメハ,アドマイヤグルーヴ,Sunday Silence
  "1157711","742976","1127173","337102",   // リアルスティール,ディープインパクト,Loves Only Me,Storm Cat
  "1224756","1019761","896750","341066",   // Fascinating Rock,Fastnet Rock,Miss Polaris,Polar Falcon
  "/","1051578","1053644","361977",        // Ionsai Nua,New Approach,Toirneach,Thunder Gulch
  "1284493","372708","1349315","339653",   // Protonico,Giant's Causeway,Alpha Spirit,A.P. Indy
  "1283357","849372","1341944","339954",   // Tapiture,Tapit,Free Spin,Olympio
  "1142398","262443","1022407","337423",   // イスラボニータ,フジキセキ,Isla Cozzene,Cozzene
  "1141711","737164","899507","337424",    // ウィアーワン,アドマイヤジャパン,My Hope,Danehill
  "1211258","848846","1211217","337965",   // California Chrome,Lucky Pulpit,Love the Chase,Not For Love
  "1134550","626923","309040","333862",    // キングズオブザサン,Chichicastenango,スティンガー,Sunday Silence
  "112440","619817","750290","333862",     // ロゴタイプ,ローエングリン,ステレオタイプ,Sunday Silence
  "1330072","1000885","1031792","362681",  // Tom Melbourne,Dylan Thomas,Roshanak,Spinning World
  "1141447","262443","888283","700008",    // シュシュブリーズ,フジキセキ,ブリズデロートンヌ,シンボリクリスエス
  "1141719","742976","899522","714421",    // ミッキーアイル,ディープインパクト,スターアイル,Rock of Gibraltar
  "1138240","801447","729927","358543",    // モーリス,スクリーンヒーロー,メジロフランシス,Carnegie <!--sire: Sadler's Wells--
  "1181745","721553","1025502","361977",   // Mshawish,Medaglia d'Oro,Thunder Bayou,Thunder Gulch
  "1328929","1039506","1350499","343051",  // Shamus Award,Snitzel,Sunset Express,Success Express
  "1120570","742976","383744","337102",    // キズナ,ディープインパクト,Catequil,Storm Cat
  "1122613","722158","713693","372626",    // ゴッドフロアー,ハーツクライ,ウェルシュステラ,Zafonic
  "1162690","1030715","1027105","339653",  // ヒュウマ,Any Given Saturday,Moravia,A.P. Indy
  "1228789","369845","875146","347989",    // Camelot,Montjeu,Tarfah,Kingmambo
  "/","745493","/","336572",               // Estiqbaal,Oasis Dream,Manayer,Sadler's Wells
  "1242970","361396","858751","337848",    // Graydar,Unbridled's Song,Sweetest Smile,Dehere
  "/","1036918","1070240","361623",        // Janey Muddles,Lawman,Slip Dance,Celtic Swing
  "1210979","714343","451692","337444",    // Move Your Vision,Galileo,Cash Run <!--bro: Frestry--,Seeking The Gold
  "1178418","361091","1178417","340377",   // Novellist <!--from: プシュケ-ステラリード--,Monsun,Night Lagoon,Lagunas
  "/","999248","983067","372626",          // Rebel Dane,California Dane <!--sire: Danehill--,Texarcana,More Than Ready
  "1148362","749845","998762","347989",    // Sky Kingdom,Empire Maker,Sky Beam,Kingmambo
  "1176880","621973","1175504","335964",   // Tiffilia,Macho Uno,Tiffed,Seattle Slew
  "1105398","274883","442364","347814",    // ウインアルエット,ダンスインザダーク,Larkwhistle,Silver Deputy
  "1106251","722158","619968","336574",    // ジャスタウェイ,ハーツクライ,シビル,Wild Again
  "1110554","742976","852566","369004",    // ディープブリランテ,ディープインパクト,Love And Bubbles,Loup Sauvage
  "1110458","286968","808412","337424",    // フェノーメノ,ステイゴールド,De Laroche,Danehill
  "/","372531","743955","361071",          // Albaasil,Dansili,Wrong Key,Key of Luck
  "1242869","365171","744285","335964",    // Alternation,Distorted Humor,Alternate,Seattle Slew
  "1239791","339653","973550","341573",    // Astrology,A.P. Indy,Quiet Eclipse,Quiet American
  "2","369845","1014107","342649",         // Boundless Joy,Montjeu,Elegant As Always,Nashwan
  "3","1113348","450138","3365722",        // Burn The Floor,Indian Haven,Dance Time,Sadler's Wells
  "1161935","714343","1019747","337424",   // Frankel,Galileo,Kind,Danehill
  "1277210","714343","1209676","337496",   // Galicuix,Galileo,Clizia,Machiavellian
  "1211633","368799","1159029","621167",   // Niagara,Encosta De Lago,River Song,Fusaichi Pegasus
  "1143913","745340","440542","336572",    // Reliable Man,Dalakhani,On Fair Stage,Sadler's Wells
  "1176060","372671","852867","340629",    // Shackleford,Forestry,Oatsee,Unbridled
  "1088803","722158","287743","336177",    // ウインバリアシオン,ハーツクライ,スーパーバレリーナ,Storm Bird
  "1090360","286968","316406","203356",    // オルフェーヴル,ステイゴールド,オリエンタルアート,メジロマックイーン
  "1128972","1028940","620835","335154",   // サウンドボルケーノ,Henny Hughes,Cosmic Wing,Halo
  "5","341457","432717","336348",          // Ato,Royal Academy,Another Legend,Lyphard's Wish
  "1162401","372708","850947","336397",    // Await The Dawn,Giant's Causeway,Valentine Band,Dixieland Band
  "1161933","336572","1019747","337424",   // Bullet Train,Sadler's Wells,Kind,Danehill
  "/","848724","1062776","110877",         // Cuiseach,Bachelor Duke,Masnada,Erins Isle
  "1348075","369587","879023","361428",    // Go Go Gadget,Areion,Globuli,Surako
  "1132287","365118","1016522","337424",   // Kitty Kiernan,Pivotal,Alstemeria,Danehill
  "1211385","714421","838934","341457",    // Maria Lee,Rock of Gibraltar,Elida,Royal Academy
  "/","718156","/","337862",               // Toorak Toff,Show A Heart,Orong,Grand Lodge
  "/","848599","/","341084",               // The Apache,Mogok <!--sire: Storm Cat--,Apache Rose,Dolpour <!--sire: Sadler's Wells--
  "1047404","293624","620034","365099",    // グリューネワルト,スペシャルウィーク,シェーンクライト,Helissio
  "1042049","729458","274849","161740",    // ルーラーシップ,キングカメハメハ,エアグルーヴ,Tony Bin
  "1328053","365262","1016398","337445",   // Byword,Peintre Celebre,Binche,Woodman
  "1112651","719250","448412","347818",    // Haynesfield,Speightstown,Nothing Special,Tejabo
  "1195139","337102","449537","336209",    // Calimonco,Storm Cat,Sweet Life,Kris S.
  "1343004","375169","452056","340241",    // Love Conquers All,Mossman,She's a Meanie,Prince Salieri
  "1239739","719408","973118","336531",    // Monaco Consul,High Chaparral,Argante,Star Way
  "1114930","745493","898399","343943",    // Querari,Oasis Dream,Quetena,Acatenango
  "1113706","363470","225908","336395",    // Sea The Stars,Cape Cross <!--sire: Green Desert--,Urban Sea <!--bro: King's Best--,Miswaki
  "1329754","375619","447370","343051",    // Tickets,Redoute's Choice,Staging,Success Express
  "1127395","361396","452435","339653",    // Dunkirk,Unbridled's Song,Secret Status,A.P. Indy
  "1301779","339653","439019","336082",    // A.P. Answer,A.P. Indy,Pas De Response,Danzig
  "1084040","372662","1065652","338072",   // Dixie Chatter,Dixie Union,Mini Chat,Deputy Minister
  "1098195","337102","714994","336350",    // Many Rivers,Storm cat,Christmas in Aiken,Affirmed
  "1111988","369845","859901","341032",    // Montmarie,Montjeu,Flyamore <!--bro: シルヴァースカヤ--,Sanglamore
  "1051578","714343","413674","336322",    // New Approach <!--bro: シンコウフォレスト--,Galileo,Park Express,Ahonoora
  "/","342033","858574","337848",          // Oracy,Zabeel,Lady Dehere,Dehere
  "1178081","372626","976239","363038",    // Sebring,More Than Ready,Purespeed,Flying Spur
  "1085920","621122","878771","336202",    // Twice Over,Observatory,Double Crossed,Caerleon
  "1051710","714421","713690","336572",    // グレイスフルソング,Rock of Gibraltar,フェアリーバラード,Sadler's Wells
  "1031789","337102","879960","335975",    // Brave Tin Soldier,Storm Cat,Bless <!--bro: Fusaichi Pegasus--,Mr. Prospector
  "1030180","372784","1017927","337692",   // King's Apostle,King's Best,Politesse,Barathea
  "1003705","337563","1000702","337427",   // ロックドゥカンブ,Red Ransom,Fairy Lights,Fairy King
  "1003266","714343","845472","337424",    // Teofilo,Galileo,Speirbhean,Danehill
  "999168","339653","434233","341573",     // Bernardini,A.P. Indy,Cara Rafaela,Quiet American
  "1002657","337102","841073","339653",    // Bluegrass Cat,Storm Cat,She's a Winner,A.P. Indy
  "1032636","374987","865488","336880",    // Bold Chieftain,Chief Seattle,Hooked On Music,Seattle Dancer
  "1039824","844710","1038944","342881",   // Jay Peg,Camden Park,Laptop Lady,Al Mufti
  "1027109","339653","621356","336085",    // Just As Well,A.P. Indy,No Matter What,Nureyev
  "1194886","359636","437904","340272",    // Kaphero,Danzero,Kapchat,Centaine
  "1039871","786099","1039008","339662",   // Rebel King,National Emblem,Cousin Linda,Badger Land
  "1036815","375619","1035662","203637",   // Sharkbite,Redoute's Choice,Back Pass,Quest for Fame
  "1003684","363392","1003683","345381",   // Stormy River,Verglas,Miss Bio,River Mist
  "901749","262443","450583","335991",     // キンシャサノキセキ,フジキセキ,Keltshaan,Pleasant Colony
  "876394","369639","424391","336305",     // Chinese Dragon,Stravinsky,Fabulous Fairy,Alydar
  "1225183","337424","408229","333740",    // Luminaria,Danehill,Smaoineamh,Tap On Wood
  "/","368646","1059529","339586",         // Saintly Prospect,Sweetsouthernsaint,Hasty Alarm,Darn That Alarm
  "899740","336572","624747","336087",     // Higher Love,Sadler's Wells,Dollar Bird,Kris
  "861842","340629","434266","337339",     // Eddington,Unbridled,Fashion Star,Chief's Crown
  "904672","337496","406471","333809",     // Mullins Bay,Machiavellian,Bella Colora,Bellypha
  "874615","369639","434163","340587",     // Soldier's Tale,Stravinsky,Myrtle,Batshoof <!--sire: Sadler's Wells--
  "729458","347989","440324","337436",     // キングカメハメハ,Kingmambo,Manfath,Last Tycoon
  "725485","333862","213918","333544",     // ダイワメジャー,Sunday Silence,スカーレットブーケ,Northern Taste
  "722158","333862","233121","161740",     // ハーツクライ,Sunday Silence,アイリッシュダンス,Tony Bin
  "1066871","621945","1060133","337993",   // Host,Hussonet <!--sire: Mr.Prospector--,Colonna Traiana,Roy
  "749316","337424","396395","336543",     // Solskjaer,Danehill,Lyndonville,Top Ville
  "1163248","336082","394662","335990",    // Family <!--bro: Danehill--,Danzig,Razyana,His Majesty
  "719408","336572","715140","336887",     // High Chaparral,Sadler's Wells,Kasora,Darshaan
  "744351","339653","404719","335975",     // Mineshaft <!--Bro: Monashee Mountain--,A.P. Indy,// Prospectors Delite <!--CT ?--,Mr. Prospector
  "716091","337496","439242","336881",     // Right Approach,Machiavellian,Abbey Strand,Shadeed
  "793091","337424","415909","336179",     // Westerner,Danehill,Walensee,Troy
  "619835","333862","190874","333544",     // デュランダル,Sunday Silence,サワヤカプリンセス,Northern Taste
  "719111","340629","714631","333996",     // Broken Vow,Unbridled,Wedding Vow,Nijinsky
  "622244","372626","409193","340408",     // Count Dubois,Zafonic,Madame Dubois,Legend of France <!--sire: Lyphard--
  "615577","362799","615607","352327",     // クロフネ,French Deputy,Blue Avenue,Classic Go Go
  "372708","337102","426762","337553",     // Giant's Causeway,Storm Cat,Mariah's Storm,Rahy
  "372626","344537","449057","337445",     // More Than Ready,Southern Halo,Woodman's Girl,Woodman
  "372531","337424","448867","343012",     // Dansili,Danehill,Hasili,Kahyasi
  "372572","340380","448956","339699",     // Silvano,Lomitas,Spirit of Eagles,Beau's Eagle
  "369437","337424","407980","336333",     // Tiger Hill,Danehill,The Filly,Appiani
  "838934","341457","828196","336090",     // Elida,Royal Academy,Saviour,Majestic Light
  "287925","337092","396402","336202",     // タイキシャトル,Devil's Bag,Welsh Muffin,Caerleon
  "363038","337424","434439","335975",     // Flying Spur,Danehill,Rolls <!--Encosta De Lago--,Mr. Prospector
  "262443","333862","383129","334064",     // フジキセキ,Sunday Silence,Millracer,Le Fabuleux
  "341896","336572","393206","334740",     // Scenic,Sadler's Wells,Idylic,Foolish Pleasure
  "413674","336322","413673","334355",     // Park Express <!--2400m--,Ahonoora,Helen Nichols,Martial
  "394662","335990","394654","334012",     // Razyana,His Majesty,Spring Adieu,Buckpasser
  "404842","333978","404841","334012",     // Weekend Surprise <!--from: A.P. Indy TT--,Secretariat,Lassie Dear,Buckpasser
  "333978","334140","388747","339120",     // Secretariat <!--bro: Sir Gaylord--,Bold Ruler,Somethingroyal,Princequillo
  "334002","334378","386225","334375",     // Northern Dancer,Nearctic,Natalma,Native Dancer
  "387922","338878","388720","338378",     // Lady Angela,Hyperion,Sister Sarah,Abbots Trace
  "334812","334813","393254","338206",     // Phalaris,Polymelus,Bromus,Sainfoin
  "1360202","1293348","1239592","714343",  // -,Bricks and Mortar,Vapour,Galileo
  "1356559","1170063","1151744","749845",  // -,リオンディーズ,エンパイアブルー,Empire Maker
  "1358048","1141719","1183660","372784",  // -,ミッキーアイル,スマートオランプ,King's Best
  "1358795","1104811","1192967","372784",  // -,ゴールドシップ,ルックオブラヴ,King's Best
  "1333938","1189721","1048499","293624",  // アスロス,レイデオロ,ステラリード,スペシャルウィーク
  "1349554","1288621","1313933","372626",  // ジーベック,Gun Runner,Stellar Agent,More Than Ready
  "1337881","1025279","1166447","293624",  // スペリオルパンサー,Sinister Minister,ビアンカリボン,スペシャルウィーク
  "1142398","1340001","1226646","1193370", // マジックオブラブ,イスラボニータ,Silver Four,Majesticperfection
  "1336804","1226963","1141447","262443",  // レライタム,Thunder Snow,シュシュブリーズ,フジキセキ
  "1332637","1120570","853083","369845",   // ロディニア,キズナ,ミスペンバリー,Montjeu
  "1324434","1124297","1154897","722797",  // カグヤ,エピファネイア,アスカビレン,ブラックタイド
  "1321865","1042049","1105398","274883",  // コトヴィア,ルーラーシップ,ウインアルエット,ダンスインザダーク
  "1360740","1165010","1249475","1003260", // サイブレーカー,Uncle Mo,Downside Scenario,Scat Daddy
  "1327752","1151936","1314014","1164410", // ソアヴィータ,ドゥラメンテ,Gianna's Dream,Twirling Candy
  "1351763","1238289","1282355","849372",  // メリタテス,American Pharoah,Gem Gem,Tapit
  "1307341","1171845","1051710","714421",  // アタビズム,シルバーステート,グレイスフルソング,Rock of Gibraltar
  "1312250","729458","1239594","621983",   // アンジアン,キングカメハメハ,Satyana,Street Cry
  "1309370","1123166","1123223","626923",  // キタノキャスター,コパノリッキー,キープザサミット,Chichicastenango
  "1307647","1194505","1090151","615577",  // ケウ,ラニ,ミヤサンキューティ,クロフネ
  "1312789","1052586","1151934","742976",  // サクソフォン,エイシンフラッシュ,レトロクラシック,ディープインパクト
  "1310660","1085636","1148461","739144",  // スリールトウショウ,Pyro,ソヴールトウショウ,スズカフェニックス
  "","1003684","1085077","372784",         // Arc,Stormy River,Alsace,King's Best
  "","1003684","/","1085196",              // Meghato,Stormy River,Megkapo,The Bogberry
  "1270222","1141719","1192967","372784",  // アイルオブラヴ,ミッキーアイル,ルックオブラヴ,King's Best
  "1265688","1138240","1048499","293624",  // カイザーノヴァ,モーリス,ステラリード,スペシャルウィーク
  "1261619","1111008","328153","333894",   // コマンドブルックス,ワールドエース,アスクコマンダー,Commander in Chief
  "1270754","1124297","1122613","722158",  // ゴッドシエル,エピファネイア,ゴッドフロアー,ハーツクライ
  "1270270","1178418","1136979","742976",  // ブライテストダーク,Novellist,ビキニスタイル,ディープインパクト
  "1229751","615577","707170","161740",    // グラニュエル,クロフネ,クリヴィア,Tony Bin
  "1237775","1090360","899740","336572",   // パーフェクトラヴ,オルフェーヴル,Higher Love,Sadler's Wells
  "1263288","742976","799647","237704",    // パープルレディー,ディープインパクト,メリッサ <!--CT ?--,White Muzzle
  "1270330","891931","1142827","369358",   // ペイシャスカイ,ディープスカイ,リサプシュケ,Wild Rush
  "1233814","1042049","1048499","293624",  // パラスアテナ,ルーラーシップ,ステラリード,スペシャルウィーク
  "1221953","742976","1209432","1003260",  // カレンブーケドール,ディープインパクト,Solaria,Scat Daddy
  "1214780","1127395","705382","333862",   // ナグラーダ,Dunkirk,レフィナーダ,Sunday Silence
  "1298336","1181460","1298193","700018",  // Vow And Declare,Declaration of War,Geblitzt,Testa Rossa
  "1206568","1129430","1048499","293624",  // エンジェルリード,Workforce,ステラリード,スペシャルウィーク
  "1204231","722158","853083","369845",    // ディアローグ,ハーツクライ,ミスペンバリー,Montjeu
  "1208482","725485","853207","362868",    // ヘッドストリーム,ダイワメジャー,アシュレイリバー,Mr. Greeley
  "2","1111493","1032805","365118",        // Key Bid,Dubawi,Silca Chiave,Pivotal
  "1190284","287925","1044161","700008",   // ウマインボルト,タイキシャトル,マイカ,シンボリクリスエス
  "1185015","762497","615084","161740",    // カザキリ,オンファイア,フラッシュカード,Tony Bin
  "1192342","700008","1048499","293624",   // ステラバレット,シンボリクリスエス,ステラリード,スペシャルウィーク
  "1167454","742976","328153","333894",    // ドゥオーモ,ディープインパクト,アスクコマンダー,Commander in Chief
  "1150265","702412","327511","362599",    // ビヨンジオール,サクラプレジデント,サムシングナイス,Lammtarra
  "/","1113706","1225183","337424",        // Latoscana,Sea The Stars,Luminaria,Danehill
  "1164986","849372","749091","361396",    // エイシンソルティー,Tapit,Eightyfivebroadst,Unbridled's Song
  "1349479","1003266","1014259","203637",  // Halla Na Saoire,Teofilo,Siamsa,Quest for Fame
  "1124297","700008","743110","293624",    // エピファネイア,シンボリクリスエス,シーザリオ,スペシャルウィーク
  "2","363038","5","342037",               // Green Roller,Flying Spur,Given,Canny Lad
  "1129435","372708","790654","335975",    // エーシンスピーダー,Giant's Causeway,Myhrr <!--bro: Kingmambo--,Mr. Prospector
  "1277801","361091","774260","263178",    // Fiorente,Monsun,Desert Bloom,Pilsudski
  "1180866","876602","875149","362799",    // Majestic Harbor,RockPort Harbor,Champagne Royale,French Deputy
  "1048499","293624","713693","347622",    // ステラリード,スベシャルウィーク,ウェルシュステラ,Zafonic
  "1044161","700008","314859","333862",    // マイカ,シンボリクリスエス,タニノティアラ,Sunday Silence
  "1127251","719408","1035559","337556",   // Golden Sword,High Chaparral,Sitara,Salse
  "1100194","369845","432012","336570",    // Jukebox Jury,Montjeu,Mare Aux Fees,Kenmare
  "1177686","714343","1012131","336887",   // Scandal Sheet,Galileo,Sandrella,Darshaan
  "1115148","372531","789369","337417",    // Harbinger,Dansili,Penang Pearl,Bering
  "1099798","369845","1099327","203637",   // Tavistock,Montejeu,Upstage,Quest For Fame
  "1029546","372626","845007","372626",    // Traffic Guard,More Than Ready,Street Scene,Zafonic
  "1053021","372531","789227","339566",    // Illustrious Blue,Dansili,Gipsy Moth,Efisio
  "1032643","342010","448918","346041",    // Lord of England,Dashing Blade,Loveria,Los Santos
  "757705","333862","286866","333887",     // アドマイヤメイン,Sunday Silence,プロモーション,Hector Protector
  "905556","339653","438926","335975",     // A. P. Arrow,A.P. Indy,Garimpeiro,Mr. Prospector
  "742976","333862","430846","339659",     // ディープインパクト,Sunday Silence,Wind in Her Hair,Alzao
  "722797","333862","430846","339659",     // ブラックタイド,Sunday Silence,Wind in Her Hair,Alzao
  "700008","336209","432426","344896",     // シンボリクリスエス,Kris S.,Tee Kay,Gold Meridian
  "714343","336572","225908","336395",     // Galileo,Sadler's Wells,Urban Sea,Miswaki
  "324971","333862","429438","336203",     // マンハッタンカフェ,Sunday Silence,Subtle Change,Law Society
  "1014259","203637","967732","334003",    // Siamsa,Quest for Fame,Amoura,NorthFields
  "369845","336572","412281","336543",     // Montjeu,Sadler's Wells,Floripedes,Top Ville
  "293624","333862","197616","69360",      // スペシャルウィーク,Sunday Silence,キャンペンガール,マルゼンスキー
  "286968","333862","213942","333664",     // ステイゴールド,Sunday Silence,ゴールデンサッシュ,Dictus
  "274883","333862","383247","333996",     // ダンスインザダーク,Sunday Silence,Dancing key,Nijinsky
  "339653","335964","404842","333978",     // A.P. Indy,Seattle Slew,Weekend Surprise,Secretariat
  "333862","335154","393162","336892",     // Sunday Silence,Halo,Wishing Well,Understanding
  "336572","334002","392264","334859",     // Sadler's Wells,Northern Dancer,Fairy Bridge,Bold Reason
  "338878","334816","388664","334884",     // Hyperion,Gainsborough,Selene,Chaucer
  "334813","334814","398297","338150",     // Polymelus,Cyllene,Maid Marian,Hampton
  "338605","334782","398853","338157",     // William the Third,St. Simon,Gravity,Wisdom
  "338269","334782","398828","338150",     // Persimmon,St. Simon,Perdita,Hampton
  "335264","334782","398812","337611",     // St. Frusquin,St. Simon,Isabel,Plebeian
  "338199","334783","398872","338130",     // Donovan,Galopin,Mowerina,Scottish Chief
  "338185","334794","398416","338101",     // Ormonde,Bend Or,Lily Agnes,Macaroni
  "334782","334783","398729","338085",     // St. Simon,Galopin,St. Angela,King Tom
  "402891","334783","401221","338084",     // Corrie Roy,Galopin,Corrie,Stockwell
  "334794","334795","398260","338094",     // Bend Or,Doncaster,Rouge Rose,Thormanby
  "338649","338083","398685","338092",     // Hermit,Newminster,Seclusion,Tadmor
  "338084","334796","398305","336646",     // Stockwell,The Baron,Pocahontas,Glecoe
  "334777","334778","922235","922211"      // Eclipse,Marske,Spilletta,Regulus
  ][--i]) && (a[i].href =  s.length > 3 ?
    s.padStart(10, "0") + "/" :
    "https://www.pedigreequery.com/" + a[i].firstChild.data + s),
  i);

a = new Array(504);
i = 504;
let ctx = new Array(504), order = [], e, f;
while (
  ctx[--i] = [
    (e = (a[i] = d.body.children[i]).firstElementChild).firstChild.data,
    (s = e.lastChild.textContent).slice(0, 4),
    (f =["JP","IR","GB","NZ","GE","FR","HU","US","CA","CH","AU","SA"].indexOf(s[5] + s[6])),
    (s = s[s[8] == " " ? 9 : 8]),
  ]
, i);
i = 0;

order.push(
  ctx.map((v, x) => [v[0], x]).sort((a, b) => a[0] >= b[0] && -1).map(v => v[1]),
  ctx.map((v, x) => [v[1], x]).sort((a, b) => a[0] <= b[0] && -1).map(v => v[1]),
  ctx.map((v, x) => [v[2], x]).sort((a, b) => a[0] >= b[0] && -1).map(v => v[1]),
  ctx.map((v, x) => [v[3], x]).sort((a, b) => a[0] <= b[0] && -1).map(v => v[1])
);

/*
a = [...d.body.children];
a.pop();

let order = [
[
  45,16,243,74,90,104,422,363,296,421,11,199,250,342,20,185,44,230,275,287,43,188,229,198,300,196,197,236,427,187,195,213,299,42,41,186,420,15,467,194,10,184,444,451,53,242,479,266,440,249,404,318,228,457,305,285,443,442,235,62,9,445,227,8,384,265,212,447,193,183,211,286,456,182,14,392,317,478,264,450,192,274,486,284,383,210,402,248,426,191,7,433,234,419,484,263,181,241,209,52,56,466,455,485,226,6,118,418,316,247,480,298,283,161,432,331,282,281,280,425,40,304,439,262,438,424,431,360,341,279,190,55,441,19,395,261,225,39,374,295,382,61,208,224,233,430,207,303,223,446,18,180,240,454,423,437,259,330,260,206,93,463,449,239,38,232,461,273,73,89,459,453,246,329,315,205,293,245,292,189,37,179,54,204,429,231,203,178,117,476,60,428,417,36,202,436,92,59,99,141,58,492,103,391,81,408,145,72,128,116,448,115,127,98,114,359,272,35,258,473,339,297,158,400,314,350,257,71,12,340,364,271,472,291,159,126,256,222,88,488,34,33,113,87,140,244,373,164,501,146,112,107,497,494,155,106,386,381,144,70,313,399,482,221,372,302,97,328,133,96,409,358,349,220,405,470,32,68,377,489,51,111,110,152,390,50,327,157,371,312,80,407,219,348,290,238,491,31,278,67,412,493,406,79,255,78,496,357,270,311,254,166,125,410,160,124,326,356,167,66,132,380,301,30,310,105,397,269,355,483,29,154,347,389,28,435,77,123,27,338,268,354,26,131,465,139,218,267,376,151,346,475,25,458,49,411,24,253,337,362,135,452,370,217,277,369,469,368,309,289,109,474,48,130,76,490,150,385,23,378,388,149,500,134,344,471,460,462,163,308,468,252,138,336,102,396,69,481,325,216,324,86,403,148,464,85,137,288,387,57,307,122,401,65,379,502,64,121,351,120,119,101,47,495,353,237,100,153,91,136,165,398,162,143,84,335,95,63,83,394,498,375,22,156,306,345,294,343,108,323,334,17,21,393,361,322,367,366,365,251,499,75,147,333,332,129,321,142,215,434,46,94,276,320,214,319,82,487,352,477,416,415,414,413,201,200,177,176,175,174,173,172,171,170,169,168,13,5,4,3,2,1,0
],
[
  502,501,500,499,498,497,496,495,494,493,492,491,412,490,411,167,410,409,166,165,408,489,407,164,163,406,488,405,162,487,161,404,403,486,160,485,402,401,159,484,400,483,399,398,158,157,156,482,397,396,155,154,481,395,394,393,153,480,392,391,390,389,388,387,152,151,150,149,148,147,386,385,146,479,384,383,382,381,380,379,297,145,144,143,142,478,477,378,377,376,375,141,140,139,138,137,136,476,475,474,374,373,372,371,370,369,368,367,366,365,135,134,473,364,363,362,361,133,132,131,130,129,472,360,359,358,357,356,355,354,353,352,128,127,126,125,124,123,122,121,120,119,471,470,469,468,351,350,349,348,347,346,345,344,343,118,117,116,115,114,113,112,111,110,109,108,467,466,342,341,340,339,338,337,336,335,334,333,332,107,106,105,465,464,331,330,329,328,327,326,325,324,323,322,321,320,319,104,103,102,101,100,463,462,461,318,317,316,315,314,313,312,311,310,309,308,307,306,99,98,97,96,95,94,460,305,304,303,302,301,296,93,92,91,459,458,300,299,298,295,294,293,292,291,290,289,288,90,89,88,87,86,85,84,83,82,457,287,286,285,284,283,282,281,280,279,278,277,276,81,80,79,78,77,76,75,456,275,274,273,272,271,270,269,268,267,74,73,72,71,70,69,455,454,453,452,266,265,264,263,262,261,260,259,258,257,256,255,254,253,252,251,68,67,66,65,64,63,451,450,449,448,250,249,248,247,246,245,244,62,61,60,59,58,57,447,446,243,242,241,240,239,238,237,56,55,54,445,442,441,236,235,234,233,232,231,53,52,51,50,49,48,47,46,444,443,440,439,438,437,436,435,434,230,229,228,227,226,225,224,223,222,221,220,219,218,217,216,215,214,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,433,432,431,430,429,428,213,212,211,210,209,208,207,206,205,204,203,202,201,200,20,19,18,17,427,426,425,424,423,199,198,197,196,195,194,193,192,191,190,189,16,15,14,13,12,422,421,420,419,418,417,188,187,186,185,184,183,182,181,180,179,178,177,11,10,9,8,7,6,5,416,415,414,413,176,175,174,173,172,171,170,169,168,4,3,2,1,0
],
[
  371,368,340,332,156,135,128,81,462,448,403,374,372,370,358,350,346,339,326,322,312,302,271,267,258,255,252,251,237,201,200,157,155,149,147,145,144,143,142,141,140,139,138,137,133,132,125,124,123,121,120,119,116,113,112,110,107,106,105,99,98,96,92,88,87,85,80,79,78,71,66,59,58,57,47,46,17,12,5,4,385,410,167,166,489,488,487,482,480,477,473,465,463,459,427,425,409,408,407,402,397,396,395,393,389,387,381,379,377,375,369,367,366,365,361,354,353,352,351,345,344,333,331,328,321,320,313,308,305,301,294,291,290,281,277,276,254,253,197,165,164,163,162,160,159,158,154,153,150,146,134,130,129,127,126,118,115,114,111,109,102,101,100,95,93,89,84,56,54,44,435,434,222,221,220,219,217,216,215,214,35,34,33,32,30,29,28,27,26,25,24,23,22,21,373,355,122,475,399,348,336,472,363,357,347,151,136,97,502,501,500,499,498,497,496,495,494,493,492,491,490,474,471,468,452,412,411,398,394,391,390,380,359,343,337,334,327,325,324,307,306,269,256,243,148,131,77,76,69,67,64,63,483,481,470,469,464,460,458,406,405,401,400,388,386,378,376,364,362,360,356,349,338,335,323,319,314,311,310,309,297,289,288,278,272,270,268,257,244,238,218,152,108,103,94,91,86,83,82,75,72,70,68,65,51,50,49,48,31,486,485,484,479,478,476,467,466,461,457,456,455,454,453,451,450,449,447,446,445,444,443,442,441,440,439,438,437,436,433,432,431,430,429,428,426,424,423,422,421,420,419,418,417,416,415,414,413,404,392,384,383,382,342,341,330,329,318,317,316,315,304,303,300,299,298,296,295,293,292,287,286,285,284,283,282,280,279,275,274,273,266,265,264,263,262,261,260,259,250,249,248,247,246,245,242,241,240,239,236,235,234,233,232,231,230,229,228,227,226,225,224,223,213,212,211,210,209,208,207,206,205,204,203,202,199,198,196,195,194,193,192,191,190,189,188,187,186,185,184,183,182,181,180,179,178,177,176,175,174,173,172,171,170,169,168,161,117,104,90,74,73,62,61,60,55,53,52,45,43,42,41,40,39,38,37,36,20,19,18,16,15,14,13,11,10,9,8,7,6,3,2,1,0
],
[
  498,482,470,466,462,460,459,458,455,454,449,446,445,443,442,441,434,431,430,429,427,426,424,423,413,411,408,407,406,401,387,378,376,360,355,341,338,337,335,325,323,322,315,314,309,307,298,293,289,285,283,278,274,272,271,266,265,263,256,251,249,247,246,242,240,239,234,233,232,231,230,228,226,225,222,220,217,215,214,213,212,210,198,197,195,190,187,185,183,181,179,178,177,173,172,171,168,150,118,117,103,98,94,90,76,68,64,56,52,50,49,48,44,43,42,41,39,38,37,36,34,33,24,19,18,14,11,10,8,6,3,0,457,456,453,452,451,450,448,447,444,440,439,438,437,436,435,433,432,428,425,422,421,420,419,418,417,416,415,414,305,304,297,295,282,281,280,279,277,273,270,269,267,264,262,261,260,250,248,244,243,241,238,236,235,229,227,224,223,221,219,218,216,211,209,208,207,206,205,204,203,202,201,200,199,196,194,193,192,191,189,188,186,184,182,180,176,175,174,170,169,89,83,82,74,73,67,65,62,61,60,57,55,54,53,45,40,35,32,30,29,28,27,26,25,23,22,21,20,17,16,15,13,12,9,7,5,4,1,502,501,500,499,497,496,495,494,493,492,491,490,489,488,487,486,485,484,483,481,480,479,478,477,476,475,474,473,472,471,469,468,467,465,464,463,461,412,410,409,405,404,403,402,400,399,398,397,396,395,394,393,392,391,390,389,388,386,385,384,383,382,381,380,379,377,375,374,373,372,371,370,369,368,367,366,365,364,363,362,361,359,358,357,356,354,353,352,351,350,349,348,347,346,345,344,343,342,340,339,336,334,333,332,331,330,329,328,327,326,324,321,320,319,318,317,316,313,312,311,310,308,306,303,302,301,300,299,296,294,292,291,290,288,287,286,284,276,275,268,259,258,257,255,254,253,252,245,237,167,166,165,164,163,162,161,160,159,158,157,156,155,154,153,152,151,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,133,132,131,130,129,128,127,126,125,124,123,122,121,120,119,116,115,114,113,112,111,110,109,108,107,106,105,104,102,101,100,99,97,96,95,93,92,91,88,87,86,85,84,81,80,79,78,77,75,72,71,70,69,66,63,59,58,51,47,46,31,2
]]*/


header[1].onclick =()=> open("https://twitter.com/ariamaranai", 0);
header[0].onclick = header[2].onclick =()=> header[1].toggleAttribute("hidden");
header[3].onclick =()=> {
  let i = 504, fragment = new DocumentFragment;
  while (fragment.insertBefore(a[order[mode][--i]], null), i);
  d.body.appendChild(fragment);
  mode < 3 ? ++mode : (mode = 0);
}

}
