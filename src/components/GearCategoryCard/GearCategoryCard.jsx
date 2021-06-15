import React from "react";
import { NavLink } from "react-router-dom";

const GearCategoryCard = ({ name, image, url }) => {
  return (
    <div className="flex items-center justify-center p-10 md:pb-20 ">
      <NavLink to={url} className="relative ">
        <div className="bg-white rounded-lg shadow-2xl w-3/4  md:flex m-auto ">
          <img
            src={image}
            alt="lighting fixture"
            className="md:w-1/3 rounded-t-lg md:rounded-t-none md:rounded-l-lg object-contain shadow-2xl "
          />
          <div className="p-6 min-h-full flex flex-col">
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
            <div class="mt-5 h-full flex flex-col justify-end items-end">
              <a
                href="/"
                class="w-min text-blue-100	shadow-md rounded-md py-2 px-4 bg-blue-500 hover:bg-blue-400 hover:text-white transition duration-200"
              >
                Read more
              </a>
            </div>
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
