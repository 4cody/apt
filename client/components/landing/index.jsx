import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

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
    <div className="bg-gray-100 min-h-screen w-full">
      <section className="hero h-screen text-slate-50">
        <Navbar />

        <Hero />
      </section>
      <main className="bg-slate-500 overflow-hidden">
        {/* <div className="bg-emerald-700 py-16 gap-x-12 w-max">
          <CarouselItem />
        </div> */}
        <section>
          <div className="py-8 mb-72 border-y-4 border-indigo-500 flex justify-around">
            <div className="h-96 w-1/3 bg-gray-100"></div>
            <div className="h-96 w-1/3 bg-gray-100"></div>
          </div>
          <div className="py-8 mb-72 border-y-4 border-indigo-500 flex justify-around">
            <div className="h-96 w-1/3 bg-gray-100"></div>
            <div className="h-96 w-1/3 bg-gray-100"></div>
          </div>
          <div className="py-8 mb-72 border-y-4 border-indigo-500 flex justify-around">
            <div className="h-96 w-1/3 bg-gray-100"></div>
            <div className="h-96 w-1/3 bg-gray-100"></div>
          </div>
          <div className="py-8 mb-72 border-y-4 border-indigo-500 flex justify-around">
            <div className="h-96 w-1/3 bg-gray-100"></div>
            <div className="h-96 w-1/3 bg-gray-100"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
