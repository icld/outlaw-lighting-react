import React from "react";
import { NavLink } from "react-router-dom";

// import useState from "react-dom";

const GearItemCard = ({ ...props }) => {
  return (
    <div className="group overflow-hidden m-10 rounded-lg bg-white   min-w-min   w-72 md:w-96 h-96 flex-auto ">
      <NavLink to={`/gear${props.url}`} className="relative ">
        <div className=" h-full w-full transition-all duration-300 text-center relative overflow-hidden ">
          <img
            src={props.image}
            alt="lighting fixture"
            className="transform hover:scale-125 hover:translate-y-6 m-auto group-hover:opacity-80 h-full object-cover rounded-xl transition ease-in-out duration-500"
          />
          <h3
            className=" w-full h-24 rounded-xl bg-gradient-to-b from-white to-transparent  text-black drop-shadow-lg group-hover:text-blue-600 p-2 text-xl md:text-4xl font-extrabold absolute top-0"
            style={{ textShadow: " 1px 0px 1px grey" }}
          >
            {" "}
            {props.name}
          </h3>
          <div className="opacity-0 text-white shadow-lg bg-green-500  absolute m-auto group-hover:opacity-100 text-center p-2 rounded-lg transition-all duration-300 border border-gray-600 ">
            Specs
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default GearItemCard;
