{
  let d = document;
  let b = d.body;
  let p = b.querySelectorAll("p");
  let [searchButton, link, input, nRow, select] = b.firstChild.children;
  let flex = new CSSKeywordValue("flex");
  let none = new CSSKeywordValue("none");
  let currentIndex = 0;
  let orders = [
    [
      50,
      21,
      258,
      79,
      95,
      109,
      444,
      380,
      321,
      443,
      16,
      212,
      265,
      358,
      25,
      198,
      49,
      245,
      290,
      302,
      48,
      201,
      244,
      211,
      315,
      209,
      210,
      251,
      449,
      200,
      208,
      227,
      314,
      502,
      47,
      506,
      46,
      199,
      442,
      20,
      490,
      207,
      15,
      197,
      466,
      473,
      58,
      257,
      503,
      281,
      462,
      264,
      423,
      334,
      243,
      480,
      320,
      300,
      465,
      464,
      250,
      67,
      14,
      467,
      242,
      13,
      401,
      280,
      226,
      469,
      206,
      196,
      225,
      301,
      479,
      195,
      19,
      409,
      333,
      501,
      478,
      279,
      472,
      241,
      205,
      289,
      12,
      511,
      299,
      400,
      224,
      421,
      263,
      448,
      204,
      11,
      455,
      249,
      441,
      509,
      278,
      194,
      256,
      223,
      57,
      61,
      489,
      477,
      510,
      240,
      10,
      123,
      440,
      332,
      262,
      504,
      313,
      298,
      312,
      167,
      454,
      347,
      297,
      296,
      295,
      415,
      447,
      45,
      319,
      461,
      277,
      460,
      446,
      453,
      377,
      357,
      294,
      203,
      60,
      463,
      24,
      412,
      276,
      239,
      44,
      391,
      311,
      399,
      66,
      222,
      238,
      248,
      452,
      221,
      318,
      237,
      468,
      23,
      193,
      255,
      476,
      445,
      459,
      274,
      346,
      275,
      220,
      98,
      486,
      471,
      254,
      43,
      247,
      484,
      288,
      78,
      94,
      482,
      475,
      261,
      345,
      331,
      219,
      310,
      260,
      309,
      202,
      42,
      192,
      59,
      218,
      451,
      246,
      217,
      191,
      122,
      499,
      65,
      450,
      439,
      41,
      216,
      215,
      458,
      97,
      64,
      104,
      146,
      63,
      518,
      108,
      408,
      86,
      428,
      150,
      77,
      133,
      121,
      470,
      120,
      132,
      103,
      119,
      376,
      287,
      40,
      273,
      496,
      355,
      308,
      164,
      418,
      330,
      368,
      272,
      76,
      17,
      356,
      381,
      286,
      495,
      307,
      165,
      131,
      271,
      236,
      93,
      513,
      39,
      38,
      118,
      92,
      145,
      259,
      390,
      170,
      527,
      152,
      117,
      112,
      523,
      520,
      161,
      111,
      403,
      398,
      367,
      149,
      75,
      329,
      417,
      507,
      235,
      389,
      317,
      102,
      344,
      138,
      101,
      429,
      375,
      366,
      234,
      424,
      493,
      37,
      73,
      394,
      514,
      56,
      116,
      115,
      158,
      407,
      55,
      343,
      163,
      388,
      328,
      85,
      427,
      233,
      365,
      420,
      306,
      253,
      517,
      36,
      293,
      72,
      433,
      519,
      426,
      84,
      270,
      83,
      522,
      374,
      285,
      327,
      269,
      172,
      130,
      431,
      166,
      515,
      129,
      342,
      373,
      173,
      71,
      137,
      397,
      316,
      35,
      326,
      110,
      414,
      284,
      372,
      508,
      34,
      160,
      364,
      406,
      33,
      457,
      82,
      128,
      32,
      354,
      283,
      425,
      371,
      31,
      136,
      488,
      144,
      232,
      282,
      393,
      157,
      363,
      498,
      30,
      481,
      54,
      432,
      29,
      268,
      353,
      379,
      140,
      474,
      387,
      231,
      292,
      386,
      492,
      385,
      325,
      305,
      114,
      497,
      53,
      135,
      81,
      516,
      156,
      402,
      28,
      395,
      405,
      155,
      526,
      139,
      361,
      494,
      430,
      483,
      485,
      169,
      324,
      491,
      267,
      143,
      352,
      107,
      413,
      74,
      505,
      341,
      230,
      340,
      91,
      422,
      154,
      487,
      90,
      142,
      304,
      404,
      62,
      323,
      127,
      419,
      70,
      396,
      528,
      69,
      126,
      360,
      125,
      124,
      106,
      52,
      521,
      370,
      252,
      105,
      159,
      96,
      141,
      171,
      416,
      168,
      148,
      89,
      351,
      100,
      68,
      88,
      411,
      524,
      392,
      27,
      162,
      322,
      362,
      303,
      359,
      113,
      339,
      151,
      350,
      22,
      26,
      410,
      378,
      338,
      384,
      383,
      382,
      266,
      525,
      80,
      153,
      349,
      348,
      134,
      337,
      147,
      229,
      456,
      51,
      99,
      291,
      336,
      228,
      335,
      87,
      512,
      369,
      500,
      438,
      437,
      436,
      435,
      434,
      214,
      213,
      190,
      189,
      188,
      187,
      186,
      185,
      184,
      183,
      182,
      181,
      180,
      179,
      178,
      177,
      176,
      175,
      174,
      18,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    [
      528,
      527,
      526,
      525,
      524,
      523,
      522,
      521,
      520,
      519,
      518,
      517,
      433,
      516,
      432,
      173,
      431,
      515,
      430,
      429,
      172,
      171,
      428,
      514,
      427,
      170,
      169,
      426,
      425,
      513,
      424,
      168,
      512,
      167,
      423,
      422,
      511,
      166,
      510,
      421,
      420,
      419,
      165,
      509,
      418,
      508,
      417,
      416,
      164,
      163,
      162,
      507,
      415,
      414,
      413,
      161,
      160,
      506,
      505,
      412,
      411,
      410,
      159,
      504,
      409,
      408,
      407,
      406,
      405,
      404,
      158,
      157,
      156,
      155,
      154,
      153,
      403,
      402,
      152,
      151,
      503,
      401,
      400,
      399,
      398,
      397,
      396,
      150,
      149,
      148,
      147,
      502,
      501,
      500,
      395,
      394,
      393,
      392,
      146,
      145,
      144,
      143,
      142,
      141,
      499,
      498,
      497,
      391,
      390,
      389,
      388,
      387,
      386,
      385,
      384,
      383,
      382,
      140,
      139,
      496,
      381,
      380,
      379,
      378,
      138,
      137,
      136,
      135,
      134,
      495,
      377,
      376,
      375,
      374,
      373,
      372,
      371,
      370,
      369,
      133,
      132,
      131,
      130,
      129,
      128,
      127,
      126,
      125,
      124,
      494,
      493,
      492,
      491,
      368,
      367,
      366,
      365,
      364,
      363,
      362,
      361,
      360,
      359,
      123,
      122,
      121,
      120,
      119,
      118,
      117,
      116,
      115,
      114,
      113,
      490,
      489,
      358,
      357,
      356,
      355,
      354,
      353,
      352,
      351,
      350,
      349,
      348,
      112,
      111,
      110,
      488,
      487,
      347,
      346,
      345,
      344,
      343,
      342,
      341,
      340,
      339,
      338,
      337,
      336,
      335,
      109,
      108,
      107,
      106,
      105,
      486,
      485,
      484,
      334,
      333,
      332,
      331,
      330,
      329,
      328,
      327,
      326,
      325,
      324,
      323,
      322,
      104,
      103,
      102,
      101,
      100,
      99,
      483,
      321,
      320,
      319,
      318,
      317,
      316,
      98,
      97,
      96,
      482,
      481,
      315,
      314,
      313,
      312,
      311,
      310,
      309,
      308,
      307,
      306,
      305,
      304,
      303,
      95,
      94,
      93,
      92,
      91,
      90,
      89,
      88,
      87,
      480,
      302,
      301,
      300,
      299,
      298,
      297,
      296,
      295,
      294,
      293,
      292,
      291,
      86,
      85,
      84,
      83,
      82,
      81,
      80,
      479,
      290,
      289,
      288,
      287,
      286,
      285,
      284,
      283,
      282,
      79,
      78,
      77,
      76,
      75,
      74,
      478,
      477,
      476,
      475,
      474,
      281,
      280,
      279,
      278,
      277,
      276,
      275,
      274,
      273,
      272,
      271,
      270,
      269,
      268,
      267,
      266,
      73,
      72,
      71,
      70,
      69,
      68,
      473,
      472,
      471,
      470,
      265,
      264,
      263,
      262,
      261,
      260,
      259,
      67,
      66,
      65,
      64,
      63,
      62,
      469,
      468,
      258,
      257,
      256,
      255,
      254,
      253,
      252,
      61,
      60,
      59,
      467,
      464,
      463,
      251,
      250,
      249,
      248,
      247,
      246,
      58,
      57,
      56,
      55,
      54,
      53,
      52,
      51,
      466,
      465,
      462,
      461,
      460,
      459,
      458,
      457,
      456,
      245,
      244,
      243,
      242,
      241,
      240,
      239,
      238,
      237,
      236,
      235,
      234,
      233,
      232,
      231,
      230,
      229,
      228,
      50,
      49,
      48,
      47,
      46,
      45,
      44,
      43,
      42,
      41,
      40,
      39,
      38,
      37,
      36,
      35,
      34,
      33,
      32,
      31,
      30,
      29,
      28,
      27,
      26,
      455,
      454,
      453,
      452,
      451,
      450,
      227,
      226,
      225,
      224,
      223,
      222,
      221,
      220,
      219,
      218,
      217,
      216,
      215,
      214,
      213,
      25,
      24,
      23,
      22,
      449,
      448,
      447,
      446,
      445,
      212,
      211,
      210,
      209,
      208,
      207,
      206,
      205,
      204,
      203,
      202,
      21,
      20,
      19,
      18,
      17,
      444,
      443,
      442,
      441,
      440,
      439,
      201,
      200,
      199,
      198,
      197,
      196,
      195,
      194,
      193,
      192,
      191,
      190,
      16,
      15,
      14,
      13,
      12,
      11,
      10,
      9,
      438,
      437,
      436,
      435,
      434,
      189,
      188,
      187,
      186,
      185,
      184,
      183,
      182,
      181,
      180,
      179,
      178,
      177,
      176,
      175,
      174,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    [
      388,
      385,
      356,
      348,
      162,
      140,
      133,
      86,
      485,
      470,
      422,
      391,
      389,
      387,
      375,
      368,
      363,
      355,
      342,
      338,
      328,
      317,
      286,
      282,
      273,
      270,
      267,
      266,
      252,
      214,
      213,
      163,
      161,
      155,
      153,
      150,
      149,
      148,
      147,
      146,
      145,
      144,
      143,
      142,
      138,
      137,
      130,
      129,
      128,
      126,
      125,
      124,
      121,
      118,
      117,
      115,
      112,
      111,
      110,
      104,
      103,
      101,
      97,
      93,
      92,
      90,
      85,
      84,
      83,
      76,
      71,
      64,
      63,
      62,
      52,
      51,
      22,
      17,
      9,
      1,
      402,
      515,
      431,
      173,
      172,
      514,
      513,
      512,
      507,
      504,
      500,
      496,
      488,
      486,
      482,
      449,
      447,
      430,
      429,
      428,
      427,
      425,
      421,
      420,
      414,
      413,
      412,
      410,
      406,
      404,
      398,
      396,
      394,
      392,
      386,
      384,
      383,
      382,
      378,
      371,
      370,
      369,
      362,
      361,
      360,
      349,
      347,
      344,
      337,
      336,
      329,
      324,
      320,
      316,
      307,
      306,
      303,
      296,
      292,
      291,
      269,
      268,
      210,
      171,
      170,
      169,
      168,
      166,
      165,
      164,
      160,
      159,
      156,
      152,
      151,
      139,
      135,
      134,
      132,
      131,
      123,
      120,
      119,
      116,
      114,
      107,
      106,
      105,
      100,
      98,
      94,
      89,
      61,
      59,
      49,
      457,
      456,
      236,
      235,
      234,
      233,
      231,
      230,
      229,
      228,
      40,
      39,
      38,
      37,
      35,
      34,
      33,
      32,
      31,
      30,
      29,
      28,
      27,
      26,
      390,
      372,
      127,
      498,
      417,
      365,
      352,
      495,
      380,
      374,
      367,
      364,
      157,
      141,
      102,
      528,
      527,
      526,
      525,
      524,
      523,
      522,
      521,
      520,
      519,
      518,
      517,
      516,
      497,
      494,
      491,
      474,
      433,
      432,
      416,
      411,
      408,
      407,
      397,
      376,
      359,
      353,
      350,
      343,
      341,
      340,
      323,
      322,
      284,
      271,
      258,
      215,
      154,
      136,
      82,
      81,
      74,
      72,
      69,
      68,
      508,
      505,
      502,
      493,
      492,
      487,
      483,
      481,
      426,
      424,
      419,
      418,
      405,
      403,
      395,
      393,
      381,
      379,
      377,
      373,
      366,
      354,
      351,
      339,
      335,
      330,
      327,
      326,
      325,
      308,
      305,
      304,
      293,
      287,
      285,
      283,
      272,
      259,
      253,
      232,
      158,
      113,
      108,
      99,
      96,
      91,
      88,
      87,
      80,
      77,
      75,
      73,
      70,
      56,
      55,
      54,
      53,
      36,
      511,
      510,
      509,
      506,
      503,
      501,
      499,
      490,
      489,
      484,
      480,
      479,
      478,
      477,
      476,
      475,
      473,
      472,
      471,
      469,
      468,
      467,
      466,
      465,
      464,
      463,
      462,
      461,
      460,
      459,
      458,
      455,
      454,
      453,
      452,
      451,
      450,
      448,
      446,
      445,
      444,
      443,
      442,
      441,
      440,
      439,
      438,
      437,
      436,
      435,
      434,
      423,
      415,
      409,
      401,
      400,
      399,
      358,
      357,
      346,
      345,
      334,
      333,
      332,
      331,
      321,
      319,
      318,
      315,
      314,
      313,
      312,
      311,
      310,
      309,
      302,
      301,
      300,
      299,
      298,
      297,
      295,
      294,
      290,
      289,
      288,
      281,
      280,
      279,
      278,
      277,
      276,
      275,
      274,
      265,
      264,
      263,
      262,
      261,
      260,
      257,
      256,
      255,
      254,
      251,
      250,
      249,
      248,
      247,
      246,
      245,
      244,
      243,
      242,
      241,
      240,
      239,
      238,
      237,
      227,
      226,
      225,
      224,
      223,
      222,
      221,
      220,
      219,
      218,
      217,
      216,
      212,
      211,
      209,
      208,
      207,
      206,
      205,
      204,
      203,
      202,
      201,
      200,
      199,
      198,
      197,
      196,
      195,
      194,
      193,
      192,
      191,
      190,
      189,
      188,
      187,
      186,
      185,
      184,
      183,
      182,
      181,
      180,
      179,
      178,
      177,
      176,
      175,
      174,
      167,
      122,
      109,
      95,
      79,
      78,
      67,
      66,
      65,
      60,
      58,
      57,
      50,
      48,
      47,
      46,
      45,
      44,
      43,
      42,
      41,
      25,
      24,
      23,
      21,
      20,
      19,
      18,
      16,
      15,
      14,
      13,
      12,
      11,
      10,
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    [
      524,
      507,
      502,
      493,
      489,
      485,
      483,
      482,
      481,
      478,
      477,
      476,
      471,
      468,
      467,
      465,
      464,
      463,
      456,
      453,
      452,
      451,
      449,
      448,
      446,
      445,
      437,
      434,
      432,
      428,
      427,
      426,
      425,
      419,
      415,
      404,
      395,
      393,
      377,
      372,
      357,
      354,
      353,
      351,
      341,
      339,
      338,
      331,
      330,
      325,
      323,
      313,
      310,
      305,
      300,
      298,
      293,
      289,
      287,
      286,
      281,
      280,
      278,
      271,
      266,
      264,
      262,
      261,
      257,
      255,
      254,
      249,
      248,
      247,
      246,
      245,
      243,
      241,
      240,
      239,
      236,
      234,
      231,
      229,
      228,
      227,
      226,
      224,
      211,
      210,
      208,
      203,
      200,
      198,
      196,
      194,
      192,
      191,
      190,
      182,
      181,
      180,
      179,
      175,
      156,
      123,
      122,
      108,
      103,
      99,
      95,
      81,
      73,
      69,
      61,
      57,
      55,
      54,
      53,
      49,
      48,
      47,
      46,
      44,
      43,
      42,
      41,
      39,
      38,
      29,
      24,
      23,
      19,
      16,
      15,
      13,
      12,
      10,
      8,
      7,
      6,
      5,
      2,
      480,
      479,
      475,
      474,
      473,
      472,
      470,
      469,
      466,
      462,
      461,
      460,
      459,
      458,
      457,
      455,
      454,
      450,
      447,
      444,
      443,
      442,
      441,
      440,
      439,
      438,
      436,
      435,
      320,
      319,
      311,
      308,
      297,
      296,
      295,
      294,
      292,
      288,
      285,
      284,
      282,
      279,
      277,
      276,
      275,
      265,
      263,
      259,
      258,
      256,
      253,
      251,
      250,
      244,
      242,
      238,
      237,
      235,
      233,
      232,
      230,
      225,
      223,
      222,
      221,
      220,
      219,
      218,
      217,
      216,
      215,
      214,
      213,
      212,
      209,
      207,
      206,
      205,
      204,
      202,
      201,
      199,
      197,
      195,
      193,
      189,
      188,
      187,
      186,
      185,
      184,
      183,
      178,
      177,
      176,
      174,
      94,
      88,
      87,
      79,
      78,
      72,
      70,
      67,
      66,
      65,
      62,
      60,
      59,
      58,
      50,
      45,
      40,
      37,
      35,
      34,
      33,
      32,
      31,
      30,
      28,
      27,
      26,
      25,
      22,
      21,
      20,
      18,
      17,
      14,
      11,
      9,
      3,
      1,
      528,
      527,
      526,
      525,
      523,
      522,
      521,
      520,
      519,
      518,
      517,
      516,
      515,
      514,
      513,
      512,
      511,
      510,
      509,
      508,
      506,
      505,
      504,
      503,
      501,
      500,
      499,
      498,
      497,
      496,
      495,
      494,
      492,
      491,
      490,
      488,
      487,
      486,
      484,
      433,
      431,
      430,
      429,
      424,
      423,
      422,
      421,
      420,
      418,
      417,
      416,
      414,
      413,
      412,
      411,
      410,
      409,
      408,
      407,
      406,
      405,
      403,
      402,
      401,
      400,
      399,
      398,
      397,
      396,
      394,
      392,
      391,
      390,
      389,
      388,
      387,
      386,
      385,
      384,
      383,
      382,
      381,
      380,
      379,
      378,
      376,
      375,
      374,
      373,
      371,
      370,
      369,
      368,
      367,
      366,
      365,
      364,
      363,
      362,
      361,
      360,
      359,
      358,
      356,
      355,
      352,
      350,
      349,
      348,
      347,
      346,
      345,
      344,
      343,
      342,
      340,
      337,
      336,
      335,
      334,
      333,
      332,
      329,
      328,
      327,
      326,
      324,
      322,
      321,
      318,
      317,
      316,
      315,
      314,
      312,
      309,
      307,
      306,
      304,
      303,
      302,
      301,
      299,
      291,
      290,
      283,
      274,
      273,
      272,
      270,
      269,
      268,
      267,
      260,
      252,
      173,
      172,
      171,
      170,
      169,
      168,
      167,
      166,
      165,
      164,
      163,
      162,
      161,
      160,
      159,
      158,
      157,
      155,
      154,
      153,
      152,
      151,
      150,
      149,
      148,
      147,
      146,
      145,
      144,
      143,
      142,
      141,
      140,
      139,
      138,
      137,
      136,
      135,
      134,
      133,
      132,
      131,
      130,
      129,
      128,
      127,
      126,
      125,
      124,
      121,
      120,
      119,
      118,
      117,
      116,
      115,
      114,
      113,
      112,
      111,
      110,
      109,
      107,
      106,
      105,
      104,
      102,
      101,
      100,
      98,
      97,
      96,
      93,
      92,
      91,
      90,
      89,
      86,
      85,
      84,
      83,
      82,
      80,
      77,
      76,
      75,
      74,
      71,
      68,
      64,
      63,
      56,
      52,
      51,
      36,
      4
    ]
  ];
  

  link.onclick =()=> open("https://twitter.com/ariamaranai");
  
  searchButton.onclick = input.onclick =()=> link.getAttribute("style") ? input.blur() : input.focus(link.attributeStyleMap.set("display", none)); 
  
  input.onblur =()=> input.value || link.attributeStyleMap.clear();

  input.oninput =e=> {
    if (e = e.target.value) {
      let i = e.length, s = "", c;
      while (s = ((12352 < (c = e.charCodeAt(--i)) && c < 12439) ? String.fromCharCode(c + 96) : e[i]) + s, i);
      i = 528, c = 0;
      while((e = p[i]).attributeStyleMap.set("display", e.textContent.includes(s) && ++c ? flex : none), --i);
      nRow.textContent = c;
    } else {
      nRow.textContent = e = 528;
      while(p[e].attributeStyleMap.set("display", flex), --e);
    }
  }

  select.oninput =e=> {
    let newIndex = select.selectedIndex, i = 528;
    if (currentIndex != newIndex)
      if (currentIndex = newIndex)
        if (orders[--newIndex]) 
          while (b.appendChild(p[orders[newIndex][--i]]), i);
      else
        while (b.insertBefore(p[--i], p[528]), i);
  }


  /*
  document.addEventListener("DOMContentLoaded", ()=> {
    let ptr = 0;
    let val = "";
    let i = 528;
    let names = Array(528);
    let years = Array(528);
    let countrys = Array(528);
    let sexes = Array(528);

    while (
      (names[--i] = (val = p[i + 1].textContent).slice(0, ptr = val.indexOf("\n"))),
      (years[i] = +(val.slice(++ptr, ptr += 4))),
      (countrys[i] = "JPIRGBNZGEFRHUUSCACHAUSA".indexOf(val.slice(++ptr, ptr += 2))),
      (sexes[i] = val[val[ptr] == " " ? ptr + 1 : ptr + 2]),
      i);

    orders.push(names.map((v, i) => [v, i + 1]).sort((a, b) => a[0] >= b[0] && -1).map(v => v[1]));
    orders.push(years.map((v, i) => [v, i + 1]).sort((a, b) => a[0] <= b[0] && -1).map(v => v[1]));
    orders.push(countrys.map((v, i) => [v, i + 1]).sort((a, b) => a[0] >= b[0] && -1).map(v => v[1]));
    orders.push(sexes.map((v, i) => [v, i + 1]).sort((a, b) => a[0] <= b[0] && -1).map(v => v[1]));
    
    console.log(orders);
  })*/
}