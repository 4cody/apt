import React from "react";

const tempArr = [0, 1, 2, 3, 4, 5, 6, 7];

const CarouselItem = () => {
  return tempArr.map((el, p) => (
    <div
      key={p}
      className="bg-gray-100 h-64 w-64 border-4 border-sky-500 inline-block"
    >
      sdf
    </div>
  ));
};

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="h-12 bg-indigo-100 flex justify-between">
        <div className="h-full w-44 border-2 border-zinc-950">asdf</div>
        <div className="h-full w-80 border-2 border-zinc-950">asdf</div>
        <div className="h-full w-44 border-2 border-zinc-950 flex justify-around items-center">
          <span>Login</span>
          <span>Signup</span>
        </div>
      </div>
      <section className="h-96 bg-gray-300">BANNER</section>
      <main className="bg-slate-500 overflow-hidden">
        <div className="bg-emerald-700 py-16 gap-x-12 w-max">
          <CarouselItem />
        </div>
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
