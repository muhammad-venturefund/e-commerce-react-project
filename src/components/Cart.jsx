// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  console.log("Cart page", cart);
  return (
    <div>
      <Container className="my-4">
        <h2>Your Cart</h2>
        <Row>
          <Col>
            {cart.length > 0 ? (
              <>
                {" "}
                {cart.map((item) => (
                  <Col key={item.id} className="d-flex mb-3">
                    <div className="product-small-image me-4">
                      <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <div className="product-small-content">
                      <h5>{item.title}</h5>
                      <p>
                        <strong>Category:</strong> {item.category}
                      </p>
                      <p>{item.description}</p>
                      <p>
                        <strong>Price:</strong> ${item.price}
                      </p>
                      <p>Quantity: {item.quantity}</p>
                      <Button className="me-2" onClick={() => increaseQuantity(item.id)}>
                        +
                      </Button>
                      <Button className="me-2" onClick={() => decreaseQuantity(item.id)}>
                        -
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => removeFromCart(item.id)}
                        className="me-2"
                      >
                        Remove Item
                      </Button>
                    </div>
                  </Col>
                ))}
                {cart.length > 0 && (
                  <div className="d-flex">
                    <Button
                      variant="danger"
                      onClick={clearCart}
                      className="me-2"
                    >
                      Clear Cart
                    </Button>
                    <Link to="/checkout">
                      <Button variant="warning">Proceed to Checkout</Button>
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div>Your Cart is empty</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
