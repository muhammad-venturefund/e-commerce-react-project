import React from 'react'
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
    Link,
  } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Link to="/" className='ecommerce-logo'>E Commerce App</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Item as="li">
          <Link to="/" className='px-3'> Home </Link>
          </Nav.Item>
          <Nav.Item as="li">
          <Link to="/about" className='px-3'> About </Link>
          </Nav.Item>
          <Nav.Item as="li">
          <Link to="/products" className='px-3'> Products </Link>
          </Nav.Item>
          <Nav.Item as="li">
          <Link to="/contact" className='px-3'> Contact </Link>
          </Nav.Item>
          <Nav.Item as="li">
          <Link to="/cart" className='px-3'> 
        <span className='notification me-4'>
        <AiOutlineShoppingCart />
        <span className='count'>1</span>
        </span>
         </Link>
         </Nav.Item>
         <Nav.Item as="li">
        <Button variant="danger">Logout</Button>
        </Nav.Item>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header