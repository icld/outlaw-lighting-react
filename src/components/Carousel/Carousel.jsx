import { useState } from "react";
import images from "../../assets/CarouselImages/img1.jpg";

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-11/12  mx-auto mt-32">
      <img src={images} alt="event" className="rounded-xl w-full"></img>
      {/* <div className="bg-black top-1 left-0 rounded-xl h-full w-full m-auto z-20 absolute"></div> */}
    </div>
  );
};

export default Carousel;
