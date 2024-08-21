import React from "react";
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CartItems from "./CartItems";
import storeItems from "../main/storeItems.json";
import Drawer from "@mui/material/Drawer";
import { Box, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../index.css";
import CloseIcon from "@mui/icons-material/Close";
import "../../../src/index.css";
import { Badge } from "@mui/material";
import Link from "@mui/material/Link";
import DialogForm from "./DialogForm";


const ShoppingCart = () => {
  const { cartItems, cartQuantity } = useShoppingCart();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <Badge badgeContent={cartQuantity} color="error">
            <ShoppingCartIcon onClick={toggleDrawer(true)} />
          </Badge>
          <Box>
            <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              sx={{ width: "400px", padding: "300px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "3px 3px 30px 3px",
                }}
              >
                <Typography>The Cart </Typography>
                <CloseIcon
                  onClick={toggleDrawer(false)}
                  sx={{ cursor: "pointer", color: "red" }}
                />
              </Box>
              <Stack gap={3} open={open} onClose={toggleDrawer(false)}>
                {cartItems.map((item) => (
                  <CartItems key={item.id} {...item} />
                ))}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      background: "#D23F57",
                      padding: "15px",
                      color: "#fff",
                      fontSize: "14px",
                      width: "100%",
                    }}
                  >
                  
                    {cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find((i) => i.id === cartItem.id);
                      return (
                        total +
                        Math.round((item?.price || 0) * cartItem.quantity)
                      );
                    }, 0)}
                  </Typography>
                </Box>
                <Box>
                  <Link
                    href="/CartPage"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      background: "#1976d2",
                      padding: "15px 0",
                      textDecoration: "none",
                      textAlign: "center",
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    Display The Cart{" "}
                  </Link>
                </Box>
              </Stack>
            </Drawer>
          </Box>
        </IconButton>

        <IconButton>
          <DialogForm/>
        </IconButton>

      </Stack>
    </Box>
  );
};
export default ShoppingCart;
