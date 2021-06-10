import React from "react";
import Image from "../assets/full-logo.png";
import Carousel from "./Carousel/Carousel";
import images from "../../src/components/Carousel/CarouselData";
// import Nav from "./Nav/Nav";

const Landing = () => {
  return (
    <div className=" h-full w-full">
      <img
        src={Image}
        alt="skull logo"
        className="mx-auto z-10 -my-28 w-full absolute"
      ></img>
      <div className=" w-11/12 mx-auto">
        <Carousel images={images} className="w-screen mx-auto" />
        <h1 className="text-indigo-600 text-2xl md:text-5xl font-extrabold  mt-6">
          Event Production Solutions
        </h1>
        <h1 className=" text-xl md:text-4xl text-indigo-200 font-extrabold  pb-8 mt-2">
          From Design to Activation
        </h1>
      </div>
    </div>
  );
};

export default Landing;
