import React from 'react';
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"

/* Definition des routes de l'applications */
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
