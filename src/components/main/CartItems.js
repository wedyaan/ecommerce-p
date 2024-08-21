import React from "react";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import storeItems from "../main/storeItems.json";
import { Box } from "@mui/material";

const CartItems = ({ id, quantity   }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

 
  return (
    <Box
      gap={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          src={item.image}
          alt="cart-img"
          style={{ width: "105px", height: "75px", objectFit: "cover" }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            {item.name}

            {quantity > 1 && (
              <span
                className="text-muted"
                style={{ fontSize: "0.75rem", marginLeft: "2px" }}
              >
                x{quantity}
              </span>
            )}
          </Box>
          <span>{item.price}$</span>
          <span>{item.price * quantity}$</span>
        </Box>
      </Box>

      <Box sx={{ margin: "10px" }}>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </Box>
      
    </Box>
  );
};

export default CartItems;
