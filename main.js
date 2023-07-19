ondragstart =()=> !1;

{
let d = document;
let body = d.body;
let tierContainer = body.firstChild.lastChild;
let memberContainer = body.lastChild;
let addContainer = document.getElementsByTagName("h4")[5];
let cvs = d.createElement("canvas");
let ctx = cvs.getContext("2d");
let fBrightness = new CSSUnparsedValue(["brightness(.6)"]);
let finvert = new CSSUnparsedValue(["invert(.4)"])
let transform = new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(0))]);
let none = new CSSKeywordValue("none");
let mcY = memberContainer.getBoundingClientRect().y - 8;
let grabstart =a=> {
  target_0.attributeStyleMap.set("filter", fBrightness);
  ctx.drawImage(target_0.firstChild, 0, 0);
  cvs.setPointerCapture(a.pointerId);
  cvs.attributeStyleMap.set("transform", (transform[0].x.value = a.x, transform[0].y.value = a.y, transform));
  cvs.attributeStyleMap.delete("display");
};
let target_0;
let target_1;
let target_2;
let target_in_tier;
let pointY;

memberContainer.addEventListener("wheel", a=> memberContainer.scrollBy(a.deltaY < 0 ? -64 : 64, 0), {passive: !0});

onpointerdown =a=> {
  if (a.button) return;
  target_0 = a.target;
  let tagName = target_0.tagName;
  if (tagName == "P") {
    target_in_tier = !memberContainer.contains(target_0);
    pointY = a.y;

    let type = a.pointerType;
    if (target_in_tier) {
      if (type == "mouse") {
        grabstart(a);
      } else {
        memberContainer.ontouchmove =a=> a.preventDefault();
      }
    } else {
      if (type == "mouse") {
        grabstart(a);
      } else {
        memberContainer.ontouchmove =a=> {
          if (a.y - pointY < -16) {
            memberContainer.ontouchmove =
            tierContainer.ontouchmove=a=> a.preventDefault();
            grabstart(a);
          }
        }
      }
    }
  } else if (tagName == "H4") {

  } else if (tagName == "S") {

  }
}

cvs.onpointermove =a=> {
  let x = a.x, y = a.y;
  cvs.attributeStyleMap.set("transform", (transform[0].x.value = x, transform[0].y.value = y, transform))
  if (y < mcY) {
    let e = d.elementFromPoint(x, y);
    if (e != target_2) {
      target_2 = e;
      //if (e != memberContainer) {
        let tagName = e.tagName;
        if (tagName == "I") {
          if (addContainer.contains(e)) {
            addContainer.attributeStyleMap.set("filter", finvert);
          } else {
            !e.contains(target_1 ??= target_in_tier ? target_0 : target_0.cloneNode(1)) &&
            (e.appendChild(target_1));
          }
        } else if (tagName == "P") {
          //e.before(target_1 ??= target_in_tier ? target_0 : target_0.cloneNode(1));
          target_1 ??= target_in_tier ? target_0 : target_0.cloneNode(1);
          let next = e.nextSibling;
          e.parentNode.insertBefore(target_1, next == target_1 ? e : next);
        }
      //}
    }
  } else {
    if (target_in_tier) {
      let children = memberContainer.children, i = children.length;
      while (children[--i].textContent != target_0.textContent && i);
      children[i].attributeStyleMap.delete("display");
      (target_1 = children[i]).scrollIntoView({inline: "center"});
      target_0.remove();
    }
  }
};

cvs.onpointerup =a=> {
  cvs.attributeStyleMap.set("display", none);
  cvs.releasePointerCapture(a.pointerId);

  target_1 ? (target_1.attributeStyleMap.clear(),
   target_in_tier || target_0.attributeStyleMap.set("display", none)) :
  target_0.attributeStyleMap.clear();

  addContainer.attributeStyleMap.clear();
  let y = addContainer.getBoundingClientRect().y;
  if (y < a.y && y + 99 > a.y) {
    (a = addContainer.cloneNode(1)).firstChild.attributeStyleMap.clear();
    tierContainer.insertBefore(a, addContainer).lastChild.appendChild(target_0);
  }

  memberContainer.ontouchmove =
  target_0 =
  target_1 =
  target_2 =
  null;
}

cvs.attributeStyleMap.set("transform", transform);
cvs.attributeStyleMap.set("display", none);
cvs.width = cvs.height = 240;
ctx.arc(120, 120, 120, 0, 7);
ctx.clip();
body.appendChild(cvs);
}
