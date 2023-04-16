import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ marginBottom: "40px", width: 300, height: 600 }}>
      <CardMedia sx={{ height: 400 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="h5" color="primary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "relative", height: 100 }}>
        <Button variant="contained" size="small">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
