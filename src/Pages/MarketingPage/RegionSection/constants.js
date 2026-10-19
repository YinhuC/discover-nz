import northland from "../../../Images/regions/northland.webp";
import auckland from "../../../Images/regions/auckland.webp";
import coromandel from "../../../Images/regions/coromandel.webp";
import waikato from "../../../Images/regions/waikato.webp";
import bayOfPlenty from "../../../Images/regions/bay-of-plenty.webp";
import rotorua from "../../../Images/regions/rotorua.webp";
import taupo from "../../../Images/regions/taupo.webp";
import tairawhiti from "../../../Images/regions/tairawhiti.webp";
import hawkesBay from "../../../Images/regions/hawkes-bay.webp";
import taranaki from "../../../Images/regions/taranaki.webp";
import ruapehu from "../../../Images/regions/ruapehu.webp";
import whanganui from "../../../Images/regions/whanganui.webp";
import manawatu from "../../../Images/regions/manawatu.webp";
import wairarapa from "../../../Images/regions/wairarapa.webp";
import wellington from "../../../Images/regions/wellington.webp";
import nelsonTasman from "../../../Images/regions/nelson-tasman.webp";
import marlborough from "../../../Images/regions/marlborough.webp";
import westCoast from "../../../Images/regions/west-coast.webp";
import canterbury from "../../../Images/regions/canterbury.webp";
import waitaki from "../../../Images/regions/waitaki.webp";
import wanaka from "../../../Images/regions/wanaka.webp";
import queenstown from "../../../Images/regions/queenstown.webp";
import centralOtago from "../../../Images/regions/central-otago.webp";
import fiordland from "../../../Images/regions/fiordland.webp";
import southland from "../../../Images/regions/southland.webp";
import dunedin from "../../../Images/regions/dunedin.webp";
import clutha from "../../../Images/regions/clutha.webp";

