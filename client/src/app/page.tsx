"use client";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-full p-20 flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-6 mr-6 bg-zinc-800"></div>
          <h3 className="pr-6">Link 1</h3>
          <h3 className="pr-6">Link 2</h3>
        </div>

        <button className="">Login</button>
      </div>

      <div className="w-full p-24 flex flex-col items-center justify-between font-mono text-sm bg-zinc-800 text-zinc-200 ">
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
    </main>
  );
}
