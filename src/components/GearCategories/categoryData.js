import automated from "../../assets/category-images/RobeForte.jpeg";
import staticFix from "../../assets/category-images/src-4.jpeg";
import pwrDistro from "../../assets/category-images/power.jpeg";
import control from "../../assets/category-images/control.png";
import rigging from "../../assets/category-images/rigging.png";
import atmosphere from "../../assets/category-images/atmosphere.png";

const categories = [
  {
    name: "Automated Fixtures",
    image: automated,
    url: "/automated",
  },
  {
    name: "Static Fixtures",
    image: staticFix,
    url: "/static",
  },
  {
    name: "Power Distrobution",
    image: pwrDistro,
    url: "/power",
  },
  {
    name: "Control/Data",
    image: control,
    url: "/control",
  },
  {
    name: "Rigging",
    image: rigging,
    url: "/rigging",
  },
  {
    name: "Atmosphere",
    image: atmosphere,
    url: "/atmosphere",
  },
];

export default categories;
