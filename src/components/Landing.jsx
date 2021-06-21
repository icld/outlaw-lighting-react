import React from "react";
// import Image from "../assets/full-logo.png";
import Carousel from "./Carousel/Carousel";
import images from "../../src/components/Carousel/CarouselData";
// import Nav from "./Nav/Nav";

const Landing = () => {
  return (
    <div className="mt-32 w-full flex justify-center items-center relative mb-36">
      {/* <img
        src={Image}
        alt="skull logo"
        className=" z-10
         ml-auto  -mt-80  w-11/12 absolute"
      ></img> */}
      <div className=" w-5/6 mx-auto">
        <Carousel images={images} className="w-screen mx-auto" />
        <h1
          className="text-indigo-600 text-2xl md:text-5xl font-extrabold  mt-6"
          style={{ textShadow: "1px 1px 3px white" }}
        >
          Event Production Solutions
        </h1>
        <h1
          className=" text-xl md:text-4xl text-indigo-200 font-extrabold  pb-8 mt-2"
          style={{ textShadow: "1px 1px 3px white" }}
        >
          From Design to Activation
        </h1>
      </div>
    </div>
  );
};

export default Landing;
