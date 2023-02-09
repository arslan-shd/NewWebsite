import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box width="100%" sx={{ pt: "40px" }}>
      <Stack direction="row" justifyContent="space-around">
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box>
            <Typography
              variant="h1"
              fontFamily="Gilroy"
              sx={{
                fontSize: "51px",
                color: "#677DA8",
                fontWeight: "Bold",
                marginBottom: "15px",
              }}
            >
              PURCHASE YOUR
              <br />
              <span style={{ textDecoration: "underline" }}>SHOES</span> NOW.
            </Typography>
            <Typography
              variant="subtitle1"
              fontFamily="Gilroy-Regular"
              mt="2px"
              mb="45px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies
              tortor ac.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#677DA8",
                fontSize: "22px",
                px: "20px",
                py: "10px",
                position: "absolute",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Stack>
        <Box component="img" src="./images/BigShoe.png" />
      </Stack>
    </Box>
  );
};

export default HeroSection;
