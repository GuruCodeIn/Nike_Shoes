/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";

function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    getCartItemsCount,
  } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const pageStyles = {
    backgroundColor: "rgba(173, 170, 170, 1)",
    minHeight: "100vh",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 auto",
  };

  const containerStyles = {
    padding: "40px 20px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
  };

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
    padding: "20px 30px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
  };

  const titleStyles = {
    fontSize: "28px",
    fontWeight: "900",
    color: "#232526",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const backButtonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    borderRadius: "25px",
    border: "2px solid #232526",
    backgroundColor: "transparent",
    color: "#232526",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#232526",
      color: "#fff",
    },
  };

  const emptyCartStyles = {
    textAlign: "center",
    padding: "80px 40px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
  };

  const emptyIconStyles = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    color: "#999",
  };

  const cartContentStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 350px",
    gap: "30px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  };

  const cartItemsStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const cartItemStyles = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "25px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
  };

  const itemImageStyles = {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    objectFit: "cover",
    backgroundColor: "#f0f0f0",
  };

  const itemDetailsStyles = {
    flex: 1,
  };

  const itemNameStyles = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#232526",
    marginBottom: "5px",
  };

  const itemSizeStyles = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  };

  const itemPriceStyles = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#232526",
  };

  const quantityControlsStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const quantityButtonStyles = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    border: "2px solid #e1e1e1",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#232526",
      backgroundColor: "#f8f8f8",
    },
  };

  const quantityDisplayStyles = {
    fontSize: "16px",
    fontWeight: "600",
    minWidth: "30px",
    textAlign: "center",
  };

  const removeButtonStyles = {
    padding: "10px",
    borderRadius: "50%",
    border: "2px solid #e74c3c",
    backgroundColor: "#fff",
    color: "#e74c3c",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e74c3c",
      color: "#fff",
    },
  };

  const summaryStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    height: "fit-content",
    position: "sticky",
    top: "20px",
  };

  const summaryTitleStyles = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#232526",
    marginBottom: "25px",
  };

  const summaryRowStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "16px",
  };

  const totalRowStyles = {
    ...summaryRowStyles,
    fontSize: "18px",
    fontWeight: "700",
    paddingTop: "15px",
    borderTop: "2px solid #e1e1e1",
    marginTop: "20px",
  };

  const checkoutButtonStyles = {
    width: "100%",
    padding: "15px",
    marginTop: "25px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#232526",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1a1d1e",
      transform: "translateY(-2px)",
    },
    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
      transform: "none",
    },
  };

  const handleCheckout = () => {
    if (user) {
      navigate("/billing");
    } else {
      navigate("/login", { state: { from: { pathname: "/billing" } } });
    }
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div css={pageStyles}>
        <Header />
        <motion.div
          css={containerStyles}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            css={emptyCartStyles}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div css={emptyIconStyles}>
              <ShoppingBag size={40} />
            </div>
            <h2
              css={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#232526",
                marginBottom: "15px",
              }}
            >
              Your bag is empty
            </h2>
            <p css={{ color: "#666", marginBottom: "30px" }}>
              Looks like you haven't added any items to your bag yet.
            </p>
            <Link
              to="/collection"
              css={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "25px",
                backgroundColor: "#232526",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#1a1d1e",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Start Shopping
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div css={pageStyles}>
      <Header />
      <motion.div
        css={containerStyles}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          css={headerStyles}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 css={titleStyles}>
            <ShoppingBag size={28} />
            Your Bag ({getCartItemsCount()})
          </h1>
          <Link to="/collection" css={backButtonStyles}>
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </motion.div>

        <motion.div
          css={cartContentStyles}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div css={cartItemsStyles}>
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.cartId}
                  css={cartItemStyles}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <img
                    src={
                      item.image ||
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/8792548172793bb23e33739743cfb3e7b6bd8642?placeholderIfAbsent=true&apiKey=d7ab3de0d8774583bf6046e5db36c00c"
                    }
                    alt={item.name}
                    css={itemImageStyles}
                  />

                  <div css={itemDetailsStyles}>
                    <h3 css={itemNameStyles}>{item.name}</h3>
                    <p css={itemSizeStyles}>Size: {item.size}</p>
                    <p css={itemPriceStyles}>${item.price}</p>
                  </div>

                  <div css={quantityControlsStyles}>
                    <button
                      css={quantityButtonStyles}
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity - 1)
                      }
                    >
                      <Minus size={16} />
                    </button>
                    <span css={quantityDisplayStyles}>{item.quantity}</span>
                    <button
                      css={quantityButtonStyles}
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity + 1)
                      }
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    css={removeButtonStyles}
                    onClick={() => removeFromCart(item.cartId)}
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            css={summaryStyles}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 css={summaryTitleStyles}>Order Summary</h2>

            <div css={summaryRowStyles}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div css={summaryRowStyles}>
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>

            <div css={summaryRowStyles}>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div css={totalRowStyles}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {subtotal < 100 && (
              <motion.p
                css={{
                  fontSize: "14px",
                  color: "#666",
                  marginTop: "15px",
                  padding: "10px",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "8px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Add ${(100 - subtotal).toFixed(2)} more for free shipping!
              </motion.p>
            )}

            <motion.button
              css={checkoutButtonStyles}
              onClick={handleCheckout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {user ? "Proceed to Checkout" : "Sign In to Checkout"}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cart;
