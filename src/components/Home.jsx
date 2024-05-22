// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/ProductList';
import Container from "react-bootstrap/Container";

const HomePage = () => {
    return (
        <Container className='my-4'>
            <h1>All product</h1>
            <ProductList />
        </Container>
    );
};

export default HomePage;
