import React from "react";
// eslint-disable-next-line no-unused-vars
import Image from "../../assets/full-logo.png";
import Carousel from "../Carousel/Carousel";
import images from "../Carousel/CarouselData";
// eslint-disable-next-line no-unused-vars
import longLogo from "../../assets/outlaw-logo-long-text.png";
import LandingCard from "./LandingCard";

// import Nav from "./Nav/Nav";

const Landing = () => {
  return (
    <div className="w-full flex justify-center items-center relative mb-36 ">
      {/* <img
        src={longLogo}
        alt="skull logo"
        className=" z-10 w-11/12 absolute m-auto top-0"
      ></img> */}
      <div className=" w-full mx-auto relative border-red-400   border-t-4">
        <Carousel images={images} className=" absolute w-full h-60  m-auto" />
        <div className="w-11/12 m-auto">
          <h1
            className="text-indigo-600 text-2xl md:text-5xl font-extrabold  mt-6"
            style={{ textShadow: "1px 1px 3px white" }}
          >
            Event Production Solutions
          </h1>
          <h1
            className=" text-xl md:text-4xl text-indigo-300 font-extrabold mt-2"
            style={{ textShadow: "1px 1px 3px white" }}
          >
            From Design to Activation
          </h1>
          <h1 className=" text-xl md:text-3xl text-indigo-200  font-normal  pb-8 mt-2">
            Providing national event and touring clients with top quality
            design, equipment, and support
          </h1>
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            <LandingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
