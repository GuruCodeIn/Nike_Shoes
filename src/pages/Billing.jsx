/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  CreditCard,
  Smartphone,
  Wallet,
  Lock,
  MapPin,
  User,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
import toast from "react-hot-toast";

function Billing() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email || "",
      firstName: user?.name?.split(" ")[0] || "",
      lastName: user?.name?.split(" ")[1] || "",
    },
  });

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

  const titleStyles = {
    fontSize: "32px",
    fontWeight: "900",
    color: "#232526",
    textAlign: "center",
    marginBottom: "40px",
  };

  const formGridStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 400px",
    gap: "40px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  };

  const sectionStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    marginBottom: "30px",
  };

  const sectionTitleStyles = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#232526",
    marginBottom: "25px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const inputGroupStyles = {
    marginBottom: "20px",
  };

  const labelStyles = {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
  };

  const inputStyles = {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "10px",
    border: "2px solid #e1e1e1",
    fontSize: "16px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
    transition: "all 0.3s ease",
    "&:focus": {
      outline: "none",
      borderColor: "#232526",
      boxShadow: "0 0 0 3px rgba(35, 37, 38, 0.1)",
    },
  };

  const paymentMethodStyles = {
    display: "flex",
    gap: "15px",
    marginBottom: "25px",
  };

  const paymentOptionStyles = (isSelected) => ({
    flex: 1,
    padding: "15px",
    borderRadius: "12px",
    border: `2px solid ${isSelected ? "#232526" : "#e1e1e1"}`,
    backgroundColor: isSelected ? "rgba(35, 37, 38, 0.05)" : "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
    "&:hover": {
      borderColor: "#232526",
    },
  });

  const summaryStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    height: "fit-content",
    position: "sticky",
    top: "20px",
  };

  const orderItemStyles = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px 0",
    borderBottom: "1px solid #e1e1e1",
  };

  const itemImageStyles = {
    width: "60px",
    height: "60px",
    borderRadius: "8px",
    objectFit: "cover",
    backgroundColor: "#f0f0f0",
  };

  const placeOrderButtonStyles = {
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

  const successStyles = {
    textAlign: "center",
    padding: "60px 40px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const onSubmit = async (data) => {
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart and show success
      clearCart();
      setOrderPlaced(true);
      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderPlaced) {
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
            css={successStyles}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              css={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 25px",
              }}
            >
              <CheckCircle size={40} color="#fff" />
            </motion.div>

            <h2
              css={{
                fontSize: "28px",
                fontWeight: "900",
                color: "#232526",
                marginBottom: "15px",
              }}
            >
              Order Confirmed!
            </h2>
            <p css={{ color: "#666", marginBottom: "30px", fontSize: "16px" }}>
              Thank you for your purchase. Your order has been confirmed and
              will be shipped soon.
            </p>
            <p css={{ color: "#999", fontSize: "14px", marginBottom: "30px" }}>
              Order #NK{Date.now().toString().slice(-6)}
            </p>

            <div
              css={{ display: "flex", gap: "15px", justifyContent: "center" }}
            >
              <button
                css={{
                  padding: "12px 24px",
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
                }}
                onClick={() => (window.location.href = "/")}
              >
                Continue Shopping
              </button>
              <button
                css={{
                  padding: "12px 24px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: "#232526",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1a1d1e",
                  },
                }}
                onClick={() => (window.location.href = "/profile")}
              >
                View Orders
              </button>
            </div>
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
        <motion.h1
          css={titleStyles}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Checkout
        </motion.h1>

        <div css={formGridStyles}>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Contact Information */}
              <motion.div
                css={sectionStyles}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 css={sectionTitleStyles}>
                  <Mail size={20} />
                  Contact Information
                </h2>

                <div css={inputGroupStyles}>
                  <label css={labelStyles}>Email</label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    css={inputStyles}
                  />
                  {errors.email && (
                    <div
                      css={{
                        color: "#e74c3c",
                        fontSize: "14px",
                        marginTop: "5px",
                      }}
                    >
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div css={inputGroupStyles}>
                  <label css={labelStyles}>Phone Number</label>
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    type="tel"
                    css={inputStyles}
                  />
                  {errors.phone && (
                    <div
                      css={{
                        color: "#e74c3c",
                        fontSize: "14px",
                        marginTop: "5px",
                      }}
                    >
                      {errors.phone.message}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                css={sectionStyles}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 css={sectionTitleStyles}>
                  <MapPin size={20} />
                  Shipping Address
                </h2>

                <div
                  css={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px",
                  }}
                >
                  <div css={inputGroupStyles}>
                    <label css={labelStyles}>First Name</label>
                    <input
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      css={inputStyles}
                    />
                    {errors.firstName && (
                      <div
                        css={{
                          color: "#e74c3c",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        {errors.firstName.message}
                      </div>
                    )}
                  </div>

                  <div css={inputGroupStyles}>
                    <label css={labelStyles}>Last Name</label>
                    <input
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      css={inputStyles}
                    />
                    {errors.lastName && (
                      <div
                        css={{
                          color: "#e74c3c",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        {errors.lastName.message}
                      </div>
                    )}
                  </div>
                </div>

                <div css={inputGroupStyles}>
                  <label css={labelStyles}>Address</label>
                  <input
                    {...register("address", {
                      required: "Address is required",
                    })}
                    css={inputStyles}
                  />
                  {errors.address && (
                    <div
                      css={{
                        color: "#e74c3c",
                        fontSize: "14px",
                        marginTop: "5px",
                      }}
                    >
                      {errors.address.message}
                    </div>
                  )}
                </div>

                <div
                  css={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 100px",
                    gap: "15px",
                  }}
                >
                  <div css={inputGroupStyles}>
                    <label css={labelStyles}>City</label>
                    <input
                      {...register("city", { required: "City is required" })}
                      css={inputStyles}
                    />
                    {errors.city && (
                      <div
                        css={{
                          color: "#e74c3c",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        {errors.city.message}
                      </div>
                    )}
                  </div>

                  <div css={inputGroupStyles}>
                    <label css={labelStyles}>State</label>
                    <input
                      {...register("state", { required: "State is required" })}
                      css={inputStyles}
                    />
                    {errors.state && (
                      <div
                        css={{
                          color: "#e74c3c",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        {errors.state.message}
                      </div>
                    )}
                  </div>

                  <div css={inputGroupStyles}>
                    <label css={labelStyles}>ZIP</label>
                    <input
                      {...register("zip", { required: "ZIP is required" })}
                      css={inputStyles}
                    />
                    {errors.zip && (
                      <div
                        css={{
                          color: "#e74c3c",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        {errors.zip.message}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                css={sectionStyles}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 css={sectionTitleStyles}>
                  <Lock size={20} />
                  Payment Method
                </h2>

                <div css={paymentMethodStyles}>
                  <div
                    css={paymentOptionStyles(selectedPaymentMethod === "card")}
                    onClick={() => setSelectedPaymentMethod("card")}
                  >
                    <CreditCard
                      size={24}
                      css={{ margin: "0 auto 8px", display: "block" }}
                    />
                    <div css={{ fontSize: "14px", fontWeight: "600" }}>
                      Credit Card
                    </div>
                  </div>

                  <div
                    css={paymentOptionStyles(
                      selectedPaymentMethod === "paypal",
                    )}
                    onClick={() => setSelectedPaymentMethod("paypal")}
                  >
                    <Wallet
                      size={24}
                      css={{ margin: "0 auto 8px", display: "block" }}
                    />
                    <div css={{ fontSize: "14px", fontWeight: "600" }}>
                      PayPal
                    </div>
                  </div>

                  <div
                    css={paymentOptionStyles(selectedPaymentMethod === "apple")}
                    onClick={() => setSelectedPaymentMethod("apple")}
                  >
                    <Smartphone
                      size={24}
                      css={{ margin: "0 auto 8px", display: "block" }}
                    />
                    <div css={{ fontSize: "14px", fontWeight: "600" }}>
                      Apple Pay
                    </div>
                  </div>
                </div>

                {selectedPaymentMethod === "card" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div css={inputGroupStyles}>
                      <label css={labelStyles}>Card Number</label>
                      <input
                        {...register("cardNumber", {
                          required: "Card number is required",
                        })}
                        placeholder="1234 5678 9012 3456"
                        css={inputStyles}
                      />
                      {errors.cardNumber && (
                        <div
                          css={{
                            color: "#e74c3c",
                            fontSize: "14px",
                            marginTop: "5px",
                          }}
                        >
                          {errors.cardNumber.message}
                        </div>
                      )}
                    </div>

                    <div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "15px",
                      }}
                    >
                      <div css={inputGroupStyles}>
                        <label css={labelStyles}>Expiry Month</label>
                        <input
                          {...register("expiryMonth", { required: "Required" })}
                          placeholder="MM"
                          css={inputStyles}
                        />
                      </div>

                      <div css={inputGroupStyles}>
                        <label css={labelStyles}>Expiry Year</label>
                        <input
                          {...register("expiryYear", { required: "Required" })}
                          placeholder="YY"
                          css={inputStyles}
                        />
                      </div>

                      <div css={inputGroupStyles}>
                        <label css={labelStyles}>CVV</label>
                        <input
                          {...register("cvv", { required: "Required" })}
                          placeholder="123"
                          css={inputStyles}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </form>
          </div>

          {/* Order Summary */}
          <motion.div
            css={summaryStyles}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2
              css={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#232526",
                marginBottom: "25px",
              }}
            >
              Order Summary
            </h2>

            <div css={{ marginBottom: "20px" }}>
              {cartItems.map((item) => (
                <div key={item.cartId} css={orderItemStyles}>
                  <img
                    src={
                      item.image ||
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/8792548172793bb23e33739743cfb3e7b6bd8642?placeholderIfAbsent=true&apiKey=d7ab3de0d8774583bf6046e5db36c00c"
                    }
                    alt={item.name}
                    css={itemImageStyles}
                  />
                  <div css={{ flex: 1 }}>
                    <div
                      css={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "4px",
                      }}
                    >
                      {item.name}
                    </div>
                    <div css={{ fontSize: "12px", color: "#666" }}>
                      Size: {item.size} • Qty: {item.quantity}
                    </div>
                  </div>
                  <div css={{ fontSize: "14px", fontWeight: "600" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div css={{ borderTop: "1px solid #e1e1e1", paddingTop: "15px" }}>
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "18px",
                  fontWeight: "700",
                  paddingTop: "15px",
                  borderTop: "2px solid #e1e1e1",
                }}
              >
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              css={placeOrderButtonStyles}
              onClick={handleSubmit(onSubmit)}
              disabled={isProcessing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isProcessing
                ? "Processing..."
                : `Place Order • $${total.toFixed(2)}`}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Billing;
