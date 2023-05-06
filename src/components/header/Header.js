import * as React from "react";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Header.css";
import { Autocomplete, TextField } from "@mui/material";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];
  const [search, setSearch] = React.useState("");
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  return (
    <Card
      sx={{ minWidth: 275, backgroundColor: "bisque", height: "90vh" }}
      className="header"
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "3rem", color: "white" }}
          color="text.primary"
          gutterBottom
        >
          Tasty & Delicious Food
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
          sx={{
            border: "none",
            borderRadius: "4px",
            // width: "550px",
            minWidth: "300px",
            color: "white",
            fontSize: "1.2rem",
            backgroundColor: "white",
            outline: "none",
          }}
          placeholder="Fast Food, Chinese, BBQ"
        />
      </CardActions>
    </Card>
  );
}
