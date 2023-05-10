import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let found = products.find((prod) => prod.id === Number(id));
    setProduct(found);
  }, [id]);

  const onAdd = (quantity) => {
    let data = {
      ...product,
      quantity: quantity,
    };

    addToCart(data);
  };

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
