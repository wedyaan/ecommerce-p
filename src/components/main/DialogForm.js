import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, Container, Snackbar, Alert, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

export default function DialogForm() {
  const {
    openDialog,
    handleClose,
    showSnackbar,
    handleSnackbarClose,
    snackbarMessage,
    isRegisterForm,
    handleToggleForm,
    isLoggedIn,
    handleClickOpen,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleProfileClick,
    anchorEl,
    handleMenuClose,
    handleLogout
     
  } = useShoppingCart();
 

  return (
    <div>
      {isLoggedIn ? (
        <AccountCircleIcon onClick={handleProfileClick} />
      ) : (
        <Person2OutlinedIcon onClick={handleClickOpen} />
      )}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogContent sx={{ position: "relative" }}>
          <Container maxWidth="sm">
            <Box mt={4}>
              <Typography variant="h4" align="center" gutterBottom>
                {isRegisterForm ? "Register" : "Login"}
              </Typography>
              <Box mb={2}>
                <CloseIcon
                  sx={{
                    color: "error.main",
                    cursor: "pointer",
                    position: "absolute",
                    top: "0",
                    right: "0",
                  }}
                  onClick={handleClose}
                />
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
                  margin="normal"
                />
                <Box display="flex" justifyContent="center" mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ marginRight: "1em" }}
                  >
                    {isRegisterForm ? "Register" : "Login"}
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleToggleForm}
                  >
                    {isRegisterForm ? "Login" : "Register"}
                  </Button>
                </Box>
              </form>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={
            snackbarMessage.includes("successful") ? "success" : "error"
          }
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}