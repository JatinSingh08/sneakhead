import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, Sizes } from "../../components";
import { useData } from "../../context";

const SingleProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const {
    state: { products },
  } = useData();

  const shoe = products.find(({ _id }) => _id.toString() === id.toString());
  // const { _id, title, text, brand, category, rating,  img, price } = shoe;
  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  if (isLoading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center gap-10">
        <div className=" hover:scale-100">
          <img
            src={shoe?.img}
            alt={shoe?.title}
            className="bg-[#F6F6F6] h-96"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <h1 className="text-4xl font-semibold">{shoe?.title}</h1>
          <p className="text-[#757575] top-0">{shoe?.text}</p>
          <p className="text-[#757575]">₹ {shoe?.price}</p>
          <Sizes />
          <button className="button-theme mt-3 flex items-center justify-center blur-effect bg-slate-800 text-slate-200 w-64 disabled:cursor-not-allowed disabled:bg-slate-500">
            <span>Add to Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
