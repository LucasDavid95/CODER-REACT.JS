import React from "react";
import styles from "./CartWidget.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <ShoppingCartIcon />
      <span className={styles.cartSpan}>0</span>
    </div>
  );
};

export default CartWidget;
