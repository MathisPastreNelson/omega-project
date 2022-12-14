import React from 'react';
import { useState } from "react";
import Hud from "../components/Hud";
import StartStats from "../components/StatsRepartition";
import StartWeapons from '../components/StartWeapons';

const NewCharacter = () => {

    const [component, setComponent] = useState(1);
    const [data, setData] = useState([]);


    return (
        <div>
            <Hud />
            {component === 1 && <StartStats component={component} setComponent={setComponent} />}
            {component === 2 && <StartWeapons component={component} setComponent={setComponent} />}
            {/* Bouton test */}
            {/* <button onClick={() => setComponent(component === 1 ? 2 : 1)}>test</button> */}
        </div>
    )
}

export default NewCharacter;

