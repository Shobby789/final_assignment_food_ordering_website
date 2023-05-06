import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Total() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const delivaryCharges = 20;

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.itemPrice * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const handleOrderData = async () => {
    const u_email = window.localStorage.getItem("userEmail");
    console.log(u_email);
    await fetch("http://localhost:8000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: u_email,
        order_data: cart,
        order_date: new Date().toDateString(),
      }),
    });
  };
  return (
    <>
      <Card
        sx={{
          border: "1px solid grey",
          minWidth: "340px",
          float: "right",
          textAlign: "start",
          marginRight: "10px",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontWeight: "700", textAlign: "center" }}
          >
            CART TOTALS
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Subtotal</Typography>
          <Typography>{`${getTotal().totalPrice}`}.00</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Delivery charges</Typography>
          <Typography>Rs.{delivaryCharges}.00</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>
            {`${getTotal().totalPrice + delivaryCharges}`}.00
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            style={{ margin: "auto" }}
            onClick={handleOrderData}
          >
            Place Order
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
