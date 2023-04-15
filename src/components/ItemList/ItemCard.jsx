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
    <Card sx={{ marginBottom: "30px", width: 300, height: 600 }}>
      <CardMedia sx={{ height: 400 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="primary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions style={{ height: 100 }}>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
