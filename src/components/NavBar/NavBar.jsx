import React from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../assets/outlaw-logo-long-text.png";
import logo3d from "../../assets/outlaw-3d-test.png";

const navigation = [
  { name: "Design", href: "design" },
  { name: "Gear", href: "gear" },
  { name: "Gallery", href: "gallery" },
  { name: "Sales", href: "sales" },
  { name: "Contact", href: "contact" },
];

const Nav = () => {
  return (
    <div className="bg-gray-900 top-0">
      <Popover>
        {({ open }) => (
          <Fragment>
            <div className="relative pt-8 px-4 sm:px-6 lg:px-8  ">
              <nav
                className="relative flex flex-row items-center justify-between h-full lg:justify-start pb-8 w-full"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow  m-auto">
                  <div className="flex items-center justify-between h-full w-full md:w-auto text-xl">
                    <NavLink to="/" className="w-32">
                      <img
                        className="h-auto object-cover "
                        src={logo3d}
                        alt="logo"
                      />
                    </NavLink>
                    <a
                      href="tel:+19712355608"
                      className="  self-center md:hidden ml-4 mr-4 font-medium text-indigo-400 hover:text-indigo-500 lg:float-right"
                    >
                      1-900-Outlaw1
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={`/${item.href}`}
                      className="font-medium text-2xl text-gray-500 hover:text-gray-300"
                      activeStyle={{ color: "tomato" }}
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
                        to={item.href}
                        className="block px-3 py-2 rounded-md  font-medium text-xl text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <a
                    href="/"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
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
