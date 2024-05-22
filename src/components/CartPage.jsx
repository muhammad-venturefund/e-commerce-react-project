import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cart, dispatch } = useContext(CartContext);

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', product });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map(product => (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                            <div className='d-flex'>
                            <button onClick={() => removeFromCart(product)}>Remove</button>
                            <Link to="/checkout">
                        <button>Proceed to Checkout</button>
                    </Link>
                            </div>
                            
                        </div>
                    ))}
                       

                    <button onClick={clearCart}>Clear Cart</button>
                
                </div>
            )}
        </div>
    );
};

export default CartPage;
