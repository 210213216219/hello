const d = document;
const head = d.head;
const mainContainer = head.firstChild;
const memberContainer = head.lastChild;
const createElement = d.createElement.bind(d);
const a = createElement("a");
const n = "渡邉美穂0宮田愛萌0影山優佳0柿崎芽実09df井口眞緒0松平璃子0関有美子0渡邉理佐0渡辺梨加0守屋茜0原田葵0b89菅井友香0米谷奈々未0平手友梨奈0長濱ねる0長沢菜々香0鈴本美愉0志田愛佳0佐藤詩織0織田奈那0尾関梨香0今泉佑唯09db石森虹花0大園桃子0渡辺みり愛0米徳京花0山崎怜奈0矢田里沙子0堀未央奈0西川七海0寺田蘭世0鈴木絢音0新内眞衣0佐々木琴子0相楽伊織0北野日奈子0伊藤純奈0伊藤かりん0和田まあや0若月佑美0大和里菜0宮澤成良0松村沙友理0星野みなみ0深川麻衣0樋口日奈0橋本奈々未0畠中清羅0能條愛未0西野七瀬0永島聖羅0中元日芽香0中田花奈0高山一実0白石麻衣0桜井玲香0斉藤優里0斎藤ちはる0齋藤飛鳥0川村真洋0川後陽菜0柏幸奈0衛藤美彩0岩瀬佑美子0井上小百合0伊藤万理華0伊藤寧々0市來玲奈0生駒里奈0生田絵梨花0安藤美雲0cad秋元真夏0渡辺莉奈0山下葉留花0宮地すみれ0藤嶌果歩0平岡海月0平尾帆夏0竹内希来里0正源司陽子0清水理央0小西夏菜実0岸帆夏0石塚瑶季0山口陽世0森本茉莉0髙橋未来虹0上村ひなの0松田好花0濱岸ひより0丹生明里0富田鈴花0小坂菜緒0河田陽菜0金村美玖0東村芽依0高本彩花0高瀬愛奈0佐々木美玲0佐々木久美0齊藤京子0加藤史帆08ce潮紗理菜0山下瞳月0村山美羽0村井優0向井純葉0的野美青0中嶋優月0谷口愛李0小島凪紗0小田倉麗奈0遠藤理子0石森璃花0山﨑天0守屋麗奈0森田ひかる0松田里奈0増本綺良0藤吉夏鈴0田村保乃0武元唯衣0幸阪茉里乃0大沼晶保0大園玲0遠藤光莉0井上梨名0土生瑞穂0齋藤冬優花0小林由依0小池美波0dac上村莉菜0中西アルノ0冨里奈央0菅原咲月0川﨑桜0奥田いろは0小川彩0岡本姫奈0井上和0一ノ瀬美空0池田瑛紗0五百城茉央0弓木奈於0矢久保美緒0松尾美佑0林瑠奈0早川聖来0筒井あやめ0田村真佑0清宮レイ0柴田柚菜0佐藤璃果0黒見明香0北川悠理0金川紗耶0掛橋沙耶香0賀喜遥香0遠藤さくら0与田祐希0吉田綾乃0山下美月0向井葉月0中村麗乃0佐藤楓0阪口珠美0久保史緒里0梅沢美波0岩本蓮加0伊藤理々杏".split(0);
const c = "b320c830b9106920193".split(0);

head.setAttribute(
  "style",
  "display:flex;\
  background:#123;\
  font:700 13px meiryo;\
  color:#ddd;\
  text-align:center;\
  touch-action:none;\
  user-select:none;\
  cursor:url(cursor.svg) 4 4, auto;"
);

a.append("@ariamaranai");
a.href = "https://twitter.com/arianaranai";
a.setAttribute(
  "style",
  "font:10px meiryo;\
  color:#399;\
  cursor:unset"
);

mainContainer.append(d.title = "tiermaker46 ", a);

//64 * 4 = 256
/*
余った場合の挙動が難しい 最大で64px

必要な最小pxを検査員する
60-80 + 2-4(gap)

mainContainer - n3 (60 * 4) + 4 * 5 = 260
memberContainer - n1 = 60 * 1 + 4 * 2 = 66
= 314
60 * 2
326
//64 * 8 = 448 + 4 = (452) tier
64 * 8 = 512 + 4 = 516
60 + 16 = 76
516 + 76 = 592

64 * 3 = 192


592 + 192 = 784 + 63 = 847
64 * 8 = 512
1359

memberのサイズを変更するのはめちゃくちゃ面倒
zoomで全体を調整する??
縮小はしない
あった部分を拡大させるのみ
でもzoomさせる必要すらなくないか??
あまり意味がない 縮小も同様
間隔を開けることでいいのでは??
592 - 64 = 528

1359 - 64 = 1295
//1359 + 64 * 4 = 1615 + 63 = 1678
1359 + 64 * 6 = 1733 + 63 = 1796

1359 - 256 = 1103
64 * 6 = 384
1359 - 384
*/
for (
  let i = 169, j = 60 * 17, k = 60, c = "ecf", p, _n;
  memberContainer.appendChild(p = createElement("p")).append(
    (_n = n[i])[0] < "g" ? (c = _n[0] + _n[1] + _n[2], _n.slice(3)) : _n),
  p.setAttribute(
    "style",
    "min-width:60;\
    height:0;\
    padding-top:60;\
    border-radius:30px;\
    background:url(complete6-50.avif) " +
    j + "px " +  k + "px/" + 60 * 17 + "px " + 60 * 10 + "px;" +
    "font:11px Yu Gothic;\
    user-select:none;\
    color:#" + c),
  i--;
) j = j == 60 ? (k += 60, 60 * 17) : j - 60;

for (
  let i = 0, e;
  mainContainer.appendChild(e = createElement("p"))
    .setAttribute(
      "style",
      "width:min-content;\
      min-width:72;\
      margin:16px 8px 0px;\
      padding:6px;\
      background:#" +  (i < 5 ? c[i] : i < 6 ? "666" : "eee;color:#444;float:right")),
  e.append(i < 6 ? "SABCD+"[i] : "SAVE"),
  mainContainer.appendChild(e = d.createElement("p"))
    .setAttribute(
      "style",
      "display:flex;\
      min-height:92;\
      margin:0;\
      padding:0 8px"),
  i++ < 6;
);

(onresize =()=> {
  let w = innerWidth;
  if (w < 593) {
    w = 60;
  } else if (w < 976) {
    w = ((w - 528) >> 6) * 64;
  } else if (w < 1360) {
    w = 384;
  } else if (w < 1797) { 
    w = ((w - 975) >> 6) * 64;
  } else {
    w = 640; 
  }

  memberContainer.setAttribute("style",
  "display:flex;\
  flex-wrap:wrap;\
  gap:0 4px;\
  padding:0 8px;\
  background:#345;\
  overflow:scroll;\
  width:" + w
  );
})();

let canMovingElement; 
let target;
onpointerdown =e=> {
  target = e.target;
  if (target.tagName == "P") {
    canMovingElement = target.cloneNode(1);
    //canMovingElement.style.position = "fixed";
  }
}

let skew = 0;

onpointermove =e=> {
  if (canMovingElement) {
    //canMovingElement.style.top = e.y - 40 + "px";
    //canMovingElement.style.left = e.x - 40 + "px";
    //head.append(canMovingElement);
    target.style.transform = "skewX(" + ++skew + "deg)";
  }
}

onpointerup =()=> {

}


d.lastChild.replaceWith(head);
