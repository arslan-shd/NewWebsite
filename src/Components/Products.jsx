import React from "react";
import SingleProduct from "./SingleProduct";
import { Stack } from "@mui/system";
import ProductData from "../ProductData";

const Products = () => {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      {ProductData.map((product) => (
        <SingleProduct product={product} />
      ))}
    </Stack>
  );
};

export default Products;
