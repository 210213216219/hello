
oninput =e=> {
  if (e = e.target.value) {
    let i = e.length, s = "", c;
    while (s = ((c = e.charCodeAt(--i)) > 12352 && c <  12439) ? String.fromCharCode(c + 96) : e[i] + s, i);
    e = 537;
    while ((c = p[e]).attributeStyleMap.set("display", c.textContent.includes(s) ? (++i, flex) : none), --e);
    button.firstElementChild.textContent = i;
  } else {
    button.firstElementChild.textContent = e = 537;
    while (p[e].attributeStyleMap.set("display", flex), --e);
  }
}

let flex = new CSSKeywordValue("flex"),
    none = new CSSKeywordValue("none"),
    p  = document.body.querySelectorAll("p"),
    button = a.lastChild,
    orders = [[1,2,3,4,5,6,7,8,9,10,11,12,21,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,219,220,441,442,443,444,445,446,509,376,521,90,342,234,343,297,102,54,465,235,150,344,137,355,356,156,83,534,272,389,390,391,345,385,417,29,25,357,154,346,116,366,309,369,329,165,30,399,533,418,91,71,103,358,92,151,171,423,174,144,99,162,108,258,377,530,55,109,127,128,367,129,72,537,403,73,426,130,330,65,411,310,145,93,496,157,429,94,347,236,348,514,77,420,110,359,146,273,500,331,172,494,492,437,503,368,142,535,158,412,402,31,409,159,525,84,138,56,506,117,311,332,392,501,393,298,237,394,483,143,386,360,274,32,439,57,490,33,507,370,160,400,288,238,147,497,139,34,378,432,289,361,35,131,85,466,36,413,371,163,37,517,379,290,421,113,333,38,322,404,140,74,175,380,349,132,524,169,438,133,275,334,291,381,531,86,276,87,433,528,440,75,299,39,526,259,312,427,372,239,434,88,335,395,166,350,58,414,161,118,119,59,523,401,76,40,502,431,240,373,382,436,104,141,351,105,323,396,241,516,424,336,78,152,374,405,410,114,164,529,532,115,120,155,536,173,397,265,148,95,121,41,42,522,96,242,277,134,168,313,504,292,388,363,20,79,278,375,337,425,167,314,362,505,279,43,293,383,122,106,135,123,479,124,136,80,153,435,89,415,111,527,66,149,107,67,100,467,221,222,44,447,458,68,508,125,197,223,252,459,224,62,198,45,208,315,266,316,225,338,352,267,484,491,97,81,294,493,253,46,260,480,495,101,226,281,353,280,468,453,485,261,199,26,477,243,324,227,460,254,244,228,69,406,317,398,47,245,282,419,27,472,63,209,300,364,384,461,462,454,325,469,283,470,326,48,455,422,301,302,303,354,463,170,318,304,319,513,268,339,448,126,13,246,519,486,498,64,60,229,262,200,284,518,449,255,464,14,210,456,269,428,230,407,305,520,15,295,211,247,481,285,487,510,340,416,22,201,488,307,231,202,212,478,232,286,408,16,248,476,17,70,256,473,474,306,327,489,249,341,430,270,471,287,512,263,61,482,475,203,18,213,499,23,450,205,49,515,50,511,320,233,214,206,457,257,216,215,321,217,250,207,51,308,296,251,52,204,28,365,271,218,19,451,328,387,452,112,98,82,264,24,53],[1,2,3,4,5,6,7,8,9,10,11,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,441,442,443,444,445,446,12,13,14,15,16,17,18,19,196,197,198,199,200,201,202,203,204,205,206,207,447,448,449,450,451,452,20,21,22,23,24,208,209,210,211,212,213,214,215,216,217,218,453,454,455,456,457,25,26,27,28,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,458,459,460,461,462,463,464,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,465,466,467,468,469,470,471,474,475,54,55,56,57,58,59,60,61,252,253,254,255,256,257,472,473,476,62,63,64,258,259,260,261,262,263,264,477,478,65,66,67,68,69,70,265,266,267,268,269,270,271,479,480,481,482,71,72,73,74,75,76,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,483,484,485,486,487,77,78,79,80,81,82,288,289,290,291,292,293,294,295,296,488,83,84,85,86,87,88,89,297,298,299,300,301,302,303,304,305,306,307,308,489,90,91,92,93,94,95,96,97,98,309,310,311,312,313,314,315,316,317,318,319,320,321,490,491,99,100,101,322,323,324,325,326,327,328,492,102,103,104,105,106,107,329,330,331,332,333,334,335,336,337,338,339,340,341,493,494,495,108,109,110,111,112,342,343,344,345,346,347,348,349,350,351,352,353,354,496,497,113,114,115,355,356,357,358,359,360,361,362,363,364,365,498,499,116,117,118,119,120,121,122,123,124,125,126,366,367,368,369,370,371,372,373,374,375,500,501,502,503,127,128,129,130,131,132,133,134,135,136,376,377,378,379,380,381,382,383,384,504,137,138,139,140,141,385,386,387,388,505,142,143,389,390,391,392,393,394,395,396,397,398,506,507,508,144,145,146,147,148,149,399,400,401,402,509,510,511,150,151,152,153,403,404,405,406,407,408,512,154,155,409,410,156,157,158,159,160,161,411,412,413,414,415,416,513,162,417,418,419,514,515,163,164,420,421,422,516,165,166,167,423,424,517,425,518,168,426,427,428,519,169,520,429,430,170,521,171,431,522,432,433,172,173,434,523,435,174,436,437,524,438,175,439,525,440,526,527,528,529,530,531,532,533,534,535,536,537],[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,21,22,23,24,26,27,28,44,45,46,47,48,49,50,51,53,60,61,63,68,69,70,81,82,98,112,125,170,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,217,218,222,223,224,225,226,227,228,229,230,231,232,233,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,260,261,262,263,266,267,268,269,270,271,280,281,282,283,284,285,286,287,294,295,296,300,301,303,304,305,306,307,308,315,316,317,318,319,320,321,324,325,326,328,338,339,340,341,352,353,364,365,406,407,408,416,422,430,441,442,443,444,445,446,447,448,449,450,451,452,453,454,456,458,459,460,461,462,463,464,467,468,469,470,471,472,473,474,475,476,477,478,480,481,482,484,485,486,487,488,489,493,498,499,508,510,512,515,518,519,520,39,56,57,58,59,73,76,78,80,83,90,91,94,99,102,111,116,161,238,259,265,278,289,291,293,299,310,311,314,332,333,334,337,342,346,358,361,373,380,384,386,388,400,402,410,412,425,426,431,433,490,492,496,501,502,511,514,517,71,72,75,77,84,85,139,157,221,264,277,290,329,330,347,348,350,357,360,366,383,404,414,415,418,423,439,440,483,500,503,506,525,526,527,528,529,530,531,532,533,534,535,536,537,105,144,160,371,374,381,387,504,359,372,424,507,130,379,397,29,30,31,32,33,34,35,36,37,38,40,41,42,43,234,235,236,237,239,240,241,242,465,466,52,62,64,92,97,101,103,108,109,110,117,119,122,123,126,134,135,137,138,142,154,155,159,162,163,167,168,169,171,172,173,174,216,274,275,297,298,302,309,312,313,322,327,331,336,343,344,351,354,356,367,368,369,376,377,378,385,389,390,391,393,399,401,403,405,411,413,417,419,420,421,427,428,432,434,435,436,437,455,457,491,495,497,505,509,513,516,521,522,523,175,438,524,409,1,12,20,25,54,55,65,66,67,74,79,86,87,88,93,95,96,100,104,106,107,113,114,115,118,120,121,124,127,128,129,131,132,133,140,141,145,146,147,148,149,150,151,152,153,156,158,164,166,219,220,258,272,273,276,279,288,292,323,335,345,349,362,370,375,382,394,396,398,429,479,494,89,136,143,165,355,363,392,395],[6,39,54,55,59,66,67,71,74,77,78,79,80,83,85,86,87,88,89,92,93,94,95,96,99,100,101,103,104,105,107,108,109,110,112,113,114,115,116,117,118,119,120,121,122,123,124,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,258,266,273,274,275,276,278,279,280,289,296,297,305,307,308,309,310,312,313,315,318,320,321,322,323,324,325,328,329,331,333,334,335,336,339,340,341,342,343,344,347,349,350,351,352,353,354,355,356,357,359,362,363,365,366,367,368,369,370,371,372,373,374,375,376,377,378,380,381,382,383,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,401,403,404,405,406,407,408,409,410,412,413,414,415,416,417,418,419,420,421,423,424,425,427,428,429,430,431,436,437,438,440,493,495,496,497,499,500,501,503,504,505,506,507,508,509,510,512,513,514,515,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,534,535,536,537,1,3,10,12,14,17,20,21,23,24,25,28,29,30,31,33,34,35,36,37,38,40,43,48,53,61,62,63,65,68,69,70,73,75,82,90,91,97,176,178,179,181,186,187,188,189,190,191,192,193,194,199,201,203,205,207,208,210,211,212,213,215,218,219,220,221,222,223,224,225,226,227,228,229,231,236,238,239,241,243,244,248,250,256,257,259,262,264,265,269,271,281,282,283,285,288,290,291,294,298,300,301,302,303,314,317,326,327,442,443,444,446,447,448,449,450,451,452,455,458,461,463,464,466,467,468,469,470,471,475,478,479,481,482,483,484,488,489,2,4,5,7,8,9,11,13,15,16,18,19,22,26,27,32,41,42,44,45,46,47,49,50,51,52,56,57,58,60,64,72,76,81,84,98,102,106,111,125,126,159,177,180,182,183,184,185,195,196,197,198,200,202,204,206,209,214,216,217,230,232,233,234,235,237,240,242,245,246,247,249,251,252,253,254,255,260,261,263,267,268,270,272,277,284,286,287,292,293,295,299,304,306,311,316,319,330,332,337,338,345,346,348,358,360,361,364,379,384,400,402,411,422,426,432,433,434,435,439,441,445,453,454,456,457,459,460,462,465,472,473,474,476,477,480,485,486,487,490,491,492,494,498,502,511,516,533]],
    currentMode = 1;

button.onclick =e=> {
  let y = e.y >> 5;
  if (y && (button.firstChild.textContent = e.target.textContent + "(", y != currentMode)) {
    if (e = 537, (currentMode = y - 2) >= 0) {
      while(a.after(p[orders[currentMode][--e]]), e);
    } else {
      while (a.after(p[--e]), e);
    }
  }
  button.lastChild.toggleAttribute("hidden");
}
