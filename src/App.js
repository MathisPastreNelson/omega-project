import React from 'react';
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NewCharacter from "./pages/StartingAdventure"
import ErrorPage from "./pages/ErrorPage"

/* Definition des routes de l'applications */
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewCharacter />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
