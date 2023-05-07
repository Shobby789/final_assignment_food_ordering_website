import { Button, TextField, Container, CardMedia } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function AddItem() {
  const [item, setItem] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: 0,
    itemCategory: "",
    itemImage: "",
  });
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setItem((values) => ({ ...values, [name]: value }));
  };

  const handlePhoto = (event) => {
    setItem({ ...item, itemImage: event.target.files[0] });
    console.log(item.itemImage);
  };

  const toBase64 = (image) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // const uploadImage = () => {
  //   fetch("http://localhost8000/api/uploadItemImage", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accespt: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({ base64: image }),
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("itemName", item.itemName);
    formData.append("itemDescription", item.itemDescription);
    formData.append("itemPrice", item.itemPrice);
    formData.append("itemCategory", item.itemCategory);
    formData.append("itemImage", item.itemImage);

    await fetch("http://localhost:8000/api/addItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => {
        console.log("Res: " + res);
      })
      .catch((err) => {
        console.log("Err: " + err);
      });

    // uploadImage();
    setItem({
      itemName: "",
      itemDescription: "",
      itemCategory: "",
      itemPrice: 0,
      itemImage: "",
    });
  };

  return (
    <Container
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minWidth: "30%",
          minHeight: "70vh",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Item Name"
          variant="outlined"
          color="success"
          name="itemName"
          value={item.itemName}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Item Category"
          variant="outlined"
          color="success"
          name="itemCategory"
          value={item.itemCategory}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Item Description"
          variant="outlined"
          color="success"
          name="itemDescription"
          value={item.itemDescription}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Item Price"
          variant="outlined"
          color="success"
          name="itemPrice"
          value={item.itemPrice}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Item Image"
          variant="outlined"
          color="success"
          name="itemImage"
          value={item.itemImage}
          onChange={handleChange}
        />

        {/* <Button variant="contained" component="label">
          Upload Item Image
          <input
            hidden
            accept="image/*"
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Button> */}
        <Button
          variant="contained"
          color="success"
          sx={{ marginTop: "20px" }}
          type="submit"
        >
          Add
        </Button>
      </form>
    </Container>
  );
}
