import React from 'react';
import { useState } from "react";

// Importation des différents composants
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
import Safe03 from '../components/Safe03';
import RandomFight01 from "../components/RandomFight01"
import Safe04 from "../components/Safe04"
import Merchant01 from "../components/Merchant01"
import Cucked01 from '../components/Cucked01';
import Forest01 from '../components/Forest01';
import Forest02 from '../components/Forest02';
import RandomFight02 from "../components/RandomFight02"
import Forest03 from '../components/Forest03';
import QuestEncounter01 from '../components/QuestEncounter01';
import Forest04 from '../components/Forest04';
import Forest05 from '../components/Forest05';
import Battle02 from '../components/Battle02';
import Forest06 from '../components/Forest06';
import Forest07 from '../components/Forest07';
import Forest08 from '../components/Forest08';
import Forest09 from '../components/Forest09';
import Forest10 from '../components/Forest10';
import Forest11 from '../components/Forest11';
import RandomFight03 from '../components/RandomFight03';
import Forest12 from '../components/Forest12';
import Forest13 from '../components/Forest13';
import Forest14 from '../components/Forest14';
import Forest15 from '../components/Forest15';
import Forest16 from '../components/Forest16';
import Grondar from '../components/Grondar';
import Forest17 from '../components/Forest17';
import Forest18 from '../components/Forest18';
import Forest19 from '../components/Forest19';
import Forest20 from '../components/Forest20';
import Forest21 from '../components/Forest21';
import Forest22 from '../components/Forest22';
import Bivouac01 from '../components/Bivouac01';
import Forest23 from '../components/Forest23';
import Forest24 from '../components/Forest24';
import Forest25 from '../components/Forest25';
import Forest26 from '../components/Forest26';
import Forest27End from '../components/Forest27End';
// import Test from "../components/Test"



const Road1 = () => {
    const [component, setComponent] = useState(1);

    // Les points de vies maximum sont le résultat du nombre d'endurance dans le localStorage et du calcul
    const [maxHp, setMaxHp] = useState((window.localStorage.Endurance * 5) + 50);
    const [actualHp, setActualHp] = useState(maxHp)

    // Importation de toutes les données du localStorage
    const data = window.localStorage
    const save = parseInt(window.localStorage.Save)

    // Il faut absolument avoir crée son personnage pour commencer la Road1
    if (data.length >= 6 && data.length < 12) {
        return (<div>
            <Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
            {/* Sauvegarde de l'aventure */}
            {component === 1 && <Start01 component={component} setComponent={setComponent} />}
            {component === 2 && <Start02 component={component} setComponent={setComponent} />}
            {component === 3 && <Start03 component={component} setComponent={setComponent} />}
            {component === 4 && <Start04 component={component} setComponent={setComponent} />}
            {component === "safe01" && <Safe01 component={component} setComponent={setComponent} />}
            {component === "safe02" && <Safe02 component={component} setComponent={setComponent} />}
            {component === "dangerous01" && <Dangerous01 component={component} setComponent={setComponent} />}
            {component === "dangerous02" && <Dangerous02 component={component} setComponent={setComponent} />}
            {component === "dangerous03" && <Dangerous03 component={component} setComponent={setComponent} />}
            {component === "dangerous04" && <Dangerous04 component={component} setComponent={setComponent} />}
            {component === "battle01" && <Battle01 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
        </div>
        );
    }  /* Sauvegarde de l'aventure attribution du niveau et de l'or */
    else if (save === 0) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
                {component === 1 && <Safe03 component={component} setComponent={setComponent} />}
                {component === "randomFight01" && <RandomFight01 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
                {component === "safe04" && <Safe04 component={component} setComponent={setComponent} />}
                {component === "merchant01" && <Merchant01 data={data} component={component} setComponent={setComponent} />}
                {component === "cucked01" && <Cucked01 component={component} setComponent={setComponent} />}
            </div>
        );
    } else if (save === 1) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
                {component === 1 && <Forest01 component={component} setComponent={setComponent} />}
                {component === "forest02" && < Forest02 component={component} setComponent={setComponent} />}
                {component === "randomFight02" && <RandomFight02 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
                {component === "forest03" && < Forest03 component={component} setComponent={setComponent} />}
                {component === "questEncounter01" && <QuestEncounter01 component={component} setComponent={setComponent} />}
                {component === "forest04" && <Forest04 component={component} setComponent={setComponent} />}
                {component === "forest05" && <Forest05 component={component} setComponent={setComponent} />}
                {component === "battle02" && <Battle02 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
            </div>
        )
    }
    else if (save === 2) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
                {component === 1 && <Forest06 component={component} setComponent={setComponent} />}
                {component === "randomFight02" && <RandomFight02 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
                {component === "forest07" && <Forest07 component={component} setComponent={setComponent} />}
                {component === "forest08" && <Forest08 component={component} setComponent={setComponent} />}
                {component === "forest09" && <Forest09 component={component} setComponent={setComponent} />}
                {component === "forest10" && <Forest10 component={component} setComponent={setComponent} />}
                {component === "forest11" && <Forest11 component={component} setComponent={setComponent} />}
                {component === "randomFight03" && <RandomFight03 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
                {component === "forest12" && <Forest12 component={component} setComponent={setComponent} />}
                {component === "forest13" && <Forest13 data={data} component={component} setComponent={setComponent} />}
                {component === "forest14" && <Forest14 component={component} setComponent={setComponent} />}
                {component === "forest15" && <Forest15 component={component} setComponent={setComponent} />}
                {component === "forest16" && <Forest16 component={component} setComponent={setComponent} />}
                {component === "grondar" && <Grondar component={component} setComponent={setComponent} />}
                {component === "forest17" && <Forest17 component={component} setComponent={setComponent} />}
                {component === "forest18" && <Forest18 component={component} setComponent={setComponent} />}
                {component === "forest19" && <Forest19 component={component} setComponent={setComponent} />}
                {component === "forest20" && <Forest20 component={component} setComponent={setComponent} />}
                {component === "forest21" && <Forest21 component={component} setComponent={setComponent} />}
                {component === "bivouac01" && <Bivouac01 component={component} setComponent={setComponent} />}
            </div>
        )
    } else if (save === 3) {
        return (
            <div>
                < Hud data={data} maxHp={maxHp} actualHp={actualHp} setMaxHp={setMaxHp} setActualHp={setActualHp} />
                {component === 1 && <Forest22 component={component} setComponent={setComponent} />}
                {component === "randomFight02" && <RandomFight02 component={component} setComponent={setComponent} maxHp={maxHp} setMaxHp={setMaxHp} actualHp={actualHp} setActualHp={setActualHp} />}
                {component === "forest23" && <Forest23 component={component} setComponent={setComponent} />}
                {component === "forest24" && <Forest24 component={component} setComponent={setComponent} />}
                {component === "forest25" && <Forest25 component={component} setComponent={setComponent} />}
                {component === "forest26" && <Forest26 component={component} setComponent={setComponent} />}
                {component === "forest27End" && <Forest27End component={component} data={data} setComponent={setComponent} />}
            </div>
        )
    }

    /* Si pas de sauvegarde retour à la page d'accueil*/
    else {
        window.location.assign('/');
    }
};

export default Road1;