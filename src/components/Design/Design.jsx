import React from "react";
import designData from "./DesignData";
import designBanner from "./DesignAssets/designBanner.png";

const Design = () => {
  return (
    <div className="bg-white  flex flex-col m-auto ">
      <div className="relative m-auto h-auto w-full flex text-center   items-center justify-center shadow-2xl border-gray-700   border-t-8">
        <img
          className="w-full h-auto"
          src={designBanner}
          alt="concert lights"
        ></img>
        <h2 className=" text-2xl md:text-4xl lg:text-6xl font-extrabold w-full m-auto absolute">
          Full Service Production Design
        </h2>
      </div>

      <div className=" w-11/12 m-auto mt-16 ">
        {designData.map((item, index) => (
          <div className="container mb-16 mx-auto p-4 md:p-0">
            <div className="shadow-lg md:flex w-full lg:w-4/5 mx-auto">
              <img
                src={item.img1}
                alt={item.alt}
                className="md:w-2/3 rounded-t-lg md:rounded-t-none md:rounded-l-lg object-cover"
              ></img>
              <div className="bg-white w-full md:2/3">
                <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-col items-center">
                    <div className="w-full  lg:border-right lg:border-solid text-center  md:text-left">
                      <h3 className="text-2xl">{item.title}</h3>
                      <p className="mb-0 mt-3  text-gray-400 text-sm italic">
                        {item.subTitle}
                      </p>
                      <hr className="w-1/4 md:ml-0 mt-4 border " />
                    </div>
                    <div className="w-full  ">
                      <p className="text-md mt-4  text-justify md:text-left text-sm">
                        {item.body}
                      </p>
                    </div>
                    <div className="w-full lg:w-2/5 mt-6  lg:px-4 text-center md:text-left">
                      <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full p-2">
                        {item.button}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design;
