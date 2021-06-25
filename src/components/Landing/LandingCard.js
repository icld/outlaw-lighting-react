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
    <div className="rounded-xl   w-full lg:w-5/12 m-auto h-64 mt-6 overflow-hidden relative flex flex-col shadow-2xl">
      <NavLink to={cat.url} className="h-full w-full">
        <img
          src={cat.img}
          alt={cat.name}
          key={index}
          className="m-auto w-full h-auto object-cover overflow-hidden aspect-w-16 aspect-h-9 absolute"
        />
        <div className="absolute text-black  bottom-0 bg-gradient-to-tr   from-white md:text-2xl  to-transparent  px-8 md:px-10 py-1 md:py-2">
          {cat.desc}
        </div>
      </NavLink>
    </div>
  ));
};
export default LandingCard;
