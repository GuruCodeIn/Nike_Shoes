/** @jsxImportSource @emotion/react */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

function CartSidebar() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    getCartItemsCount,
  } = useCart();
  const navigate = useNavigate();

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    backdropFilter: "blur(5px)",
  };

  const sidebarStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "400px",
    backgroundColor: "#fff",
    boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.1)",
    zIndex: 1001,
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 480px)": {
      width: "100vw",
    },
  };

  const headerStyles = {
    padding: "20px",
    borderBottom: "1px solid #e1e1e1",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const titleStyles = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#232526",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const closeButtonStyles = {
    padding: "8px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "#666",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: "#232526",
    },
  };

  const cartContentStyles = {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  };

  const emptyCartStyles = {
    textAlign: "center",
    padding: "60px 20px",
    color: "#666",
  };

  const cartItemStyles = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px 0",
    borderBottom: "1px solid #f0f0f0",
  };

  const itemImageStyles = {
    width: "60px",
    height: "60px",
    borderRadius: "8px",
    objectFit: "cover",
    backgroundColor: "#f0f0f0",
  };

  const itemDetailsStyles = {
    flex: 1,
  };

  const itemNameStyles = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#232526",
    marginBottom: "4px",
  };

  const itemSizeStyles = {
    fontSize: "12px",
    color: "#666",
    marginBottom: "8px",
  };

  const quantityControlsStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const quantityButtonStyles = {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    border: "1px solid #e1e1e1",
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

  const footerStyles = {
    padding: "20px",
    borderTop: "1px solid #e1e1e1",
  };

  const totalStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const checkoutButtonStyles = {
    width: "100%",
    padding: "15px",
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
    },
    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
    },
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/cart");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            css={overlayStyles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            css={sidebarStyles}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div css={headerStyles}>
              <h2 css={titleStyles}>
                <ShoppingBag size={20} />
                Your Bag ({getCartItemsCount()})
              </h2>
              <button
                css={closeButtonStyles}
                onClick={() => setIsCartOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div css={cartContentStyles}>
              {cartItems.length === 0 ? (
                <div css={emptyCartStyles}>
                  <ShoppingBag
                    size={48}
                    color="#ccc"
                    style={{ marginBottom: "20px" }}
                  />
                  <p>Your bag is empty</p>
                </div>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.cartId}
                      css={cartItemStyles}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
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
                        <div css={itemNameStyles}>{item.name}</div>
                        <div css={itemSizeStyles}>Size: {item.size}</div>
                        <div css={quantityControlsStyles}>
                          <button
                            css={quantityButtonStyles}
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity - 1)
                            }
                          >
                            <Minus size={12} />
                          </button>
                          <span
                            css={{
                              fontSize: "14px",
                              fontWeight: "600",
                              minWidth: "20px",
                              textAlign: "center",
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            css={quantityButtonStyles}
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity + 1)
                            }
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      <div css={{ textAlign: "right" }}>
                        <div
                          css={{
                            fontSize: "14px",
                            fontWeight: "600",
                            marginBottom: "8px",
                          }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          css={{
                            padding: "4px",
                            borderRadius: "50%",
                            border: "1px solid #e74c3c",
                            backgroundColor: "#fff",
                            color: "#e74c3c",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#e74c3c",
                              color: "#fff",
                            },
                          }}
                          onClick={() => removeFromCart(item.cartId)}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div css={footerStyles}>
                <div css={totalStyles}>
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <motion.button
                  css={checkoutButtonStyles}
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Cart & Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartSidebar;
