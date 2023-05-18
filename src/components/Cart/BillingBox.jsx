import React from 'react'

const BillingBox = () => {
  return (
    <div className='border rounded-md w-96 p-3 '>
      <div className='my-1 border-b-2 text-2xl font-semibold text-start border-gray-200 pb-1'>
        <h1>Your Order</h1>
      </div>

        <div className='text-gray-700 flex justify-between'>
          <p>Items in your cart</p>
          <p>4</p>
        </div>

      <div className='text-gray-700 flex justify-between'>
        <p>Sub-Total</p>
        <p>$100</p>
      </div>

      <div className='text-gray-700 flex justify-between'>
        <p>Delievery Charges</p>
        <p>$10</p>
      </div>

      <div className='text-gray-700 flex justify-between border-b-2 border-gray-200'>
        <p>Discount</p>
        <p>
          <span>-$2</span>
        </p>
      </div>

      <div className='flex justify-between border-b-2 border-gray-200'>
        <p>Grand Total</p>
        <p>$110</p>
      </div>

      <p className='text-start'>You will save $10 on this order</p>
      <button className='button-theme bg-slate-900 text-slate-100 py-1.5 shadow-slate-900 w-full'>Checkout</button>
    </div>
  )
}

export default BillingBox
