import { Button, ButtonGroup } from "@mui/material";

function MenuCategory() {
  return (
    <div>
      <ButtonGroup sx={{ marginTop: "100px" }}>
        <Button variant="" color="success">
          Main
        </Button>
        <Button variant="" color="success">
          Dessert
        </Button>
        <Button variant="" color="success">
          Drinks
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default MenuCategory;
