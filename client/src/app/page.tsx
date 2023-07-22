"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import tempImage from "@/ehnt.png";

export default function Home() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="w-full p-20 flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-6 mr-6 bg-zinc-800"></div>
          <Link href="#" className="pr-6">
            Link 1
          </Link>
          <Link href="#" className="pr-6">
            Link 2
          </Link>
        </div>

        <Link
          href="#"
          className="bg-zinc-300 text-zinc-800 py-2 px-4 border-4 border-indigo-500 rounded hover:text-zinc-400 hover:bg-zinc-600 hover:scale-90 ease-out duration-200"
        >
          Login
        </Link>
      </div>

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

      <div className="w-full px-20 border-2 border-rose-500 max-w-7xl flex">
        <div className="relative w-1/2 h-72">
          <Image alt="image" src={tempImage} layout="fill" />
        </div>
        <div>
          <h2 className=""></h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            quaerat aperiam ab quia odio doloremque, magnam voluptate officia
            nemo, officiis accusantium autem omnis recusandae temporibus. Omnis.
          </p>
        </div>
      </div>
    </main>
  );
}
