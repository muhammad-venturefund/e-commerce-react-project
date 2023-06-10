import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubcontractImg from './../assets/images/subcontracting-icon.png';
import FreelancingIcon from './../assets/images/freelancing-icon.png';
import ReqruitementIcon from './../assets/images/requirement-icon.png';

const Services = () => {
  return (
    <div className="our-services text-center">
            <Container>
                <h3 className="text-center">Our Services</h3>
                <Row>
                    <Col lg={4} md={4} sm={4} xs={12}>
                        <div className="services-widget d-flex align-items-center flex-wrap">
                            <div className="services-icon-container d-flex align-items-center justify-content-center mx-auto mb-2">
                                <div className="services-icon d-flex align-items-center justify-content-center ">
                                    <img src={SubcontractImg} alt="img" />
                                </div>
                            </div>
                            <div className="services-widget-content flex-1">
                                <h6>Subcontracting</h6>
                                <p>Just bagged a big IT project , but don`t have all the technical resources or the
                                    monetary</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12}>
                        <div className="services-widget d-flex align-items-center flex-wrap">
                            <div className="services-icon-container d-flex align-items-center justify-content-center mx-auto mb-2">
                                <div className="services-icon d-flex align-items-center justify-content-center">
                                <img src={FreelancingIcon} alt="img" />
                                </div>
                            </div>
                            <div className="services-widget-content flex-1">
                                <h6>Freelancing</h6>
                                <p>Showcase your talent and skills.
                                    Let your skills do the talking for your and let us give you</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12}>
                        <div className="services-widget d-flex align-items-center flex-wrap">
                            <div className="services-icon-container d-flex align-items-center justify-content-center mx-auto mb-2">
                                <div className="services-icon d-flex align-items-center justify-content-center">
                                <img src={ReqruitementIcon} alt="img" />
                                </div>
                            </div>
                            <div className="services-widget-content flex-1">
                                <h6>Recruitment</h6>
                                <p>Advizuru offers a Large pool of specially selected, certified and screened
                                    freelancers in </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
  );
};

export default Services;
