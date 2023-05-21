import "./App.css";
import {Route, Routes} from 'react-router-dom';
import { Home, Cart, ProductList, Checkout, Login, Signup, Profile, Wishlist } from './pages'
import { Navbar, Footer } from "./components";
import { footerAPI } from "./Data/data";
import Mockman from 'mockman-js'
import { PrivateRoutes } from "./routes/PrivateRoutes";


function App() {
  
  return (
    <div className="">
      <Navbar />
        <Routes>
          <Route path='/mockman' element={<Mockman />} />
          <Route path='/' element={<Home />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/cart' 
          element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
          } 
          />
          <Route path='/checkout' 
          element={
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
          } 
          />
          <Route path='/wishlist' 
          element={
          <PrivateRoutes>
            <Wishlist />
          </PrivateRoutes>
          } 
          />
          <Route 
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      <Footer footerData={footerAPI} />
    </div>
  );
}

export default App;
