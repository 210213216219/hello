ondragstart =()=> !1;

{
onpointerdown =a=> {
  if (a.button) return;
  let tagName = (target_0 = a.target).tagName;
  
  if (tagName == "P") {
    if (target_0.textContent == "◢") {
    } else {
    point_y = a.y;
    target_0.attributeStyleMap.set("filter", filter);
    target_not_tier = member_container.contains(target_0);
    member_container.ontouchmove =a=> a.preventDefault();

    onpointermove = target_not_tier ?
      a=> {
        if (a.y - point_y < -8) {
          onpointerover = insertMember;
          octx.drawImage(target_0.firstChild, 0, 0);
          bmp.transferFromImageBitmap(ocvs.transferToImageBitmap());
          (onpointermove = moveMember)(a);
        } else {

        }
      } :
      (
        octx.drawImage(target_0.firstChild, 0, 0),
        bmp.transferFromImageBitmap(ocvs.transferToImageBitmap()),
        moveMember(a),
        onpointerover = insertMember,
        moveMember
      )

    onpointerup =a=> {
      if (!(a.y ^ point_y)) {

      }

      target_1 ?
        (target_1.attributeStyleMap.clear(),
         target_not_tier && target_0.attributeStyleMap.set("display", none)) :
        target_0.attributeStyleMap.clear();
      
      octx.clearRect(0, 0, 240, 240);
      bmp.transferFromImageBitmap(ocvs.transferToImageBitmap());

      onpointermove =
      onpointerover =
      onpointerup =
      member_container.ontouchmove =
      target_0 =
      target_1 = null;

    }

    }
  } else if (tagName == "H4") {
    /*
    point_y = a.y;
    let styleMap = target_0.attributeStyleMap;
    styleMap.set("filter", filter);
    onscroll =a=> a.preventDefault();
    (onpointermove =a=> {
      let y = point_y - a.y;
      if (y > 127) {
        target_1 = target_0.previousElementSibling;
        target_1.tagName == "H4" && target_1.before(target_0);
        point_y = a.y;
      } else if (y < -127) {
        target_1 = target_0.nextElementSibling;
        target_1.tagName == "H4" && target_1.after(target_0);
        point_y = a.y;
      }
    })(a);
    onpointerup =a=> {
      styleMap.clear();
      onpointermove =
      onpointerup =
      onscroll = null;


      if (!(a.y ^ point_y)) {
        let input = target_0.firstChild;
        input.disabled = !1;
        input.focus();
        input.onblur =()=> (input.disabled = !0);
      }

      target_0 =
      target_1 = null;
    }*/
  } else if (tagName == "B") {
    
  }
}

let d = document;
let member_container = d.body.lastElementChild;
let cvs = d.createElement("canvas");
let bmp = cvs.getContext("bitmaprenderer");
let ocvs = new OffscreenCanvas(cvs.width = 240, cvs.height = 240);
let octx = ocvs.getContext("2d");
let transform = new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(0))]);
let filter = new CSSUnparsedValue(["brightness(.6)"]);
let none = new CSSKeywordValue("none");
let moveMember =a=> cvs.attributeStyleMap.set("transform", (transform[0].x.value = a.x, transform[0].y.value = a.y, transform));
let insertMember =a=> {
  alert(1);
  a = a.target;
  if (a.tagName == "I") {
    if (a == member_container) {
      if (member_container.contains(target_0)) {
      } else {
        if (!target_not_tier) {
          let children = member_container.children, i = children.length;
          while (children[--i].textContent != target_0.textContent && i);
          children[i].attributeStyleMap.delete("display");
          target_0.remove();
          (target_1 = children[i]).scrollIntoView({inline: "center"});
        } else {
        }
      }
    } else {
      a.appendChild(target_1 ??= target_not_tier ? target_0.cloneNode(1) : target_0);
    }
  } else if (a.tagName == "P" && !member_container.contains(a)) {
    a.before(target_1 ??= target_not_tier ? target_0.cloneNode(1) : target_0);
  }
}

let target_0;
let target_1;
let target_not_tier;
let point_y;


member_container.addEventListener("wheel", a=> member_container.scrollBy(a.deltaY < 0 ? -64 : 64, 0), {passive: !0});

octx.arc(120, 120, 120, 0, 7);
octx.clip();
d.body.appendChild(cvs);
}
