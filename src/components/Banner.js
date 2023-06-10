import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, } from 'react-router-dom';
import BannerImg from './../assets/images/shopping-banner.jpg';

const Banner = ({bannerHeading}) => {
    const {name} = bannerHeading
  return (
    <div className="banner py-5 text-align-left">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={6} xs={12} >
            <div className="banner-content py-5">
            <h6>Welcome to</h6>
            <h1 className="mb-3">{name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <Button variant="primary"><Link to="/products"> Shop Now </Link></Button>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <div className="banner-img">
            <img src={BannerImg} alt="React Logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
