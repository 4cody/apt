"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BsGrid3X3GapFill } from "react-icons/bs";
import {
  BiSolidChevronRight,
  BiArrowToBottom,
  BiBuildingHouse,
} from "react-icons/bi";

import { GoPeople } from "react-icons/go";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  //   const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  //   const onLogin = async () => {

  //   };

  //   useEffect(() => {
  //     if (user.email.length > 0 && user.password.length > 0) {
  //       setButtonDisabled(false);
  //     } else {
  //       setButtonDisabled(true);
  //     }
  //   }, [user]);

  return (
    <div className="min-h-screen w-full flex">
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
