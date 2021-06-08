import React from "react";
import { NavLink } from "react-router-dom";

const GearCategoryCard = ({ name, image, url }) => {
  return (
    <NavLink to={url}>
      <div className=" group w-full h-80 m-auto rounded-xl bg-white transition-all duration-300  justify-center ">
        <div className=" h-full w-full  transition-all duration-300 justify-center relative overflow-hidden text-center  ">
          <img
            src={image}
            alt="lighting fixture"
            className=" m-auto group-hover:opacity-80 h-full object-cover"
          />
          <h3
            className=" pt-4 w-full  h-24 rounded-xl bg-gradient-to-b from-white to-transparent  text-blue-600 drop-shadow-lg group-hover:text-red-600 p-2 text-xl md:text-4xl font-bold absolute top-0  z-2"
            style={{ textShadow: " 1px 0px 5px tomato" }}
          >
            {" "}
            {name}
          </h3>
        </div>
        <div className="opacity-0 text-white shadow-lg bg-green-500 absolute m-auto group-hover:opacity-100 text-center p-2 rounded-lg transition-all duration-300 border border-gray-600">
          View Inventory
        </div>
      </div>
    </NavLink>
  );
};

export default GearCategoryCard;
