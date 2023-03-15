import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { logout } from "../../http/auth";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Navbar = ({ auth, setAuth }) => {
  const [nav, setNav] = useState(false);
  const alert = useAlert();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    logout()
      .then((res) => {
        alert.show("Logged Out.");
        setAuth({ ...auth, isauthed: false, role: "" });
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4 text-white">
      <Link to="/" className="h-20 mt-8">
        <img className="h-[80%]" src="/src/assets/Logo.png" alt="Hematosys" />
      </Link>
      <ul className="hidden md:flex">
        {auth.isauthed && auth.role == "org" && (
          <li className="p-4">
            <Link to="/addevent">Host blood donation program?</Link>
          </li>
        )}
        {auth.role !== "org" && (
          <li className="p-4">
            <Link to="/regorg">Host blood donation program?</Link>
          </li>
        )}

        <li className="p-4">
          <Link to="/events">Donate Blood?</Link>
        </li>
        <li className="p-4">
          <Link to="/">Find blood match?</Link>
        </li>
        {auth.isauthed && auth.role == "donor" && (
          <li className="p-4">
            <Link to="/editdonor">My profile</Link>
          </li>
        )}
        {auth.isauthed && auth.role == "org" && (
          <li className="p-4">
            <Link to="/orgevent">My events</Link>
          </li>
        )}
        {auth.isauthed && auth.role == "org" && (
          <li className="p-4">
            <Link to="/editorg">My profile</Link>
          </li>
        )}

        <li className="p-4">
          {auth.isauthed ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
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
          {auth.isauthed && auth.role == "donor" && (
            <li>
              <Link to="/editdonor">My profile</Link>
            </li>
          )}
          <li className="p-4 border-b border-gray-600">
            {auth.isauthed ? (
              <button onClick={handleLogout}>LOGOUT</button>
            ) : (
              <Link to="/login">LOGIN</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
