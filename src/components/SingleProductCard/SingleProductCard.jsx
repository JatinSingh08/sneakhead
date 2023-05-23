import React, { useState } from 'react'
import { useAuth, useData } from '../../context';
import { ActionType } from '../../reducers/constants';
import { deleteWishlistItem, postCartItem, postWishlistItem } from '../../services/services';
import { useNavigate } from 'react-router-dom';

const SingleProductCard = ({shoe}) => {
  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  const { id, title, text, img, price } = shoe;
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const isPresentInCart = state.cart.find(({id: shoeId}) => shoeId.toString() === id.toString());
  const isPresentInWishlist = state.wishlist.find(({id: shoeId}) => shoeId.toString() === id.toString());

  const cartHandler = async () => {
    try {
      setCartBtnDisabled(true);
        const { status, data: {cart} } = await postCartItem({
          product: { ...shoe, qty: 1 },
          encodedToken: token
        })
        setCartBtnDisabled(false);
        console.log(cart);
        if(status === 200 || status === 201) {
          dispatch({ type: ActionType.ADD_TO_CART, payload: cart})
        }
    } catch (error) {
      console.log(error.message);
    } finally {
      setCartBtnDisabled(false);
    }
  }

  const wishlistHandler = async () => {
    setWishlistBtnDisabled(true);
    try {
      if(!isPresentInWishlist) {
        const { status, data: {wishlist} } = await postWishlistItem({
          product: {...shoe, wished: true},
          encodedToken: token
        })
        if(status === 200 || status === 201) {
          dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: wishlist });
        }
      }
    } catch (error) {
     console.log(error.message); 
    } finally {
      setWishlistBtnDisabled(false);
    }
  }

  const removeWishlistHandler = async () => {
    try {
      const { status, data: {wishlist}} = await deleteWishlistItem({id, encodedToken: token});
      if(status === 200 || status === 201) {
        dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: wishlist });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div 
    className='p-4 w-72 m-2 grid gap-2 items-start text-start border transform  cursor-pointer'
    >
      <div className=''>
        <img src={img} alt="" 
        className='w-full h-auto -mt-14 object-contain mb-33 drop-shadow-2xl transform scale-[100px] transition duration-500 hover:scale-110 hover:drop-shadow-2xl'
        />
      </div>
        <div className='-mt-10 grid gap-2'>
          <h1 className='text-xl font-semibold'>{title}</h1>
          <p className='text-[#757575] top-0'>{text}</p>
          <p className='text-[#757575]'>₹ {price}</p>

          <div className='flex gap-4'>
            <div className=''
            onClick={() => isPresentInWishlist ? removeWishlistHandler() : wishlistHandler()}
            disabled={wishlistBtnDisabled}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill={`${isPresentInWishlist ? "red" : "none"}`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-8 h-8 icon-style"
              disabled={wishlistBtnDisabled}
              >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>

            <button
            onClick={() =>
               isPresentInCart ? navigate("/cart") : 
              cartHandler()
            }
            disabled={cartBtnDisabled}
            className='button-theme blur-effect bg-slate-800 text-slate-200 w-full'>{isPresentInCart ? 'Go to Cart' : 'Add to Cart'}</button>
          </div>
        </div>
    </div>
  )
}

export default SingleProductCard
