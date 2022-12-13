import React from 'react';
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartStats from "./pages/StartStats"
import ErrorPage from "./pages/ErrorPage"
import WeaponAtStart from "./pages/StartWeapons"

/* Definition des routes de l'applications */
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartStats />} />
          <Route path="/WeaponAtStart" element={<WeaponAtStart />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
