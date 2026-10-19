import auckland from "../../Images/55-Auckland-Harbour-AWADS-min.webp";
import ruapehu from "../../Images/L344-Mount-Ruapehu-Ruapehu-Penny-Egleton-min.webp";
import marlborough from "../../Images/154-Marlborough-sounds-min.webp";
import queenstown from "../../Images/0864-Glenorchy-Queenstown-Miles-Holden-min.webp";
import christchurch from "../../Images/9180-Port-Hills-Christchurch-Julian-Apse-min.webp";

export const locations = [
  {
    slug: "auckland",
    name: "Auckland",
    colour: "rgb(12, 81, 112)",
    image: auckland,
    credit: "Auckland Whale & Dolphin Safari",
    intro:
      "Tāmaki Makaurau Auckland is an urban oasis, where sparkling harbours and lush volcanic landscapes meet city sophistication. Two harbours, dozens of islands and a ring of old volcanic cones are all within reach of the waterfront.",
    highlights: [
      {
        title: "Hauraki Gulf islands",
        text: "Ferries leave the downtown terminal for Waiheke Island's vineyards and beaches, around 40 minutes across the water.",
      },
      {
        title: "Rangitoto Island",
        text: "The city's youngest volcano rose from the sea about 600 years ago. Walk the lava fields to the summit for a view back over the city.",
      },
      {
        title: "The waterfront",
        text: "Viaduct Harbour and Wynyard Quarter put restaurants, superyachts and the Sky Tower within a short stroll of each other.",
      },
    ],
  },
  {
    slug: "ruapehu",
    name: "Ruapehu",
    colour: "rgb(85, 114, 153)",
    image: ruapehu,
    credit: "Penny Egleton",
    intro:
      "In the heart of the North Island, Ruapehu's two national parks and surrounding countryside provide a beautiful backdrop to outdoor adventures, from alpine hikes to river journeys.",
    highlights: [
      {
        title: "Tongariro Alpine Crossing",
        text: "A full-day volcanic hike of roughly 19 kilometres, past steaming vents, Red Crater and the vivid Emerald Lakes.",
      },
      {
        title: "Mount Ruapehu",
        text: "The North Island's highest peak hosts the Whakapapa and Tūroa ski areas in winter and alpine walks in summer.",
      },
      {
        title: "Tongariro National Park",
        text: "New Zealand's oldest national park holds dual World Heritage status for both its volcanic landscape and its Māori cultural significance.",
      },
    ],
  },
  {
    slug: "marlborough",
    name: "Marlborough",
    colour: "rgb(120, 112, 26)",
    image: marlborough,
    credit: "MarlboroughNZ",
    intro:
      "The Marlborough region is about world-famous Sauvignon Blanc, fresh seafood and diverse landscapes, from valleys of vines to the sheltered waterways of the Marlborough Sounds.",
    highlights: [
      {
        title: "Wine country",
        text: "The sunny Wairau Valley is the heart of New Zealand wine, with cellar doors close enough to cycle between.",
      },
      {
        title: "Queen Charlotte Track",
        text: "A multi-day walking and biking trail along the ridges of the Sounds, with boats to carry your bags between bays.",
      },
      {
        title: "Greenshell mussels",
        text: "Havelock calls itself the Greenshell mussel capital of the world. Try them straight from the waters they're farmed in.",
      },
    ],
  },
  {
    slug: "queenstown",
    name: "Queenstown",
    colour: "rgb(104, 110, 120)",
    image: queenstown,
    credit: "Miles Holden",
    intro:
      "Queenstown is one of New Zealand's most exciting destinations. Surrounded by towering mountains on the edge of Lake Wakatipu, it is a hub of adventure with an ever-present sense of fun.",
    highlights: [
      {
        title: "Kawarau Bridge",
        text: "The birthplace of commercial bungy jumping in 1988, and still a 43-metre leap over the river.",
      },
      {
        title: "Skyline Gondola",
        text: "Ride up Bob's Peak for a view over the town, the lake and the jagged line of the Remarkables.",
      },
      {
        title: "Arrowtown",
        text: "A preserved gold-rush village 20 minutes away, at its best when the autumn trees turn gold.",
      },
    ],
  },
  {
    slug: "christchurch",
    name: "Christchurch",
    colour: "rgb(112, 107, 92)",
    image: christchurch,
    credit: "Julian Apse",
    intro:
      "Set against the backdrops of both alps and ocean, Ōtautahi Christchurch is the gateway to Canterbury, a city of gardens rebuilt with creative energy.",
    highlights: [
      {
        title: "The Avon River",
        text: "Punt along the Ōtākaro Avon past the Botanic Gardens and Hagley Park, right in the middle of the city.",
      },
      {
        title: "Akaroa",
        text: "A harbour town on Banks Peninsula with French roots, where boat trips go looking for the rare Hector's dolphin.",
      },
      {
        title: "The TranzAlpine",
        text: "One of the world's great train journeys crosses the Southern Alps from Christchurch to the West Coast.",
      },
    ],
  },
];
