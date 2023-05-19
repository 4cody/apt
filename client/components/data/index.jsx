import React from "react";

const Data = () => {
  return (
    <div className="data h-screen relative bg-black/20 z-0">
      <div className="flex flex-col justify-center absolute left-2/4 top-1/3 width">
        <h2>
          <span className="text-blue-400">Data</span> Managment
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod
          excepturi assumenda impedit. Ad molestiae nemo dolores pariatur nobis
          deleniti. Adipisci error dolor, nam possimus facilis obcaecati quas
          quos vero.
        </p>
        <div>
          <button className="bg-blue-400 border-blue-400 px-6 py-3 rounded-md font-semibold my-4 text-slate-50">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
