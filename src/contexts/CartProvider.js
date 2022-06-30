import React, { createContext } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([
    {
      name: "Mix Vegetable Platter",
      price: "4.00",
      discount: 1.00,
      quantity: "96",
      category: "VEGETABLES",
      delivery: "Paid Shipping",
      status: "Available",
      time: "04:40 PM",
      deliveryOption: "Courier",
      storePickup: "Free",
      shippingCharge: "",
      img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=1920&q=75",
      pdQuantity:1
    },
    {
      name: "Pepper",
      price: "5.00",
      discount: 0,
      quantity: "96",
      category: "VEGETABLES",
      delivery: "Paid Shipping",
      status: "Available",
      time: "04:40 PM",
      deliveryOption: "Courier",
      storePickup: "Free",
      shippingCharge: "",
      img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=640&q=75",
      pdQuantity:2
    }
  ]);
  const handleClick = (product) => {
    setCart([...cart, product]);
    toast.success("Added to Cart!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const value = { cart, handleClick, setCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
