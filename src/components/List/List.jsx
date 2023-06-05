import React from "react";
import SingleProduct from "../SingleProductCard/SingleProductCard";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loaders/Loader";

const List = ({ shoes, isMobile }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const id = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(id);
    }
  }, [shoes.length]);

  if (isLoading)
    return (
      <div className="w-full flex items-center justify-center h-[100vh] p-10 m-auto ">
        <Loader />
      </div>
    );
  
  if(shoes.length === 0) {
    return (
      <h1 className="md:min-h-screen text-blue-300 m-auto text-lg font-medium flex items-center justify-center">No Products Found</h1>
    )
  }

  return (
    <>
    <div className={`grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 items-center justify-items-center p-10 w-full `}>
      {shoes.map(
        (shoeData, i) =>
          shoeData.id > 15 && <SingleProduct shoe={shoeData} key={i} />
      )}
    </div>
    
    </>
  );
};

export default List;