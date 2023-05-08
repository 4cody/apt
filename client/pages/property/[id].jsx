import React from "react";

const PropertyId = () => {
  return (
    <div className="w-2/3">
      <div className="h-max flex flex-row justify-evenly gap-2">
        <div className="basis-2/4 flex justify-evenly">
          <img src="/img/h1/dh1.webp" />
        </div>
        <div className="basis-2/4 flex flex-row flex-wrap gap-3.5 justify-center">
          <div className="grid gap-4 grid-cols-2 grid-rows-2">
            <img className="object-fill" src="/img/h1/dh2.webp" />
            <img className="object-fill" src="/img/h1/dh3.webp" />
            <img className="object-fill" src="/img/h1/dh4.webp" />
            <img className="object-fill" src="/img/h1/dh5.webp" />
          </div>
        </div>
      </div>
      <div className="">
        <h2>123 North Street Rd</h2>
        <h2>Appleton Wisconsin 54321</h2>
      </div>
    </div>
  );
};

export default PropertyId;

//flex flex-col border border-amber-900
