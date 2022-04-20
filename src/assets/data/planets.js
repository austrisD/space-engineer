import skaoul from "../planets/skaoul.png";
import Asuras from "../planets/Asuras.png";
import BlackHole from "../planets/BlackHole.png";
import moon from "../planets/moon.png";
import orionStar from "../planets/orionStar.png";
import overwant from "../planets/overwant.png";
import pertam from "../planets/pertam.png";
import satreus from "../planets/satreus.png";
import telos from "../planets/telos.png";
import teralis from "../planets/teralis.png";
import terraEarth from "../planets/terra-earth.png";
import triton from "../planets/triton.png";

export const Planets = [
  {
    name: "Skaol",
    PlanetSize: 120000,
    planetImage: skaoul,
    Coordinates: {
      X: 3377383.48076615,
      Y: 0.499999999170541,
      Z: 918305.569805862,
    },
    images: [],
    descriptions:
      "Uninhabited planet. A relatively safe place to hide from other survivors.",
    gravity: 0.45,
    atmosphere: 0.2,
    distanceFromCenter: 3552679.23551953,
  },
  {
    name: "Asuras",
    PlanetSize: 240000,
    planetImage: Asuras,
    Coordinates: {
      X: -1205784.13370262,
      Y: -2781937.29934012,
      Z: -1748400.34011913,
    },
    images: [],
    descriptions: "",
    gravity: 1.3,
    atmosphere: 0.9,
    distanceFromCenter: 3429555.27334614,
  },
  {
    name: "Teralis ",
    PlanetSize: 19000,
    planetImage: teralis,
    Coordinates: {
      X: -1592586.74684872,
      Y: -2680036.66900177,
      Z: -1748400.34011913,
    },
    images: [],
    descriptions: "",
    gravity: 1,
    atmosphere: 1,
    distanceFromCenter: 3565373.22304356,
  },
  // {
  //   name: "Terra",
  //   PlanetSize: 120000,
  //   planetImage: terraEarth,
  //   Coordinates: {
  //     X: 54715353.7894947,
  //     Y: 60441332.7730428,
  //     Z: 57532362.5419378,
  //   },
  //   images: [],
  //   descriptions: "",
  //   gravity: 1,
  //   atmosphere: 0.9,
  //   distanceFromCenter: 99841273.2504755,
  // },
  // {
  //   name: "Orion Star",
  //   PlanetSize: 120000,
  //   planetImage: orionStar,
  //   Coordinates: {
  //     X: 57735037.1159113,
  //     Y: 57735037.1159113,
  //     Z: 57735035.7378781,
  //   },
  //   images: [],
  //   descriptions: "Dont get closer to 2000km you ship gonna burn!!!",
  //   gravity: 10000,
  //   atmosphere: "inferno",
  //   distanceFromCenter: 100058014.789451,
  // },
  // {
  //   name: "Overvent gas's giant",
  //   PlanetSize: 120000,
  //   planetImage: overwant,
  //   Coordinates: {
  //     X: 60623743.5380148,
  //     Y: 60179741.4099456,
  //     Z: 59205544.5347331,
  //   },
  //   images: [],
  //   descriptions:
  //     "Gass giant with 550 000 km asteroid belt.Attempt to land on planet is not advised",
  //   gravity: 6.4,
  //   atmosphere: 4,
  //   distanceFromCenter: 103982735.033006,
  // },
  // {
  //   name: "Satreus",
  //   PlanetSize: 120000,
  //   planetImage: satreus,
  //   Coordinates: {
  //     X: 61262096.4426619,
  //     Y: 55772195.8498396,
  //     Z: 58171735.4857459,
  //   },
  //   images: [],
  //   descriptions:
  //     "Abandoned dessert planet by civilization, ruled by guns and violence",
  //   gravity: 0.95,
  //   atmosphere: 1,
  //   distanceFromCenter: 101275989.58178,
  // },
  {
    name: "Moon",
    PlanetSize: 20000,
    planetImage: moon,
    Coordinates: {
      X: 318085.317263313,
      Y: 1853110.16372182,
      Z: 904214.795494945,
    },
    images: [],
    descriptions: "Small moon orbiting Telos gas's giant",
    gravity: 0.25,
    atmosphere: 0,
    distanceFromCenter: 2094726.04651904,
  },
  {
    name: "Pertam",
    PlanetSize: 90000,
    planetImage: pertam,
    Coordinates: {
      X: -120387.591564056,
      Y: 1799205.98515213,
      Z: 475349.852517016,
    },
    images: [],
    descriptions:
      "Small dessert planet orbiting Telos gas's giant. Ruled made by player faction",
    gravity: 1.2,
    atmosphere: 0.9,
    distanceFromCenter: 1905989.70043289,
  },
  {
    name: "Triton",
    PlanetSize: 60000,
    planetImage: triton,
    Coordinates: {
      X: "-613451.92249256757",
      Y: "1906932.0539587883",
      Z: "1164492.4719572705",
    },
    images: [],
    descriptions: "Icy planed deserted by civilization rule by player faction",
    gravity: 1,
    atmosphere: 0.9,
    distanceFromCenter: 2327680.56714498,
  },
  {
    name: "Telos gas's giant",
    PlanetSize: 480000,
    planetImage: telos,
    Coordinates: {
      X: 0.500000000116415,
      Y: 2041241.96855959,
      Z: 1443376.15000685,
    },
    images: [],
    descriptions: "Gas's giant with 500 000 km asteroid belt",
    gravity: 50,
    atmosphere: 0,
    distanceFromCenter: 2366269.37425075,
  },
  {
    name: "Black Hole",
    PlanetSize: 120000,
    planetImage: BlackHole,
    Coordinates: {
      X: 0,
      Y: 0,
      Z: 0,
    },
    images: [],
    descriptions: "",
    gravity: "too much for human mind to comprehend",
    atmosphere: 0,
    distanceFromCenter: 0,
  },
];

export const factions = [
  {
    name: "Scavengers",
    descriptions:
      "Scavengers are just a group of low lives to loot pillage other survivors' gear and equipment that are easy to steal from.When it comes to the actual resistance they flee like cockroaches",
    logo: "",
    images: [],
    planets: [],
  },
  {
    name: "Space Bugs",
    descriptions:
      'There is cancer eating in outer space. With each decade it advances deeper, leaving drained, dead worlds in its wake. This horror, this abomination, has thought and purpose which functions on an unimaginable, galactic scale and all we can do is to try to stop the swarms of bio-engineered monsters it unleashes upon us by instinct. We have given the horror a name to salve our fears; we call it the Space bugs race, but if it is aware of us at all it must know us only as Prey."',
    logo: "",
    images: [],
    planets: [],
  },
  {
    name: "Sky peoples",
    descriptions: "",
    logo: "",
    images: [],
    planets: [],
  },
  {
    name: "Belters",
    descriptions:
      "can only by found near planets and gass giants with asteroid belts",
    logo: "",
    images: [],
    planets: [],
  },
];

///copy format  "GPS:eric base:-122318.79:1837212.27:450689.07:#FF75C9F1:"
