import Link from "next/link";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BiSolidChevronRight, BiBuildingHouse } from "react-icons/bi";

import { GoPeople } from "react-icons/go";

export default function SideNav() {
  return (
    <section className="w-60 bg-indigo-800 text-indigo-100">
      <div className="h-20 border-2 border-rose-100">
        <h1 className="text-xl uppercase font-bold">Apt App</h1>
      </div>
      <div className="flex items-center">
        <BsGrid3X3GapFill />
        <h3>Dashboard</h3>
        <BiSolidChevronRight />
      </div>
      <div className="">
        <h2 className="uppercase text-amber-300">Admin</h2>
      </div>
      <div className="flex items-center">
        <BiBuildingHouse />
        <h3>Properties</h3>
        <BiSolidChevronRight className="hidden" />
      </div>
      <div className="flex items-center">
        <GoPeople />
        <h3>Tenats</h3>
        <BiSolidChevronRight className="hidden" />
      </div>
    </section>
  );
}
