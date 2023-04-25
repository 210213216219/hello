(async d=> {
let head = d.head,
    member_container = head.firstChild,
    theme_container = head.lastChild,
    main_container = d.createElement("P"), //head.lastChild,
    member_box = d.createElement("P"),
    member_cvs = d.createElement("canvas"),
    member_ctx = member_box.appendChild(member_cvs).getContext("bitmaprenderer"),
    member_ocvs = new OffscreenCanvas(member_cvs.width = 240, member_cvs.height = 240),
    member_octx = member_ocvs.getContext("2d"),
    member_src = await createImageBitmap(await(await fetch(0)).blob()),
    member_name = [
      "伊藤理々杏","岩本蓮加","梅沢美波","久保史緒里","阪口珠美",
      "佐藤楓","中村麗乃","向井葉月","山下美月","吉田綾乃",
      "与田祐希","遠藤さくら","賀喜遥香","掛橋沙耶香","金川紗耶",
      "北川悠理","黒見明香","佐藤璃果","柴田柚菜","清宮レイ",
      "田村真佑","筒井あやめ","早川聖来","林瑠奈","松尾美佑",
      "矢久保美緒","弓木奈於","五百城茉央","池田瑛紗","一ノ瀬美空",
      "井上和","岡本姫奈","小川彩","奥田いろは","川﨑桜",
      "菅原咲月","冨里奈央","中西アルノ","上村莉菜","小池美波",
      "小林由依","齋藤冬優花","土生瑞穂","井上梨名","遠藤光莉",
      "大園玲","大沼晶保","幸阪茉里乃","武元唯衣","田村保乃",
      "藤吉夏鈴","増本綺良","松田里奈","森田ひかる","守屋麗奈",
      "山﨑天","石森璃花","遠藤理子","小田倉麗奈","小島凪紗",
      "谷口愛李","中嶋優月","的野美青","向井純葉","村井優",
      "村山美羽","山下瞳月","潮紗理菜","加藤史帆","齊藤京子",
      "佐々木久美","佐々木美玲","高瀬愛奈","高本彩花","東村芽依",
      "金村美玖","河田陽菜","小坂菜緒","富田鈴花","丹生明里",
      "濱岸ひより","松田好花","上村ひなの","髙橋未来虹","森本茉莉",
      "山口陽世","石塚瑶季","岸帆夏","小西夏菜実","清水理央",
      "正源司陽子","竹内希来里","平尾帆夏","平岡海月","藤嶌果歩",
      "宮地すみれ","山下葉留花","渡辺莉奈","秋元真夏","安藤美雲",
      "生田絵梨花","生駒里奈","市來玲奈","伊藤寧々","伊藤万理華",
      "井上小百合","岩瀬佑美子","衛藤美彩","柏幸奈","川後陽菜",
      "川村真洋","齋藤飛鳥","斎藤ちはる","斉藤優里","桜井玲香",
      "白石麻衣","高山一実","中田花奈","中元日芽香","永島聖羅",
      "西野七瀬","能條愛未","畠中清羅","橋本奈々未","樋口日奈",
      "深川麻衣","星野みなみ","松村沙友理","宮澤成良","大和里菜",
      "若月佑美","和田まあや","伊藤かりん","伊藤純奈","北野日奈子",
      "相楽伊織","佐々木琴子","新内眞衣","鈴木絢音","寺田蘭世",
      "西川七海","堀未央奈","矢田里沙子","山崎怜奈","米徳京花",
      "渡辺みり愛","大園桃子","石森虹花","今泉佑唯","尾関梨香",
      "織田奈那","佐藤詩織","志田愛佳","鈴本美愉","長沢菜々香",
      "長濱ねる","平手友梨奈","米谷奈々未","菅井友香","原田葵",
      "守屋茜","渡辺梨加","渡邉理佐","関有美子","松平璃子",
      "井口眞緒","柿崎芽実","影山優佳","宮田愛萌","渡邉美穂"
    ],
    palette = ["b32","c83","b91","692","193"],
    elm_0 = d.createElement("a"), // 
    elm_1, //d.createElement("i"),
    i_0 = 0,
    i_1 = 7,
    i_2 = -3840;
    i_3 = 0;


head.setAttribute("style",
  "display:block;\
  background:#123;\
  font:10px meiryo,sans-serif;\
  text-align:center;\
  color:#eee;\
  overflow:hidden;\
  -webkit-user-select:none;\
  -webkit-touch-callout:none");

// max(8px, calc((100% - 1024px) / 2))
main_container.setAttribute("style", 
  "width:100%;\
  height:calc(100% - 96px);\
  padding:8 max(8px, 1%);\
  box-sizing: border-box;\
  overflow-y:scroll");

theme_container.setAttribute("style",
  "display:flex");

member_container.setAttribute("style",
  "display:flex;position:fixed;bottom:0;\
  width:100%;height:80;padding:4 0;\
  background:#345;overflow-x:scroll");

elm_0.href = "https://twitter.com/ariamaranai";
elm_0.append("@ariamaranai");

// 右端にある必要性がない flexにしてscrollするだけで色を選べるようにする

head.appendChild(main_container).append(d.title = "tiermaker46 ", elm_0);
member_octx.arc(120, 120, 120, 0, 7);
member_octx.clip();

while (
  [170,165,158,149,98,67,38,0][i_1] <= i_0 &&
  member_box.setAttribute("style",
    "margin:0;padding:2;color:#" +
    ["9df","b89","9db","c9d","8ce","d9c","ecf"][--i_1]),
  member_octx.drawImage(member_src, i_2, i_3),
  elm_1 = member_container.appendChild(elm_0 = member_box.cloneNode(1)).lastChild,
  elm_1.getContext("bitmaprenderer").transferFromImageBitmap(member_ocvs.transferToImageBitmap()),
  elm_1.append(String.fromCharCode(i_0)),
  elm_0.append(member_name[i_0]),
  ++i_0 < 170
) i_2 = i_2 ? i_2 + 240 : (i_3 -= 240, -3840);

while (
  main_container.appendChild(elm_0 = d.createElement("I")).append("SABCD "[i_1]),
  elm_0.setAttribute("contenteditable", "plaintext-only"),
  main_container.appendChild(d.createElement("B")),
  //elm_0.setAttribute("style", "background:#"+ ["b32","c83","b91","692","193","800"][i_1]),
  i_1 < 5
) ++i_1;

head.appendChild(member_cvs).setAttribute("style", "position:fixed;left:-32;top:-32");

let grab_member =()=> {
  onpointermove =E=> {
    elm_0.attributeStyleMap.set("filter", new CSSUnparsedValue(["brightness(.6)"]));
    member_octx.drawImage(elm_0.firstChild, 0, 0);
    member_ctx.transferFromImageBitmap(member_ocvs.transferToImageBitmap());

    (onpointermove =E=> {
      member_cvs.attributeStyleMap.set("transform", new CSSTransformValue([new CSSTranslate(CSS.px(E.x), CSS.px(E.y))]))
    })(E);

    onpointerover =E=> {
      elm_1 = E.target;
      let tagName = elm_1.tagName;
      if (tagName == "B") {
        elm_1.appendChild(elm_0);
      } else if (tagName == "P" && E.layerY > 84) {
        elm_1.before(elm_0);
      } else if (E.layerY < 84 && elm_0.parentNode.tagName == "B") {
        let txt = member_container.textContent;
        let c_0 = elm_0.textContent.charCodeAt(0), c_1;
        let i = 0 , j = 0;
        while (i < txt.length && ((c_1 = txt.charCodeAt(i)) > 170 || c_0 < c_1 || ++j)) ++i;
        member_container.insertBefore(elm_0, member_container.children[j])
          .scrollIntoView({inline: "center"});
      }
    }
  
    onpointerup =()=> {
      onpointermove = null;
      onpointerover = null;
      onpointerenter = null;
      onpointerleave = null;
      onpointerup = null;
      member_ctx.transferFromImageBitmap(member_ocvs.transferToImageBitmap());
      elm_0.attributeStyleMap.delete("filter");
      elm_0 = null;
      elm_1 = null;
    }

  }
}

let grab_label =E=> {
  onpointermove =E=> {
    let elm_1 = elm_0.nextSibling;
    let bgcolor = elm_0.getAttribute("style");
    elm_0.setAttribute("style", "position:fixed;top:-9px;filter:brightness(.6);" + bgcolor);
    elm_1.setAttribute("style", "position:fixed;top:0px;filter:brightness(.6)");
    let y = E.y;

    (onpointermove =E=> {
      elm_0.attributeStyleMap.set("transform", new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(E.y))]))
      elm_0.attributeStyleMap.set("transform", new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(E.y))]))
    })(E);



    onpointerup =()=> {
      onpointermove = null;
      onpointerover = null;
      onpointerenter = null;
      onpointerleave = null;
      onpointerup = null;
      elm_0.setAttribute("style", bgcolor);
      elm_1.removeAttribute("style");
      elm_0 = null;
      elm_1 = null;
    }
  }
}

