export type Electors = {
  biden: number;
  trump: number;
};

export type Votes = {
  biden: number;
  trump: number;
  other: number;
};

export type StateData = {
  name: string;
  population: number;
  electors: Electors;
  votes: Votes;
  region: string;
};

export const electionData: StateData[] = [
  {
    name: "Alabama",
    electors: {
      biden: 0,
      trump: 9,
    },
    population: 5024279,
    votes: {
      biden: 849624,
      trump: 1441170,
      other: 32488,
    },
    region: "South",
  },
  {
    name: "Alaska",
    electors: {
      biden: 0,
      trump: 3,
    },
    population: 733391,
    votes: {
      biden: 153778,
      trump: 189951,
      other: 15801,
    },
    region: "West",
  },
  {
    name: "Arizona",
    electors: {
      biden: 11,
      trump: 0,
    },
    population: 7151502,
    votes: {
      biden: 1672143,
      trump: 1661683,
      other: 53497,
    },
    region: "West",
  },
  {
    name: "Arkansas",
    electors: {
      biden: 0,
      trump: 6,
    },
    population: 3011524,
    votes: {
      biden: 423932,
      trump: 760647,
      other: 15801,
    },
    region: "South",
  },
  {
    name: "California",
    electors: {
      biden: 55,
      trump: 0,
    },
    population: 39538223,
    votes: {
      biden: 11110250,
      trump: 6006429,
      other: 384192,
    },
    region: "West",
  },
  {
    name: "Colorado",
    electors: {
      biden: 9,
      trump: 0,
    },
    population: 5773714,
    votes: {
      biden: 1804352,
      trump: 1364607,
      other: 87993,
    },
    region: "West",
  },
  {
    name: "Connecticut",
    electors: {
      biden: 7,
      trump: 0,
    },
    population: 3605944,
    votes: {
      biden: 1080831,
      trump: 714717,
      other: 28309,
    },
    region: "Northeast",
  },
  {
    name: "Delaware",
    electors: {
      biden: 3,
      trump: 0,
    },
    population: 989948,
    votes: {
      biden: 296268,
      trump: 200603,
      other: 7475,
    },
    region: "South",
  },
  {
    name: "District of Columbia",
    electors: {
      biden: 3,
      trump: 0,
    },
    population: 689545,
    votes: {
      biden: 317323,
      trump: 18586,
      other: 8447,
    },
    region: "South",
  },

  {
    name: "Florida",
    electors: {
      biden: 0,
      trump: 29,
    },
    population: 21538187,
    votes: {
      biden: 5297045,
      trump: 5668731,
      other: 101680,
    },
    region: "South",
  },
  {
    name: "Georgia",
    electors: {
      biden: 16,
      trump: 0,
    },
    population: 10711908,
    votes: {
      biden: 2473633,
      trump: 2461854,
      other: 62229,
    },
    region: "South",
  },
  {
    name: "Hawaii",
    electors: {
      biden: 4,
      trump: 0,
    },
    population: 1455271,
    votes: {
      biden: 366130,
      trump: 196864,
      other: 11475,
    },
    region: "West",
  },
  {
    name: "Idaho",
    electors: {
      biden: 0,
      trump: 4,
    },
    population: 1839106,
    votes: {
      biden: 287021,
      trump: 554119,
      other: 26091,
    },
    region: "West",
  },
  {
    name: "Illinois",
    electors: {
      biden: 20,
      trump: 0,
    },
    population: 12812508,
    votes: {
      biden: 3471915,
      trump: 2446891,
      other: 114938,
    },
    region: "Midwest",
  },
  {
    name: "Indiana",
    electors: {
      biden: 0,
      trump: 11,
    },
    population: 6785528,
    votes: {
      biden: 1242413,
      trump: 1729516,
      other: 61183,
    },
    region: "Midwest",
  },
  {
    name: "Iowa",
    electors: {
      biden: 0,
      trump: 6,
    },
    population: 3190369,
    votes: {
      biden: 759061,
      trump: 897672,
      other: 34138,
    },
    region: "Midwest",
  },

  {
    name: "Kansas",
    electors: {
      biden: 0,
      trump: 6,
    },
    population: 2937880,
    votes: {
      biden: 571323,
      trump: 771406,
      other: 30574,
    },
    region: "Midwest",
  },
  {
    name: "Kentucky",
    electors: {
      biden: 0,
      trump: 8,
    },
    population: 4505836,
    votes: {
      biden: 772474,
      trump: 1326646,
      other: 37648,
    },
    region: "South",
  },
  {
    name: "Louisiana",
    electors: {
      biden: 0,
      trump: 8,
    },
    population: 4657757,
    votes: {
      biden: 856034,
      trump: 1255776,
      other: 36252,
    },
    region: "South",
  },
  {
    name: "Maine",
    electors: {
      biden: 3,
      trump: 1,
    },
    population: 1362359,
    votes: {
      biden: 435072,
      trump: 360737,
      other: 23652,
    },
    region: "Northeast",
  },
  {
    name: "Maryland",
    electors: {
      biden: 10,
      trump: 0,
    },
    population: 6177224,
    votes: {
      biden: 1985023,
      trump: 976414,
      other: 75593,
    },
    region: "South",
  },
  {
    name: "Massachusetts",
    electors: {
      biden: 11,
      trump: 0,
    },
    population: 7029917,
    votes: {
      biden: 2382202,
      trump: 1167202,
      other: 81998,
    },
    region: "Northeast",
  },
  {
    name: "Michigan",
    electors: {
      biden: 16,
      trump: 0,
    },
    population: 10077331,
    votes: {
      biden: 2804040,
      trump: 2649852,
      other: 85410,
    },
    region: "Midwest",
  },
  {
    name: "Minnesota",
    electors: {
      biden: 10,
      trump: 0,
    },
    population: 5706494,
    votes: {
      biden: 1717077,
      trump: 1484065,
      other: 76029,
    },
    region: "Midwest",
  },
  {
    name: "Mississippi",
    electors: {
      biden: 0,
      trump: 6,
    },
    population: 2961279,
    votes: {
      biden: 539508,
      trump: 756789,
      other: 17597,
    },
    region: "South",
  },
  {
    name: "Missouri",
    electors: {
      biden: 0,
      trump: 10,
    },
    population: 6154913,
    votes: {
      biden: 1253014,
      trump: 1718736,
      other: 54212,
    },
    region: "Midwest",
  },
  {
    name: "Montana",
    electors: {
      biden: 0,
      trump: 3,
    },
    population: 1084225,
    votes: {
      biden: 244786,
      trump: 343602,
      other: 15286,
    },
    region: "West",
  },
  {
    name: "Nebraska",
    electors: {
      biden: 1,
      trump: 4,
    },
    population: 1961504,
    votes: {
      biden: 374583,
      trump: 556846,
      other: 20283,
    },
    region: "Midwest",
  },
  {
    name: "Nevada",
    electors: {
      biden: 6,
      trump: 0,
    },
    population: 3104614,
    votes: {
      biden: 703486,
      trump: 669890,
      other: 32000,
    },
    region: "West",
  },
  {
    name: "New Hampshire",
    electors: {
      biden: 4,
      trump: 0,
    },
    population: 1377529,
    votes: {
      biden: 424921,
      trump: 365654,
      other: 15607,
    },
    region: "Northeast",
  },
  {
    name: "New Jersey",
    electors: {
      biden: 14,
      trump: 0,
    },
    population: 9288994,
    votes: {
      biden: 2608335,
      trump: 1883274,
      other: 57744,
    },
    region: "Northeast",
  },
  {
    name: "New Mexico",
    electors: {
      biden: 5,
      trump: 0,
    },
    population: 2117522,
    votes: {
      biden: 501614,
      trump: 401894,
      other: 20457,
    },
    region: "West",
  },
  {
    name: "New York",
    electors: {
      biden: 29,
      trump: 0,
    },
    population: 20201249,
    votes: {
      biden: 5244886,
      trump: 3251997,
      other: 119978,
    },
    region: "Northeast",
  },
  {
    name: "North Carolina",
    electors: {
      biden: 0,
      trump: 15,
    },
    population: 10439388,
    votes: {
      biden: 2684292,
      trump: 2758775,
      other: 81737,
    },
    region: "South",
  },
  {
    name: "North Dakota",
    electors: {
      biden: 0,
      trump: 3,
    },
    population: 779094,
    votes: {
      biden: 114902,
      trump: 235595,
      other: 11322,
    },
    region: "Midwest",
  },
  {
    name: "Ohio",
    electors: {
      biden: 0,
      trump: 18,
    },
    population: 11799448,
    votes: {
      biden: 2679165,
      trump: 3154834,
      other: 88203,
    },
    region: "Midwest",
  },
  {
    name: "Oklahoma",
    electors: {
      biden: 0,
      trump: 7,
    },
    population: 3959353,
    votes: {
      biden: 503890,
      trump: 1020280,
      other: 36529,
    },
    region: "South",
  },
  {
    name: "Oregon",
    electors: {
      biden: 7,
      trump: 0,
    },
    population: 4237256,
    votes: {
      biden: 1340383,
      trump: 958448,
      other: 75490,
    },
    region: "West",
  },
  {
    name: "Pennsylvania",
    electors: {
      biden: 20,
      trump: 0,
    },
    population: 13002700,
    votes: {
      biden: 3458229,
      trump: 3377674,
      other: 79380,
    },
    region: "Northeast",
  },
  {
    name: "Rhode Island",
    electors: {
      biden: 4,
      trump: 0,
    },
    population: 1097379,
    votes: {
      biden: 307486,
      trump: 199922,
      other: 10349,
    },
    region: "Northeast",
  },
  {
    name: "South Carolina",
    electors: {
      biden: 0,
      trump: 9,
    },
    population: 5118425,
    votes: {
      biden: 1091541,
      trump: 1385103,
      other: 36685,
    },
    region: "South",
  },
  {
    name: "South Dakota",
    electors: {
      biden: 0,
      trump: 3,
    },
    population: 886667,
    votes: {
      biden: 150471,
      trump: 261043,
      other: 11095,
    },
    region: "Midwest",
  },
  {
    name: "Tennessee",
    electors: {
      biden: 0,
      trump: 11,
    },
    population: 6910840,
    votes: {
      biden: 1143711,
      trump: 1852475,
      other: 57665,
    },
    region: "South",
  },
  {
    name: "Texas",
    electors: {
      biden: 0,
      trump: 38,
    },
    population: 29145505,
    votes: {
      biden: 5259126,
      trump: 5890347,
      other: 165583,
    },
    region: "South",
  },
  {
    name: "Utah",
    electors: {
      biden: 0,
      trump: 6,
    },
    population: 3271616,
    votes: {
      biden: 560282,
      trump: 865140,
      other: 62867,
    },
    region: "West",
  },
  {
    name: "Vermont",
    electors: {
      biden: 3,
      trump: 0,
    },
    population: 643077,
    votes: {
      biden: 242820,
      trump: 112704,
      other: 11904,
    },
    region: "Northeast",
  },
  {
    name: "Virginia",
    electors: {
      biden: 13,
      trump: 0,
    },
    population: 8631393,
    votes: {
      biden: 2413568,
      trump: 1962430,
      other: 84526,
    },
    region: "South",
  },
  {
    name: "Washington",
    electors: {
      biden: 12,
      trump: 0,
    },
    population: 7705281,
    votes: {
      biden: 2367612,
      trump: 1584651,
      other: 133368,
    },
    region: "West",
  },
  {
    name: "West Virginia",
    electors: {
      biden: 0,
      trump: 5,
    },
    population: 1793716,
    votes: {
      biden: 235984,
      trump: 545382,
      other: 13286,
    },
    region: "South",
  },
  {
    name: "Wisconsin",
    electors: {
      biden: 10,
      trump: 0,
    },
    population: 5893718,
    votes: {
      biden: 1630866,
      trump: 1610184,
      other: 56991,
    },
    region: "Midwest",
  },
  {
    name: "Wyoming",
    electors: {
      biden: 0,
      trump: 3,
    },
    population: 576851,
    votes: {
      biden: 73491,
      trump: 193559,
      other: 9715,
    },
    region: "West",
  },
];
