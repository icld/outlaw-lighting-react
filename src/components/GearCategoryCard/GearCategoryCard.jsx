import React from "react";
import { NavLink } from "react-router-dom";

const GearCategoryCard = ({ name, image, url }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:w-1/2 items-center justify-center p-10 md:pb-10 ">
      <NavLink to={url} className=" w-full ">
        <div className="bg-white rounded-lg shadow-2xl w-full lg:flex m-auto ">
          <img
            src={image}
            alt="lighting fixture"
            className="w-full lg:w-1/2 rounded-t-lg md:rounded-t-none md:rounded-l-lg object-cover shadow-2xl "
          />
          <div className=" w-full lg:w-1/2 p-6 min-h-full flex flex-col">
            <h3
              className="flex-none font-bold text-4xl md:text-5xl text-gray-800 hover:text-gray-700 mb-2"
              style={{ textShadow: " 1px 0px 1px grey" }}
            >
              {" "}
              {name}
            </h3>
            <p className="flex-none text-gray-600 mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              cum rem obcaecati unde ex dolores natus! Dolor aperiam sed eveniet
              laboriosam atque ea recusandae. Aliquid omnis ducimus voluptatibus
              consectetur libero!
            </p>
            <div className="mt-5 h-full flex flex-col justify-end items-end"></div>
          </div>
          <div className="opacity-0 text-white shadow-lg bg-green-500  self-center absolute m-auto group-hover:opacity-100 text-center p-2 rounded-lg transition-all duration-300 border border-gray-600 ">
            Specs
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default GearCategoryCard;
