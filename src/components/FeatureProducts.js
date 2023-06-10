import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProductContext } from "../context/ProductContext";
import Product from "./featureProductItem";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  return (
    <div className="feature-products py-4">
      <h1 className="text-center">Feature Products</h1>
      {isLoading ? (
        <Container>
          <div className="custom-loader-overlay py-5">
            <div className="custom-loader"></div>
          </div>
        </Container>
      ) : (
        <Container>
          <Row>
            {featureProducts.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default FeatureProducts;
