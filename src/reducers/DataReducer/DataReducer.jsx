import { ActionType } from "../constants";

const initialState = {
  products: [], 
}

const DataReducer = (state, action) => {
  switch (action.type) {
    case ActionType.INITIALZE_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }

    default:
      break;
  }
}

export { initialState, DataReducer };