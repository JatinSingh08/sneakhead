export const ActionType = {
  INITIALZE_PRODUCTS: "INITIALIZE_PRODUCTS",
  // INITIALZE_HOME_PRODUCTS: "INITIALZE_HOME_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",
  CHANGE_FILTER: "CHANGE_FILTER",
  SEARCH_FILTER: "SEARCH_FILTER",
  CLEAR_FILTER: "CLEAR_FILTER",
  ADD_ADDRESS: "ADD_ADDRESS",
  DELETE_ADDRESS: "DELETE_ADDRESS",
  INCREASE_CART_QUANTITY: "INCREASE_CART_QUANTITY",
  DECREASE_CART_QUANTITY: "DECREASE_CART_QUANTITY",
  SELECT_ADDRESS: "SELECT_ADDRESS",
}

export const FilterTypes = {
  PriceRange: 'PriceRange',
  SearchValue: 'searchValue',
  Categories: 'categories',
  SortBy: 'sortBy',
  Rating: 'rating',
  Brands: 'brands'
}