{
let d = document;
let body = d.body;
let images = d.images;
let mainContainer = body.firstChild;
let subContainer = body.lastChild;
let configContainer = subContainer.firstElementChild;
let configIcon = mainContainer.children[2];
let contextContainer = configIcon.nextElementSibling;
let tierContainer = contextContainer.firstElementChild;
let query = decodeURIComponent(location.search.slice(1)); // 題名に","があったら回避不可では??
if (query) {
  let i = 0, l, e;
  
  /*
  while (
    (l = query.charCodeAt(i) - 65) >= 0 ?
      (l < 26 || (l > 31 && l <  58 && (l += 26))) &&
        (contextContainer.insertBefore(e = tierContainer.cloneNode(1), tierContainer).firstChild.value = query.slice(++i, i += l), !0) :
      ((n = query.slice(i, i += 3)) && (n = +n) < images.length && (
        l = images[n].parentNode,
        e ?
          l.hidden || (e.lastChild.appendChild(l.cloneNode(1))) : 
          (l.hidden = !0)
      )) && i < query.length
  );*/

  while (
    (l = query.charCodeAt(i)) > 64 ?
      (l = l < 91 ? l - 65 : l > 96 && l < 123 ? l - 29 : -1) > 0 &&
      (tierContainer.before(e = tierContainer.cloneNode(++i)), l && (e.firstChild.value = query.slice(i, i += l), i < query.length)) :
      
      ((l = query.slice(i, i += 3)) && (l = +l) < 170 && (
        l = images[l].parentNode,        
        e ?
          l.hidden || e.lastChild.appendChild(l.cloneNode(1)) :
          (l.hidden = !0)
      ) && i < query.length)
  );
} else {
  let i = 5;
  while (contextContainer.insertBefore(tierContainer.cloneNode(1), tierContainer).firstChild.value = "DCBAS"[--i], i);
}


configIcon.onclick =()=> {
  subContainer.setAttribute("style", "position:absolute;inset:0;flex-wrap:wrap;width:min(100%,800px);overflow:clip scroll;margin:0 auto");
  mainContainer.setAttribute("style", "filter:blur(1px);pointer-events:none");
  configContainer.setAttribute("style", "display:block");
}

}
