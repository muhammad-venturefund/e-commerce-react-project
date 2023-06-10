import React, {useState} from "react";
import { MdCheck } from "react-icons/md";
import CartAmount from "./CartAmount";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setIncrease = () => {
amount < stock ? setAmount(amount + 1) : setAmount(amount)
  }

  const setDecrease = () => {
    amount > 1 ? setAmount(amount -1) : setAmount(1)
  }
  return (
    <div className="add-to-cart">
      <div className="color-container d-flex align-items-center">
        <strong className="me-1">Color: </strong>
        {colors.map((color, index) => (
          <span onClick={ ()=> setActiveColor(color)} key={index} style={{ background: color }} className={activeColor  === color ? "color-box active-color" : "color-box"}>
            {
                color === activeColor ? <MdCheck />: null
            }
          </span>
        ))}
      </div>

      <CartAmount amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />

      <Link to="/cart"><Button variant="success" className="mt-2">Add To Cart</Button></Link>
    </div>
  );
};

export default AddToCart;
