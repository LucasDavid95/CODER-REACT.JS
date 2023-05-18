import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Hidden,
  IconButton,
  Typography,
} from "@mui/material";
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
    <div
      style={{
        height: "100vh",
      }}
    >
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: 3,
                height: 200,
                gap: 5,
                border: 1,
              }}
            >
              <CardMedia sx={{ width: 150 }} image={item.img} />
              <CardContent sx={{ marginTop: "2rem" }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="h5" color="primary">
                  US${item.price}
                </Typography>
                <IconButton
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  <DisabledByDefaultIcon
                    style={{ fontSize: "2rem" }}
                    variant="contained"
                    color="error"
                  />
                </IconButton>
              </CardContent>
            </Card>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
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
        <Link style={{ display: "flex", justifyContent: "center" }} to="/">
          <Button
            style={{
              fontSize: "10px",
              gap: "5px",
              marginTop: "10rem",
            }}
            variant="contained"
          >
            <h3 style={{ color: "white" }}>Add Items to Cart</h3>
            <AddShoppingCartIcon style={{ color: "white" }} />
          </Button>
        </Link>
      )}
      <h1
        style={{
          color: "rgba(0, 0, 0, 0.911)",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Total: US${total}
      </h1>
    </div>
  );
};

export default Cart;
