import React from "react";
import Image from "../assets/full-logo.png";
import Carousel from "./Carousel/Carousel";
import images from "../../src/components/Carousel/CarouselData";
// import Nav from "./Nav/Nav";

const Landing = () => {
  return (
    <div className="bg-black">
      <img
        src={Image}
        alt="skull logo"
        className="mx-auto z-10 -my-28 w-screen absolute"
      ></img>
      <Carousel images={images} className="" />
      <h1 className="text-indigo-600 sm:text-4xl lg:text-5xl font-extrabold mx-8 mt-6">
        Event Production Solutions
      </h1>
      <h1 className=" sm:text-3xl lg:text-4xl text-indigo-200 font-extrabold mx-8 mt-4">
        From Design to Activation
      </h1>
    </div>
  );
};

export default Landing;
