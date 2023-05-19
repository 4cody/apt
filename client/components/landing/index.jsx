import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Data from "../data";
import Cloud from "../cloud";
import Footer from "../footer";

const tempArr = [0, 1, 2, 3, 4, 5, 6, 7];

const CarouselItem = () => {
  return tempArr.map((el, p) => (
    <div
      key={p}
      className="bg-gray-100 border-4 border-sky-500 inline-block ml-20 mr-20"
    >
      <img src="https://placehold.co/200x200" />
    </div>
  ));
};

const Landing = () => {
  return (
    <div className="min-h-screen w-full">
      <section className="hero h-screen text-slate-50">
        <Navbar />
        <Hero />
      </section>
      <main className="overflow-hidden">
        <Data />
        <Cloud />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;
