// import { Route, Routes } from "react-router-dom";
import HeaderBanner from "./components/HeaderBanner";
import Navbar from "./components/Navbar";
import ProductCart from "./components/Product Cart/ProductCart";
import ProductsContainer from "./components/ProductsContainer";
import CartProvider from "./contexts/CartProvider";
// import Login from "./pages/LoginPage";
// import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="">
      <CartProvider>
        <Navbar />
        <ProductCart />

        <HeaderBanner />
        <ProductsContainer />
        {/* <Routes> */}
        {/* <Route path="/" element={<HeaderBanner />} /> */}
        {/* <Route path="/" element={<ProductsContainer />} /> */}

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* </Routes> */}

      </CartProvider>
    </div>
  );
}

export default App;
