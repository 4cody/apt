"use client";
import Image from "next/image";
import Link from "next/link";

import tempImage from "@/ehnt.png";

export default function Home() {
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

        <Link href="#" className="">
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
            <input type="text" className="" />
            <input type="text" />
          </div>
          <button className="border-4 border-indigo-500 flex-auto">
            Join Now
          </button>
        </form>
      </div>

      <div className="w-full px-20 border-2 border-rose-500 max-w-7xl flex">
        <Image alt="" src={tempImage} width={200} height={400} layout="fixed" />
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
