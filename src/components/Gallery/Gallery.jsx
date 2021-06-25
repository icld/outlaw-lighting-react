import React from "react";
import { NavLink } from "react-router-dom";

import galleryBanner from "./GalleryAssets/galleryBanner.png";

import galleries from "./GalleryData";
import GalleryPage from "./GalleryPage";

const Gallery = ({ match, props }) => {
  return (
    <div className="h-full bg-white flex flex-col m-auto ">
      <div className="relative m-auto h-auto w-full flex text-center   items-center justify-center shadow-2xl border-red-400   border-t-4">
        <img
          className="w-full h-auto"
          src={galleryBanner}
          alt="concert lights"
        ></img>
        <h2
          className=" text-2xl md:text-4xl lg:text-6xl font-extrabold w-full m-auto absolute"
          style={{ textShadow: "1px 1px 3px white" }}
        >
          Gallery
        </h2>
      </div>
      <div className=" w-full h-14 bg-gray-700 border-red-400   border-t-4">
        <nav className="w-5/6 h-full flex  justify-evenly m-auto">
          {galleries.map((gallery) => (
            <NavLink
              to={`/gallery/${gallery.url}`}
              className="font-medium text-xs pl-4 pr-2 md:text-2xl text-gray-200 hover:text-gray-400  text-center mt-auto mb-auto"
              activeStyle={{
                color: "tomato",
              }}
            >
              {" "}
              {gallery.name}{" "}
            </NavLink>
          ))}
        </nav>
      </div>
      <GalleryPage item={match.params.item} />
    </div>
  );
};

export default Gallery;
