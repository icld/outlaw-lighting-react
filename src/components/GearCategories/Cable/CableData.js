import dmx from "./CableAssets/dmx.jpeg";
import l2130 from "./CableAssets/l2130.jpeg";
import true1 from "./CableAssets/true1.png";
import socapex from "./CableAssets/socapex.png";
import powercon from "./CableAssets/powercon.png";
import feeder from "./CableAssets/feeder.png";
import edison from "./CableAssets/edison.png";

const fixtures = [
  {
    name: "DMX",
    nameID: "dmx",
    image: dmx,
    type: "data",
    desc: "",
    info: "  ",
    specs: [
      "Lengths: 2', 5', 8', 10', 16', 25', 48', 96'",
      "5-pin to 3-pin adapters in both directions",
      "Ethernet squids to 4 line 5-pin DMX",
      "5-pin DMX, ethernet, and all necessary adapters",
    ],

    url: "/cable/dmx",
  },
  {
    name: "L21-30",
    nameID: "l2130",
    image: l2130,
    type: "power",
    desc: "",
    info: "  ",
    specs: [
      "Lengths: 8', 16', 24', 48', 96",
      "through break-out boxes with  3 paired 20amp edison outlets with indicator lights",
    ],

    url: "/cable/l2130",
  },
  {
    name: "True1",
    nameID: "true1",
    image: true1,
    type: "power",
    desc: "",
    info: "  ",
    specs: [
      "Lengths: 2′, 4′, 6′, 8′, 10′, 16′, 24′, 48′, 96′",
      "2′ “Y” style twofers",
      "2′ adapter to male and female edison",
      "2′ adapter to male and female powercon",
    ],

    url: "/cable/true1",
  },
  {
    name: "Socapex",
    nameID: "socapex",
    image: socapex,
    type: "power",
    desc: "",
    info: "  ",
    specs: [
      "19 pin socapex",
      "Lengths: 16′, 24′, 48′, 96′",
      "4′ break-ins and break-outs to edison",
      "4′ break-ins and break-outs to true1",
      "12′ break-outs to true1",
    ],

    url: "/cable/socapex",
  },
  {
    name: "Powercon",
    nameID: "powercon",
    image: powercon,
    type: "power",
    desc: "",
    info: "  ",
    specs: [
      "Lengths: 2′, 5′, 10′",
      "4′ adapter to male edison",
      "2′ adapters to male and female true1",
      "True1 adapters to make a powercon jumper of nearly any length at your request",
    ],

    url: "/cable/powercon",
  },
  {
    name: "Feeder",
    nameID: "feeder",
    image: feeder,
    type: "power",
    desc: "",
    info: "  ",
    specs: [
      "Lengths: 8′, 25′, 50′, 100′",
      "8′ tails",
      "Turn arounds",
      '"T"-adapters',
    ],

    url: "/cable/feeder",
  },
  {
    name: "Edison",
    nameID: "edison",
    image: edison,
    type: "power",
    desc: "",
    info: "  ",
    specs: [
      "Lengths: 8′, 16′, 24′, 48′, 96",
      "3-way triple taps",
      "4′ adapter to female powercon",
      "2′ adapter to male and female true1",
    ],

    url: "/cable/edison",
  },
];

export default fixtures;
