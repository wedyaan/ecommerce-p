import {
  Container,
  Stack,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { React } from "react";
import storeItems from "../main/storeItems.json";
import AddressForm from "./AddressForm";
import Payment from "./Payment";
 

export default function CartPage() {
  const {
    cartItems,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  const subtotal = cartItems.reduce((acc, item) => {
    const storeItem = storeItems.find((i) => i.id === item.id);
    return acc + (storeItem?.price || 0) * item.quantity;
  }, 0);

  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <Container sx={{ mt: 4, mb: 4, position: "relative" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Cart
        </Typography>
        <Typography variant="h6" gutterBottom>
          {cartQuantity} items
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            color="primary"
          >
            Back to Shop
          </Button>
        </Link>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: "100%", width: "100%" }}
      >
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#e94560",
                  color: "primary.contrastText",
                }}
              >
                Product
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#e94560",
                  color: "primary.contrastText",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "#e94560",
                  color: "primary.contrastText",
                }}
              >
                Price
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "#e94560",
                  color: "primary.contrastText",
                }}
              >
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => {
              const storeItem = storeItems.find((i) => i.id === item.id);
              return (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:nth-of-type(odd)": { backgroundColor: "grey.100" },
                  }}
                >
                  <TableCell align="center " component="th" scope="row">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <img
                        src={storeItem?.image}
                        alt={item.name}
                        width="60px"
                        height="60px"
                      />
                      <Typography variant="body1" color="primary">
                        {item.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="left">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <IconButton
                        onClick={() => decreaseCartQuantity(item.id)}
                        color="primary"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography variant="body1" color="primary">
                        {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => increaseCartQuantity(item.id)}
                        color="primary"
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1" color="primary">
                      {storeItem?.price}$
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1" color="primary">
                      {(storeItem?.price || 0) * item.quantity}$
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mt: 2,
          backgroundColor: "#e94560",
          color: "primary.contrastText",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography variant="body1">Subtotal:</Typography>
          <Typography variant="body1">{subtotal.toFixed(2)}$</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1">Tax:</Typography>
          <Typography variant="body1">{tax.toFixed(2)}$</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">{total.toFixed(2)}$</Typography>
        </Stack>
      </Paper>

      {/* form sections */}
      <AddressForm />
      <Payment />
      {/* end form sections  */}
    </Container>
  );
}
