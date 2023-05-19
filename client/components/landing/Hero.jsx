import React from "react";

const Hero = () => {
  return (
    <div className="p-4 ml-4 h-3/4 flex flex-col justify-center lg:ml-24 2xl:ml-40">
      <h1>View</h1>
      <h1 className="text-blue-400">Manage</h1>
      <h1>Automate</h1>
      <div>
        <button className="bg-blue-400 border-blue-400 px-5 py-2 rounded-md font-semibold my-4 text-3xl ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
