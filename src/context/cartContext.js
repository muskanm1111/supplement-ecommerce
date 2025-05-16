"use client";
import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //  add to cart function
  const addToCart = (item) => {
    console.log('CartContext: Current cart items:', cartItems);
    console.log('CartContext: Adding item:', item);
    setCartItems([...cartItems, item]);
    console.log('CartContext: New cart items:', [...cartItems, item]);
  };

  //  remove from cart function
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
