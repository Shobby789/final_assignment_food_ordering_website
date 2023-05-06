import { Box } from "@mui/material";
import React from "react";
import "./ItemDetailPage.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function ItemDetailPage() {
  const dispatch = useDispatch();
  return (
    <div className="detailPage">
      <Box sx={{ width: "50%" }}>
        <Card sx={{ width: "100%" }}>
          <CardMedia
            className="image"
            sx={{ height: 440, width: "100%" }}
            image="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
            title="green iguana"
          />
        </Card>
      </Box>
      <Box sx={{ width: "50%" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 2 }}
          >
            Price. 200.00
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => dispatch(addToCart({}))}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Box>
    </div>
  );
}
