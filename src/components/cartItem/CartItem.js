import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import item1 from "../../itemImages/item1.jpeg";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../redux/cartSlice";

export default function CartItem({
  _id,
  itemName,
  itemPrice,
  itemImage,
  quantity = 1,
}) {
  const dispatch = useDispatch();

  return (
    <div>
      <Card
        sx={{
          maxWidth: 1000,
          margin: "10px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
        key={_id}
        id={_id}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removeItem(_id))}
          >
            X
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: "140px", width: "140px" }}
          image={itemImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemName}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>Rs.{itemPrice}</Typography>
        </CardContent>
        <CardActions component="div">
          <Button
            size="small"
            variant="outlined"
            onClick={() => dispatch(decrementQuantity(_id))}
          >
            -
          </Button>
          <Typography style={{ margin: "0 10px" }}>{quantity}</Typography>
          <Button
            size="small"
            variant="outlined"
            onClick={() => dispatch(incrementQuantity(_id))}
          >
            +
          </Button>
        </CardActions>
        <CardContent>
          <Typography>RS.{itemPrice}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
