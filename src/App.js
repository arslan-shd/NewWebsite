import React from "react";
import Landingpage from "./Pages/Landingpage";
import { Routes, Route } from "react-router";

import ShopPage from "./Pages/ShopPage";

const App = () => {
  return (
    // <div className="background">
    //   <Stack direction="row" justifyContent="center">
    //     <Box width="80%">
    //       <Landingpage />
    //     </Box>
    //   </Stack>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Shop" element={<ShopPage />} />
    </Routes>
    // </div>
  );
};

export default App;
