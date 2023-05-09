import React from "react";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Cart cart={cart} />
    </div>
  );
};

export default CartContainer;
