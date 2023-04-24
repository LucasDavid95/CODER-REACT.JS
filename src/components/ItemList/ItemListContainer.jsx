import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );
    const task = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });

    task.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
