import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link, } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer mt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                        <h4 className="text-capitalize">our Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Our Services</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                        <h4 className="text-capitalize">our Address</h4>
                        <div className="address d-flex flex-wrap">
                            {/* <span className="footer-icon me-2"><i className="fa-solid fa-location-dot "></i></span> */}
                            <p>302, Sushma Infinum, Zirakpur, Mohali, Punjab - INDIA</p>
                        </div>
                        <div className="address d-flex flex-wrap">
                            {/* <span className="footer-icon me-2"><i className="fa-solid fa-phone"></i></span> */}
                            <p>(+91) 1762430331</p>
                        </div>
                        <div className="address d-flex flex-wrap">
                            {/* <span className="footer-icon me-2"><i className="fa-solid fa-envelope"></i></span> */}
                            <p>info@advizuru.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                        <h4 className="text-capitalize">Follow Us on</h4>
                        <div className="footer-social-icons d-flex flex-wrap">
                        <Link to="https://www.facebook.com/" className="social-icon me-2"><FaFacebookF /> </Link>
                        <Link to="https://twitter.com/" className="social-icon me-2"><FaTwitter /></Link>
                        <Link to="https://www.linkedin.com/" className="social-icon me-2"><FaLinkedinIn /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                        <h4 className="text-capitalize">Other Links</h4>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <p className="text-center">All rights reserved © 2022 
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer