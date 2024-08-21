import { ShoppingCartOutlined } from "@mui/icons-material";
import { Container, InputBase, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import "../../index.css";
import React, { useState } from "react";
import ShoppingCart from "../main/ShoppingCart";

const Search = styled("div")(({ theme, active }) => ({
  flexGrow: 0.2,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: active ? "1px solid #333" : "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header2() {
  const [active, setActive] = useState(false);
  const handleSearchFocus = () => {
    setActive(true);
  };
  const handleSearchBlur = () => {
    setActive(false);
  };

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">Food Order</Typography>
      </Stack>

      <Search active={active}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      </Search>
      <ShoppingCart />
    </Container>
  );
}