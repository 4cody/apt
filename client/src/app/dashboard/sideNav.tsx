"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BiSolidChevronRight, BiBuildingHouse } from "react-icons/bi";

import { GoPeople } from "react-icons/go";

export default function SideNav() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const viewSwitch = () => {};

  console.log(activeTab);

  return (
    <section className="w-60 bg-indigo-800 text-indigo-100 ">
      <div className="h-20 border-2 border-rose-100">
        <h1 className="text-xl uppercase font-bold">Apt App</h1>
      </div>
      <div
        className={`flex items-center cursor-pointer ease-in-out duration-100 ${
          activeTab == "dashboard" ? "bg-indigo-400" : ""
        }`}
        onClick={() => {
          setActiveTab("dashboard");
        }}
      >
        <BsGrid3X3GapFill />
        <h3>Dashboard</h3>
        {activeTab == "dashboard" ? <BiSolidChevronRight /> : null}
      </div>
      <div className="">
        <h2 className="uppercase text-amber-300">Admin</h2>
      </div>
      <div
        className={`flex items-center cursor-pointer ease-in-out duration-100 ${
          activeTab == "properties" ? "bg-indigo-400" : ""
        }`}
        onClick={() => {
          setActiveTab("properties");
        }}
      >
        <BiBuildingHouse />
        <h3>Properties</h3>
        {activeTab == "properties" ? <BiSolidChevronRight /> : null}
      </div>
      <div
        className={`flex items-center cursor-pointer ease-in-out duration-100 ${
          activeTab == "tenants" ? "bg-indigo-400" : ""
        }`}
        onClick={() => {
          setActiveTab("tenants");
        }}
      >
        <GoPeople />
        <h3>Tenats</h3>
        {activeTab == "tenants" ? <BiSolidChevronRight /> : null}
      </div>
    </section>
  );
}
