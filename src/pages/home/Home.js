import BasicCard from "../../components/header/Header";
import InstagramSection from "../../components/instaSection/InstagramSection";
import Footer from "../../components/footer/Footer";
import ResponsiveAppBar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ItemCard from "../../components/itemCard/ItemCard";

export default function Home() {
  const [items, setItems] = useState([]);

  // getting products on home screen
  useEffect(() => {
    fetch("http://localhost:8000/api/getFoodItems", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Food_images: ", data.data);
        setItems(data.data);
      });
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
      <BasicCard />
      <Typography variant="h4" sx={{ marginTop: "30px", textAlign: "center" }}>
        Products
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          marginBottom: "60px",
          paddingTop: "50px",
        }}
      >
        {items.map((item) => {
          return (
            <ItemCard
              _id={item._id}
              key={item._id}
              itemName={item.itemName}
              itemDescription={item.itemDescription}
              itemPrice={item.itemPrice}
              itemImage={item.itemImage}
            />
          );
        })}
      </div>
      <InstagramSection />
      <Footer />
    </div>
  );
}
