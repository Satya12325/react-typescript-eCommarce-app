import React from "react";
import Button from '@mui/material/Button';
import { CartItemTypes } from "../App";
// import { Wrapper} from './items.styles';
import "./Card.css"
type Props = {
  items: CartItemTypes;
  handleAddToCart: (clickedItem: CartItemTypes) => void;
};
const Cards: React.FC<Props> = ({ items, handleAddToCart }) => {
  return <div className="Wrapper">
    <img src={items.image} alt={items.title}/>
    <div>
      <h3>{items.title}</h3>
      <p>{items.description}</p>
      <h3>${items.price}</h3>

    </div>
    <Button onClick={()=> handleAddToCart(items)}>Add to Cart </Button>
  </div>;
};

export default Cards;
