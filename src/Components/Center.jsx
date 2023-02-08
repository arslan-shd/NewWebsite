import React from "react";
import AddProductbar from "./AddProductbar";
import Filterbar from "./Filterbar";
import ProductGallery from "./ProductGallery";
import Stack from "@mui/material/Stack";

const Center = () => {
  return (
    <Stack direction="column">
      <AddProductbar />
      <Filterbar />
      <ProductGallery />
    </Stack>
  );
};

export default Center;
