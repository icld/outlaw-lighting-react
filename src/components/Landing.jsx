import React from "react";
// eslint-disable-next-line no-unused-vars
import Image from "../assets/full-logo.png";
import Carousel from "./Carousel/Carousel";
import images from "../../src/components/Carousel/CarouselData";
// eslint-disable-next-line no-unused-vars
import longLogo from "../assets/outlaw-logo-long-text.png";

// import Nav from "./Nav/Nav";

const Landing = () => {
  return (
    <div className="w-full flex justify-center items-center relative mb-36">
      {/* <img
        src={longLogo}
        alt="skull logo"
        className=" z-10 w-11/12 absolute m-auto top-0"
      ></img> */}
      <div className=" w-full mx-auto relative border-red-400   border-t-4">
        <Carousel images={images} className=" absolute w-full h-60  m-auto" />
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
