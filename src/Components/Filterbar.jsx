import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

const Filterbar = () => {
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
          <Stack direction="row" alignItems="center" gap="20%">
            <CheckCircleIcon />
            <span>Select All</span>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" gap="20%">
            <Stack direction="row">
              <FilterListIcon />
              <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
                &nbsp;Filters
              </Link>
            </Stack>
            <Stack direction="row">
              <SearchIcon />
              <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
                &nbsp;Search
              </Link>
            </Stack>
            <Stack direction="row">
              <EditIcon />
              <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
                &nbsp;Edit
              </Link>
            </Stack>
            <Stack direction="row">
              <DeleteIcon />
              <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
                &nbsp;Delete
              </Link>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" gap="20%">
            <MenuIcon />
            <ViewModuleIcon />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Filterbar;
