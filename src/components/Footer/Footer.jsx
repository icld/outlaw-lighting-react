import React from "react";
import Logo from "../../assets/full-logo.png";

const Footer = () => {
  return (
    <div className="">
      <div className=" w-full  bottom-0 m-auto min-h-36 bg-gray-900 grid grid-cols-3 gap-6  p-2 text-gray-400  ">
        <img src={Logo} alt="logo" className="m-auto w-full" />
        <p className=" text-xs md:text-2xl text-indigo-200 m-auto content-center">
          <strong>Outlaw Lighting</strong>
          <br />
          3342 NW 26th Ave Suite 14
          <br /> Portland, OR <br />
          97210
        </p>{" "}
      </div>
    </div>
  );
};

export default Footer;
