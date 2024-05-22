// src/pages/ProductPage.js
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import StarRatings from "react-star-ratings";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  console.log("Single Product Page", product);

  return product ? (
    <Container className="my-4">
      <Row>
        <Col md={12}>
          <div className="d-flex single-product">
            <div className="product-imgbox me-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p><strong>Category:</strong> {product.category}</p>
              <p>{product.description}</p>
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

              <p>
                <strong>Stock:</strong>{" "}
                {product.stock > 0 ? (
                  <span>Avaialble</span>
                ) : (
                  <span>Not Availabel</span>
                )}
              </p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <Button
                variant="success"
                onClick={() => addToCart(product)}
                className="me-2"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <p>Loading...</p>
    </Container>
  );
};

export default SingleProduct;
