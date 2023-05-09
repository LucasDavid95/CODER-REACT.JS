import React from "react";
import styles from "./Cart.module.css";

const Cart = ({ cart }) => {
  return (
    <div className={styles.containerCart}>
      {cart.map((e) => (
        <h1>{e?.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
