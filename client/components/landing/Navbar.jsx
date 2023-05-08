import React from "react";
import { SiDatabricks } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="w-full h-28 absolute z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center m-4">
          <SiDatabricks className="" />
          <h1 className="">Secured</h1>
        </div>
        <ul className="">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <button className="bg-blue-400 border-blue-400 px-6 py-3 rounded-md font-semibold my-4">
            Sign In
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
