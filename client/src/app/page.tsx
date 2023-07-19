"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full ">
        <div className="p-24 flex flex-col items-center justify-between font-mono text-sm bg-zinc-800 text-zinc-200 ">
          <h2>Apt Base</h2>
          <p>
            A clean and useful dashboard to manage and maintain your rental
            units and properties.
          </p>
          <form onClick={() => {}} className="flex flex-col flex-wrap gap-3 ">
            <div className="flex gap-3">
              <input type="text" className="" />
              <input type="text" />
            </div>
            <button className="border-4 border-indigo-500 flex-auto">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
