import React from 'react';
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartingGame from './pages/StartingGame';
import NewCharacter from "./pages/StartingAdventure"
import Road1 from "./pages/Road1"
import ErrorPage from "./pages/ErrorPage"
import GameOverPage from "./pages/GameOverPage"
import SuccessBattlePage from "./pages/SuccessBattlePage"
import SuccessRandomFightPage01 from "./pages/SuccessRandomFightPage01"

/* Definition des routes de l'applications */
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartingGame />} />
          <Route path="/NewCharacter" element={<NewCharacter />} />
          <Route path="/road1" element={<Road1 />} />
          <Route path="/GameOver" element={<GameOverPage />} />
          <Route path="/SuccessBattle01" element={<SuccessBattlePage />} />
          <Route path="/SuccessRandomBattle01" element={<SuccessRandomFightPage01 />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
