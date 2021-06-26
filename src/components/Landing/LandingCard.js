import { NavLink } from "react-router-dom";
import designImg from "../Design/DesignAssets/design3.png";
import gearImg from "../Landing/LandingAssets/eprite.png";
import galleryImg from "../Gallery/GalleryAssets/ConcertAssets/concert-1.png";
import salesImg from "../Gallery/GalleryAssets/ConcertAssets/concert-11.png";
const categories = [
  {
    name: "Design",
    img: designImg,
    desc: "Outlaw is a full service event design shop",
    url: "design",
  },
  {
    name: "Gear",
    img: gearImg,
    desc: "We have an ever expanding selection of rental equipment",
    url: "gear",
  },
  {
    name: "Sales",
    img: salesImg,
    desc: "Outlaw is a dealer for many top lighting manufacturers",
    url: "sales",
  },
  {
    name: "Gallery",
    img: galleryImg,
    desc: "Take a look at some examples of our work",
    url: "gallery",
  },
];

const LandingCard = () => {
  return categories.map((cat, index) => (
    <div className="group rounded-xl   w-full  m-auto h-96 mt-6 overflow-hidden relative flex flex-col  justify-evenly shadow-xl mr-2 transition-all duration-300 ease-in hover:shadow-2xl">
      <NavLink to={cat.url} className="h-full w-full ">
        <img
          src={cat.img}
          alt={cat.name}
          key={index}
          className="m-auto w-full h-full  object-cover overflow-hidden  absolute"
        />
        <h2
          className="transform origin-top  p-6 text-6xl  font-semibold  text-white text-center uppercase group-hover:text-gray-300 group-hover:translate-24 transition-all  ease-in  duration-200"
          style={{ textShadow: " .5px .5px 3px black", letterSpacing: "10px" }}
        >
          {" "}
          {cat.name}
        </h2>
        <p
          className="absolute text-white  bottom-0 bg-gradient-to-t w-full    from-gray-400   text-2xl md:text-3xl  font-normal transform group-hover:-translate-y-36 text-center to-transparent p-6 "
          style={{ textShadow: " .5px .5px 2px black" }}
        >
          {cat.desc}
        </p>
      </NavLink>
    </div>
  ));
};
export default LandingCard;
