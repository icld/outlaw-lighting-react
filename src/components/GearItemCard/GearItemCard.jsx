import React from "react";
import { NavLink } from "react-router-dom";

// import useState from "react-dom";

const GearItemCard = ({ ...props }) => {
  return (
    <div className="group w-full h-80 m-auto rounded-xl bg-white transition-all duration-300  justify-center ">
      <NavLink to={`/gear${props.url}`} className="relative ">
        <div className="h-full w-full  transition-all duration-300 text-center relative overflow-hidden ">
          <img
            src={props.image}
            alt="lighting fixture"
            className=" m-auto group-hover:opacity-80 h-full object-cover"
          />
          <h3
            className=" w-full  h-24 rounded-xl bg-gradient-to-b from-white to-transparent  text-black drop-shadow-lg group-hover:text-blue-600 p-2 text-xl md:text-4xl font-extrabold absolute top-0  z-2"
            style={{ textShadow: " 1px 0px 1px grey" }}
          >
            {" "}
            {props.name}
          </h3>
          <div className="opacity-0 text-white shadow-lg bg-green-500  self-center absolute m-auto group-hover:opacity-100 text-center p-2 rounded-lg transition-all duration-300 border border-gray-600 ">
            Specs
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default GearItemCard;
