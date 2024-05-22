// src/pages/CheckoutPage.js
import React, { useContext } from "react";
import Checkout from "../components/Checkout";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = (formData) => {
    console.log("Order Details:", formData);
    console.log("Cart Items:", cart);

    // You can add API call to process the order here
    // e.g., axios.post('/api/order', { ...formData, items: cart })

    alert("Order placed successfully!");

    // Clear the cart after successful checkout
    clearCart();
  };

  return (
    <>
      <Container className="my-4">
        <Row>
          <h2>Checkout</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <Checkout onCheckout={handleCheckout} />
          )}
        </Row>
      </Container>
    </>
  );
};

export default CheckoutPage;
