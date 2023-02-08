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
    <Box height="100vh" width="8%">
      <Stack alignContent="space-between">
        <Box>
          <Stack direction="column" gap="20px">
            <ExploreIcon />
            <StarIcon />
            <MarkChatUnreadIcon />
            <ShowChartIcon />
            <PublicIcon />
            <LocationCityIcon />
          </Stack>
        </Box>
        <Box>
          <Stack direction="column">
            World
            <AddCircleOutlineIcon />
            Hello
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default LeftSidebar;
