import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import styles from "./CartWidget.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: +4,
    top: -2,
  },
}));

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className={styles.cartContainer}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={100} max={99} color="error">
            <ShoppingCartIcon className={styles.cart} />
          </StyledBadge>
        </IconButton>
      </div>
    </Link>
  );
};

export default CartWidget;
