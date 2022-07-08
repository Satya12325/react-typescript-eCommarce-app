import { CartItemTypes } from "../App";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// import { Wrapper} from './items.styles';
import "./Card.css"
type Props = {
  items: CartItemTypes;
  handleAddToCart: (clickedItem: CartItemTypes) => void;
};
const Cards: React.FC<Props> = ({ items, handleAddToCart }) => {
  return <Card sx={{ maxWidth: 345,margin:"10px" }}>
      <CardMedia
        component="img"
        height="140"
        image={items.image}
        alt={items.title}
      />
      <CardContent>
        <Typography className="text-overflow" gutterBottom variant="h5" component="div">
        {items.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
        {items.description}
        </Typography> */}
        <Typography gutterBottom variant="h5" component="div">
        ${items.price}
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button variant="contained" sx={{width:'100%'}} onClick={()=> handleAddToCart(items)}>Add to Cart</Button>
      </CardActions>
    </Card>
  
};

export default Cards;
