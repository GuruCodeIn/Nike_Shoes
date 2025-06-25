/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, User, Calendar } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register: registerUser, loading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

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
    maxWidth: "450px",
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

  const checkboxContainerStyles = {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "20px",
  };

  const checkboxStyles = {
    marginTop: "2px",
  };

  const checkboxLabelStyles = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.4",
  };

  const onSubmit = async (data) => {
    const { confirmPassword, agreeToTerms, ...userData } = data;
    const result = await registerUser(userData);
    if (result.success) {
      navigate("/");
    }
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
            Join Nike
          </motion.h1>
          <motion.p
            css={subtitleStyles}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Create your Nike Member profile
          </motion.p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div
              css={inputGroupStyles}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <User size={20} css={iconStyles} />
              <input
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                type="text"
                placeholder="Full Name"
                css={inputStyles}
              />
              {errors.name && (
                <div css={errorStyles}>{errors.name.message}</div>
              )}
            </motion.div>

            <motion.div
              css={inputGroupStyles}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Calendar size={20} css={iconStyles} />
              <input
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                })}
                type="date"
                placeholder="Date of Birth"
                css={inputStyles}
              />
              {errors.dateOfBirth && (
                <div css={errorStyles}>{errors.dateOfBirth.message}</div>
              )}
            </motion.div>

            <motion.div
              css={inputGroupStyles}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Lock size={20} css={iconStyles} />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message:
                      "Password must contain uppercase, lowercase and number",
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

            <motion.div
              css={inputGroupStyles}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Lock size={20} css={iconStyles} />
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                css={inputStyles}
              />
              <button
                type="button"
                css={passwordToggleStyles}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.confirmPassword && (
                <div css={errorStyles}>{errors.confirmPassword.message}</div>
              )}
            </motion.div>

            <motion.div
              css={checkboxContainerStyles}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <input
                {...register("agreeToTerms", {
                  required: "You must agree to the terms and conditions",
                })}
                type="checkbox"
                css={checkboxStyles}
              />
              <label css={checkboxLabelStyles}>
                I agree to Nike's{" "}
                <Link to="/privacy" css={linkStyles}>
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" css={linkStyles}>
                  Terms of Use
                </Link>
              </label>
            </motion.div>
            {errors.agreeToTerms && (
              <div css={errorStyles}>{errors.agreeToTerms.message}</div>
            )}

            <motion.button
              type="submit"
              css={buttonStyles}
              disabled={loading}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </motion.button>
          </form>

          <motion.div
            css={{ textAlign: "center", marginTop: "30px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p css={{ color: "#666" }}>
              Already have an account?{" "}
              <Link to="/login" css={linkStyles}>
                Sign in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Register;
