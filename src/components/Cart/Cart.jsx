import React from "react";
import { Button, IconButton } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Link } from "react-router-dom";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  navigate,
}) => {
  return (
    <div style={{ height: "100vh" }}>
      {cart.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <h3>{product.title}</h3>
            <h4>US${product.price}</h4>
            <h4>{product.quantity}</h4>
            <IconButton
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              <DisabledByDefaultIcon
                style={{ fontSize: "2rem" }}
                variant="contained"
                color="error"
              />
            </IconButton>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <div style={{ display: "flex", gap: "20px", marginTop: "1rem" }}>
          <Button
            style={{ fontSize: "10px", gap: "5px" }}
            variant="contained"
            color="success"
            onClick={() => navigate("/checkout")}
          >
            <h3 style={{ color: "white" }}>Proceed to Checkout</h3>
            <ShoppingCartCheckoutIcon style={{ color: "white" }} />
          </Button>

          <Button
            onClick={clearCartWithAlert}
            style={{ fontSize: "10px", gap: "5px" }}
            variant="contained"
            color="error"
          >
            <h3 style={{ color: "white" }}>Clear Cart</h3>
            <RemoveShoppingCartIcon style={{ color: "white" }} />
          </Button>

          <Link to="/">
            <Button
              style={{ fontSize: "10px", gap: "5px" }}
              variant="contained"
            >
              <h3 style={{ color: "white" }}>Continue Shopping</h3>
              <AddShoppingCartIcon style={{ color: "white" }} />
            </Button>
          </Link>
        </div>
      ) : (
        <Link to="/">
          <Button style={{ fontSize: "10px", gap: "5px" }} variant="contained">
            <h3 style={{ color: "white" }}>Add Items to Cart</h3>
            <AddShoppingCartIcon style={{ color: "white" }} />
          </Button>
        </Link>
      )}

      <h1>Total: US${total}</h1>
    </div>
  );
};

export default Cart;
