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
    <nav className="font-nunito w-full fixed top-0 ">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8" src="" alt="logo" />
          <span className="text-2xl font-bold text-indigo-900">portfolio</span>
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
          className="md:hidden w-8 h-8 mr-2 cursor-pointer"
          onClick={() => toggleMenu()}
        />
        {isMenuOpen && (
          <ul className="bg-orange-800">
            {menu.map((item, index) => (
              <li key={index}>
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
