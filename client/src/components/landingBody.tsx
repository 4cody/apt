import { useState } from "react";
import Image from "next/image";

import tempImage from "@/ehnt.png";

export default () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <>
      <div className="w-full p-24 mb-24 flex flex-col items-center justify-between font-mono text-sm bg-zinc-800 text-zinc-200 ">
        <h2 className="mb-2">Apt Base</h2>
        <p className="mb-8">
          A clean and useful dashboard to manage and maintain your rental units
          and properties.
        </p>
        <form onClick={() => {}} className="flex flex-col flex-wrap gap-3">
          <div className="flex gap-3">
            <input
              type="text"
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              className="text-indigo-800 p-2 rounded"
            />
            <input
              type="text"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              className="text-indigo-800 p-2 rounded"
            />
          </div>
          <button className="p-2 border-4 border-indigo-500 flex-auto rounded">
            Join Now
          </button>
        </form>
      </div>

      <div className="w-full px-20 my-20 max-w-7xl flex">
        <div className="relative w-1/2 h-72">
          <Image alt="image" src={tempImage} layout="fill" />
        </div>
        <div className="relative w-1/2 h-72 p-8 flex flex-col justify-center">
          <h2 className="text-center p-6 font-bold text-2xl">
            Manage your Properties
          </h2>
          <p className="text-center fon">
            Find convience and ease of rental managment with our clean and
            adaptable UI. Get useful information on the statistics of your
            properties and units.
          </p>
        </div>
      </div>

      <div className="w-full px-20 my-20 max-w-7xl flex">
        <div className="relative w-1/2 h-72 p-8 flex flex-col justify-center">
          <h2 className="text-center p-6 font-bold text-2xl">
            Get Useful Reports
          </h2>
          <p className="text-center fon">
            View or print reports on properties and units from financials to
            tenant history.
          </p>
        </div>
        <div className="relative w-1/2 h-72">
          <Image alt="image" src={tempImage} layout="fill" />
        </div>
      </div>

      <div className="w-full px-20 my-20 max-w-7xl flex">
        <div className="relative w-1/2 h-72">
          <Image alt="image" src={tempImage} layout="fill" />
        </div>
        <div className="relative w-1/2 h-72 p-8 flex flex-col justify-center">
          <h2 className="text-center p-6 font-bold text-2xl">
            Visualize and Project Income
          </h2>
          <p className="text-center fon">
            Find convience and ease of rental managment with our clean and
            adaptable UI. Get useful information on the statistics of your
            properties and units.
          </p>
        </div>
      </div>
    </>
  );
};
