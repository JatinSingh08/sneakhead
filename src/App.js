import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  Cart,
  ProductList,
  Checkout,
  Login,
  Signup,
  Profile,
  Wishlist,
  SingleProduct,
} from "./pages";
import { Navbar, Footer } from "./components";
import { footerAPI } from "./Data/data";
import Mockman from "mockman-js";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/mockman" element={<Mockman />} />{" "}
          <Route path="/" element={<Home />} />{" "}
          <Route path="/productlist" element={<ProductList />} />{" "}
          <Route
            path="/cart"
            element={
              <PrivateRoutes>
                <Cart />
              </PrivateRoutes>
            }
          />{" "}
          <Route
            path="/checkout"
            element={
              <PrivateRoutes>
                <Checkout />
              </PrivateRoutes>
            }
          />{" "}
          <Route
            path="/wishlist"
            element={
              <PrivateRoutes>
                <Wishlist />
              </PrivateRoutes>
            }
          />{" "}
          <Route
            path="/profile"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />{" "}
          <Route path='/productlist/:id' element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
        </Routes>{" "}
        <Footer footerData={footerAPI} /> <ToastContainer />
      </div>{" "}
      <ToastContainer />
    </>
  );
}

export default App;
