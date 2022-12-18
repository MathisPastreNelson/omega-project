import React from 'react';
import { useState } from "react";

// Différents composants
import Hud from '../components/Hud';
import Start01 from "../components/Start01"
import Start02 from "../components/Start02"
import Start03 from '../components/Start03';
import Start04 from '../components/Start04';
import Safe01 from '../components/Safe01';
import Safe02 from '../components/Safe02';
import Dangerous01 from "../components/Dangerous01"
import Dangerous02 from "../components/Dangerous02"
import Dangerous03 from "../components/Dangerous03"
import Dangerous04 from "../components/Dangerous04"
import Battle01 from "../components/Battle01"
// import Test from "../components/Test";

const Road1 = () => {
    const [component, setComponent] = useState(1);
    const [maxHp, setMaxHp] = useState((window.localStorage.Endurance * 5) + 50);
    const [actualHp, setActualHp] = useState(maxHp);

    console.log("PV max du personnage =", maxHp)
    console.log("PV actuel du personnage =", actualHp)
    console.log("bugaa", localStorage.getItem('Bandage'))
    const data = window.localStorage
    // console.log("Data = ", window.localStorage)
    // Il faut absolument avoir crée son personnage pour commencer l'aventure
    if (window.localStorage.length >= 9) {
        return (<div>
            <Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
            {component === 1 && <Start01 component={component} setComponent={setComponent} />}
            {/* On obtiens les bandages ici ce qui permet la premiere save */}
            {component === 2 && <Start02 component={component} setComponent={setComponent} />}
            {component === 3 && <Start03 component={component} setComponent={setComponent} />}
            {component === 4 && <Start04 component={component} setComponent={setComponent} />}
            {component === "safe01" && <Safe01 component={component} setComponent={setComponent} />}
            {component === "safe02" && <Safe02 component={component} setComponent={setComponent} />}
            {component === "dangerous01" && <Dangerous01 component={component} setComponent={setComponent} />}
            {component === "dangerous02" && <Dangerous02 component={component} setComponent={setComponent} />}
            {component === "dangerous03" && <Dangerous03 component={component} setComponent={setComponent} />}
            {component === "dangerous04" && <Dangerous04 component={component} setComponent={setComponent} />}
            {component === "battle01" && <Battle01 component={component} setComponent={setComponent} />}
        </div>
        );
    } else {
        window.location.assign('/');
    }
};

export default Road1;