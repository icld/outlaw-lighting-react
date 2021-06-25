import { React } from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../assets/outlaw-logo-long-text.png";
// import logo3d from "../../assets/outlaw-3d-test.png";
import HeaderName from "../NavBar/outLawNameSVG.svg";

// import HeaderSVG from "./HeaderSVG";

const navigation = [
  { name: "Design", href: "design" },
  { name: "Gear", href: "gear" },
  { name: "Gallery", href: "gallery" },
  { name: "Sales", href: "sales" },
  { name: "Contact", href: "contact" },
];

const Nav = () => {
  return (
    <div className="bg-gray-900 top-0 z-12 w-full  h-20 md:h-32">
      <Popover>
        {({ open }) => (
          <Fragment>
            <div className="relative pt-8 w-11/12 m-auto">
              <nav
                className="relative flex flex-row items-center justify-between h-full lg:justify-start pb-8 w-full"
                aria-label="Global"
              >
                <div className="flex items-center m-auto">
                  <div className="flex items-center justify-between h-full   text-xl text-center">
                    <NavLink
                      to="/"
                      className="w-2/3 md:w-full md:h-16"
                      style={{ textShadow: "1px 1px 3px white" }}
                    >
                      <img
                        src={HeaderName}
                        alt="title"
                        className="float-left 
                        w-full h-full"
                      />
                      {/* <img
                        src={Logo}
                        alt="title"
                        className="md:hidden sm:visibile m-auto
                        w-3/4 float-left h-full"
                      /> */}
                    </NavLink>
                    <a
                      href="tel:+5038884182 "
                      className="self-center md:hidden font-medium  text-sm text-indigo-400 hover:text-indigo-500 lg:float-right text-center"
                      // style={{ textShadow: "0px .5px 1px white" }}
                    >
                      Call us!
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-300 rounded-md p-1 mr-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:visible md:ml-6 lg:ml-10  md:flex md:justify-between w-1/2 m-auto">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={`/${item.href}`}
                      className="font-medium md:text-xl lg:text-2xl text-gray-200 hover:text-gray-400 m-auto text-center  pl-4"
                      activeStyle={{
                        color: "tomato",
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute ml-10 mr-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={Logo} alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-2">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={`/${item.href}`}
                        className="block px-3 py-2 rounded-md  font-medium text-xl text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Fragment>
        )}
      </Popover>
    </div>
  );
};
export default Nav;
