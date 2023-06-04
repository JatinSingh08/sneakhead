import React, { useState } from 'react'
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { deleteWishlistItem, postCartItem, postWishlistItem } from '../../services/services';
import { useAuth, useData } from '../../context';
import { ActionType } from '../../reducers/constants';
import { useNavigate } from 'react-router-dom';
import { toastNotification } from '../../utils/utlis';

const Item = ({popular, shoe }) => {
  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  const {_id, title, text, rating, img, price, color, shadow } = shoe;
  const { token } = useAuth();
  const { state ,dispatch } = useData();
  const navigate = useNavigate();

  const isPresentInCart = state?.cart?.find(({_id: shoeId}) => shoeId.toString() === _id.toString());
  const isPresentInWishlist = state?.wishlist?.find(({_id: shoeId}) => shoeId.toString() === _id.toString());

  const cartHandler = async () => {
    setCartBtnDisabled(true);
    if (token) {
      toastNotification("success", "Successfully added to Cart");
    } else {
      navigate("/login");
      toastNotification("warn", "Please login first");
    }
    try {
        const { status, data: {cart} } = await postCartItem({
          product: { ...shoe, qty: 1 },
          encodedToken: token
        })
        setCartBtnDisabled(false);
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
    if (token) {
      toastNotification("success", "Successfully added to Wishlist");
    } else {
      navigate("/login");
      toastNotification("warn", "Please login first");
    }
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
    setWishlistBtnDisabled(true);
    try {
      const { status, data: {wishlist}} = await deleteWishlistItem({_id, encodedToken: token});
      if(status === 200 || status === 201) {
        dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: wishlist });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setWishlistBtnDisabled(false);
    }
  }

  return (
    <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 ${popular ? "justify-items-start md:mb-3" : "justify-items-center"}`}>
      <div className={`grid items-center ${popular ? "justify-items-start" : "justify-items-end items-start"}`}>
        <h1 className='text-slate-200 font-bold text-xl lg:text-lg md:text-base filter drop-shadow'>{title}</h1>
        <p className='text-slate-200 text-base md:text-sm font-semibold'>{text}</p>

      <div className={`flex  gap-3 my-2 items-start`}>
        <div className='flex items-center bg-slate-200 rounded-sm px-2'>
          <h1>₹ {price}</h1>
        </div>

        <div className='flex items-center text-slate-200 gap-1'>
          {/* star icon */}
          <StarIcon className='w-4 h-4'/>
          <h1>{rating}</h1>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <button 
        disabled={wishlistBtnDisabled}
        onClick={() => isPresentInWishlist ? removeWishlistHandler() : wishlistHandler()}
        className='bg-white/90 button-theme blur-effect p-1 h-8 shadow-sky-200 rounded-md disabled:cursor-not-allowed'>
          
          <HeartIcon className='icon-style text-slate-900' fill={`${isPresentInWishlist ? 'red' : 'gray'}`}/>
        </button>

        <button 
        onClick={() => isPresentInCart ? navigate("/cart") : cartHandler()}
        disabled={cartBtnDisabled}
        className='bg-white/90 button-theme blur-effect px-2 h-8 shadow-sky-200 text-sm rounded-sm text-black font-semibold disabled:cursor-not-allowed'>
          { isPresentInCart ? 'Go to Cart' : 'Buy Now' }
        </button>
      </div>

      <div className={`flex items-center ${popular ? 'absolute top-5 right-1' : 'justify-center'}`}>
        <img src={img} alt="" 
        className={`transitions-theme hover:-rotate-12 ${popular ? "h-auto w-64 lg:w-56 -rotate-[35deg]" : "h-36 w-64"}`}
        />
      </div>

      </div>
    </div>
  )
}

export default Item
