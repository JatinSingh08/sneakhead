import "./App.css";
import {Route, Routes} from 'react-router-dom';
import { Home, Cart, ProductList, Checkout, Login, Signup } from './pages'
import { Navbar, Footer } from "./components";
import { footerAPI } from "./Data/data";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      <Footer footerData={footerAPI} />
    </div>
  );
}

export default App;
