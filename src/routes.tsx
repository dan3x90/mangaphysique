import { Route, Routes } from "react-router-dom";

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import MangaScreens from "./screens/MangaScreens";
import MangaDetails from "./modules/MangaModules/MangaDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/manga">
        <Route index element={<MangaScreens />} />
        <Route path=":mangaId" element={<MangaDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
