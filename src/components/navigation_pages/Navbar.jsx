import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";
import Button from "../small_components/Button";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-white bg-opacity-75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer gap-2">
          <span>
            <SiCoffeescript size={25} />
          </span>
          <h1 className="text-xl font-semibold">CafePulse</h1>
        </div>

        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="/"
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="/about"
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            About Us
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="/products"
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
        </nav>

        <div className="hidden lg:flex">
          <Button title="Login" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
