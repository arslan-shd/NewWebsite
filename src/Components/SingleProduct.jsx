import React from "react";
import { Stack, Typography, Box } from "@mui/material";

import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
  return (
    <Stack direction="column" alignitems="center" justifyContent="center">
      <Box
        width="277px"
        height="185px"
        sx={{
          marginBottom: "24px",
          border: "5px solid transparent",
        }}
      >
        <div className="Product__image" style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: "5px",
              top: "5px",
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              background: `linear-gradient("180deg, #E142AA 0%, #73FFFF 100%")`,
            }}
          >
            <img src="./images/heart.png" style={{ width: "75%" }} />
          </div>
          <img className="image" src={product.img} alt="image not found" />
        </div>
      </Box>
      <Box width="277px" height="185px" pl="15px">
        <Typography variant="subtitle2">
          <img src="./images/star.png" />
          &nbsp;(1.6k Reviews)
        </Typography>
        <Typography variant="subtitle1">{product.name}</Typography>
        <Stack direction="row" gap="22px" alignItems="center">
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {product.discPrice}
          </Typography>
          <Typography sx={{ fontWeight: "light" }}>
            <strike>{product.origPrice}</strike>Sold Out
          </Typography>
          <button
            style={{
              padding: "7px 9px",
              color: "#677DA8",
              background: "#fff",
              border: "none",
              borderRadius: "9px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SingleProduct;
