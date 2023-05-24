import React, { useState } from 'react'
import { BillingBox, SingleProductCard } from '../../../components'
import product8 from "../../../assets/product8.png";
import product11 from "../../../assets/product11.png";
import { useAuth, useData } from '../../../context';
import { ActionType } from '../../../reducers/constants';
import { cartItemQuantity, deleteCartItem } from '../../../services/services';
import DeleteConfirmationModal from './DeleteConfirmationModal';



const CartProduct = ({shoe}) => {
  const [showModal, setShowModal] = useState(false);
  let { id, title, text, img, price, qty } = shoe;
  const {state, dispatch} = useData();
  const { token } = useAuth();

  const quantityHandler = async (type) => {
    try {
    
      if(qty === 1 && type === 'decrement') {
        setShowModal(true);
        return;
      }
      const { status, data: {cart} } = await cartItemQuantity({id, encodedToken: token, type});
      if(status === 200 || status === 201) {
        dispatch({ type: ActionType.ADD_TO_CART, payload: cart })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeFromCartHandler = async (id) => {
    try {
      const { status, data: {cart} } = await deleteCartItem({id, encodedToken: token})
      console.log(cart)
      if(status === 200 || status === 201) {
        dispatch({ type: ActionType.ADD_TO_CART, payload: cart })
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div 
      className='p-4 w-auto h-54 m-2 grid grid-cols-2 gap-2 border rounded-xl'
      >
        <div >
          <img src={img} alt="" 
          className='w-56 -mt-16 h-auto object-contain drop-shadow-2xl transition duration-500 hover:scale-110 hover:drop-shadow-2xl'
          />
        </div>
          <div className='flex flex-col gap-1'>
            <div>
              <h1 className='text-xl font-semibold'>{title}</h1>
              <p className='text-[#757575] top-0'>{text}</p>
              <p className='text-[#757575]'>₹ {price}</p>
            </div>
            <div className='flex gap-2'>
              <span className='text-[#757575]'>qty: </span>
              <span className='cursor-pointer icon-style' onClick={() => quantityHandler('decrement')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div className=''>
                <span className='border px-4 py-1'>{qty}</span>
              </div>
              <span className='cursor-pointer icon-style' onClick={() => quantityHandler('increment')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>

            </div>
            <div>

            </div>
            <div className='flex gap-4'>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                
              </div>
              <button className='button-theme blur-effect bg-slate-800 text-slate-200 w-full'
              onClick={() => removeFromCartHandler(shoe.id)}
              >Remove from Cart</button>

            </div>
          </div>
          
      </div>
      {
        showModal && (
          <DeleteConfirmationModal 
          setShowModal={setShowModal}
          showModal={showModal}
          removeFromCartHandler={removeFromCartHandler}
          id={id}
          />
        )
      }
   

    </>
  )
}

export default CartProduct;
