import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img className="h-[40%]" src="/src/assets/Logo.png" alt="Hematosys" />
      <ul className="hidden md:flex">
        <li className="p-4"><a href="#" >Host blood donation program?</a></li>
        <li className="p-4"><a href="#" >Donate Blood?</a></li>
        <li className="p-4"><a href="#" >Find blood match?</a></li>
        <li className="p-4"><a href="#" >Login</a></li>
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
        <img className="h-9 mt-8 pl-4" src="/src/assets/Logo.png" alt="Hematosys"  />
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600"><a href="#" className="">
            Host a blood donation program? </a>
          </li>
          <li className="p-4 border-b border-gray-600"><a href="#" className="">Donate Blood?</a></li>
          <li className="p-4 border-b border-gray-600"><a href="#" className="">Find blood match?</a></li>
          <li className="p-4 border-b border-gray-600"><a href="#" className="">Login</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
