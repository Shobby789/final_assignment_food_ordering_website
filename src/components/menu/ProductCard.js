import { useContext, useEffect, useState } from "react";
import "./Menu.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext, addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function ProductCard({ _id, itemName, itemDescription, itemPrice, itemImage }) {
  const [items, setItems] = useState([]);
  // const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/getFoodItems", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Food_items: ", data.data[1]);
        setItems(data.data[1]);
        // setCategory(data.data[0]);
      });
  }, []);

  return (
    <>
      <Card
        key={_id}
        sx={{
          maxWidth: "280px",
          height: "auto",
          marginTop: "40px",
          cursor: "pointer",
        }}
      >
        <CardMedia
          sx={{ height: 160, width: "280px" }}
          image={itemImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {itemName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rs.{`${parseInt(`${itemPrice}`)}`}.00
          </Typography>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={() =>
                dispatch(
                  addToCart(
                    _id,
                    itemName,
                    itemDescription,
                    itemPrice,
                    itemImage
                  )
                )
              }
            >
              Add To Cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
  // if (items.length > 0) {
  //   return (
  //     <>
  //       <MenuCategory />
  //       <div className="items">
  //         {items.map(({ id, title, image, description, price }) => {
  //           <MediaCard
  //             id={id}
  //             title={title}
  //             image={image}
  //             description={description}
  //             price={price}
  //             onAddToCartClick={cartClickHandler(id)}
  //           />;
  //         })}
  //       </div>
  //     </>
  //   );
  // }
}

export default ProductCard;

// categorised logic
// {category !== null
//   ? category.map((cat) => {
//       return (
//         <div>
//           <h4 key={cat.id}>{cat.CategoryName}</h4>
//           {category !== []
//             ? category.map((cat, index) => {
//                 return (
//                   <Container key={index}>
//                     <h2 key={index}>{cat.Category}</h2>
//                     {items !== []
//                       ? items
//                           .filter(
//                             (filteredItem) =>
//                               filteredItem.itemCategory ===
//                               cat.CategoryName
//                           )
//                           .map((item, index) => {
//                             return (
//                               <Container sx={{ display: "flex" }}>
//                                 <Card
//                                   sx={{ width: 280, height: "auto" }}
//                                   key={index}
//                                 >
//                                   <CardMedia
//                                     sx={{ height: 160 }}
//                                     image={item.itemImage}
//                                     title="green iguana"
//                                   />
//                                   <CardContent>
//                                     <Typography
//                                       gutterBottom
//                                       variant="h6"
//                                       component="div"
//                                     >
//                                       {item.itemName}
//                                     </Typography>
//                                     <Typography
//                                       variant="body2"
//                                       color="text.secondary"
//                                     >
//                                       {item.itemDescription}
//                                     </Typography>
//                                     <Typography
//                                       variant="body2"
//                                       color="text.secondary"
//                                     >
//                                       Rs.{`${item.itemPrice}`}.00
//                                     </Typography>
//                                     <Button
//                                       variant="outlined"
//                                       sx={{
//                                         marginTop: 1,
//                                         fontSize: "12px",
//                                       }}
//                                     >
//                                       Add TO Cart
//                                     </Button>
//                                   </CardContent>
//                                 </Card>
//                               </Container>
//                             );
//                           })
//                       : ""}
//                   </Container>
//                 );
//               })
//             : ""}
//         </div>
//       );
//     })
//   : ""}
