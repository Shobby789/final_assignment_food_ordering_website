import React from "react";
import "./Cart.css";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CartItem from "../../components/cartItem/CartItem";
import { useSelector } from "react-redux";
import Total from "./total/Total";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log("cart" + cart);

  // const handleOrderData = async () => {
  //   const userEmail = window.localStorage.getItem("userEmail");
  //   await fetch("http://localhost:8000/api/orderData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       order_data: cart,
  //       email: userEmail,
  //       order_date: new Date().toDateString(),
  //     }),
  //   });
  // };

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Card
        sx={{ minWidth: 275, backgroundColor: "bisque", height: "50vh" }}
        className="header"
      >
        <CardContent>
          <Typography
            sx={{ fontSize: "3rem", color: "white" }}
            color="text.primary"
            gutterBottom
          >
            Cart
          </Typography>
        </CardContent>
      </Card>
      <Box
        component="div"
        sx={{
          p: 2,
          border: "none",
          backgroundColor: "orange",
          display: "flex",
          width: "80%",
          margin: "50px auto",
        }}
      >
        <Grid container spacing={2} style={{ textAlign: "center" }}>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            <Button>Product</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>Price</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>Quantity</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>Total</Button>
          </Grid>
        </Grid>
      </Box>

      <div>
        {cart.map((cartItem) => {
          return (
            <CartItem
              _id={cartItem._id}
              key={cartItem._id}
              itemName={cartItem.itemName}
              itemPrice={cartItem.itemPrice}
              itemImage={cartItem.itemImage}
              quantity={cartItem.quantity}
            />
          );
        })}
      </div>

      {/* cart total */}
      <div>
        <Total />
      </div>
    </div>
  );
}
