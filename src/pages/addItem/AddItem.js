import { Button, TextField, Container } from "@mui/material";
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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setItem((values) => ({ ...values, [name]: value }));
  };

  const handlePhoto = (event) => {
    setItem({ ...item, itemImage: event.target.files[0] });
    console.log(item.itemImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("itemName", item.itemName);
    formData.append("itemDescription", item.itemDescription);
    formData.append("itemPrice", item.itemPrice);
    formData.append("itemCategory", item.itemCategory);
    formData.append("itemImage", item.itemImage);

    console.log(item.itemImage);

    axios
      .post("http://localhost:8000/api/addItem", formData, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

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
        {/* <TextField
          placeholder="itemName"
          name="itemName"
          value={item.itemName}
          onChange={handleChange}
        />
        <TextField
          placeholder="Item Description"
          name="itemDescription"
          value={item.itemDescription}
          onChange={handleChange}
        />
        <TextField
          placeholder="Item Category"
          name="itemCategory"
          value={item.itemCategory}
          onChange={handleChange}
        />
        <TextField
          placeholder="Item Price"
          name="itemPrice"
          value={item.itemPrice}
          onChange={handleChange}
        /> */}
        <Button variant="contained" component="label">
          Upload Item Image
          <input
            hidden
            accept=".png, .jpeg, .jpg"
            type="file"
            name="itemImage"
            onChange={handlePhoto}
          />
        </Button>
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
