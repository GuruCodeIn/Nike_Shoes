/** @jsxImportSource @emotion/react */
import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on app initialization
    const storedUser = localStorage.getItem("nike_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);

      // Simulate API call - replace with real authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data - replace with actual API response
      const userData = {
        id: "1",
        email,
        name: email.split("@")[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinDate: new Date().toISOString(),
        preferences: {
          shoeSize: "10",
          favoriteCategory: "running",
        },
      };

      setUser(userData);
      localStorage.setItem("nike_user", JSON.stringify(userData));
      toast.success("Welcome back!");

      return { success: true };
    } catch (error) {
      toast.error("Login failed. Please try again.");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const newUser = {
        id: Date.now().toString(),
        ...userData,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`,
        joinDate: new Date().toISOString(),
        preferences: {
          shoeSize: "10",
          favoriteCategory: "lifestyle",
        },
      };

      setUser(newUser);
      localStorage.setItem("nike_user", JSON.stringify(newUser));
      toast.success("Account created successfully!");

      return { success: true };
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("nike_user");
    toast.success("Logged out successfully");
  };

  const updateProfile = async (updates) => {
    try {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem("nike_user", JSON.stringify(updatedUser));
      toast.success("Profile updated successfully");
      return { success: true };
    } catch (error) {
      toast.error("Failed to update profile");
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
