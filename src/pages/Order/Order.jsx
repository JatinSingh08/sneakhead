import React from 'react'
import { orderSuccessGif } from '../../assets'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useData } from '../../context';

const Order = () => {
  const navigate = useNavigate();
  const { state } = useData();
  useEffect(() => {
    if (!state.cart.length) {
      navigate("/productlist");
    }
  }, []);

  return (
    <div className='min-h-screen m-auto flex items-center justify-center'>
      <div className='shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-20 flex flex-col items-center justify-center gap-2 md:p-10'>
        <img src={orderSuccessGif} alt="" />
        <h1 className='text-2xl font-medium'>Order Successful</h1>
        <p>Thank you for Ordering with us :)</p>
        <button
        className="button-theme flex gap-1 py-2 bg-slate-900 text-slate-200"
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        Continue Shopping
      </button>
      </div>
    </div>
  )
}

export default Order
