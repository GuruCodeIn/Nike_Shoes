/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCart } from "../contexts/CartContext";

function ProductCard() {
  const [selectedSize, setSelectedSize] = useState("10");
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const containerStyles = {
    marginTop: "33px",
    "@media (max-width: 991px)": {
      maxWidth: "100%",
    },
  };

  const gridStyles = {
    gap: "20px",
    display: "flex",
    "@media (max-width: 991px)": {
      flexDirection: "column",
      alignItems: "stretch",
      gap: "0px",
    },
  };

  const contentColumnStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    lineHeight: "normal",
    width: "43%",
    marginLeft: "0px",
    "@media (max-width: 991px)": {
      width: "100%",
      marginLeft: 0,
    },
  };

  const productInfoStyles = {
    zIndex: "10",
    display: "flex",
    marginRight: "-52px",
    flexGrow: "1",
    flexDirection: "column",
    alignItems: "stretch",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
    fontStyle: "italic",
    fontSize: "45px",
    color: "#D9E0E5",
    fontWeight: "500",
    "@media (max-width: 991px)": {
      fontSize: "40px",
    },
  };

  const titleStyles = {
    fontSize: "93px",
    fontWeight: "900",
    marginRight: "20px",
    "@media (max-width: 991px)": {
      marginRight: "10px",
      fontSize: "40px",
    },
  };

  const subtitleStyles = {
    marginTop: "29px",
    "@media (max-width: 991px)": {
      marginRight: "10px",
      fontSize: "40px",
    },
  };

  const priceStyles = {
    color: "#FFF",
    alignSelf: "start",
    marginTop: "27px",
    "@media (max-width: 991px)": {
      fontSize: "40px",
    },
  };

  const descriptionStyles = {
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.45px",
    marginTop: "24px",
  };

  const buttonStyles = {
    borderRadius: "14px",
    backgroundColor: "rgba(217, 217, 217, 1)",
    alignSelf: "start",
    marginTop: "27px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "4px",
    paddingBottom: "11px",
    fontSize: "15px",
    color: "#232526",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(200, 200, 200, 1)",
    },
  };

  const imageColumnStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    lineHeight: "normal",
    width: "57%",
    marginLeft: "20px",
    "@media (max-width: 991px)": {
      width: "100%",
      marginLeft: 0,
    },
  };

  const imageStyles = {
    aspectRatio: "1.24",
    objectFit: "contain",
    objectPosition: "center",
    width: "100%",
  };

  const product = {
    id: 1,
    name: "Nike B-MAX 90",
    price: 99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8792548172793bb23e33739743cfb3e7b6bd8642?placeholderIfAbsent=true&apiKey=d7ab3de0d8774583bf6046e5db36c00c",
    description:
      'Nike is the world\'s largest supplier of athletic shoes and apparel. Nike shoes are known for their iconic "Swoosh" logo and "Just Do It" slogan.',
  };

  const sizes = ["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"];

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

  const sizeSelectStyles = {
    display: "flex",
    gap: "8px",
    marginTop: "20px",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  const sizeOptionStyles = (size) => ({
    padding: "8px 12px",
    borderRadius: "8px",
    border: `2px solid ${selectedSize === size ? "#232526" : "#e1e1e1"}`,
    backgroundColor: selectedSize === size ? "#232526" : "#fff",
    color: selectedSize === size ? "#fff" : "#232526",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#232526",
    },
  });

  return (
    <motion.div
      ref={ref}
      css={containerStyles}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div css={gridStyles}>
        <motion.div
          css={contentColumnStyles}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div css={productInfoStyles}>
            <motion.div
              css={titleStyles}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              B-MAX
            </motion.div>
            <motion.div
              css={subtitleStyles}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              NIKE B-MAX 90
            </motion.div>
            <motion.div
              css={priceStyles}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ${product.price}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div
                css={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                Select Size:
              </div>
              <div css={sizeSelectStyles}>
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    css={sizeOptionStyles(size)}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              css={descriptionStyles}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {product.description}
            </motion.div>

            <motion.button
              css={buttonStyles}
              onClick={handleAddToCart}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              ADD TO CART • Size {selectedSize}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          css={imageColumnStyles}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8792548172793bb23e33739743cfb3e7b6bd8642?placeholderIfAbsent=true&apiKey=d7ab3de0d8774583bf6046e5db36c00c"
            alt="Nike B-MAX 90 Shoe"
            css={imageStyles}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotateY: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
