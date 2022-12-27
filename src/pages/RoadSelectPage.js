import React from 'react';
import { useState } from "react";
// Importation des différents composants
import Hud from '../components/Gameplay-Commun/Hud';
import RoadSelect from '../components/RoadSelect';
import Help from '../components/Gameplay-Commun/Help';

const RoadSelectPage = () => {
    const [component] = useState("roadSelect");
    // Les points de vies maximum sont le résultat du nombre d'endurance dans le localStorage et du calcul
    const [maxHp, setMaxHp] = useState((window.localStorage.Endurance * 5) + 50);
    const [actualHp, setActualHp] = useState(maxHp)

    // Importation de toutes les données du localStorage
    const data = window.localStorage

    return (
        <div>
            < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
            <RoadSelect data={data} />
            <Help component={component} />
        </div>
    );
};

export default RoadSelectPage;