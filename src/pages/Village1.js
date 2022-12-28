import React from 'react';
import { useState } from "react";

// Importation des différents composants
import Hud from '../components/Gameplay-Commun/Hud';
import FightSideBoss1 from '../components/Village-Bourbier-Bison/FightSideBoss1';
import FightSideBoss2 from '../components/Village-Bourbier-Bison/FightSideBoss2';
import RandomFight04 from '../components/Village-Bourbier-Bison/RandomFight04';
import Tavern01 from '../components/Village-Bourbier-Bison/Tavern01';
import Tavern02 from '../components/Village-Bourbier-Bison/Tavern02';
import Tavern03 from '../components/Village-Bourbier-Bison/Tavern03';
import Tavern04 from '../components/Village-Bourbier-Bison/Tavern04';
import Tavern05 from '../components/Village-Bourbier-Bison/Tavern05';
import Tavern06 from '../components/Village-Bourbier-Bison/Tavern06';
import Tavern07 from '../components/Village-Bourbier-Bison/Tavern07';
import Tavern08 from '../components/Village-Bourbier-Bison/Tavern08';
import Tavern09 from '../components/Village-Bourbier-Bison/Tavern09';
import Tavern10 from '../components/Village-Bourbier-Bison/Tavern10';
import Village01 from '../components/Village-Bourbier-Bison/Village01';
import Village02 from '../components/Village-Bourbier-Bison/Village02';
import VillageSideQuest1 from '../components/Village-Bourbier-Bison/VillageSideQuest1';
import VillageSideQuest2 from '../components/Village-Bourbier-Bison/VillageSideQuest2';
import VillageSideQuest3 from '../components/Village-Bourbier-Bison/VillageSideQuest3';
import VillageSideQuest4 from '../components/Village-Bourbier-Bison/VillageSideQuest4';
import VillageSideQuest4Alt from '../components/Village-Bourbier-Bison/VillageSideQuest4Alt';

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
    if (savePosition >= 1 && save === 0) {
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
                {component === "tavern09" && <Tavern09 component={component} setComponent={setComponent} />}
                {component === "tavern10" && <Tavern10 component={component} setComponent={setComponent} />}
                {component === "village01" && <Village01 component={component} setComponent={setComponent} />}
                {component === "village02" && <Village02 component={component} setComponent={setComponent} />}
                {component === "villageSideQuest1" && <VillageSideQuest1 component={component} setComponent={setComponent} />}
                {component === "villageSideQuest2" && <VillageSideQuest2 component={component} setComponent={setComponent} />}
            </div>
        );
    } else if (savePosition >= 1 && save === 1) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
                {component === 1 && <VillageSideQuest2 component={component} setComponent={setComponent} />}
                {component === "villageSideQuest3" && <VillageSideQuest3 component={component} setComponent={setComponent} />}
                {component === "villageSideQuest4" && <VillageSideQuest4 component={component} setComponent={setComponent} />}
                {component === "villageSideQuest4Alt" && <VillageSideQuest4Alt component={component} setComponent={setComponent} />}
                {component === "randomBattle04" && <RandomFight04 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
                {component === "sideBoss1" && <FightSideBoss1 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
                {component === "sideBoss2" && <FightSideBoss2 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
            </div>
        )
    }
    else if (savePosition >= 1 && save === 2) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
                village 3
            </div>
        )
    } else if (savePosition >= 1 && save === 3) {
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