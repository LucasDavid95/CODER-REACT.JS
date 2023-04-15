import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let id = 1;

  useEffect(() => {
    let found = products.find((prod) => prod.id === id);
    setProduct(found);
  }, [id]);

  console.log(product);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
