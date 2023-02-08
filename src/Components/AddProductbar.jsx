import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddProductbar = () => {
  return (
    <Box
      width="69vw"
      style={{
        background: "#F2F3F5",
        padding: " 8px 16px",
        borderBottom: "2px solid #F2F3F5",
        borderRadius: "20px 20px 0px 0px",
        color: "#7D8FB3",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" gap="20%">
            <ShoppingBasketIcon />
            <span>Products</span>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" gap="20%">
            <Link to="/" style={{ textDecoration: "none", color: "#8833FF" }}>
              Active
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
              Draft
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
              Assembly
            </Link>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" justifycontent="space-around">
            <button
              style={{
                padding: "6px 20px 6px 15px",
                background: "#8833FF",
                color: "#fff",
                borderRadius: "20px",
                boxShadow: "0px 10px 30px rgba(136, 51, 255, 0.15)",
                border: "2px solid #8833FF",
              }}
            >
              <Stack direction="row" alignItems="center">
                <AddCircleIcon sx={{ color: "rgba(255, 255, 255, 0.5)" }} />
                &nbsp; Add Product
              </Stack>
            </button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default AddProductbar;
