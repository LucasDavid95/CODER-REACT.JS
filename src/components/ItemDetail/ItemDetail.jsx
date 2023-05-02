import React from "react";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ItemDetail = ({ product }) => {
  return (
    <div className={styles.containerItemdetail}>
      <img
        className={styles.itemDetailimg}
        src={product.img}
        alt="product detail"
      ></img>
      <h1 className={styles.itemDetailtitle}>{product.title}</h1>
      <h2 className={styles.itemDetailprice}>{product.price}</h2>
      <Link to="/">
        <Button variant="contained">Return</Button>
      </Link>
    </div>
  );
};

export default ItemDetail;
