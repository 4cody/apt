import React, { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  console.log(nav);

  return (
    <nav className="w-full h-28 absolute z-10 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center m-4">
          <SiDatabricks className="text-5xl mr-4 text-blue-400" />
          <h1 className="">Secured</h1>
        </div>
        <ul
          className={`flex flex-col items-center justify-center p-4 bg-black opacity-90 absolute h-screen top-0 md:h-auto md:opacity-100 md:bg-transparent md:static md:flex-row md:items-center ${
            nav ? "left-0 right-0" : "-left-full"
          } transition-all duration-500 ease-in`}
        >
          <li className="p-4 mr-4 text-3xl md:text-base md:font-normal">
            Home
          </li>
          <li className="p-4 mr-4 text-3xl md:text-base md:text-base md:font-normal">
            Home
          </li>
          <li className="p-4 mr-4 text-3xl md:text-base md:font-normal">
            Home
          </li>
          <button className="bg-blue-400 border-blue-400 px-5 py-2 rounded-md font-semibold my-4 text-3xl md:text-base">
            Sign In
          </button>
        </ul>
        <div className="md:hidden p-4 z-10" onClick={handleNav}>
          {nav ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
