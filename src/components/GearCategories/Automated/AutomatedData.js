import esprite from "./AutomatedAssets/esprite.png";
import monet from "./AutomatedAssets/monet.png";
import viper from "./AutomatedAssets/viper.png";
import axiom from "./AutomatedAssets/axiom.png";
const fixtures = [
  {
    name: "Robe Esprite",
    nameID: "esprite",
    image: esprite,
    desc: "",
    info: "The new ESPRITE™ Profile LED automated luminaire has a fast-change, low-cost, transferable light engine ingeniously solving the problem of performance longevity for those preferring the higher brightness of white source LEDs as an obvious replacement for their aging stock of discharge workhorses..",
    specs: [
      "Power:  100-240 V, 50/60 Hz",
      "Output: 34000 Lumens",
      "Colour temperature output: 6,700 K",
      "Control channels: 49, 42, 50, 43, RDM Capable",
      "Zoom range: 5.5° - 50°",
      "Rotating gobo wheel: 7 rotating, indexable and replaceable breakup and aerial gobos + open, patented slot & lock system",
      "Static gobo wheel: 9 static and replaceable gobos + open",
      "Cable Inputs: PowerCON, 5-pin XLR",
      'h 28.9" x w 17.4" x d 10.4", 62.2 lbs',
    ],
    vid: "https://www.youtube.com/embed/LxjjCcWRWI0",
    url: "/automated/esprite",
  },
  {
    name: "Elation Artiste Monet",
    nameID: "monet",
    image: monet,
    desc: "",
    info: "Providing up to 45,000 lumens from its efficient 950W 6,500K LED engine the Monet is the ideal fixture for any application requiring superior output, bright and powerful beams, quiet operation as well as stunningly precise gobos and colors. Monet integrates Elation's new SpectraColor system which offers traditional CMY mixing but adds a variable RGB color mix for rich saturated primaries. In combination with the variable CTO the Monet allows for colors that were previously impossible to achieve, from theatrical pastels to the most vibrant red or blues ever produced by a color mixing system. The wide color gamut of the Artiste Monet achieved by seven color mixing flags with 16bit precision provides artistic possibilities that are truly inspiring. The fixed color wheel offers UV and High CRI options to round out the amazing color range of the fixture.",
    specs: [
      "Power: 100-240V 50/60Hz, 1400W ",
      "Output: 45,000 Lumens",
      "Color Temperature: 6,500K default",
      "DMX Channels: 40 and 67. RDM Capable",
      "Zoom Range: 6.8° - 55°",
      "Rotating Gobos: 7 Rotating / Indexing Interchangeable Glass Gobos",
      "Static Gobos: 7 Static  Interchangeable Glass Gobos",
      "Color Wheels: 6 Dichroic Colors including High CRI Filter and UV",
      "Battery-Powered",
      "Cable Inputs: True1, 5-pin XLR, Ethernet",
      'Dimensions: 18.55" L x 22.97" W x 31.51" H, 94.0lbs',
    ],
    vid: "https://www.youtube.com/embed/dNYbIX6qfhA",
    url: "/automated/monet",
  },
  {
    name: "Martin MAC Viper Profile",
    nameID: "viper",
    image: viper,
    desc: "",
    info: "The MAC Viper Profile is a new breed of high-output profile luminaire with an exceptional feature set, superior light quality and a highly efficient optical system. It outperforms all market-leading profiles in the 1200-watt range and is even an alternative to 1500-watt fixtures. The Viper Profile is not only brighter, it is also a faster and more compact solution. With its 1000-watt HID source, the Viper consumes less power, making it over 50% more efficient than its 1200-watt rivals.",
    specs: [
      "Power: 120-240 V nominal, 50/60 Hz, 1200W",
      "Output: 26000 Lumens",
      "Color Temperature:  6000K",
      "DMX Channels: 26/34, RDM Capable",
      "Zoom Range: 10-44°",
      "Rotating Gobos: 5 interchangeable aerial effects + open, indexing, continuous rotation and shake",
      "Static Gobos: 5 interchangeable texture/breakup gobos + open, indexing, continuous rotation and shake",
      "Color Wheel: 8-slot color wheel",
      "Battery-Powered",
      "Cable Inputs: PowerCON, 5-pin XLR",
      "Dimensions: ” L x ” W x ” H, lbs",
    ],
    vid: "https://www.youtube.com/embed/LNTuFL8-rew",
    url: "/automated/viper",
  },
  {
    name: "Martin Mac Axiom Hybrid",
    nameID: "axiom",
    image: axiom,
    desc: "",
    info: "The MAC Axiom™ Hybrid is a true all-in-one product, combining beam and spot into one compact unit that also offers diffused wash functionality. The high-precision optical system offers exceptional contrast, both in mid-air and projection as well as a surprisingly flat field, usually not seen with this short-arc lamp technology. The implementation of the MAC Viper CMY color palette gives designers the advantage of unlimited choice from subtle pastel shades to deep and saturated colors. All this comes in a small footprint and lightweight product which delivers superior performance in the best feature vs. size and weight ratio available in the market.",
    specs: [
      "Power: 100-240 V operation, 600 W",
      "Output: 16 000 Lumens wide / 14 000 Lumens narrow",
      "Color Temperature: 7000 K",
      "DMX Channels: 23, RDM Capable",
      "Zoom Range: 2-44°",
      "Rotating Gobos: 9",
      "Static Gobos: 16. integrated animation effects",
      "Color Wheels: Independent 16-slot color wheel ",
      "Cable Inputs: True1, 5-pin XLR",
      'Dimensions: 15.8" L x 16.3" W x 24.9" H, 54.7lbs',
    ],
    vid: "https://www.youtube.com/embed/TfERaCQ_WzU",
    url: "/automated/axiom",
  },
];

export default fixtures;
