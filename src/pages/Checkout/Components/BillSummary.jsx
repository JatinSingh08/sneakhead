import React from "react";
import { useAuth, useData } from "../../../context";
import { billAmountHandler, toastNotification } from "../../../utils/utlis";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sneakheadLogo } from "../../../assets";
import confetti from "canvas-confetti";
import { clerCart } from "../../../services/services";
import { ActionType } from "../../../reducers/constants";

const BillSummary = ({addressSelected}) => {
  const {
    state: { cart, addressList },
    dispatch
  } = useData();
  const navigate = useNavigate();
  const { token } = useAuth();
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

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const Popper = () => {
    var end = Date.now() + 3 * 1000;
    // go Buckeyes!
    var colors = ['#392f5a', '#9583cf'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 40,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 140,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const displayRazorpay = async () => {
    if (isAddressSelected) {
      const res = await loadScript(
        'https://checkout.razorpay.com/v1/checkout.js'
      );

      if (!res) {
        toastNotification('error','Razorpay SDK failed to load, check you connection');
        return;
      }

      const options = {
        key: 'rzp_test_5KezFMy0ws3aN9',
        amount: grandTotal * 100,
        currency: 'INR',
        name: 'Sneakhead',
        description: 'Thank you for shopping with us',
        image: {sneakheadLogo},
        handler: function (response) {
          const tempObj = {
            products: [...cart],
            amount: grandTotal,
            paymentId: response.razorpay_payment_id,
          };
          // orderDispatch({ type: 'ADD_ORDERS', payload: tempObj });
          toastNotification('success', 'Payment succesfull');
          navigate('/order');
          Popper();
          clerCart(cart, token);
          dispatch({
            type: ActionType.ADD_TO_CART,
            payload: [],
          });
        },
        prefill: {
          name: 'Jatin',
          email: 'singjatin0812@gmail.com',
          contact: '9999999999',
        },
        theme: {
          color: '#392F5A',
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      toastNotification('warn', 'Please select or add new adress');
    }
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
        onClick={() => displayRazorpay()}
        >
          Place Order
        </button>
      </Link>
    </div>
  );
};

export default BillSummary;
