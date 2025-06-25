/** @jsxImportSource @emotion/react */
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, User, Heart, Search } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { getCartItemsCount, toggleCart } = useCart();

  const headerStyles = {
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    gap: "23px",
    flexWrap: "wrap",
    "@media (max-width: 991px)": {
      maxWidth: "100%",
    },
  };

  const logoContainerStyles = {
    backgroundColor: "rgba(78, 82, 84, 1)",
    paddingLeft: "13px",
    paddingRight: "13px",
    paddingTop: "14px",
    paddingBottom: "14px",
    display: "flex",
    alignItems: "center",
  };

  const logoStyles = {
    aspectRatio: "2.06",
    objectFit: "contain",
    objectPosition: "center",
    width: "37px",
  };

  const navContainerStyles = {
    alignSelf: "start",
    display: "flex",
    marginTop: "14px",
    flexDirection: "column",
    alignItems: "stretch",
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "0",
    width: "fit-content",
    "@media (max-width: 991px)": {
      maxWidth: "100%",
    },
  };

  const navStyles = {
    alignSelf: "center",
    display: "flex",
    width: "431px",
    maxWidth: "100%",
    alignItems: "stretch",
    gap: "20px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "15px",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "700",
    whiteSpace: "nowrap",
    justifyContent: "space-between",
    "@media (max-width: 991px)": {
      whiteSpace: "initial",
    },
  };

  const linkStyles = {
    color: "rgba(255, 255, 255, 1)",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.8,
    },
  };

  const userMenuStyles = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginLeft: "auto",
  };

  const iconButtonStyles = {
    position: "relative",
    padding: "8px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  const badgeStyles = {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    fontSize: "12px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const userDropdownStyles = {
    position: "relative",
    display: "inline-block",
  };

  const dropdownContentStyles = {
    position: "absolute",
    top: "100%",
    right: "0",
    backgroundColor: "#fff",
    minWidth: "200px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    padding: "10px 0",
    zIndex: 1000,
    marginTop: "10px",
  };

  const dropdownItemStyles = {
    display: "block",
    width: "100%",
    padding: "12px 20px",
    color: "#333",
    textDecoration: "none",
    fontSize: "14px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  };

  return (
    <motion.header
      css={headerStyles}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        css={logoContainerStyles}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db30a634885c84acc147b07b2dc2825fbc590045?placeholderIfAbsent=true&apiKey=d7ab3de0d8774583bf6046e5db36c00c"
          alt="Nike Logo"
          css={logoStyles}
        />
      </motion.div>

      <div css={navContainerStyles}>
        <nav css={navStyles}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" css={linkStyles}>
              HOME
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/collection" css={linkStyles}>
              COLLECTION
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/about" css={linkStyles}>
              ABOUT
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/contact" css={linkStyles}>
              CONTACT
            </Link>
          </motion.div>
        </nav>

        <div css={userMenuStyles}>
          <motion.button
            css={iconButtonStyles}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search size={20} />
          </motion.button>

          <motion.button
            css={iconButtonStyles}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart size={20} />
          </motion.button>

          <motion.button
            css={iconButtonStyles}
            onClick={toggleCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingBag size={20} />
            {getCartItemsCount() > 0 && (
              <motion.span
                css={badgeStyles}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {getCartItemsCount()}
              </motion.span>
            )}
          </motion.button>

          {user ? (
            <div css={userDropdownStyles}>
              <motion.button
                css={iconButtonStyles}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <User size={20} />
              </motion.button>
              <div css={dropdownContentStyles}>
                <Link to="/profile" css={dropdownItemStyles}>
                  Profile
                </Link>
                <Link to="/cart" css={dropdownItemStyles}>
                  Cart
                </Link>
                <button css={dropdownItemStyles} onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/login" css={linkStyles}>
                LOGIN
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
