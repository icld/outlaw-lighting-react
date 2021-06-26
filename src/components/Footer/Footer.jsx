import React from "react";
import Logo from "../../assets/outlaw-logo-long-text.png";
import facebook from "./FooterAssets/facebook.svg";
import twitter from "./FooterAssets/twitter.svg";
import instagram from "./FooterAssets/instagram.svg";

const Footer = () => {
  return (
    <div className="w-full bottom-0  h-24 md:h-44 bg-gray-900   p-2 text-gray-400 border-red-400   border-t-4">
      <div className=" flex flex-row justify-between items-center h-full w-11/12 lg:w-9/12 m-auto">
        <img src={Logo} alt="logo" className=" h-10 md:h-20 md:w-80 " />
        {/* <p className=" text-xs md:text-2xl text-gray-300 m-auto content-center"> */}
        {/* <strong>Outlaw Lighting</strong> */}
        {/* <br /> */}
        {/* 3342 NW 26th Ave Suite 14
        <br /> Portland, OR <br />
        97210 */}
        {/* </p>{" "} */}
        <div className="flex flex-row ">
          <img className="w-8 md:w-14" src={instagram} alt="instagram" />
          <img
            className="w-8 md:w-14 ml-4 md:ml-10"
            src={facebook}
            alt="facebook"
          />
          <img
            className="w-8 md:w-14 ml-4 md:ml-10"
            src={twitter}
            alt="twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
