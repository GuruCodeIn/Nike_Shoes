/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pageStyles = {
    backgroundColor: "rgba(173, 170, 170, 1)",
    minHeight: "100vh",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 auto",
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
  };

  const formCardStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    backdropFilter: "blur(10px)",
  };

  const titleStyles = {
    fontSize: "32px",
    fontWeight: "900",
    color: "#232526",
    marginBottom: "10px",
    textAlign: "center",
  };

  const subtitleStyles = {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
    textAlign: "center",
  };

  const inputGroupStyles = {
    position: "relative",
    marginBottom: "20px",
  };

  const inputStyles = {
    width: "100%",
    padding: "15px 15px 15px 45px",
    borderRadius: "12px",
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

  const iconStyles = {
    position: "absolute",
    left: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#666",
    zIndex: 1,
  };

  const passwordToggleStyles = {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "#666",
    cursor: "pointer",
    zIndex: 1,
  };

  const errorStyles = {
    color: "#e74c3c",
    fontSize: "14px",
    marginTop: "5px",
  };

  const buttonStyles = {
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
      transform: "translateY(-2px)",
    },
    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
      transform: "none",
    },
  };

  const linkStyles = {
    color: "#232526",
    textDecoration: "none",
    fontWeight: "600",
    "&:hover": {
      textDecoration: "underline",
    },
  };

  const socialButtonStyles = {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "2px solid #e1e1e1",
    backgroundColor: "#fff",
    color: "#333",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "10px",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#232526",
      transform: "translateY(-1px)",
    },
  };

  const onSubmit = async (data) => {
    const result = await login(data.email, data.password);
    if (result.success) {
      navigate(from, { replace: true });
    }
  };

  const handleSocialLogin = (provider) => {
    // Simulate social login
    console.log(`Login with ${provider}`);
  };

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
          css={formCardStyles}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            css={titleStyles}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Welcome Back
          </motion.h1>
          <motion.p
            css={subtitleStyles}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Sign in to your Nike account
          </motion.p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div
              css={inputGroupStyles}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Mail size={20} css={iconStyles} />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email address"
                css={inputStyles}
              />
              {errors.email && (
                <div css={errorStyles}>{errors.email.message}</div>
              )}
            </motion.div>

            <motion.div
              css={inputGroupStyles}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Lock size={20} css={iconStyles} />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                css={inputStyles}
              />
              <button
                type="button"
                css={passwordToggleStyles}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <div css={errorStyles}>{errors.password.message}</div>
              )}
            </motion.div>

            <motion.button
              type="submit"
              css={buttonStyles}
              disabled={loading}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Signing In..." : "Sign In"}
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            css={{ marginTop: "20px" }}
          >
            <div css={{ textAlign: "center", margin: "20px 0", color: "#666" }}>
              or continue with
            </div>

            <button
              css={socialButtonStyles}
              onClick={() => handleSocialLogin("Google")}
            >
              Continue with Google
            </button>

            <button
              css={socialButtonStyles}
              onClick={() => handleSocialLogin("Apple")}
            >
              Continue with Apple
            </button>
          </motion.div>

          <motion.div
            css={{ textAlign: "center", marginTop: "30px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p css={{ color: "#666", marginBottom: "10px" }}>
              Don't have an account?{" "}
              <Link to="/register" css={linkStyles}>
                Sign up
              </Link>
            </p>
            <Link to="/forgot-password" css={linkStyles}>
              Forgot your password?
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
