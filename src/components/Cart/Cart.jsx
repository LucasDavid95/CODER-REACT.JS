import React from "react";
import { Button, IconButton } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
const Cart = ({ cart, clearCart, deleteProductById, total }) => {
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

      <Button
        onClick={clearCart}
        style={{ fontSize: "10px", gap: "5px" }}
        variant="contained"
      >
        <h3 style={{ color: "white" }}>Clear Cart</h3>
        <RemoveShoppingCartIcon style={{ color: "white" }} />
      </Button>

      <h1>Total: US${total}</h1>
    </div>
  );
};

export default Cart;
