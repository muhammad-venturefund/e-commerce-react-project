// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, products]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Row>
        <Col md={12}>
          <input
          className="form-control mb-3"
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </Col>

        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Row>
    </div>
  );
};

export default ProductList;
