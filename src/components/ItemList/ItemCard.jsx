import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ marginBottom: "40px", width: 300, height: 600 }}>
      <CardMedia sx={{ height: 400 }} image={item.img} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="h5" color="primary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "relative", height: 100 }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
