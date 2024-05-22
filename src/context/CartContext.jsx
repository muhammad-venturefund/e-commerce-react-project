// src/context/CartContext.js
import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                const updatedCart = state.cart.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
                return { ...state, cart: updatedCart };
            }
            return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case 'CLEAR_CART':
            return { ...state, cart: [] };
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
                ),
            };
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { cart: [] });

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const increaseQuantity = (id) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: id });
    };

    const decreaseQuantity = (id) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: id });
    };

    const calculateTotal = () => {
        return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
