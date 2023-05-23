import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react"
import { getCartItems, getProducts, getWishlistItems } from "../../services/services";
import { useReducer } from "react";
import { DataReducer, initialState } from "../../reducers";
import { ActionType } from "../../reducers/constants";
import { getWishlistItemsHandler } from "../../backend/controllers/WishlistController";
import { useAuth } from "../auth/auth-context";

const DataContext = createContext(); 

const DataProvider = ({children}) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const { token } = useAuth();

  const getAllProducts = async () => {
    try {
      const { status, data: {products}  } = await getProducts();
      if(status === 200 || status === 201) {
        dispatch({ type: ActionType.INITIALZE_PRODUCTS, payload: products});
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const getCartItemsHandler = async (token) => {
    try {
      if(token) {
        const { status, data: {cart} } = await getCartItems({encodedToken: token});
        if(status === 200 || status === 201) {
          dispatch({ type: ActionType.ADD_TO_CART, payload: cart})
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getWisthlistItemsHandler = async (token) => {
    try {
      if(token) {
        const { status, data: {wishlist} } = await getWishlistItems({encodedToken: token});
        if(status === 200 || status === 201) {
          dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: wishlist});
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
    getCartItemsHandler();
    getWisthlistItemsHandler();
  } ,[token])

  const trendingShoesHome = [...state?.products?.slice(0, 12)];
  const popularShoesHome = [...state?.products?.slice(12, 15)];

  //  const addToCart = (product) => dispatch({ type: ActionType.ADD_TO_CART, payload: product});
  // console.log(state?.products?.slice(0,6));
  console.log(state.cart);
  return (
    <DataContext.Provider
    value={{
      state,
      dispatch,
      trendingShoesHome,
      popularShoesHome
    }}
    >
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext);
export { useData, DataProvider };