// src/components/Product.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  console.log("Product page", product);
  return (
    <Col md={4} className="mb-4">
      <Card className="product-card">
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.company}</Card.Text>
          <p className="mb-3">${product.price}</p>
          <div className="d-flex align-items-center mb-3">
                <span className="me-2">Rating:</span>{" "}
                <StarRatings
                  rating={product.rating.rate}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="2px"
                />{" "}
                ({product.rating.count} reviews)
              </div>
          <Button
            variant="success"
            onClick={() => addToCart(product)}
            className="me-2"
          >
            Add to Cart
          </Button>
          <Link className="btn btn-primary" to={`/product/${product.id}`}>
            View Details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
