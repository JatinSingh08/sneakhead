import { useEffect, useContext, createContext, useState } from "react";
import {
  getCartItems,
  getProducts,
  getWishlistItems,
} from "../../services/services";
import { useReducer } from "react";
import { DataReducer, initialState } from "../../reducers";
import { ActionType } from "../../reducers/constants";
import { useAuth } from "../auth/auth-context";
import { filtersHandler } from "../../utils/filterFunction";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const { token } = useAuth();
  const localStorageUser = JSON.parse(localStorage.getItem("login"));

  const getAllProducts = async () => {
    try {
      const {
        status,
        data: { products },
      } = await getProducts();
      if (status === 200 || status === 201) {
        dispatch({ type: ActionType.INITIALZE_PRODUCTS, payload: products });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCartItemsHandler = async (token) => {
    try {
        const cart = localStorageUser?.user.cart;
        console.log({cart});
          dispatch({ type: ActionType.ADD_TO_CART, payload: cart });
    } catch (error) {
      console.log(error);
    }
  };
console.log("wishlist", localStorageUser?.user.wishlist);
console.log("cart", localStorageUser?.user.cart)
  const getWisthlistItemsHandler = async (token) => {
    try {
        const wishlist = localStorageUser?.user.wishlist;
dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: wishlist });


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getCartItemsHandler();
    getWisthlistItemsHandler();
  }, [token]);

  const trendingShoesHome = [...state?.products?.slice(0, 12)];
  const popularShoesHome = [...state?.products?.slice(12, 15)];

  const applyFilters = (filterType, filterValue) => {
    dispatch({
      type: ActionType.CHANGE_FILTER,
      payload: { filterType, filterValue },
    });
  };
const clearCartContext = () => {
  dispatch({type: ActionType.ADD_TO_CART, payload: []})
}
const clearWishlistContext = () => {
  dispatch({type: ActionType.ADD_TO_WISHLIST, payload: []})
}


  let filteredProducts = filtersHandler(state);
  console.log("filters", state.filters);


  console.log({state});
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        trendingShoesHome,
        popularShoesHome,
        filteredProducts,
        clearCartContext,
        clearWishlistContext,
        applyFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };
