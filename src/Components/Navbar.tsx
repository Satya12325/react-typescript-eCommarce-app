import * as React from 'react';
import "./Navbar.css";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';




const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  interface props {
    cartvelue: number;
  }

const Navbar:React.FC<props> = ({cartvelue}) => {
  return (
    <div className="navbar">
        <div className="navbar-icons">
            <div className="navbar-menu">
                <DehazeIcon/>
            </div>

            <div>
            <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartvelue} color="secondary">
        <ShoppingCartIcon  className="navbar-menu"/>
      </StyledBadge>
    </IconButton>
            </div>
        </div>
    </div>
  );
}

export default Navbar;