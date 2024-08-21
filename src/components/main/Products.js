import { React, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import {
  Stack,
  Typography,
  // useTheme,
  Rating,
  Box,
} from "@mui/material";
export const Products = ({ id, name, description, price, image, rating }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div>
      {imageError ? (
        <div>Error loading image</div>
      ) : (
        <CardMedia
          sx={{ height: 277, width: 377, objectFit: "cover" }}
          component="img"
          src={image}
          alt={name}
          onError={handleImageError}
        />
      )}{" "}
      <CardContent>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>

          <Typography variant="subtitle1" component="p">
            {price}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {quantity === 0 ? (
        <CardActions
          sx={{
            textTransform: "capitalize",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "0",
          }}
        >
          <Button
            sx={{ textTransform: "capitalize" }}
            size="large"
            onClick={() => increaseCartQuantity(id)}
          >
            {}
            <AddShoppingCartOutlinedIcon fontSize="small" />
            add to cart
          </Button>
          <Rating defaultValue={2.5} precision={0.5} value={rating} readOnly />
        </CardActions>
      ) : (
        <CardActions
          sx={{
            textTransform: "capitalize",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                marginBottom: "19px",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </Button>
              <Typography
                sx={{ textTransform: "capitalize", fontSize: "20px" }}

                // onClick={addToCart}
              >
                {quantity} in cart
              </Typography>
              <Button
                variant="contained"
                size="small"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </Button>
            </Box>

            <Box>
              <Button
                sx={{ textTransform: "capitalize", marginBottom: "19px" }}
                size="medium"
                color="error"
                variant="contained"
                onClick={() => removeFromCart(id)}
              >
                {}
                Remove
              </Button>
            </Box>
          </Stack>
        </CardActions>
      )}
    </div>
  );
};
