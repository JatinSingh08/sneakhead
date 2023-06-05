import axios from "axios";

export const loginServices = async ({ email, password }) =>
  await axios.post("/api/auth/login", {
    email,
    password,
  });

export const signupServices = async ({
  firstName,
  lastName,
  email,
  password,
}) =>
  await axios.post("/api/auth/signup", {
    firstName,
    lastName,
    email,
    password,
  });

export const getProducts = async () => await axios.get("/api/products");

export const getCartItems = async ({ encodedToken }) =>
  await axios.get("/api/user/cart", {
    headers: {
      authorization: encodedToken,
    },
  });

export const getWishlistItems = async ({ encodedToken }) =>
  await axios.get("/api/user/wishlist", {
    headers: {
      authorization: encodedToken,
    },
  });

export const postCartItem = async ({product, encodedToken}) => 
  await axios.post("/api/user/cart",  
  {
    product
  },
  {
    headers: {
      authorization: encodedToken
    }
  }
)

export const postWishlistItem = async ({product, encodedToken}) => 
  await axios.post("/api/user/wishlist",
  {
    product: product
  },
  {
    headers: {
      authorization: encodedToken
    }
  }  
)

export const deleteCartItem = async ({id, encodedToken}) => 
  await axios.delete(`/api/user/cart/${id}`, {
    headers: {
      authorization: encodedToken
    }
})

export const deleteWishlistItem = async ({_id, encodedToken}) => 
  await axios.delete(`/api/user/wishlist/${_id}`, {
    headers: {
      authorization: encodedToken
    }
})

export const cartItemQuantity = async ({_id, encodedToken, type}) => 
  await axios.post(`/api/user/cart/${_id}`,
  {
    action: {type}
  },
  {
    headers: {
      authorization: encodedToken
    }
})

export const clerCart = async (cart, token) => {
  try {
    for(let item of cart) {
      await axios.delete(`/api/user/cart/${item._id}`, {
        headers: {
          authorization: token
        }
      })
    }
  } catch (error) {
    console.log('error in clear cart service', error.message)
  }
}