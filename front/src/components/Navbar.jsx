import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4 text-white">
      <Link to="/" className="h-20 mt-8">
        <img className="h-[80%]" src="/src/assets/Logo.png" alt="Hematosys" />
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/regorg">Host blood donation program?</Link>
        </li>
        <li className="p-4">
          <Link to="/events">Donate Blood?</Link>
        </li>
        <li className="p-4">
          <Link to="/">Find blood match?</Link>
        </li>
        <li className="p-4">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[6r0%] h-full border-r border-r-gray-900 bg-bg1 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img
          className="h-12 mt-8 pl-4"
          src="/src/assets/Logo.png"
          alt="Hematosys"
        />
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600">
            <Link to="/regorg" className="">
              Host a blood donation program?{" "}
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/events" className="">
              Donate Blood?
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/" className="">
              Find blood match?
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/login" className="">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
