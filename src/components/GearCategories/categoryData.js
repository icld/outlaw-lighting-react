import automated from "../../assets/category-images/RobeForte.jpeg";
import staticFix from "../../assets/category-images/src-4.jpeg";
import pwrDistro from "../../assets/category-images/power.jpeg";
import control from "../../assets/category-images/control.png";
import rigging from "../../assets/category-images/rigging.png";
import atmosphere from "../../assets/category-images/atmosphere.png";
import cable from "../GearCategories/Cable/CableAssets/dmx.jpeg";

const categories = [
  {
    name: "Automated Fixtures",
    navTitle: "Automated",
    image: automated,
    url: "automated",
  },
  {
    name: "Static Fixtures",
    navTitle: "Static",
    image: staticFix,
    url: "static",
  },
  {
    name: "Power Distribution",
    navTitle: "Power",
    image: pwrDistro,
    url: "power",
  },
  {
    name: "Control",
    navTitle: "Control",
    image: control,
    url: "control",
  },
  {
    name: "Cable",
    navTitle: "Cable",
    image: cable,
    url: "cable",
  },
  {
    name: "Rigging",
    navTitle: "Rigging",
    image: rigging,
    url: "rigging",
  },
  {
    name: "Atmosphere",
    image: atmosphere,
    url: "atmosphere",
  },
];

export default categories;
