import React from "react";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Are you sure you want to clear the cart?.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes, clear cart",
      denyButtonText: `No, don't clear`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cart cleared successfully", "", "success");
      } else if (result.isDenied) {
        Swal.fire("There was no changes", "", "error");
      }
    });
  };

  return (
    <div>
      <Cart
        total={total}
        cart={cart}
        deleteProductById={deleteProductById}
        clearCartWithAlert={clearCartWithAlert}
      />
    </div>
  );
};

export default CartContainer;
