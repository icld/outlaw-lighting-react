import React from "react";
import { NavLink } from "react-router-dom";

// import useState from "react-dom";

const GearItemCard = ({ ...props }) => {
  return (
    <div className="group flex w-full  group h-80 m-auto rounded-xl bg-white  transition-all duration-300 ring-4 ring-blue-500 justify-center ">
      <NavLink to={`/gear${props.url}`} className="relative ">
        <h3 className="absolute ml-4 mt-4   p-0 prose prose-2xl place-self-center">
          {" "}
          {props.name}
        </h3>
        <div className="flex  h-full  transition-all duration-300 justify-center  object-contain overflow-hidden">
          <img
            src={props.image}
            alt="lighting fixture"
            className=" m-auto group-hover:opacity-80 h-full"
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
