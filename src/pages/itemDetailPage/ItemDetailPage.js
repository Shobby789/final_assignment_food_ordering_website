import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ItemDetailPage.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function ItemDetailPage() {
  const params = useParams();
  // console.log("ID: ", params);
  const [itemDetail, setItemDetail] = useState();
  const [itemPrice, setItemPrice] = useState(null);
  const [itemDesc, setItemDesc] = useState("");
  const [itemImg, setItemImg] = useState("");
  // console.log("itemName: ", itemDetail);
  // console.log("itemDesc: ", itemDesc);
  // console.log("itemPrice: ", itemPrice);

  const dispatch = useDispatch();
  const getSingleItem = async () => {
    let response = await fetch(
      `http://localhost:8000/api/getItemDetail/${params.id}`,
      {
        method: "GET",
      }
    );
    response = await response.json();
    console.log("response : ", response);
    setItemDetail(response.data.itemName);
    setItemDesc(response.data.itemDescription);
    setItemPrice(response.data.itemPrice);
    setItemImg(response.data.itemImage);
  };

  useEffect(() => {
    getSingleItem();
  }, []);
  return (
    <div className="detailPage">
      <Box sx={{ width: "50%" }}>
        <Card sx={{ width: "100%" }}>
          <CardMedia
            className="image"
            sx={{ height: 440, width: "100%" }}
            image={itemImg}
            title="green iguana"
          />
        </Card>
      </Box>
      <Box sx={{ width: "50%" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemDetail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDesc}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 2 }}
          >
            Price. {itemPrice}.00
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => dispatch(addToCart())}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Box>
    </div>
  );
}
