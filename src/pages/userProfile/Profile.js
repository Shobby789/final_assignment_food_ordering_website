import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export default function Profile() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography variant="h5" component="div">
        My Profile
      </Typography>
      <Card sx={{ maxWidth: 600, marginTop: "20px" }}>
        <CardContent>
          <Typography variant="p" component="span">
            Name:
          </Typography>
          <Typography variant="p" component="span">
            Shoaib Muhammad
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="p" component="span">
            Email:
          </Typography>
          <Typography variant="p" component="span">
            smshoaib2001@gmail.com
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="p" component="span">
            Phone Number:
          </Typography>
          <Typography variant="p" component="span">
            1234567890
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="p" component="span">
            Address:
          </Typography>
          <Typography variant="p" component="span">
            Gulistan-e-Johar, Karachi
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{ color: "white", backgroundColor: "red" }}
          >
            Delete Account
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
