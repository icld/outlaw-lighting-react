/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "../assets/cropped-New-Logo-Small.png";
import Nav from "./Nav/Nav";
import Logo from "../assets/skull.png";

const navigation = [
  { name: "About", href: "#" },
  { name: "Design", href: "#" },
  { name: "Equipment", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Example() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 z-10">
            <Nav />

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span
                    className="block text-white
                 xl:inline"
                  >
                    Outlaw Lighting
                  </span>{" "}
                  <span className="block text-indigo-600 xl:inline">
                    lighting solutions
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Outlaw Live
                    </a>
                  </div>
                  {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Outlaw Live
                    </a>
                  </div> */}
                </div>
              </div>
            </main>
          </div>
        </div>
        <div
          className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-full lg:h-full mt-6
    "
        >
          <img
            className="h-56 w-full object-cover 
                  
           sm:h-72 md:h-96 lg:w-full lg:h-full z-0"
            src={Image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
