import { ActionType } from "../constants";

const initialState = {
  products: [], 
  cart: [],
  wishlist: [],
  filters: {
    brands: [],
    categories: [],
    rating: '',
    sortBy: '',
    searchValue: '',
    priceRange: 10000
  },
  addressList: [
    {
      name: 'Vicki McDermott',
      mobile: 1293452481,
      pincode: '820598',
      city: 'West Cooper',
      residence: '8505 Christina Ridges',
      alternatemobile: 4878794411,
      state: 'Arunachal Pradesh',
    }
  ]
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

     case ActionType.ADD_ADDRESS:
      return {
        ...state,
        addressList: [...state.addressList, action.payload]
      }
      case ActionType.CHANGE_FILTER: 
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.filterType]: action.payload.filterValue
          }
        }
    default:
      break;
  }
}
export { initialState, DataReducer };