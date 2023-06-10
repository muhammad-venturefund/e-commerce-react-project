import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FilterProduct from "../FilterProduct";
import { useFilterContext } from "../../context/filterContext";
import { useProductContext } from "../../context/ProductContext";
import ProductList from "../ProductList";
import { MdDashboard, MdList } from "react-icons/md";
import Form from "react-bootstrap/Form";

const Products = () => {
  const { filter_products, sorting } = useFilterContext();
  const { isLoading } = useProductContext();
  const [active, setActive] = useState(false);
  return (
    <div className="product-page py-4">
      <Container>
        <Row>
          <Col lg={3} md={3} sm={12} xs={12}>
            <FilterProduct />
          </Col>
          <Col lg={9} md={9} sm={12} xs={12}>
            <div className="product-list-panel">
              <div className="product-header-sort d-flex justify-content-between align-items-center mb-4">
                <div className="product-header-option">
                  <Button
                    variant="light"
                    className="product-btn me-2"
                    onClick={() => setActive(false)}
                  >
                    <MdDashboard />
                  </Button>
                  <Button
                    variant="light"
                    className="product-btn"
                    onClick={() => setActive(true)}
                  >
                    <MdList />
                  </Button>
                </div>
                <div className="product-count">
                  <h6>{filter_products.length} Total Products</h6>
                </div>

                <div className="product-count">
                  <Form.Select aria-label="Default select example" name="sort" onClick={sorting} id="sort">
                    <option value="lowest">Price: (lowest)</option>
                    <option value="highest">Price: (highest)</option>
                    <option value="a-z">Product: (a-z)</option>
                    <option value="z-a">Product: (z-a)</option>
                  </Form.Select>
                </div>
              </div>
              <Row className={active ? "grid-view" : "list-view"}>
                {isLoading ? (
                  <div className="custom-loader-overlay py-5">
                    <div className="custom-loader"></div>
                  </div>
                ) : (
                  <>
                    {filter_products.map((product) => (
                      <ProductList key={product.id} {...product} />
                    ))}
                  </>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
