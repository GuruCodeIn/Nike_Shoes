/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Star } from "lucide-react";
import Header from "../components/Header";
import { useCart } from "../contexts/CartContext";

function Collection() {
  const [filter, setFilter] = useState("all");
  const { addToCart } = useCart();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const pageStyles = {
    backgroundColor: "rgb(99, 79, 79)",
    minHeight: "100vh",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 auto",
  };

  const contentStyles = {
    padding: "40px 20px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
  };

  const titleStyles = {
    fontSize: "45px",
    fontWeight: "900",
    color: "#D9E0E5",
    marginBottom: "30px",
    textAlign: "center",
    "@media (max-width: 991px)": {
      fontSize: "35px",
    },
  };

  const collectionGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  };

  const productItemStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "0",
    textAlign: "left",
    color: "#232526",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    },
  };

  const productImageContainerStyles = {
    position: "relative",
    height: "250px",
    backgroundColor: "#f8f8f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const productImageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };

  const badgeStyles = {
    position: "absolute",
    top: "15px",
    left: "15px",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase",
  };

  const newBadgeStyles = {
    ...badgeStyles,
    backgroundColor: "#10b981",
    color: "#fff",
  };

  const bestsellerBadgeStyles = {
    ...badgeStyles,
    backgroundColor: "#f59e0b",
    color: "#fff",
  };

  const heartButtonStyles = {
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#fff",
      transform: "scale(1.1)",
    },
  };

  const productInfoStyles = {
    padding: "20px",
  };

  const productNameStyles = {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#232526",
  };

  const ratingStyles = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginBottom: "10px",
  };

  const productPriceStyles = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#232526",
    marginBottom: "15px",
  };

  const addToCartButtonStyles = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#232526",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1a1d1e",
      transform: "translateY(-1px)",
    },
  };

  const products = [
    {
      id: 1,
      name: "Nike B-MAX 90",
      price: 99,
      category: "lifestyle",
      rating: 4.8,
      image:
        "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?ga=GA1.1.1796637791.1737215672&semt=ais_hybrid&w=740",
      isNew: true,
      isBestseller: false,
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      price: 110,
      category: "lifestyle",
      rating: 4.9,
      image:
        "https://img.freepik.com/free-photo/one-black-sneaker-shoe-isolated-white_93675-131266.jpg?ga=GA1.1.1796637791.1737215672&semt=ais_hybrid&w=740",
      isNew: false,
      isBestseller: true,
    },
    {
      id: 3,
      name: "Nike React Element",
      price: 130,
      category: "running",
      rating: 4.6,
      image:
        "https://img.freepik.com/premium-photo/jordana-sports-shoes-black-white-isolate_288990-256.jpg?ga=GA1.1.1796637791.1737215672&semt=ais_hybrid&w=740",
      isNew: true,
      isBestseller: false,
    },
    {
      id: 4,
      name: "Nike Zoom Pegasus",
      price: 120,
      category: "running",
      rating: 4.7,
      image:
        "https://img.freepik.com/premium-photo/shoes-white-background_192247-124.jpg?ga=GA1.1.1796637791.1737215672&semt=ais_hybrid&w=740",
      isNew: false,
      isBestseller: true,
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      price: 150,
      category: "lifestyle",
      rating: 4.5,
      image:
        "https://img.freepik.com/premium-photo/trendy-sports-shoes-with-black-yellow-color-gradient-isolated-white-background_543278-1284.jpg?ga=GA1.1.1796637791.1737215672&semt=ais_hybrid&w=740",
      isNew: false,
      isBestseller: false,
    },
    {
      id: 6,
      name: "Nike Blazer Mid",
      price: 100,
      category: "basketball",
      rating: 4.4,
      image:
        "https://img.freepik.com/premium-photo/women-s-rubber-shoes_78621-3294.jpg?ga=GA1.1.1796637791.1737215672&semt=ais_hybrid&w=740",
      isNew: false,
      isBestseller: false,
    },
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const filterStyles = {
    display: "flex",
    gap: "15px",
    marginBottom: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const filterButtonStyles = (isActive) => ({
    padding: "10px 20px",
    borderRadius: "25px",
    border: `2px solid ${isActive ? "#232526" : "#e1e1e1"}`,
    backgroundColor: isActive ? "#232526" : "transparent",
    color: isActive ? "#fff" : "#232526",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "capitalize",
    "&:hover": {
      borderColor: "#232526",
      backgroundColor: isActive ? "#232526" : "rgba(35, 37, 38, 0.1)",
    },
  });

  const handleAddToCart = (product) => {
    addToCart(product, "10"); // Default size
  };

  return (
    <div css={pageStyles}>
      <Header />
      <motion.div
        css={contentStyles}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          css={titleStyles}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          OUR COLLECTION
        </motion.h1>

        <motion.div
          css={filterStyles}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {["all", "lifestyle", "running", "basketball"].map((category) => (
            <motion.button
              key={category}
              css={filterButtonStyles(filter === category)}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all" ? "All Products" : category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          css={collectionGridStyles}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              css={productItemStyles}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div css={productImageContainerStyles}>
                <motion.img
                  src={product.image}
                  alt={product.name}
                  css={productImageStyles}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />

                {product.isNew && (
                  <motion.span
                    css={newBadgeStyles}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    New
                  </motion.span>
                )}

                {product.isBestseller && (
                  <motion.span
                    css={bestsellerBadgeStyles}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    Bestseller
                  </motion.span>
                )}

                <motion.button
                  css={heartButtonStyles}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={18} />
                </motion.button>
              </div>

              <div css={productInfoStyles}>
                <h3 css={productNameStyles}>{product.name}</h3>

                <div css={ratingStyles}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={
                        i < Math.floor(product.rating)
                          ? "#fbbf24"
                          : "transparent"
                      }
                      color="#fbbf24"
                    />
                  ))}
                  <span
                    css={{ fontSize: "14px", color: "#666", marginLeft: "5px" }}
                  >
                    {product.rating}
                  </span>
                </div>

                <div css={productPriceStyles}>${product.price}</div>

                <motion.button
                  css={addToCartButtonStyles}
                  onClick={() => handleAddToCart(product)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Collection;
