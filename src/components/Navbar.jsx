import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = ["Home", "About", "services", "works", "contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          {/* <img className="w-8" src="" alt="logo" /> */}
          <span className="text-2xl font-bold text-indigo-900 dark:text-white">
            portfolio
          </span>
        </div>
        <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
          {menu.map((item, index) => (
            <li key={index} className="hover:text-gray-400">
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
        <IoMoon className=" hidden md:block w-8 cursor-pointer text-yellow-600" />

        <IoIosMenu
          className={`md:hidden w-8 h-8 mr-2 cursor-pointer z-20 ${
            isMenuOpen ? "text-white" : "text-black"
          }`}
          onClick={() => toggleMenu()}
        />
        {isMenuOpen && (
          <ul className=" bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
            {menu.map((item, index) => (
              <li key={index} className="">
                <a href={`/${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
