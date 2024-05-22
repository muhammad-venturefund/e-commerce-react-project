// src/components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Link to="/">E-Commerce App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link to="/" className="nav-link">Home</Link>
              <Link to="/cart" className="nav-link">Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
