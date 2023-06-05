import React from "react";
import { Filters, List, Pagination } from "./../../components";
import { useData } from "../../context";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../components/Loaders/Loader";

const ProductList = () => {
  const { state, filteredProducts } = useData();
  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  return (
    <div className="flex mt-[9vh] relative md:mt-[15vh]">

        <Filters 
        showFilters={showFilters}
        toggleFilters={toggleFilters}         
        />
          <div onClick={toggleFilters} className=" md:flex hidden w-16 h-16 bottom-10 right-5 bg-slate-800 bg-gradient-to-r rounded-full fixed items-center justify-center z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-slate-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
          </div>
      <List shoes={filteredProducts} 
      />
   
    </div>
  );
};

export default ProductList;
