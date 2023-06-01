import React from "react";
import { useData } from "../../../context";
import { billAmountHandler, toastNotification } from "../../../utils/utlis";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { logo } from "../../../assets";
import useRazorpay from "react-razorpay";




const BillSummary = ({addressSelected}) => {
  const {
    state: { cart, addressList },
  } = useData();
  const [paymentDone, setPaymenDone] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const Razorpay = useRazorpay();
  const billAmount = billAmountHandler(cart);
  const grandTotal = billAmount + 50 - 499;
  const amountSaved = billAmount - grandTotal;

  const bill = {
    totalAmount: billAmount,
    deliveryCharge: 50,
    discount: 499,
    grandTotal,
    amountSaved,
  };

  const isAddressSelected = addressList.find(({isSelected}) => isSelected);
const handlePayment = async (params) => {
  // const order = await createOrder(params); //  Create order on your backend
  setButtonClicked(true);
  if(!isAddressSelected) {
    toastNotification('error', 'Select address to continue');
    return;
  }

  const options = {
    key: "rzp_test_5KezFMy0ws3aN9", // Enter the Key ID generated from the Dashboard
    amount: bill.grandTotal * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Sneakhead",
    description: "Test Transaction",
    image: {logo},
    // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
    handler: function (response) {
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
    prefill: {
      name: "Jatin Singh",
      email: "youremail@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },

  };

  const rzp1 = new Razorpay(options);

  // rzp1.on("payment.failed", function (response) {
  //   alert(response.error.code);
  //   alert(response.error.description);
  //   alert(response.error.source);
  //   alert(response.error.step);
  //   alert(response.error.reason);
  //   alert(response.error.metadata.order_id);
  //   alert(response.error.metadata.payment_id);
  // });

  rzp1.open();

};


  return (
    <div className="border rounded-md w-96 p-3 mt-10 md:w-[90vw]">
      <div className="my-1 border-b-2 text-2xl font-semibold text-start border-gray-200 pb-1">
        <h1>Your Order</h1>
      </div>

      <div className="text-gray-700 flex justify-between">
        <p>Items in your cart</p>
        <p>{cart.length}</p>
      </div>

      <div className="text-gray-700 flex justify-between">
        <p>Sub-Total</p>
        <p>₹ {bill.totalAmount}</p>
      </div>

      <div className="text-gray-700 flex justify-between">
        <p>Delievery Charges</p>
        <p>₹ {bill.deliveryCharge}</p>
      </div>

      <div className="text-gray-700 flex justify-between border-b-2 border-gray-200">
        <p>Discount</p>
        <p>
          <span>-₹ {bill.discount}</span>
        </p>
      </div>

      <div className="flex justify-between border-b-2 border-gray-200">
        <p>Grand Total</p>
        <p>₹ {bill.grandTotal}</p>
      </div>

      <p className="text-start">
        You will save ₹ {bill.amountSaved} on this order
      </p>
      <Link to="/checkout">
        <button className="button-theme bg-slate-900 text-slate-100 py-1.5 shadow-slate-900 w-full"
        onClick={() => handlePayment()}
        >
          Place Order
        </button>
      </Link>
    </div>
  );
};

export default BillSummary;
