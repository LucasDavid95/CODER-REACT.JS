import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from "axios";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
