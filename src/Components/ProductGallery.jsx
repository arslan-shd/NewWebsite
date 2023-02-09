import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import SingleProduct2 from "./SingleProduct2";
import data from "../ShopData";

const ProductGallery = () => {
  return (
    <Box width="69vw" sx={{ paddingTop: "50px" }}>
      <Grid container>
        {data.map((product) => {
          return <SingleProduct2 product={product} />;
        })}
      </Grid>
      <Stack direction="row" justifyContent="center">
        <button
          style={{
            background: "#fff",
            padding: "10px 20px",
            color: "#6B7A99",
            border: "2px solid #F5F6F7",
          }}
        >
          Load More
        </button>
      </Stack>
    </Box>
  );
};

export default ProductGallery;
