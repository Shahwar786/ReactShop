// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCart from "./components/Product Cart/ProductCart";
import AuthProvider from "./contexts/AuthProvider";
import CartProvider from "./contexts/CartProvider";
import Home from "./Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Login from "./pages/LoginPage";
// import SignUp from "./pages/SignUp";
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div className="">
      <CartProvider>
        <AuthProvider>
        <Navbar />
        <ProductCart />

          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        
        {/* <Routes> */}
        {/* <Route path="/" element={<HeaderBanner />} /> */}
        {/* <Route path="/" element={<ProductsContainer />} /> */}

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* </Routes> */}
        </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;
