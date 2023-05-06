import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function OrderHistory() {
  const [ordersData, setOrdersData] = useState([]);
  let userEmail = window.localStorage.getItem("userEmail");
  useEffect(() => {
    fetch("http://localhost:8000/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("order data: ", data.data.order_date);
        setOrdersData(data.data.order_data[0]);
      });
  }, []);
  // console.log("orders data :", ordersData);
  return (
    <div>
      <h3>My Order History</h3>
      {ordersData.map((ordered_item) => {
        return (
          <Card
            key={ordered_item._id}
            id={ordered_item._id}
            sx={{
              minWidth: 500,
              maxWidth: 700,
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia
              sx={{ width: 200, height: 200 }}
              image={ordered_item.itemImage}
              title="itemImage"
            />

            <CardContent>
              <Typography>{ordered_item.itemName}</Typography>
            </CardContent>
            <CardContent>
              <Typography>{ordered_item.itemPrice}</Typography>
            </CardContent>
            <CardContent>
              <Typography>total price</Typography>
            </CardContent>
          </Card>
        );
      })}
      {/* <Card
        sx={{
          minWidth: 500,
          maxWidth: 700,
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ width: 200, height: 200 }}
          image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
          title="itemImage"
        />

        <CardContent>
          <Typography>Item Name</Typography>
          <Typography>Item Description</Typography>
          <Typography>Item Price</Typography>
          <Typography>Order Date</Typography>
        </CardContent>
      </Card> */}
    </div>
  );
}
