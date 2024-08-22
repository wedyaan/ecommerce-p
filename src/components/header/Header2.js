import { ShoppingCartOutlined } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import "../../index.css";
import React from "react";
import ShoppingCart from "../main/ShoppingCart";

export default function Header2() {
  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between",alignItems:'center' }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">Food Order</Typography>
      </Stack>

      <Typography
        sx={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "2px",
          
           
        }}
        variant="body2"
      >
        Food Resturant
      </Typography>

      <ShoppingCart />
    </Container>
  );
}
