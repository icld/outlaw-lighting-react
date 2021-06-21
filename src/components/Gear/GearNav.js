import { NavLink } from "react-router-dom";
import categoryData from "../GearCategories/categoryData";
import gearBanner from "./gearBanner.png";
const GearNav = () => {
  return (
    <div>
      <div className="relative m-auto h-auto w-full flex text-center   items-center justify-center shadow-2xl border-red-400   border-t-4">
        <img
          className="w-full h-auto"
          src={gearBanner}
          alt="concert lights"
        ></img>
        <h2
          className=" text-2xl md:text-4xl lg:text-6xl font-extrabold w-full m-auto absolute"
          style={{ textShadow: "2px 0px 10px white" }}
        >
          Available Rental Equipment
        </h2>
      </div>
      <div className=" w-full h-14 bg-gray-700 ">
        <nav className="w-5/6 h-full flex  justify-evenly m-auto">
          {categoryData.map((gallery) => (
            <NavLink
              to={`/gear/${gallery.url}`}
              className="font-medium md:text-2xl text-gray-200 hover:text-gray-400  text-center mt-auto mb-auto"
              activeStyle={{
                color: "tomato",
              }}
            >
              {" "}
              {gallery.navTitle}{" "}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default GearNav;
