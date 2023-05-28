import React from "react";
import SingleProduct from "../SingleProductCard/SingleProductCard";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loaders/Loader";

const List = ({ shoes }) => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);


  useEffect(() => {
    setIsLoading(true);
    const id = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => {
      clearTimeout(id);
    }
  }, [shoes.length]);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 items-center justify-items-center p-10 w-full">
      {
      isLoading ? (
        <div className="flex items-center justify-items-center ml-[50vw] w-full">
          <Loader />
        </div>
      ) : (
        
        shoes.map(
          (shoeData, i) =>
            shoeData.id > 15 && <SingleProduct shoe={shoeData} key={i} />
        )
      )
      }
      
    </div>
  );
};

export default List;
