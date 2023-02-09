import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import StarIcon from "@mui/icons-material/Star";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Stack } from "@mui/material";

const LeftSidebar = () => {
  return (
    <Box height="100vh" width="8%" sx={{ padding: "10px" }}>
      <Stack direction="column" alignItems="center" gap="550px">
        <Box>
          <Stack direction="column" gap="20px">
            <ExploreIcon sx={{ color: "#C3CAD9" }} />
            <StarIcon sx={{ color: "#C3CAD9" }} />
            <MarkChatUnreadIcon sx={{ color: "#C3CAD9" }} />
            <ShowChartIcon sx={{ color: "#C3CAD9" }} />
            <PublicIcon sx={{ color: "#C3CAD9" }} />
            <LocationCityIcon sx={{ color: "#C3CAD9" }} />
          </Stack>
        </Box>
        <Box>
          <Stack direction="column" alignItems="center" gap="20px">
            <AddCircleOutlineIcon sx={{ color: "#C3CAD9" }} />
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="./images/face1.png"
            />
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="./images/face2.png"
            />
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="./images/face3.png"
            />
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src="./images/face4.png"
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default LeftSidebar;
