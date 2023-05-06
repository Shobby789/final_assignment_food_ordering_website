import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CartItem from "../../../components/cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";
import { removeItem } from "../../../redux/cartSlice";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Goto Checkout
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Card
              sx={{
                maxWidth: 1000,
                margin: "10px auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"itemName"}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography>{"Quantity"}</Typography>
              </CardContent>
              <CardContent>
                <Typography>Rs.{"itemPrice"}</Typography>
              </CardContent>
            </Card>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
