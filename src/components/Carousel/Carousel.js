import React from "react";
// import { Transition } from "@headlessui/react";
import { useState } from "react";
import "./carousel.css";

const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageChange = () => {
    setTimeout(() => {
      // const image = document.querySelector(".carousel");

      activeImage === 4 ? setActiveImage(0) : setActiveImage(+activeImage + 1);
    }, 9000);
  };

  handleImageChange();
  return (
    <div className=" mt-32 ">
      <img
        src={images[activeImage].image}
        alt="concert"
        className="w-full transition-opacity duration-500 ease-in-out opacity-90"
      />
    </div>
  );
};

export default Carousel;
