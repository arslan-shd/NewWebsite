import { Typography } from "@mui/material";
import React from "react";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import background from "../Components/BG.jpg";
// import "./LandingPage.css";

const Landingpage = () => {
  return (
    <div style={{ background: `url(${background})`, width: "100%" }}>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box width="80%">
          <Navbar />
          <HeroSection />
          <Typography
            color="#677DA8"
            variant="h1"
            fontFamily="Gilroy"
            sx={{
              textTransform: "uppercase",
              marginBottom: "30px",
              fontSize: "clamp(1.5rem, 7vw, 3rem)",
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            Popular Products
          </Typography>
          <Products />
        </Box>
      </Stack>
    </div>
  );
};

export default Landingpage;
