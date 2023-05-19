import React from "react";

const Cloud = () => {
  return (
    <div className="cloud h-screen relative bg-black/20 z-0 text-slate-50">
      <div className="flex flex-col justify-center absolute right-2/4 top-1/3 width p-4 ml-16">
        <h2>
          <span className="text-blue-400">Cloud</span> Security
        </h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in
          maxime quaerat ipsum quae corrupti ullam iste neque quis laborum totam
          harum, aliquid tempora odit asperiores eveniet tenetur temporibus ex.
        </p>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
