import React from 'react'
import { useData } from '../../context'
import { billAmountHandler } from '../../utils/utlis';
import { Link } from 'react-router-dom';

const BillingBox = () => {
  const { state: { cart } } = useData();
  const billAmount = billAmountHandler(cart);
  const grandTotal = billAmount + 50 - 499;
  const amountSaved = billAmount - grandTotal;


  // const bill = {
  //   totalAmount: billAmount || 0, 
  //   deliveryCharge: 50,
  //   discount: 499,
  //   grandTotal: this.totalAmount + this.deliveryCharge - this.discount,
  //   amountSaved: this.totalAmount - this.grandTotal
  // };

  const bill = {
    totalAmount: billAmount,
    deliveryCharge: 50,
    discount: 499,
    grandTotal,
    amountSaved
  }

  return (
    <div className='border rounded-md w-96 p-3 '>
      <div className='my-1 border-b-2 text-2xl font-semibold text-start border-gray-200 pb-1'>
        <h1>Your Order</h1>
      </div>

        <div className='text-gray-700 flex justify-between'>
          <p>Items in your cart</p>
          <p>{cart.length}</p>
        </div>

      <div className='text-gray-700 flex justify-between'>
        <p>Sub-Total</p>
        <p>₹ {bill.totalAmount}</p>
      </div>

      <div className='text-gray-700 flex justify-between'>
        <p>Delievery Charges</p>
        <p>₹ {bill.deliveryCharge}</p>
      </div>

      <div className='text-gray-700 flex justify-between border-b-2 border-gray-200'>
        <p>Discount</p>
        <p>
          <span>-₹ {bill.discount}</span>
        </p>
      </div>

      <div className='flex justify-between border-b-2 border-gray-200'>
        <p>Grand Total</p>
        <p>₹ {bill.grandTotal}</p>
      </div>

      <p className='text-start'>You will save ₹ {bill.amountSaved} on this order</p>
      <Link to='/checkout'>
        <button className='button-theme bg-slate-900 text-slate-100 py-1.5 shadow-slate-900 w-full'>Checkout</button>
      </Link>
    </div>
  )
}

export default BillingBox