export const licenseUrls = {
  "Public domain": null,
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
  "CC BY 3.0": "https://creativecommons.org/licenses/by/3.0/",
  "CC BY 3.0 pl": "https://creativecommons.org/licenses/by/3.0/pl/deed.en",
  "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

const commons = (file) => `https://commons.wikimedia.org/wiki/File:${file}`;

export const islands = [
  {
    name: "North Island",
    regions: [
      {
        name: "Northland",
        link: "northland",
        image: northland,
        caption: "Archway Island, Poor Knights",
        info: "The subtropical Northland region stretches from Auckland to the very top of New Zealand. Follow the Twin Coast Discovery Highway to the Bay of Islands, the Kauri Coast, the Far North and Whangārei.",
        credit: {
          artist: "Pseudopanax",
          license: "Public domain",
          source: commons("Archway_Island_south_of_Aorangi_Island_1.jpg"),
        },
      },
      {
        name: "Auckland",
        link: "auckland",
        image: auckland,
        caption: "Viaduct Harbour",
        info: "Tāmaki Makaurau Auckland is an urban oasis, where sparkling waters and lush landscapes meet city sophistication.",
        credit: {
          artist: "Radosław Botev",
          license: "CC BY 3.0 pl",
          source: commons("Viaduct_Harbour,_Auckland_(2).jpg"),
        },
      },
      {
        name: "The Coromandel",
        link: "coromandel",
        image: coromandel,
        caption: "Cathedral Cove",
        info: "Renowned for pristine beaches, misty forests and a laid-back vibe, the Coromandel is one of New Zealand's most loved holiday destinations.",
        credit: {
          artist: "Krzysztof Golik",
          license: "CC BY-SA 4.0",
          source: commons("Cathedral_Cove_06.jpg"),
        },
      },
      {
        name: "Waikato",
        link: "waikato",
        image: waikato,
        caption: "Ngarunui Beach, Raglan",
        info: "Just south of Auckland lies the Waikato, a land of lush pastures that played The Shire in The Lord of the Rings and The Hobbit films.",
        credit: {
          artist: "Misaochan",
          license: "CC BY-SA 3.0",
          source: commons("Ngarunui_beach.jpg"),
        },
      },
      {
        name: "Bay of Plenty",
        link: "bay-of-plenty",
        image: bayOfPlenty,
        caption: "Mount Maunganui",
        info: "The Bay of Plenty is home to spectacular beaches, juicy kiwifruit and geothermal wonders.",
        credit: {
          artist: "Schwede66",
          license: "CC BY-SA 3.0",
          source: commons("Mount_Maunganui_25.jpg"),
        },
      },
      {
        name: "Rotorua",
        link: "rotorua",
        image: rotorua,
        caption: "Whakarewarewa Redwoods",
        info: "Rotorua is known for bubbling mud pools, shooting geysers and natural hot springs, and for sharing the richness of Māori culture.",
        credit: {
          artist: "Panamitsu",
          license: "CC BY-SA 4.0",
          source: commons("Redwoods_Forest_Rotorua_16.jpg"),
        },
      },
      {
        name: "Taupō",
        link: "taupo",
        image: taupo,
        caption: "Huka Falls",
        info: "From adrenaline-pumping activities to ancient forests and relaxing hot springs, the heart of the North Island offers something for everyone.",
        credit: {
          artist: "Avenue",
          license: "CC BY-SA 3.0",
          source: commons("Huka_Falls.jpg"),
        },
      },
      {
        name: "Tairāwhiti",
        link: "tairawhiti",
        image: tairawhiti,
        caption: "Mount Hikurangi",
        info: "Tairāwhiti is where the first Polynesian canoes landed, where James Cook made his first landfall, and where Māori and Europeans first met.",
        credit: {
          artist: "Phillip Capper",
          license: "CC BY 2.0",
          source: commons(
            "Hikurangi,_East_Coast,_New_Zealand,_14th._Dec._2010_-_Flickr_-_PhillipC_(1).jpg"
          ),
        },
      },
      {
        name: "Hawke's Bay",
        link: "hawkes-bay",
        image: hawkesBay,
        caption: "Te Mata Peak",
        info: "Two words best describe Hawke's Bay: wine country. But there is much more than wine to this sunny region.",
        credit: {
          artist: "Citikiwi",
          license: "Public domain",
          source: commons("Te_Mata_Peak_from_Tukituki1.jpg"),
        },
      },
      {
        name: "Taranaki",
        link: "taranaki",
        image: taranaki,
        caption: "Taranaki Maunga",
        info: "From world-class surf breaks to a perfectly formed volcanic peak, Taranaki offers countless opportunities for adventure.",
        credit: {
          artist: "Ulrich Lange",
          license: "CC BY-SA 4.0",
          source: commons("Mount_Taranaki_or_Mount_Egmont,_New_Zealand.jpg"),
        },
      },
      {
        name: "Ruapehu",
        link: "ruapehu",
        image: ruapehu,
        caption: "Emerald Lakes, Tongariro",
        info: "In the heart of the North Island, Ruapehu's two national parks and surrounding countryside are a beautiful backdrop for outdoor adventures.",
        credit: {
          artist: "Marcus Holland-Moritz",
          license: "CC BY-SA 2.0",
          source: commons("Emerald_Lakes,_New_Zealand.jpg"),
        },
      },
      {
        name: "Whanganui",
        link: "whanganui",
        image: whanganui,
        caption: "Whanganui River",
        info: "One of New Zealand's earliest cities, Whanganui takes its name, meaning 'big bay' or 'big harbour', from the great river that flows through it.",
        credit: {
          artist: "Avenue",
          license: "CC BY-SA 3.0",
          source: commons("Wanganui_from_Durie_Hill.JPG"),
        },
      },
      {
        name: "Manawatū",
        link: "manawatu",
        image: manawatu,
        caption: "Manawatū Gorge",
        info: "In the lower North Island, Manawatū is heartland New Zealand, offering an authentic Kiwi experience that's not to be missed.",
        credit: {
          artist: "Pseudopanax",
          license: "Public domain",
          source: commons("Manawatu_River_in_Manawatu_Gorge.jpg"),
        },
      },
      {
        name: "Wairarapa",
        link: "wairarapa",
        image: wairarapa,
        caption: "Castlepoint",
        info: "An hour's drive from Wellington, Wairarapa has the vineyards of Martinborough and Cape Palliser, the southernmost point of the North Island.",
        credit: {
          artist: "Sheldybett",
          license: "CC BY-SA 4.0",
          source: commons("Castlepoint_lighthouse_from_Jetty_Road.jpg"),
        },
      },
      {
        name: "Wellington",
        link: "wellington",
        image: wellington,
        caption: "Lambton Harbour",
        info: "At the southern end of the North Island, Wellington was once named 'the coolest little capital in the world' by Lonely Planet.",
        credit: {
          artist: "Takeshi Aida",
          license: "CC BY-SA 2.0",
          source: commons(
            "Mount_Victoria,_Wellington_Lambton_Harbour_(20240206)_(53532845910).jpg"
          ),
        },
      },
    ],
  },
  {
    name: "South Island",
    regions: [
      {
        name: "Nelson Tasman",
        link: "nelson-tasman",
        image: nelsonTasman,
        caption: "Anchorage Bay, Abel Tasman",
        info: "Nelson Tasman is a vibrant region where art and business thrive among golden beaches and a stunning natural landscape.",
        credit: {
          artist: "Hagai Agmon-Snir",
          license: "CC BY-SA 4.0",
          source: commons("AnchorageBayNZDec022024_01.jpg"),
        },
      },
      {
        name: "Marlborough",
        link: "marlborough",
        image: marlborough,
        caption: "Tory Channel",
        info: "Marlborough is about world-famous Sauvignon Blanc, fresh seafood and diverse landscapes, from valleys of vines to sheltered waterways.",
        credit: {
          artist: "Phillip Capper",
          license: "CC BY 2.0",
          source: commons("Tory_Channel_Marlborough_Sounds.jpg"),
        },
      },
      {
        name: "West Coast",
        link: "west-coast",
        image: westCoast,
        caption: "Pancake Rocks, Punakaiki",
        info: "The West Coast, or 'the Coast' as locals call it, is an untamed wilderness of rivers and rainforests, glaciers and geological treasures.",
        credit: {
          artist: "Christian Mehlführer",
          license: "CC BY-SA 3.0",
          source: commons("PancakeRocks_MC.jpg"),
        },
      },
      {
        name: "Christchurch & Canterbury",
        link: "christchurch-canterbury",
        image: canterbury,
        caption: "Lake Tekapo",
        info: "Set against the majestic backdrops of both alps and ocean, there is so much to discover in Christchurch and Canterbury.",
        credit: {
          artist: "Michal Klajban",
          license: "CC BY-SA 4.0",
          source: commons("Church_of_the_Good_Shepherd,_Lake_Tekapo,_New_Zealand_03.jpg"),
        },
      },
      {
        name: "Waitaki",
        link: "waitaki",
        image: waitaki,
        caption: "Moeraki Boulders",
        info: "Waitaki is a place of scenic contrast and haunting beauty: mysterious boulders, windswept beaches and Māori rock art.",
        credit: {
          artist: "W. Bulach",
          license: "CC BY-SA 4.0",
          source: commons(
            "00_1669_Moeraki_Boulders_on_Koekohe_Bay_(New_Zealand,_Otago_Region).jpg"
          ),
        },
      },
      {
        name: "Wānaka",
        link: "lake-wanaka",
        image: wanaka,
        caption: "Lake Wānaka",
        info: "At 45 kilometres long and covering 193 square kilometres, Lake Wānaka is perfect for jetboaters, sailors and kayakers to explore.",
        credit: {
          artist: "Krzysztof Golik",
          license: "CC BY-SA 4.0",
          source: commons("Lake_Wanaka_09.jpg"),
        },
      },
      {
        name: "Queenstown",
        link: "queenstown",
        image: queenstown,
        caption: "The Remarkables",
        info: "Surrounded by towering mountains on the edge of a lake, Queenstown is a hub of adventure with an ever-present sense of fun.",
        credit: {
          artist: "Nick Bramhall",
          license: "CC BY-SA 2.0",
          source: commons("The_Remarkables_(1126885451).jpg"),
        },
      },
      {
        name: "Central Otago",
        link: "central-otago",
        image: centralOtago,
        caption: "Lake Dunstan",
        info: "Central Otago is a powerful landscape: sunny, dry and golden, with weathered mountains, alpine herb fields and fast-flowing rivers.",
        credit: {
          artist: "Ulrich Lange",
          license: "CC BY 3.0",
          source: commons("Lake_Dunstan_-_Kawarau_Arm_and_Dunstan_Arm.jpg"),
        },
      },
      {
        name: "Fiordland",
        link: "fiordland",
        image: fiordland,
        caption: "Milford Sound",
        info: "Fiordland is one of the most dramatic parts of New Zealand. Take in its treasures by water, by air or on foot.",
        credit: {
          artist: "Krzysztof Golik",
          license: "CC BY-SA 4.0",
          source: commons("Milford_Sound_in_Fiordland_National_Park_04.jpg"),
        },
      },
      {
        name: "Southland",
        link: "southland",
        image: southland,
        caption: "Waipapa Point",
        info: "Southland is a land of rugged coast and rolling plains, famous Bluff oysters and the launching place for a visit to Stewart Island.",
        credit: {
          artist: "russellstreet",
          license: "CC BY-SA 2.0",
          source: commons("Waipapa_Point_Lighthouse4.jpg"),
        },
      },
      {
        name: "Dunedin",
        link: "dunedin-coastal-otago",
        image: dunedin,
        caption: "Larnach Castle",
        info: "Dunedin is a region of unique landscapes and cultural history. Get close to rare wildlife and soak up the quirky city vibe.",
        credit: {
          artist: "Christoph Strässler",
          license: "CC BY-SA 2.0",
          source: commons("Larnach_Castle,_Dunedin.jpg"),
        },
      },
      {
        name: "Clutha",
        link: "clutha",
        image: clutha,
        caption: "Tautuku Bay",
        info: "Unique and unspoiled, Clutha has wildlife, waterfalls and beautiful beaches, along with a rich gold-mining heritage.",
        credit: {
          artist: "Avenue",
          license: "CC BY-SA 3.0",
          source: commons("View_over_Tautuku_Bay_3.jpg"),
        },
      },
    ],
  },
];
