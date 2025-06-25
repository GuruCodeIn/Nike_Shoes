/** @jsxImportSource @emotion/react */
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

function Home() {
  const containerStyles = {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(to bottom right, #1f1f1f, #d3d3d3)",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  };

  const mainSection = {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5%",
    gap: "4rem",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      padding: "2rem",
    },
  };

  const textSection = {
    flex: 1,
    color: "#f0f0f0",
    maxWidth: "500px",
  };

  const imageSection = {
    flex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Public Nike shoe image URL
  const nikeShoeURL =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8792548172793bb23e33739743cfb3e7b6bd8642?placeholderIfAbsent=true&apiKey=d7ab3de0d8774583bf6046e5db36c00c";

  return (
    <motion.div
      css={containerStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <div css={mainSection}>
        <div css={textSection}>
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "900",
              letterSpacing: "-2px",
              marginBottom: "0.5rem",
            }}
          >
            B-MAX
          </h1>
          <h2 style={{ fontSize: "2rem", fontWeight: "500", color: "#ccc" }}>
            NIKE B-MAX 90
          </h2>
          <p style={{ fontSize: "2rem", fontWeight: "600", marginTop: "1rem" }}>
            $99
          </p>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#d0d0d0",
            }}
          >
            Nike is the world's largest supplier of athletic shoes and apparel.
            Known for their iconic "Swoosh" logo and "Just Do It" slogan.
          </p>
          <button
            style={{
              marginTop: "2rem",
              padding: "0.8rem 1.5rem",
              fontSize: "1rem",
              fontWeight: "600",
              backgroundColor: "#f0f0f0",
              color: "#111",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            ADD TO CART
          </button>
        </div>

        <div css={imageSection}>
          <motion.img
            src={nikeShoeURL}
            alt="Nike B-Max"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              width: "100%",
              maxWidth: "600px",
              transform: "rotate(-8deg)",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
