import { ActionType } from "../constants";

const initialState = {
  products: [], 
  cart: [],
  wishlist: [],
  addressList: [
    {
      residence: '8505 Christina Ridges',
      alternatemobile: 4878794411,
      city: 'West Cooper',
      id: '2364c34d-7645-49cb-8b74-4bc5cb09711d',
      mobile: 1293452481,
      name: 'Vicki McDermott',
      pincode: '820598',
      state: 'Arunachal Pradesh'
    },
    {
      residence: '8505 Christina Ridges',
      alternatemobile: 4878794411,
      city: 'West Cooper',
      id: '2364c34d-7645-49cb-8b74-4bc5cb09711d',
      mobile: 1293452481,
      name: 'Vicki McDermott',
      pincode: '820598',
      state: 'Arunachal Pradesh'
    },
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

    default:
      break;
  }
}

export { initialState, DataReducer };