onpointerdown =E=> {
  if (E.button) return;
  elm_0 = E.target;
  let tagName = elm_0.tagName;
  if (tagName == "P") {
    if (E.pointerType != "mouse") {
      member_container.onscroll =E=> {
        E.preventDefault();
      }
      main_container.onscroll =E=> {
        E.preventDefault();
      }
    } else {
      grab_member();
    }
  } else if (tagName == "I") {
    //grab_label(E);
  }
}

onclick =E=> {
  elm_0 = E.target;
}

member_container.onwheel =E=> {
  member_container.scrollBy(E.deltaY < 0 ? -64 : 64, 0);
}
/*
let grab2 =E=> {
  let node = selected_elm_0.nextSibling;
  node.setAttribute("style", "position:fixed;top:0;filter:brightness(.6)")
  let y = E.y;
  (onpointermove =E=> {
    selected_elm_0_style.set("transform", new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(E.y - 9))]));
    node.attributeStyleMap.set("transform", new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(E.y + 13))]));
  })(E);
  onpointerover =E=> {
    elm_0 = E.target;
    tagmember_name = elm_0.tagmember_name;
    if (tagmember_name == "B") {
      if (E.y < y) {
        elm_0.previousSibling.before(selected_elm_0, selected_elm_0.nextSibling);
      } else {
        elm_0.after(selected_elm_0, selected_elm_0.nextSibling);
      }
    }
  }
}
*/
//console.log(d.lastChild.lastChild.lastChild);
d.replaceChild(head, d.lastChild); // DOMContentLoadedされてからの値が定義できる replaceChildは
})(document)
