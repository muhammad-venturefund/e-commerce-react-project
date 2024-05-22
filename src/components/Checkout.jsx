// src/components/Checkout.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Checkout = () => {
  const { cart, calculateTotal, clearCart } = useContext(CartContext);

  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log("Checkout successful");
    clearCart();
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="mb-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}>Total</td>{" "}
                <td>${calculateTotal().toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
      <Row>
        <Col md={5}>
          <form onSubmit={handleCheckout}>
            <h3>Personal Detail</h3>
            <div className="form-group mb-3">
              <label>Name:</label>
              <input className="form-control" type="text" required />
            </div>
            <div className="form-group mb-3">
              <label>Address:</label>
              <input className="form-control" type="text" required />
            </div>
            <div className="form-group mb-3">
              <label>City:</label>
              <input className="form-control" type="text" required />
            </div>
            <div className="form-group mb-3">
              <label>State:</label>
              <input className="form-control" type="text" required />
            </div>
            <div className="form-group mb-3">
              <label>Zip Code:</label>
              <input className="form-control" type="text" required />
            </div>
            <div className="form-group mb-3">
              <label>Credit Card:</label>
              <input className="form-control" type="text" required />
            </div>
            <Button type="submit">Place Order</Button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
