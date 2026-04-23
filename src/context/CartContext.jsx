import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // ✅ REMOVE
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  // ✅ UPDATE QTY
  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};