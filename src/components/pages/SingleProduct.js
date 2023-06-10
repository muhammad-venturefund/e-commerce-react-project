import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import { Container, Row, Col } from "react-bootstrap";
import FormatPrice from "../helpers/FormatPrice";
import PageNavigation from "../PageNavigation";
import MyImage from "../MyImage";

import StarRating from "../StarRating";
import AddToCart from "../AddToCart";

const AIPURL = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { isSingleLoading, getSignleProduct, singleProduct } =
    useProductContext();
  let { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    colors,
    image,
    description,
    category,
    stock,
    reviews,
    stars,
  } = singleProduct;
  // console.log(image)
  useEffect(() => {
    getSignleProduct(`${AIPURL}?id=${id}`);
  }, []);
  return (
    <div>
      <div className="page-navigation mb-3">
        <Container>
          <PageNavigation title={name} />
        </Container>
      </div>
      {isSingleLoading ? (
        <Container>
          <div className="custom-loader-overlay py-5">
            <div className="custom-loader"></div>
          </div>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col lg={7} md={7} sm={12} xs={12}>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <MyImage image={image} />
                </Col>
              </Row>
            </Col>
            <Col lg={5} md={5} sm={12} xs={12} key={id}>
              <h2 className="text-capitalize">{name}</h2>
              <h6 className="d-flex align-items-center">
                <span className="me-2">
                  <strong>Rating:</strong>
                  <StarRating stars={stars} reviews={reviews}  />
                </span>
              </h6>
              <h6>
                <strong>MRP:</strong> <FormatPrice price={price} />
              </h6>
              <p>{description}</p>
              <p className="mb-2">
                <strong>Brand:</strong>{" "}
                <span className="text-capitalize">{company}</span>
              </p>
              <p className="mb-2">
                <strong>Available:</strong> {stock}
              </p>
              <p className="mb-2">
                <strong>Device:</strong> {category}
              </p>
              {/* <p className="mb-2">
                <strong>Colors:</strong> {colors}
              </p> */}
              {
                stock > 0 && <AddToCart product={singleProduct} />
              }
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SingleProduct;
