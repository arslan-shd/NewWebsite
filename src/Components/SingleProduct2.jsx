import React from "react";
import { Box, Stack } from "@mui/material";

const SingleProduct2 = ({ product }) => {
  return (
    <Box
      sx={{
        border: "2px solid white",
        margin: "10px 20px",
        background: "#FAFBFC",
        borderRadius: "10px",
        width: "210px",
        height: "225px",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <img alt="j" src={product.img} />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <span
            style={{ color: "#6B7A99", fontWeight: "700", fontWeight: "12px" }}
          >
            {product.name}
          </span>
          <span
            style={{ color: "#7D8FB3", fontWeight: "900", fontSize: "10px" }}
          >
            {product.price}
          </span>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleProduct2;
