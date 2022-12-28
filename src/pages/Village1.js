import React from 'react';
import { useState } from "react";

// Importation des différents composants
import Hud from '../components/Gameplay-Commun/Hud';
import Tavern01 from '../components/Village-Bourbier-Bison/Tavern01';
import Tavern02 from '../components/Village-Bourbier-Bison/Tavern02';
import Tavern03 from '../components/Village-Bourbier-Bison/Tavern03';
import Tavern04 from '../components/Village-Bourbier-Bison/Tavern04';
import Tavern05 from '../components/Village-Bourbier-Bison/Tavern05';
import Tavern06 from '../components/Village-Bourbier-Bison/Tavern06';
import Tavern07 from '../components/Village-Bourbier-Bison/Tavern07';
import Tavern08 from '../components/Village-Bourbier-Bison/Tavern08';

const Village1 = () => {
    const [component, setComponent] = useState(1);

    // Les points de vies maximum sont le résultat du nombre d'endurance dans le localStorage et du calcul
    const [maxHp, setMaxHp] = useState((window.localStorage.Endurance * 5) + 50);
    const [actualHp, setActualHp] = useState(maxHp)

    // Importation de toutes les données du localStorage
    const data = window.localStorage
    const savePosition = parseInt(data.SavePosition)
    const save = parseInt(data.Save)

    // Il faut absolument avoir fini la Road1 pour faire celle ci   
    if (savePosition <= 1) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
                {component === 1 && <Tavern01 component={component} setComponent={setComponent} />}
                {component === "tavern02" && <Tavern02 component={component} setComponent={setComponent} />}
                {component === "tavern03" && <Tavern03 component={component} setComponent={setComponent} />}
                {component === "tavern04" && <Tavern04 component={component} setComponent={setComponent} />}
                {component === "tavern05" && <Tavern05 component={component} setComponent={setComponent} />}
                {component === "tavern06" && <Tavern06 component={component} setComponent={setComponent} />}
                {component === "tavern07" && <Tavern07 component={component} setComponent={setComponent} />}
                {component === "tavern08" && <Tavern08 component={component} setComponent={setComponent} />}
            </div>
        );
    } else if (savePosition <= 1 && save === 1) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />

            </div>
        )
    }
    else if (savePosition <= 1 && save === 2) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />

            </div>
        )
    } else if (savePosition <= 1 && save === 3) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />

            </div>
        )
    }

    /* Si pas de sauvegarde retour à la page d'accueil*/
    else {
        window.location.assign('/');
    }
};

export default Village1;