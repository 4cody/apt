"use client";

import Nav from "@/components/nav";
import LandingBody from "@/components/landingBody";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* <div className="z-100 fixed w-full h-full backdrop-blur-lg grid place-content-center">
        <div className="border-2 border-indigo-500 bg-zinc-300 z-20 w-52 h-52 ">
          asg
        </div>
      </div> */}

      <Nav />
      <LandingBody />
    </main>
  );
}
