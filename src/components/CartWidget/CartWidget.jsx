import React from "react";
import styles from "./CartWidget.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <ShoppingCartIcon />
    </div>
  );
};

export default CartWidget;
