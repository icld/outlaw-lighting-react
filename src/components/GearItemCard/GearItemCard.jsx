import React from "react";
import { NavLink } from "react-router-dom";

// import useState from "react-dom";

const GearItemCard = ({ ...props }) => {
  return (
    <div className="group w-full h-80 m-auto rounded-xl bg-white  transition-all duration-300 ring-4 hover:ring-blue-500 justify-center ">
      <NavLink to={`/gear${props.url}`} className="relative ">
        <h3 className="text-indigo-600 p-2 text-xl md:text-2xl font-extrabold absolute z-2">
          {" "}
          {props.name}
        </h3>
        <div className="h-full w-full  transition-all duration-300 justify-center   overflow-hidden ">
          <img
            src={props.image}
            alt="lighting fixture"
            className=" m-auto p-2 group-hover:opacity-80 h-full object-cover z-0"
          />
          <div className="opacity-0 text-white shadow-lg bg-green-500  self-center absolute m-auto group-hover:opacity-100 text-center p-2 rounded-lg transition-all duration-300 border border-gray-600 ">
            Specs
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default GearItemCard;
