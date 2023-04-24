import React from "react";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {
  return (
    <div className={styles.containerItemdetail}>
      <img className={styles.itemDetailimg} src={product.img}></img>
      <h1 className={styles.itemDetailtitle}>{product.title}</h1>
      <h2 className={styles.itemDetailprice}>{product.price}</h2>
    </div>
  );
};

export default ItemDetail;
