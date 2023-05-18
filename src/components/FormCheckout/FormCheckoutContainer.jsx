import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );
    clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: null,
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("This field is mandatory.")
        .min(4, "The name must have at least 3 characters."),
      email: Yup.string()
        .email("This field must be an email.")
        .required("This field is mandatory."),
      phone: Yup.number().required("This field is mandatory."),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ height: "100vh", border: "2px solid black" }}>
      {orderId ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10rem",
          }}
        >
          Thanks for your purchase, your order number is: {orderId}
        </h1>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
