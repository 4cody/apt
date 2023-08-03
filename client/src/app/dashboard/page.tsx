import Link from "next/link";
import React from "react";
import SideNav from "./sideNav";

import { BiArrowToBottom } from "react-icons/bi";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex">
      <SideNav />

      <section className="grow">
        <div className="h-20 border-2 border-rose-100 flex">top NAV</div>
        <div className="flex justify-between">
          <div className="text-2xl uppercase font-bold">Dashboard</div>
          <button className="text-l uppercase font-bold flex items-center">
            <BiArrowToBottom />
            DownLoad Reports
          </button>
        </div>
        <div className="flex flex-wrap border-2 border-rose-100">
          <div className="rounded p-8 bg-slate-600 grow basis-3/5">asd</div>
          <div className="rounded p-8 bg-slate-600 grow basis-2/5">asd</div>
          <div className="rounded p-8 bg-slate-600 grow">asd</div>
        </div>
      </section>
    </div>
  );
}
