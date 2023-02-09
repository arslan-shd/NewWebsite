import React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      width="100%"
      sx={{
        py: "20px",
        fontSize: { xl: "20px", md: "16px", sm: "10px", xs: "8px" },
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <img src="./images/logo.png" alt="logo" height={45} />
        <Box sx={{ width: "40%" }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              Gallery
            </Link>
            <Link to="/Shop" style={{ textDecoration: "none" }}>
              Shop
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </Stack>
        </Box>
        <Box width="15%">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignitems="center"
          >
            <SearchIcon />
            <ShoppingCartIcon />
            <img src="./images/profile.png" alt="profile" />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
