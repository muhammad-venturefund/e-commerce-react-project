import React,{useState} from "react";
import { Row, Col } from "react-bootstrap";

const MyImage = ({ image = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(image[0]);

  return (
    <>
      <Row>
        <Col lg={3} md={3} sm={12} xs={12}>
          {image.map((item, index) => (
            <div className="product-thumbnail mb-2" key={index}>
              <img
                className="img-fluid single-product-thumbnail"
                src={item.url}
                alt={item.filename}
                onClick={() => setMainImage(item)}
              />
            </div>
          ))}
        </Col>

        <Col lg={9} md={9} sm={12} xs={12} className="d-flex align-items-center">
          <div className="main-single-img">
            <img
              className="img-fluid"
              src={mainImage.url}
              alt={mainImage.filename}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MyImage;
