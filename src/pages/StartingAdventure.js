import React from 'react';
import { useState } from "react";

// Importation des différents composants
import Hud from "../components/Gameplay-Commun/Hud";
import StartStats from "../components/Character-Creation/StatsRepartition";
import StartWeapons from '../components/Character-Creation/StartWeapons';
import UserNameForm from "../components/Character-Creation/WhatIsYourName";
import ArmorSelector from "../components/Character-Creation/ArmorSelector"
import Help from "../components/Gameplay-Commun/Help"

const NewCharacter = () => {
    const [component, setComponent] = useState(1);
    const data = window.localStorage
    console.log("Data = ", data)

    return (
        <div>
            <Hud data={data} />
            {/* <Test /> */}
            {component === 1 && <UserNameForm component={component} setComponent={setComponent} />}
            {component === 2 && <StartStats component={component} setComponent={setComponent} />}
            {component === 3 && <StartWeapons component={component} setComponent={setComponent} />}
            {component === 4 && <ArmorSelector component={component} setComponent={setComponent} />}
            <Help component={component} />
        </div>
    )
}

export default NewCharacter;

