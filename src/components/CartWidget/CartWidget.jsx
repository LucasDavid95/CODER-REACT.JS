import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: +4,
    top: -2,
  },
}));

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div style={{ color: "white", marginRight: "3rem" }}>
        <IconButton aria-label="cart">
          <StyledBadge
            style={{ width: "30px" }}
            badgeContent={total}
            color="error"
          >
            <ShoppingCartIcon
              style={{ color: "white", position: "relative" }}
            />
          </StyledBadge>
        </IconButton>
      </div>
    </Link>
  );
};

export default CartWidget;
