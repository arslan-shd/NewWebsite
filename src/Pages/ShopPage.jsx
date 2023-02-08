import React from "react";
import ShopNavBar from "../Components/ShopNavBar";
import LeftSidebar from "../Components/LeftSidebar";
import RightSidebar from "../Components/RightSidebar";
import Center from "../Components/Center";
import { Stack, Box } from "@mui/material";

const ShopPage = () => {
  return (
    <Box width="100%">
      <ShopNavBar />
      <Stack direction="row" justifyContent="space-between">
        <LeftSidebar />
        <Center />
        <RightSidebar />
      </Stack>
    </Box>
  );
};

export default ShopPage;
