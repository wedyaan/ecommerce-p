import { createContext, useContext, useState, useEffect } from "react";
// import ShoppingCart from "../components/main/ShoppingCart";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});


const ShoppingCartContext = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const ShoppingCartProvider = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [openDialog, setOpenDialog] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isRegisterForm, setIsRegisterForm] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // find quantity of cart

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  // increaseCartQuantity

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // decreaseCartQuantity
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // remove from cart
  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  //    cartQuantity
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // dialog fun

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const handleToggleForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const onSubmit = (data) => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      const storedData = JSON.parse(storedFormData);

      if (isRegisterForm) {
        if (
          storedData.email === data.email &&
          storedData.password === data.password
        ) {
          setSnackbarMessage("User already registered!");
          setShowSnackbar(true);
          return;
        }
      } else {
        if (
          storedData.email === data.email &&
          storedData.password === data.password
        ) {
          localStorage.setItem("isLoggedIn", true);
          setSnackbarMessage("User logged in successful ");
          setShowSnackbar(true);
          setOpenDialog(false);
          setIsLoggedIn(true);
          reset();
          return;
        }
      }
    }

    if (isRegisterForm) {
      localStorage.setItem("formData", JSON.stringify(data));
      setSnackbarMessage("Registration successful!");
    } else {
      setSnackbarMessage("Invalid email or password!");
    }

    setShowSnackbar(true);
    setOpenDialog(false);
    reset();
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const logoutUser = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };


  const handleLogout = () => {
    logoutUser(); // Call the logout function from context
    handleMenuClose();
    handleSnackbarClick("You have been logged out.");
  };

  const handleSnackbarClick = (message) => {
    handleSnackbarClose();
    handleSnackbarOpen(message);
  };

  const handleSnackbarOpen = (message) => {
    handleSnackbarClose();
    setSnackbarMessage(message);
    setShowSnackbar(true);
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        openDialog,
        setOpenDialog,
        handleClose,
        showSnackbar,
        setShowSnackbar,
        handleSnackbarClose,
        snackbarMessage,
        setSnackbarMessage,
        isRegisterForm,
        setIsRegisterForm,
        handleToggleForm,
        isLoggedIn,
        setIsLoggedIn,
        handleClickOpen,
        register,
        handleSubmit,
        errors,
        onSubmit,
        handleProfileClick,
        handleMenuClose,
        anchorEl,
        handleLogout

      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
