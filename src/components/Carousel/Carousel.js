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
    <div className="carousel w-11/12 mx-auto mt-32 transition-all duration-500">
      <img
        src={images[activeImage].image}
        alt="concert"
        className="w-full transition-opacity duration-500 ease-in-out opacity-50"
      />
      {/* <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            key={photo.image}
            src={photo.image}
            data-index={index}
            className={index === activeImage ? "activeImage" : ""}
            alt="concert"
          />
        ))}
      </div> */}

      {/* <img
        src={images[0].image}
        alt="event"
        className="rounded-xl w-full"
      ></img> */}
    </div>
  );
};

export default Carousel;
