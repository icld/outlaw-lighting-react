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
    </div>
  );
};

export default Landing;
