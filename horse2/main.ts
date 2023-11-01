import horses from "./mstn.json";

type HorseData = {
  name: string;
  year: number;
  country: typeof COUNTRIES[number];
  sex: "S" | "M" | "F";
  href: "" | `https://www.jbis.or.jp/horse/000${number}/` | `https://www.pedigreequery.com/${string}`;
  mstn: "" | "CC" | "CT" | "TT";
}

const COUNTRIES = ["JPN", "IRE", "GB", "NZ", "GER", "FR", "HUN", "ITY", "CZE", "SVN", "DEN", "USA", "CAN", "CHI", "BRZ", "AUS", "SAF"];

let total = horses.length;
let names = Array(total);
let years = Array(total);
let countries = Array(total);
let sexes = Array(total);
let orders = [];

let css = 
`#a {
  background-color: #444;
  position: sticky;
  height: 32;
  flex-wrap: wrap;
  border-bottom: 1px solid #000;
  top: 0
}
a {
  background-color: #222;
  color: #ccc;
  font-size: min(2.2vw, 12px);
  width: 25%;
  text-align: center;
  text-decoration: unset;
  line-height: 0
}
a:first-line {
  line-height: 32px;
  font-family: hiragino kaku gothic pro,meiryo,sans-serif
}
p {
  gap: 1px;
  height: 48;
  display: flex;
  margin: 0 0 1 0
}
.a {
  background-color: #340
}
.s {
  background-color: #531
}
s {
  background-color: #333;
  display: flow;
  text-decoration: unset;
  margin: 0 1 1 1
}
svg {
  width: 32;
  stroke-width: 2;
  stroke: #ccc;
  height: 32;
  fill: none
}
bdi {
  color: #cb0
}
.n {
  background-color: #145
}
input {
  all: unset;
  height: 32;
  flex-grow: 1
}
span {
  background-color: #666;
  user-select: none
}
body {
  background-color: #666;
  line-height: 32px;
  font-family: menlo,consolas,monospace;
  white-space: pre;
  height: min-content;
  overflow: clip scroll;
  margin: 0 max(0px, calc(50% - 432px))
}
::-webkit-scrollbar {
  width: 12
}
html {
  background-color: #000;
  color: #ccc;
  font-size: 12
}
u {
  background-color: #000;
  display: flow;
  padding: 24 calc(50% - 6ch)
}
::-webkit-scrollbar-thumb {
  background-color: #666
}`.replaceAll(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");

let html = 
`<meta Charset=utf-8 content='maximum-scale=yes initial-scale=yes'name=viewport>
<style>${css}</style>
<script src=a.js Defer></script>
<base href=https://www.jbis.or.jp/horse/ target=_blank>
<title>Equine Myostatin List</title>
<p id=a>
<svg><path d=m24+24-6-6a6+6+0,1,0-.1+.1></svg>
<input placeholder='NAME | YEAR | COUNTRY | SEX | MSTN'>
<span> 💪 MSTN(<bdi>${total}</bdi>) 
<bdo hidden>
<s> 💪 MSTN</s><s> 🔖 NAME</s><s> 🎉 YEAR</s><s> 🌎 COUNTRY</s><s> 🌈 SEX</s>
`.replaceAll(/\n/g,  "");

for (let y = 0; y < total; ++y) {
  let row = horses[y];
  let horse = row[0];

  names[y] = horse.name;
  years[y] = horse.year;
  countries[y] = COUNTRIES.indexOf(horse.country);
  sexes[y] = horse.sex;

  html += "<p>";
  for ( let x = 0; x < 4; ++x ) {
    let cell = row[x] as HorseData;
    let name = cell.name;
    let year = cell.year;
    let country = cell.country;
    let sex = cell.sex;
    let href = cell.href;
    let mstn = cell.mstn;
    
    html += `<a${href && " href=" + href.slice(href[12] == "j" ? -11 : 6)}${mstn && " Class=" + (mstn == "CC" ? "s" : mstn == "CT" ? "a" : "n")}>${name}
${year}.${country} ${sex}`;
  }
  html += "</a>"
}

html += "</p><u><a href=https://ariamaranai.github.io/>@ariamaranai";

Bun.write("index.htm", html);

orders.push(names.map((v, i) => [v, i + 1]).sort((a, b) => a[0] < b[0] ? -1 : 0).map(v => v[1]));
orders.push(years.map((v, i) => [v, i + 1]).sort((a, b) => a[0] > b[0] ? -1 : 0).map(v => v[1]));
orders.push(countries.map((v, i) => [v, i + 1]).sort((a, b) => a[0] < b[0] ? -1 : 0).map(v => v[1]));
orders.push(sexes.map((v, i) => [v, i + 1]).sort((a, b) => a[0] > b[0] ? -1 : 0).map(v => v[1]));

let js = `
oninput =e=> {
  if (e = e.target.value) {
    let i = e.length, s = "", c;
    while (s = ((c = e.charCodeAt(--i)) > 12352 && c <  12439) ? String.fromCharCode(c + 96) : e[i] + s, i);
    e = ${total};
    while ((c = p[e]).attributeStyleMap.set("display", c.textContent.includes(s) ? (++i, flex) : none), --e);
    button.firstElementChild.textContent = i;
  } else {
    button.firstElementChild.textContent = e = ${total};
    while (p[e].attributeStyleMap.set("display", flex), --e);
  }
}

let flex = new CSSKeywordValue("flex"),
    none = new CSSKeywordValue("none"),
    p  = document.body.querySelectorAll("p"),
    button = a.lastChild,
    orders = [[${orders[0]}],[${orders[1]}],[${orders[2]}],[${orders[3]}]],
    currentMode = 1;

button.onclick =e=> {
  let y = e.y >> 5;
  if (y && (button.firstChild.textContent = e.target.textContent + "(", y != currentMode)) {
    if (e = ${total}, (currentMode = y - 2) >= 0) {
      while(a.after(p[orders[currentMode][--e]]), e);
    } else {
      while (a.after(p[--e]), e);
    }
  }
  button.lastChild.toggleAttribute("hidden");
}
`
Bun.write("a.js", js);
//console.log(orders);
