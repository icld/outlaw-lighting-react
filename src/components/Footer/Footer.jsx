import React from "react";
import Logo from "../../assets/full-logo.png";

const Footer = () => {
  return (
    <div className="flex">
      <div className=" w-full bottom-0 m-auto  h-24 md:h-44 bg-gray-900 grid grid-cols-3 gap-6  p-2 text-gray-400 ">
        <img src={Logo} alt="logo" className="m-auto  md:w-80" />
        <p className=" text-xs md:text-2xl text-gray-400 m-auto content-center">
          {/* <strong>Outlaw Lighting</strong> */}
          {/* <br /> */}
          3342 NW 26th Ave Suite 14
          <br /> Portland, OR <br />
          97210
        </p>{" "}
      </div>
    </div>
  );
};

export default Footer;
