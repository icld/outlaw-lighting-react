import Image from "../assets/full-logo.png";
import Carousel from "./Carousel/Carousel";
// import Nav from "./Nav/Nav";

const Landing = () => {
  return (
    <div className="bg-black ">
      <img
        src={Image}
        alt="skull logo"
        className="mx-auto z-10 -my-28 w-full absolute"
      ></img>
      <Carousel className="" />
    </div>
  );
};

export default Landing;
