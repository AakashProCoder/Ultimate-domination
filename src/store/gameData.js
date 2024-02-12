export var continents = [
  {
    areas: [
      "indonesia",
      "new_guinea",
      "eastern_australia",
      "western_australia",
    ],
    name: "oceania",
    bonus: 2,
  },
  {
    areas: ["brazil", "peru", "venezuela", "argentina"],
    name: "South America",
    bonus: 2,
  },
  {
    areas: [
      "egypt",
      "north_africa",
      "east_africa",
      "congo",
      "south_africa",
      "madagascar",
    ],
    name: "africa",
    bonus: 3,
  },
  {
    areas: [
      "iceland",
      "uk",
      "scandinavia",
      "northern_europe",
      "western_europe",
      "ukraine",
      "southern_europe",
    ],
    name: "europe",
    bonus: 5,
  },
  {
    areas: [
      "central_america",
      "eastern_us",
      "western_us",
      "quebec",
      "ontario",
      "alberta",
      "northwest_territory",
      "alaska",
      "greenland",
    ],
    name: "North America",
    bonus: 5,
  },
  {
    areas: [
      "middle_east",
      "afghanistan",
      "ural",
      "siberia",
      "irkutsk",
      "yakutsk",
      "kamchatka",
      "mongolia",
      "japan",
      "china",
      "siam",
      "india",
    ],
    name: "asia",
    bonus: 7,
  },
];

export const countries = [
  {
    name: "indonesia",
    continent: "oceania",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["siam", "western_australia", "new_guinea"],
  },
  {
    name: "new_guinea",
    continent: "oceania",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["indonesia", "eastern_australia", "western_australia"],
  },
  {
    name: "eastern_australia",
    continent: "oceania",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["western_australia", "new_guinea"],
  },
  {
    name: "western_australia",
    continent: "oceania",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["eastern_australia", "new_guinea", "indonesia"],
  },
  {
    name: "ural",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["ukraine", "siberia", "afghanistan", "china"],
  },
  {
    name: "siberia",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["ural", "mongolia", "yakutsk", "irkutsk", "china"],
  },
  {
    name: "afghanistan",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["ukraine", "ural", "middle_east", "china", "india"],
  },
  {
    name: "irkutsk",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["yakutsk", "siberia", "kamchatka", "mongolia"],
  },
  {
    name: "yakutsk",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["irkutsk", "siberia", "kamchatka"],
  },
  {
    name: "kamchatka",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["alaska", "yakutsk", "japan", "irkutsk", "mongolia"],
  },
  {
    name: "middle_east",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: [
      "ukraine",
      "afghanistan",
      "india",
      "egypt",
      "east_africa",
      "southern_europe",
    ],
  },
  {
    name: "india",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["middle_east", "siam", "afghanistan", "china"],
  },
  {
    name: "siam",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["indonesia", "india", "china"],
  },
  {
    name: "china",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["ural", "siberia", "afghanistan", "mongolia", "siam", "india"],
  },
  {
    name: "mongolia",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["irkutsk", "siberia", "kamchatka", "china", "japan"],
  },
  {
    name: "japan",
    continent: "asia",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["kamchatka", "mongolia"],
  },
  {
    name: "egypt",
    continent: "africa",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: [
      "middle_east",
      "southern_europe",
      "north_africa",
      "east_africa",
    ],
  },
  {
    name: "north_africa",
    continent: "africa",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: [
      "egypt",
      "southern_europe",
      "western_europe",
      "east_africa",
      "congo",
      "brazil",
    ],
  },
  {
    name: "east_africa",
    continent: "africa",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: [
      "middle_east",
      "egypt",
      "north_africa",
      "congo",
      "madagascar",
      "south_africa",
    ],
  },
  {
    name: "congo",
    continent: "africa",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["south_africa", "north_africa", "east_africa"],
  },
  {
    name: "south_africa",
    continent: "africa",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["congo", "madagascar", "east_africa"],
  },
  {
    name: "madagascar",
    continent: "africa",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["south_africa", "east_africa"],
  },
  {
    name: "brazil",
    continent: "South America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["peru", "argentina", "north_africa", "venezuela"],
  },
  {
    name: "peru",
    continent: "South America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["brazil", "argentina", "venezuela"],
  },
  {
    name: "argentina",
    continent: "South America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["brazil", "peru"],
  },
  {
    name: "venezuela",
    continent: "South America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["brazil", "peru", "central_america"],
  },
  {
    name: "iceland",
    continent: "europe",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["greenland", "uk", "scandinavia"],
  },
  {
    name: "scandinavia",
    continent: "europe",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["iceland", "uk", "ukraine", "northern_europe"],
  },
  {
    name: "northern_europe",
    continent: "europe",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: [
      "ukraine",
      "uk",
      "scandinavia",
      "southern_europe",
      "western_europe",
    ],
  },
  {
    name: "western_europe",
    continent: "europe",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["north_africa", "uk", "northern_europe", "southern_europe"],
  },
  {
    name: "southern_europe",
    continent: "europe",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: [
      "north_africa",
      "egypt",
      "northern_europe",
      "western_europe",
      "middle_east",
      "ukraine",
    ],
  },
  {
    name: "uk",
    continent: "europe",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["western_europe", "iceland", "northern_europe", "scandinavia"],
  },
  {
    name: "ukraine",
    continent: "europe",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: [
      "scandinavia",
      "ural",
      "northern_europe",
      "southern_europe",
      "afghanistan",
      "middle_east",
    ],
  },
  {
    name: "greenland",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["iceland", "quebec", "ontario", "northwest_territory"],
  },
  {
    name: "central_america",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["venezuela", "eastern_us", "western_us"],
  },
  {
    name: "eastern_us",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["central_america", "quebec", "ontario", "western_us"],
  },
  {
    name: "western_us",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["eastern_us", "central_america", "ontario", "alberta"],
  },
  {
    name: "alaska",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["kamchatka", "alberta", "northwest_territory"],
  },
  {
    name: "alberta",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["alaska", "western_us", "ontario", "northwest_territory"],
  },
  {
    name: "ontario",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: [
      "greenland",
      "quebec",
      "alberta",
      "western_us",
      "eastern_us",
      "northwest_territory",
    ],
  },
  {
    name: "quebec",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["greenland", "eastern_us", "ontario"],
  },
  {
    name: "northwest_territory",
    continent: "North America",
    owner: "none",
    color: "white",
    army: 0,
    neighbours: ["greenland", "alaska", "alberta", "ontario"],
  },
];

export var players = [
  {
    name: "Napoleon",
    country: "France",
    color: "#030f63",
    army: 10,
    reserve: 10,
    areas: [],
    bonus: 2,
    alive: true,
  },
  {
    name: "Elizabeth I",
    country: "England",
    color: "#d6040e",
    army: 20,
    reserve: 20,
    areas: [],
    bonus: 2,
    alive: true,
  },
  {
    name: "Washington",
    country: "USA",
    color: "#d86b04",
    army: 20,
    reserve: 20,
    areas: [],
    bonus: 2,
    alive: true,
  },
  {
    name: "Genghis Khan",
    country: "Mongolia",
    color: "#0eb7ae",
    army: 20,
    reserve: 20,
    areas: [],
    bonus: 2,
    alive: true,
  },
  {
    name: "Catherine",
    country: "Russia",
    color: "#104704",
    army: 20,
    reserve: 20,
    areas: [],
    bonus: 2,
    alive: true,
  },
  {
    name: "Isabella",
    country: "Spain",
    color: "#c6c617",
    army: 20,
    reserve: 20,
    areas: [],
    bonus: 2,
    alive: true,
  },
];