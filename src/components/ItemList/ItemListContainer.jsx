import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productsFiltered : products);
      }, 1000);
    });

    task.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          marginTop: "10rem",
        }}
      >
        <PacmanLoader color="#000" size={40} />
      </div>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
