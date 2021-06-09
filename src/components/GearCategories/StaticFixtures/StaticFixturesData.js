import coloursource from "./StaticFixturesAssets/coloursource.jpeg";
import source4Elips from "./StaticFixturesAssets/source4Elips.jpeg";
import klpanel from "./StaticFixturesAssets/klpanel.png";
import atomic from "./StaticFixturesAssets/atomic.png";
import strike4 from "./StaticFixturesAssets/strike4.png";
import source4par from "./StaticFixturesAssets/source4par.png";
import epix from "./StaticFixturesAssets/epix.png";
import sixpar100 from "./StaticFixturesAssets/sixpar100.png";
import sixpar300 from "./StaticFixturesAssets/sixpar300.png";

const fixtures = [
  {
    name: "ETC Colorsource Spot",
    nameID: "coloursource",
    image: coloursource,
    desc: "",
    info: "An LED luminaire crafted by lighting experts, ColorSource Spot uses a balanced recipe of red, green, blue, a twist of lime, and an extra dash of red to provide a richness of color only possible from ETC LED luminaires. ColorSource Spot outputs bright, beautiful light, is easy to use with or without a lighting desk, and lives up to ETC's high standards for quality.",
    specs: [
      "Power: 100-240 VAC 50/60 Hz, 147W",
      "Output: 6,932 Lumens",
      "DMX Channels: 1, 5, 6, RDM Capable",
      "Lens Tubes:  5°-90°",
      "Cable Inputs: PowerCON, 5-pin XLR",
      'imensions (No Barrel): 26.44" L x 13.36" W x 26.44" H, 13.0lbs',
    ],
    vid: "https://www.youtube.com/embed/N0JzgjCdSgc",
    url: "/static/coloursource",
  },
  {
    name: "ETC Source Four Ellipsoidal",
    nameID: "source4Elips",
    image: source4Elips,
    desc: "",
    info: "There's only one Source Four - the ellipsoidal fixture that changed the lighting industry. Source Four combines the energy-saving power of the patented HPL lamp, with a dichroic reflector and optical-quality lenses, for the coolest beam on the market. That means your gels, patterns and shutters last longer and your performance space stays cooler.The EDLT lens tube option for 19º, 26º, 36º and 50º field angles makes the Source Four even better for ultra-crisp, high-contrast gobo projections.",
    specs: [
      "Power: 120V, 750W",
      "Color Temperature:  3250K",
      "Lens Tubes: 5º, 10º, 14º, 19º, 26º, 36º, 50º, 70º and 90º ",
      "Cable Inputs: Edison",
      'Dimensions: 22.8" L x 12.4" W x 21.3 " H, 16.3lbs',
    ],
    vid: "",
    url: "/static/source4Elips",
  },
  {
    name: "Elation KL Panel",
    nameID: "klpanel",
    image: klpanel,
    desc: "",
    info: "The KL PANEL™ is a full-color-spectrum LED soft light that provides high output, precise color temperature control, full spectrum color rendering and even wash coverage. Optimized for the tunable white light requirements of Film and Television, it is an ideal key and fill light source for many situations requiring outstanding performance and color quality. The KL PANEL incorporates a highly efficient 6-in-1 LED package that produces up to 24,000 field lumens at a 100° half-peak angle. Compact and portable, the fixture can be mounted on a stand or suspended using any standard clamp or the included Junior pin adapter. A rugged housing with impact resistant surrounds and base plate ensures the KL Panel can handle the rough handling on todays fast paced sets.",
    specs: [
      "Power: 100-240V - 50/60Hz, 295W",
      "Output: 24,000  Lumens",
      "Color Temperature: 2,000K - 10,000K",
      "DMX Channels: 9 DMX Channel Modes, RDM Capable",
      "Cable Inputs: True1, 5-pin XLR",
      'Dimensions: 20.8" L x 5.5" W x 16.3" H, 28.6lbs',
    ],
    vid: "https://www.youtube.com/embed/rs5sF2HLlQA",
    url: "/static/klpanel",
  },
  {
    name: "Martin Atomic 3000 Strobe",
    nameID: "atomic",
    image: atomic,
    desc: "",
    info: "The Atomic 3000 DMX is a powerful and rugged, 3000 W high-impact strobe.",
    specs: [
      "Power: 200-240 V nominal, 50/60 Hz, 3000W",
      "DMX Channels: 1, 3, and 4 channel modes",
      "Cable Inputs: True1, 5-pin XLR",
      'Dimensions (without bracket): 16.7" L x 9.6" W x 9.4" H, 16.5lbs',
    ],
    vid: "https://www.youtube.com/embed/TdW6sWBdWek",
    url: "/static/atomic",
  },
  {
    name: "Chauvet STRIKE4 Blinder",
    nameID: "strike4",
    image: strike4,
    desc: "",
    info: "STRIKE 4 is an electrifying audience blinder and strobe with four high-power 100 W COB LEDs housed in independently focusable pods. It’s the go-to-choice for high energy automated strobe effects and its smooth 16-bit dimming curve facilitates incandescent-style fades. Its adjustable PWM is ideal in film and studio applications. STRIKE 4 comes standard with basic and advanced control personalities for flexibility in programming, and an easy-to-read OLED display for quick onboard adjustments.",
    specs: [
      "Power: 100 to 240 VAC, 50/60 Hz, 400W",
      "Output: 999 lux @ 5 m",
      "Color Temperature: 3096 K",
      "DMX Channels: 1, 3, 4 or 9",
      'Dimensions (without bracket): 16.7" L x 9.6" W x 9.4" H, 16.5lbs',
      "Cable Inputs: PowerCON, 5-pin XLR",
      'Dimensions: 14.2" L x 6.4" W x 14.2" H, 19lbs',
    ],
    vid: "https://www.youtube.com/embed/5lim1S0AOrU",
    url: "/static/strike4",
  },
  {
    name: "ETC Source Four Par",
    nameID: "source4par",
    image: source4par,
    desc: "",
    info: "Source Four PARs stand out of the luminaire crowd with their rugged die-cast aluminium construction and acclaimed Source Four optical technology. Superior brightness and energy savings. Source Four PARs deliver a smooth even field, and at 575 watts are comparable to 1000W PAR64s -- while saving 40% on energy.",
    specs: [
      "Power: 120V, 750W",
      "Color Temperature: 3250K",
      "Lenses: Narrow, Medium, Wide",
      "Cable Inputs: Edison",
      'Dimensions: 10.75" L x 15.9" W x 10.25" H, 7.5lbs',
    ],
    vid: "",
    url: "/static/source4par",
  },
  {
    name: "Chauvet Epix Strip Tour",
    nameID: "epix",
    image: epix,
    desc: "",
    info: "ÉPIX Strip Tour is a pixel-mapping 1-meter LED strip, featuring 50 LEDs in a row and a 125º viewing angle. Power and control it through the ÉPIX Drive 900 on Art-Net, Kling-Net, or sACN (streaming ACN).",
    specs: [
      "Power: 17 W, 0.14 A @ 120 V, 60 Hz, 17 W, 0.08 A @ 208 V, 60 Hz",
      "Output: 1,094 NITS",
      "DMX Channels: 150",
      "Cable Inputs: 4-pin XLR",
      'Dimensions: 39.37" L x 4.72" W x 1.18" H, 3.44lbs',
    ],
    vid: "https://www.youtube.com/embed/GwSrqqeAAnw",
    url: "/static/epix",
  },
  {
    name: "Elation SIXPAR 300",
    nameID: "sixpar300",
    image: sixpar300,
    desc: "",
    info: "The indoor version SIXPAR 300™ features (18) 12W 6-IN-1 RGBAW+UV LEDs, 15° beam and 25° field angles, electronic strobe and dimming (0-100%), 5 variable dimming curve modes, dual yoke / floor stand, multiple unit power linking, RDM (remote device management), rugged die-cast aluminum exterior, flicker free operation for TV and FILM, and a multi-voltage universal auto switching power supply (110-250v).",
    specs: [
      "Power: 110-250V - 50/60Hz, 220W",
      "Output: 24,500 LUX 2,276 FC @3.3’ (1m) (15° Full ON)",
      "DMX Channels: 6 / 7 / 8 / 12, RDM Capable",
      "Cable Inputs: PowerCON, 3-pin and 5-pin XLR",
      'Dimensions: 14.4" L x 4.9" W x 14.4" H, 18.0 lbs',
    ],
    vid: "https://www.youtube.com/embed/vLJvunbVWIU",
    url: "/static/sixpar300",
  },
  {
    name: "Elation SIXPAR 100",
    nameID: "sixpar100",
    image: sixpar100,
    desc: "",
    info: "The indoor version SIXPAR 100™ features (7) 12W 6-IN-1 RGBAW+UV LEDs, 15° beam and 25° field angles, electronic strobe and dimming (0-100%), 5 variable dimming curve modes, dual yoke / floor stand, multiple unit power linking, RDM (remote device management), rugged die-cast aluminum exterior, flicker free operation for TV and FILM, and a multi-voltage universal auto switching power supply (110-250v).",
    specs: [
      "Power: 110-250V - 50/60Hz, 89W",
      "Output: 12,850 LUX 1,194 FC @3.3’ (1m) (15° Full ON)",
      "DMX Channels: 6 / 7 / 8 / 12, RDM Capable",
      "Cable Inputs: PowerCON, 3-pin and 5-pin XLR",
      'Dimensions: 10.1" L x 4.9" W x 9.6" H, 7.4lbs',
    ],
    vid: "https://www.youtube.com/embed/vLJvunbVWIU",
    url: "/static/sixpar100",
  },
];

export default fixtures;
