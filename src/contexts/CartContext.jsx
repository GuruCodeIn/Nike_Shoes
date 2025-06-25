/** @jsxImportSource @emotion/react */
import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Load cart from localStorage on initialization
    const savedCart = localStorage.getItem("nike_cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("nike_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size = "M", quantity = 1) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === size,
    );

    if (existingItemIndex >= 0) {
      // Update existing item quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
      toast.success(`Updated ${product.name} quantity`);
    } else {
      // Add new item to cart
      const newItem = {
        ...product,
        size,
        quantity,
        cartId: `${product.id}-${size}-${Date.now()}`,
      };
      setCartItems((prev) => [...prev, newItem]);
      toast.success(`${product.name} added to cart`);
    }
  };

  const removeFromCart = (cartId) => {
    const item = cartItems.find((item) => item.cartId === cartId);
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
    if (item) {
      toast.success(`${item.name} removed from cart`);
    }
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared");
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    toggleCart,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
