import React from 'react';
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NewCharacter from "./pages/StartingAdventure"
import Road1 from "./pages/Road1"
import ErrorPage from "./pages/ErrorPage"

/* Definition des routes de l'applications */
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/omega-project/" element={<NewCharacter />} />
          <Route path="/omega-project/road1" element={<Road1 />} />
          <Route path="/omega-project/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
