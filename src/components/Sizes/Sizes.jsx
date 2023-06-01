import React from "react";
import { sizes } from "./availableSizes";

const Sizes = () => {
  return (
    <>
      <h2 className="text-md font-medium">Available Sizes</h2>
      <div className="grid grid-cols-4 gap-2 md:grid-cols-3">
        {sizes.map((size, i) => (
          <div className="border-[#C3C3C3] border py-1 px-3 cursor-pointer hover:border-slate-800">{size}</div>
        ))}
      </div>
    </>
  );
};

export default Sizes;
