import React from 'react';
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import StartingGame from './pages/StartingGame';
import NewCharacter from "./pages/StartingAdventure"
import Road1 from "./pages/Road1"
import ErrorPage from "./pages/ErrorPage"

/* Definition des routes de l'applications */
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter basename='/omega-project'>
        <Routes>
          <Route exact path='/' element={<StartingGame />} />
          <Route path="/NewCharacter" element={<NewCharacter />} />
          <Route path="/road1" element={<Road1 />} />
          {/* <Route path="/*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
