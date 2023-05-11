import React from "react";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product, onAdd, totalQuantity }) => {
  return (
    <div className={styles.containerItemdetail}>
      <img
        style={{ width: "23rem", marginTop: "3rem" }}
        src={product.img}
        alt="product detail"
      ></img>
      <h1 style={{ color: "rgba(0, 0, 0, 0.911)" }}>{product.title}</h1>
      <h2 style={{ marginBottom: "2rem", color: "#2196f3" }}>
        US${product.price}
      </h2>
      <div className={{ display: "flex" }}>
        <CounterContainer
          stock={product.stock}
          onAdd={onAdd}
          initial={totalQuantity}
        />
      </div>
      <Link to="/">
        <Button variant="contained">Return</Button>
      </Link>
    </div>
  );
};

export default ItemDetail;
