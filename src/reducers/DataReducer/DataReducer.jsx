import { ActionType } from "../constants";

const initialState = {
  products: [], 
  cart: [],
  wishlist: []
}


const DataReducer = (state, action) => {
  switch (action.type) {
    case ActionType.INITIALZE_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }

    case ActionType.ADD_TO_CART: 
      return {
        ...state, 
        cart: action.payload
      }

    case ActionType.ADD_TO_WISHLIST: 
      return {
        ...state,
        wishlist: action.payload
      }

    default:
      break;
  }
}

export { initialState, DataReducer };