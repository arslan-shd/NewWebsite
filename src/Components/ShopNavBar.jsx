import { Box, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

const ShopNavBar = () => {
  return (
    <Box
      width="100%"
      sx={{
        background: "#F7F8FA",
        color: "#000",
        // borderBottom: "0.5px solid grey",
        padding: "20px 0",
      }}
    >
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" gap="30px">
            <MenuIcon />
            Constructor
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" gap="20px">
            <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
              Dashboard
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
              About Us
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
              News
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
              User Policy
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#7D8FB3" }}>
              Contacts
            </Link>
            ...
          </Stack>
        </Box>
        <Box>
          <Box
            sx={{
              background: "#fff",
              padding: "15px 40px 15px 20px",
              boxShadow: `0px 2px 5px rgba("38, 51, 77, 0.03")`,
              borderRadius: "30px",
              color: "#C3CAD9",
            }}
          >
            <Stack direction="row" alignItems="center" gap="10px">
              <SearchIcon />
              <input
                placeholder="Search Transactions and Documents"
                type="text"
                style={{ border: "none" }}
              />
            </Stack>
          </Box>
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" gap="20px">
            <AccountCircleIcon sx={{ color: "#C3CAD9" }} />
            <h4 style={{ color: "#4D5E80" }}>Clayton Santos</h4>
            <NotificationsIcon sx={{ color: "#C3CAD9" }} />
            <CancelIcon sx={{ color: "#C3CAD9" }} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ShopNavBar;
