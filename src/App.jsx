import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage.jsx";
import CheckoutPage from "./components/CheckoutPage";
import Cart from "./components/Cart";
import SingleProduct from "./components/SingleProduct.jsx";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
