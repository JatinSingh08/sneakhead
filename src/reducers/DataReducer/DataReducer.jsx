import { ActionType } from "../constants";
import { v4 as uuid } from "uuid";

const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  filters: {
    brands: [],
    categories: [],
    rating: "",
    sortBy: "",
    searchValue: "",
    priceRange: 10000,
  },
  addressList: [
    {
      id: uuid(),
      name: "Vicki McDermott",
      mobile: 1293452481,
      pincode: "820598",
      city: "West Cooper",
      residence: "8505 Christina Ridges",
      alternatemobile: 4878794411,
      state: "Arunachal Pradesh",
      isSelected: false,
    },
  ],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case ActionType.INITIALZE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case ActionType.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ActionType.ADD_ADDRESS:
      return {
        ...state,
        addressList: [...state.addressList, action.payload],
      };
    case ActionType.CHANGE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
    case ActionType.SELECT_ADDRESS:
      return {
        ...state,
        addressList: state?.addressList?.map((address) =>
          address.id === action.payload.id
            ? { ...address, isSelected: action.payload.e.target.checked }
            : { ...address }
        ),
      };
    case ActionType.DELETE_ADDRESS:
      return {
        ...state,
        addressList: state?.addressList?.filter(
          (address) => address.id !== action.payload
        ),
      };
    case ActionType.CLEAR_FILTER:
      return {
        ...state,
        filters: {
          brands: [],
          categories: [],
          rating: "",
          sortBy: "",
          searchValue: "",
          priceRange: 10000,
        },
      };
    case ActionType.EDIT_ADDRESS:
      return {
        ...state,
        addressList: state?.addressList.map((add) =>
          add.id === action.payload.id ? action.payload.address : add
        ),
      };
    default:
      break;
  }
};
export { initialState, DataReducer };
