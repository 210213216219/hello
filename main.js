fetch (0).then(async r => {
let d = document;
let head = d.head;
let main_container = head.firstChild;
let member_container = main_container.nextSibling;
let tmp_member = d.createElement("p");
let tmp_cvs = d.createElement("canvas");
let tmp_ctx = tmp_cvs.getContext("bitmaprenderer");
let tmp_member_style;
let active_member;
let active_member_style;
let ocvs = new OffscreenCanvas(240, 240);
let octx = ocvs.getContext("2d");
let buf =  await createImageBitmap(await r.blob());
let name = "渡邉美穂0宮田愛萌0影山優佳0柿崎芽実0井口眞緒0松平璃子0関有美子0渡邉理佐0渡辺梨加0守屋茜0原田葵0菅井友香0米谷奈々未0平手友梨奈0長濱ねる0長沢菜々香0鈴本美愉0志田愛佳0佐藤詩織0織田奈那0尾関梨香0今泉佑唯0石森虹花0大園桃子0渡辺みり愛0米徳京花0山崎怜奈0矢田里沙子0堀未央奈0西川七海0寺田蘭世0鈴木絢音0新内眞衣0佐々木琴子0相楽伊織0北野日奈子0伊藤純奈0伊藤かりん0和田まあや0若月佑美0大和里菜0宮澤成良0松村沙友理0星野みなみ0深川麻衣0樋口日奈0橋本奈々未0畠中清羅0能條愛未0西野七瀬0永島聖羅0中元日芽香0中田花奈0高山一実0白石麻衣0桜井玲香0斉藤優里0斎藤ちはる0齋藤飛鳥0川村真洋0川後陽菜0柏幸奈0衛藤美彩0岩瀬佑美子0井上小百合0伊藤万理華0伊藤寧々0市來玲奈0生駒里奈0生田絵梨花0安藤美雲0秋元真夏0渡辺莉奈0山下葉留花0宮地すみれ0藤嶌果歩0平岡海月0平尾帆夏0竹内希来里0正源司陽子0清水理央0小西夏菜実0岸帆夏0石塚瑶季0山口陽世0森本茉莉0髙橋未来虹0上村ひなの0松田好花0濱岸ひより0丹生明里0富田鈴花0小坂菜緒0河田陽菜0金村美玖0東村芽依0高本彩花0高瀬愛奈0佐々木美玲0佐々木久美0齊藤京子0加藤史帆0潮紗理菜0山下瞳月0村山美羽0村井優0向井純葉0的野美青0中嶋優月0谷口愛李0小島凪紗0小田倉麗奈0遠藤理子0石森璃花0山﨑天0守屋麗奈0森田ひかる0松田里奈0増本綺良0藤吉夏鈴0田村保乃0武元唯衣0幸阪茉里乃0大沼晶保0大園玲0遠藤光莉0井上梨名0土生瑞穂0齋藤冬優花0小林由依0小池美波0上村莉菜0中西アルノ0冨里奈央0菅原咲月0川﨑桜0奥田いろは0小川彩0岡本姫奈0井上和0一ノ瀬美空0池田瑛紗0五百城茉央0弓木奈於0矢久保美緒0松尾美佑0林瑠奈0早川聖来0筒井あやめ0田村真佑0清宮レイ0柴田柚菜0佐藤璃果0黒見明香0北川悠理0金川紗耶0掛橋沙耶香0賀喜遥香0遠藤さくら0与田祐希0吉田綾乃0山下美月0向井葉月0中村麗乃0佐藤楓0阪口珠美0久保史緒里0梅沢美波0岩本蓮加0伊藤理々杏".split(0);
let palette = ["b32","c83","b91","692","193"];
let i_0 = 169;
let i_1 = 0;
let i_2 = 3840;
let i_3 = 0;
let elm = d.createElement("a");
let pt_x;
let pt_y;
let timer;

head.setAttribute("style",
    "display:block;width:min(100%,1028px);margin:auto;background:#123;font:10px meiryo;text-align:center;color:#ddd;overflow:hidden;touch-action:none;user-select:none");
main_container.setAttribute("style", "display:block;height:calc(100% - 96px);padding:8 0 240;overflow:auto");
member_container.setAttribute("style",
  "display:flex;position:fixed;left:0;bottom:0;min-width:100%;width:100%;height:80;padding:4;background:#345;overflow:auto");

elm.href = "https://twitter.com/ariamaranai";
elm.setAttribute("style", "display:contents;color:#399");
elm.append("@ariamaranai");
main_container.append(d.title = "tiermaker46 ", elm);

tmp_cvs.height = tmp_cvs.width = 240;
tmp_member.append(tmp_cvs);

while (
  i_0 < [170,132,103,72,21,12,5,0][i_1] &&
    (tmp_member.setAttribute("style", "color:#" + ["ecf","d9c","8ce","c9d","9db","b89","9df"][i_1]), ++i_1),
  octx.drawImage(buf, i_2, i_3, 240, 240, 0, 0, 240, 240),
  member_container.appendChild(elm = tmp_member.cloneNode(1)).lastChild.getContext("bitmaprenderer").transferFromImageBitmap(ocvs.transferToImageBitmap()),
  elm.append(name[i_0]),
  i_0
) --i_0, i_2 = i_2 ? i_2 - 240 : (i_3 += 240, 3840);

while (
  main_container.appendChild(elm = d.createElement("b")).append("SABCD"[i_0]),
  elm.setAttribute("style", "background:#"+ palette[i_0]),
  main_container.appendChild(elm = d.createElement("i")),
  ++i_0 < 5
);


member_container.onwheel =E=> {
  member_container.scrollBy(E.deltaY < 0 ? -64 : 64, 0);
}


tmp_member_style = tmp_member.attributeStyleMap;
tmp_member_style.set("display", "none");
tmp_member_style.set("position", "fixed");
head.appendChild(tmp_member).append(new Text);

// やや長押しで判定する
oncontextmenu =()=> !1;

let ff =()=> {
  onpointermove = null;
  onscroll = null
  onwheel = null;
  onpointerup = null;
  onpointerleave = null;
}

onpointerdown =E=> {
  if (E.button) return;
  elm = E.target;
  let tagName = elm.tagName;
  if (tagName == "P") {
    pt_x = E.x;
    pt_y = E.y;
    onpointermove =()=> (clearTimeout(timer), ff());
    onscroll =()=> (clearTimeout(timer), ff());
    onwheel =()=> (clearTimeout(timer), ff());
    onpointerup =()=> (clearTimeout(timer), ff());
    onpointerleave =()=> (clearTimeout(timer), ff());

    timer = setTimeout(()=> {
      ff();
      onpointerleave = null;
      elm = elm.firstChild;
      octx.drawImage(elm, 0, 0);
      tmp_ctx.transferFromImageBitmap(ocvs.transferToImageBitmap());
      tmp_member.lastChild.data = elm.nextSibling.data;
      active_member = elm.parentNode;
      active_member_style = active_member.attributeStyleMap;
      active_member_style.set("filter", new CSSUnparsedValue(["brightness(.5)"]));
      tmp_member_style.set("color",active_member_style.get("color"));
      
      onpointerup =()=> {
        onpointermove = null;
        onpointerover = null;
        onpointerenter = null;
        if (active_member) {
          tmp_member_style.set("display", "none");
          active_member_style.delete("filter");
          active_member = null;
        }
      }
      
      (onpointermove =E=> {
        tmp_member_style.set("left", CSS.px(E.x - 32));
        tmp_member_style.set("top", CSS.px(E.y - 40));
      })(E);

      onpointerover =E=> {
        elm = E.target;
        let tagName = elm.tagName;
        if (tagName == "I") {
          elm.append(active_member);
        } else if (tagName == "P" && elm.parentNode.tagName == "I") {
          elm.before(active_member);
        } else if (tagName == "SCRIPT" && active_member.parentNode.tagName == "I") {
        }
      }
      tmp_member_style.set("display", "block");
      tmp_member_style.set("pointer-events", "none");
    }, 240); // +1が不要
  }
}

/*
onpointerdown =E=> {
  if (E.button) return 0;
  elm = E.target;
  let tagName = elm.tagName;
  if (tagName == "P") {
    elm = elm.firstChild;
    octx.drawImage(elm, 0, 0);
    tmp_ctx.transferFromImageBitmap(ocvs.transferToImageBitmap());
    tmp_member.lastChild.data = elm.nextSibling.data;
    active_member = elm.parentNode;
    active_member_style = active_member.attributeStyleMap;
    active_member_style.set("filter", new CSSUnparsedValue(["brightness(.5)"]));
    tmp_member_style.set("color",active_member_style.get("color"));
    (onpointermove =E=> {
      // この際に伝番しなければいいのでは??
      tmp_member_style.set("left", CSS.px(E.x - 32));
      tmp_member_style.set("top", CSS.px(E.y - 40));
      elm = E.target;
    })(E);
    onpointerover =E=> {
      elm = E.target;
      let tagName = elm.tagName;
      if (tagName == "I") {
        elm.append(active_member);
      } else if (tagName == "P" && elm.parentNode.tagName == "I") {
        elm.before(active_member);
      } else if (tagName == "SCRIPT" && active_member.parentNode.tagName == "I") {
    
      }
    }
    tmp_member_style.set("display", "block");
    tmp_member_style.set("pointer-events", "none");
  }
}

onpointerup =()=> {
  onpointermove = null;
  onpointerover = null;
  onpointerenter = null;
  if (active_member) {
    //let tagName = active_member.parentNode.tagName;
    tmp_member_style.set("display", "none");
    active_member_style.delete("filter");
    active_member = null;
  }
}

*/

d.lastChild.replaceWith(head);
})
