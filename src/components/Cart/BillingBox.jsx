import React from "react";
import { useData } from "../../context";
import { billAmountHandler } from "../../utils/utlis";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const BillingBox = () => {
  const {
    state: { cart },
  } = useData();
  const billAmount = billAmountHandler(cart);
  const location = useLocation();
  return (
    <div className="border rounded-md w-96 p-3 md:w-[60vw] sm:w-[80vw] xsm:w-full md:mt-10">
      <div className="my-1 border-b-2 text-2xl font-semibold text-start border-gray-200 pb-1">
        <h1>Your Order</h1>
      </div>

      <div className="text-gray-700 flex justify-between">
        <p>Items in your cart</p>
        <p>{cart.length}</p>
      </div>

      <>
        {cart.map(({ title, qty, price }) => (
          <div className=" text-gray-700 flex justify-between gap-3">
            <p>
              {title} ({qty})
            </p>
            <p>₹ {price * qty}</p>
          </div>
        ))}
      </>

      <div className="flex justify-between border-b-2 border-gray-200 border-t-2 py-1">
        <p>Grand Total</p>
        <p>₹ {billAmount}</p>
      </div>

      <Link to="/checkout">
        <button className="button-theme bg-slate-900 text-slate-100 py-1.5 shadow-slate-900 w-full"
        >
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default BillingBox;
