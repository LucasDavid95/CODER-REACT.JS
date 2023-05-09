import { Button } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const CounterPresentation = ({ substract, add, counter, onAdd }) => {
  return (
    <div
      style={{
        marginBottom: "2rem",
        display: "flex",
        marginLeft: "4rem",
        gap: "1rem",
      }}
    >
      <IconButton
        style={{ fontSize: "30px" }}
        variant="contained"
        color="error"
        onClick={substract}
      >
        <RemoveCircleIcon style={{ fontSize: "3rem" }} />
      </IconButton>
      <h2>{counter}</h2>
      <IconButton variant="contained" color="success" onClick={add}>
        <AddBoxIcon style={{ fontSize: "3rem" }} />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={() => onAdd(counter)}
      >
        <AddShoppingCartIcon style={{ fontSize: "30px" }} />
      </IconButton>
    </div>
  );
};

export default CounterPresentation;
