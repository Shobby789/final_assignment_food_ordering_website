import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ItemCard({
  _id,
  itemName,
  itemImage,
  itemDescription,
  itemPrice,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* {items.map((item) => {
        return ( */}
      <Card sx={{ maxWidth: 300, margin: "30px" }} key={_id} id={_id}>
        <CardMedia
          sx={{ height: 140, width: 300 }}
          image={itemImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDescription}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "5px" }}
          >
            {itemPrice}.00
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => navigate(`/Home/getItemDetail/${_id}`)}
          >
            View Details
          </Button>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() =>
              dispatch(
                addToCart({
                  _id,
                  itemName,
                  itemImage,
                  itemPrice,
                  itemDescription,
                })
              )
            }
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

// onClick={() =>
//   dispatch(
//     addToCart({
//       _id,
//       itemName,
//       itemImage,
//       itemPrice,
//       itemDescription,
//     })
//   )
// }
