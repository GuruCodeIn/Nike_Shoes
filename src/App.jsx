import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

// Pages
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Cart from "./pages/Cart";
import Billing from "./pages/Billing";

// Components
import ProtectedRoute from "./components/ProtectedRoute";
import CartSidebar from "./components/CartSidebar";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/billing"
                element={
                  <ProtectedRoute>
                    <Billing />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <CartSidebar />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: "#363636",
                  color: "#fff",
                  borderRadius: "12px",
                  fontFamily:
                    "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
                },
              }}
            />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
