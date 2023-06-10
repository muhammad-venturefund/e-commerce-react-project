import React from "react";
import { Col } from "react-bootstrap";
import { Link  } from "react-router-dom";
import FormatPrice from "./helpers/FormatPrice";

const Product = (item) => {
  const { id, image, company, name, price } = item;
  return (
    <>
      <Col lg={4} md={4} sm={4} xs={12} className="mb-3">
        <Link to={`/singleproduct/${id}`} className="product-link">
          <div className="feature-product">
            <img className="img-fluid" src={image} alt="img" />
            <div className="w-full d-flex align-items-center justify-space-between">
              <h4>{company} </h4>
              <h5>{name} </h5>
            </div>
            <h6><FormatPrice price={price}/></h6>
          </div>
        </Link>
      </Col>
    </>
  );
};

export default Product;
