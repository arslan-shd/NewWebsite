import React from "react";
import SingleProduct from "./SingleProduct";
import { Stack } from "@mui/system";
import ProductData from "../ProductData";

const Products = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      {ProductData.map((product) => (
        <SingleProduct product={product} />
      ))}
    </Stack>
  );
};

export default Products;
