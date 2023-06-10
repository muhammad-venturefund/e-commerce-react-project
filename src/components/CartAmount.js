import React from 'react'
import Button from 'react-bootstrap/Button';

const CartAmount = ({amount, setIncrease, setDecrease}) => {
  return (
    <div className='d-flex align-items-center mt-2'>
        <Button variant="primary" onClick={setDecrease}>-</Button>
<span className='cart-quantity'>{amount}</span>
        <Button variant="primary" onClick={setIncrease}>+</Button>
    </div>
  )
}

export default CartAmount