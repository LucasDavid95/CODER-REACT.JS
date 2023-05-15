import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (quantity) => {
    let data = {
      ...product,
      quantity: quantity,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added successfully",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  let totalQuantity = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        totalQuantity={totalQuantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
