import { createContext, useEffect, useState } from "react";
import { Fruits, RT, Vegtables } from "../assets/assets";

export const ProductContext = createContext(null)

const ProductContextProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) {
        console.error("prevCart is not an array:", prevCart);
        return [];
      }
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) {
        console.error("prevCart is not an array:", prevCart);
        return [];
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };











  const value = {
    Fruits,
    RT,
    Vegtables,
    cart,
    addToCart,
    removeFromCart,
    getTotalAmount
  }


  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )

}

export default ProductContextProvider;