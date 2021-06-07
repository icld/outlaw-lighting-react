import mdg from "./AtmosphereAssets/mdg.png";
import baseHazer from "./AtmosphereAssets/base-hazer.png";
import cloudNine from "./AtmosphereAssets/cloud-nine.png";
import vesuvio from "./AtmosphereAssets/vesuvio.png";
import lasko from "./AtmosphereAssets/lasko.png";

const fixtures = [
  {
    name: "MDG ATMe",
    nameID: "mdg",
    image: mdg,
    desc: "",
    info: "MDG ATMe Haze Generator was designed with safety and reliability in mind and is capable of generating pure white, non-toxic haze for as long as you have fluid (100% duty cycle). This generator is also equipped, as a standard feature, with the Automatic Purging System (APS). This system purges the heating module after the first heating cycle and after every emission of haze preventing residual build up and clogging. Requires a CO2 tank to run.",
    specs: [
      "Power: 100-250 VAC, 50/60Hz, 715W",
      "Warm Up Time: 8 minutes",
      "Tank Capacity: 2.5L",
      "Haze Density: Variable",
      "Control: DMX (2 channel)",
      'Dimensions: 27" L x 7" W x 18.5" H, 37lbs',
    ],
    vid: "https://www.youtube.com/embed/v8SQcGSvEjU",
    url: "/atmosphere/mdg",
  },
  {
    name: "Base Hazer Pro",
    nameID: "base-hazer",
    image: baseHazer,
    desc: "",
    info: "Utilized on thousands of world wide tours, this rugged machine can create effects from the finest mist to the densest haze. The Base Hazer Pro reaches operation in less that 60 seconds and has a built-in cleaning cycle every time the unit is shut down. Designed to run at a very low noise level. extremely efficient. The unit can run for as much as 135 hours on a 5-liter bottle of fluid.",
    specs: [
      "Power: 110 V AC, 60 Hz optional",
      "Warm Up Time: 60 seconds",
      "Tank Capacity: 5L",
      "Haze Density: Variable",
      "Control: DMX (2 channel)",
      'Dimensions: 41.4" L x 54" W x 18.5" H, 39.68lbs',
    ],
    vid: "https://www.youtube.com/embed/8AUkWsZGR7c",
    url: "/atmosphere/base-hazer",
  },
  {
    name: "Chauvet Cloud9 Low Fog Machine",
    nameID: "cloud-nine",
    image: cloudNine,
    desc: "",
    info: "Cloud 9 is an impressive, low-lying fogger that creates thick, cloud-like effects with a high-impact output ideal for use on large-scale stages, theatres, live performances and theme parks. The robust unit has a best in class heat-up time of 4 minutes and no dry ice or CO2 is needed, which means no special licensing/training is required. Because it works without a special coolant or compressor, only water and fog fluid is needed for continuous output. The powerful unit weighs in at 121 lbs and is equipped with several handy transport features such as its road case housing, metal handles and wheels to easily glide across any stage. Control it on the LCD display or via DMX.",
    specs: [
      "Power: (input A): 1000 W, 8.36 A @ 120 V, 60 Hz (120 V version), (input B): 1130 W, 9.40 A @ 120 V, 60 Hz (120 V version)",
      "Warm Up Time: 3 minutes",
      "Fluid Tank Capacity: 3.5L",
      "Water Tank Capacity: 20L",
      "Haze Output: 15,000 cfm",
      "Control: DMX (2 channel)",
      "Dimensions: 33.85″ L x 19.29″ W x 24.8″ H, 121.3lbs",
      "Inputs: True1, 3-pin and 5-pin XLR",
    ],
    vid: "https://www.youtube.com/embed/1sdnGrIF8aM",
    url: "/atmosphere/cloud-nine",
  },
  {
    name: "Chauvet Vesuvio Vertical Fog Cannon II",
    nameID: "vesuvio",
    image: vesuvio,
    desc: "",
    info: "Vesuvio II illuminates bursts of fog with advanced RGBA+UV LED color mixing, providing ferocious effects for events and performances. Featuring an impressive 40,000 cubic feet of fog per minute, it boasts a best in class 40 seconds of full burst output. New dual LED sections give greater creative control for a more even coverage of light. The Vesuvio II is built for efficiency, consuming only 80 ml/min of QDF fluid. This highly versatile unit can run in three different positions: vertically, horizontally or from overhead with mounting brackets. It works best with CHAUVET QDF quick dissipating fluid.",
    specs: [
      "Power: 1,480 W, 12.55 A @ 120 V, 60 Hz",
      "Warm Up Time: 10 minutes",
      "Output: 40,000 cfm",
      "Tank Capacity: .7 Gallon",
      "Haze Density: Variable",
      "Control: DMX (15 channels)",
      "Dimensions: 19.49″ L x 13.18″ W x 9.39″ H, 28.4lbs",
      "Inputs: Powercon, 5-pin XLR",
    ],
    vid: "https://www.youtube.com/embed/GYMjbS3tqdA",
    url: "/atmosphere/vesuvio",
  },
  {
    name: "Lasko Blower Fan",
    nameID: "lasko",
    image: lasko,
    desc: "",
    info: "Lasko’s Pro-Performance High Velocity Pivoting Blower Utility Fan features 3 performance speeds directing air where needed for cooling, ventilating, exhausting and drying. Two 120-volt accessory outlets and 3-prong, grounded safety plug.",
    specs: [
      "Two 120-volt accessory outlets",
      "Circuit breaker with reset button",
      "Easy-grip handle",
      "Dependable ball bearing motor",
      "Pivots to direct air flow & circulation",
      "3 powerful speeds",
      "Dimensions: 11.25″ L x 14.5″ W x 14.5″ H, 13.5lbs",
    ],

    url: "/atmosphere/lasko",
  },
];

export default fixtures;
