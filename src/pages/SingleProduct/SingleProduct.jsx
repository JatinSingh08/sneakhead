import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader, Sizes } from "../../components";
import { useAuth, useData } from "../../context";
import { toastNotification } from "../../utils/utlis";
import { deleteWishlistItem, postCartItem, postWishlistItem } from "../../services/services";
import { ActionType } from "../../reducers/constants";
import { HeartIcon } from "@heroicons/react/24/outline";

const SingleProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  const navigate = useNavigate();
  const {
    state: { products, cart, wishlist },
    dispatch,
  } = useData();
  const { token } = useAuth();

  const shoe = products.find(({ _id }) => _id.toString() === id.toString());

  // const { _id, title, text, brand, category, rating,  img, price } = shoe;
  const isPresentInCart = cart?.find(
    ({ _id: shoeId }) => shoeId.toString() === id.toString()
  );
  const isPresentInWishlist = wishlist?.find(
    ({ _id: shoeId }) => shoeId.toString() === id.toString()
  );

  const cartHandler = async () => {
    setCartBtnDisabled(true);
    if (token) {
      toastNotification("success", "Successfully added to Cart");
    } else {
      navigate("/login");
      toastNotification("warn", "Please login first");
    }

    try {
      const {
        status,
        data: { cart },
      } = await postCartItem({
        product: { ...shoe, qty: 1 },
        encodedToken: token,
      });
      setCartBtnDisabled(false);
      console.log(cart);
      if (status === 200 || status === 201) {
        dispatch({ type: ActionType.ADD_TO_CART, payload: cart });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setCartBtnDisabled(false);
    }
  };

  const wishlistHandler = async () => {
    setWishlistBtnDisabled(true);
    if (token) {
      toastNotification("success", "Added to Wishlist");
    } else {
      navigate("/login");
      toastNotification("warn", "Please login first");
    }
    try {
      if (!isPresentInWishlist) {
        const {
          status,
          data: { wishlist },
        } = await postWishlistItem({
          product: { ...shoe, wished: true },
          encodedToken: token,
        });
        if (status === 200 || status === 201) {
          dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: wishlist });
        }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setWishlistBtnDisabled(false);
    }
  };

  const removeWishlistHandler = async () => {
    setWishlistBtnDisabled(true);
    toastNotification("info", "Removed from Wishlist");
    try {
      const {
        status,
        data: { wishlist },
      } = await deleteWishlistItem({ id, encodedToken: token });
      if (status === 200 || status === 201) {
        dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: wishlist });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setWishlistBtnDisabled(false);
    }
  };

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
    <div className="min-h-screen flex items-center justify-center md:mt-[40%] p-4">
      <div className="flex items-center justify-center gap-10 md:flex-col">
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
          <div className="flex md:flex-col gap-2">
            <button
              disabled={cartBtnDisabled}
              className="button-theme mt-3 flex items-center justify-center md:mx-auto blur-effect bg-slate-800 text-slate-200 w-64 disabled:cursor-not-allowed disabled:bg-slate-500"
              onClick={() =>
                isPresentInCart ? navigate("/cart") : cartHandler()
              }
            >
              <span> {isPresentInCart ? "Go to Cart" : "Add to Cart"}</span>
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
            <button className="button-theme mt-3 flex items-center justify-center md:mx-auto blur-effect bg-[#F6F6F6] text-slate-800 w-64 disabled:cursor-not-allowed disabled:bg-slate-500"
            onClick={() =>
              isPresentInWishlist ? navigate('/wishlist') : wishlistHandler()
            }
            disabled={wishlistBtnDisabled}
            >
              <span>{ isPresentInWishlist ? "Go to Wishlist" : "Add to Wishlist"}</span>
              <HeartIcon className="w-6 h-6 ml-2"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
