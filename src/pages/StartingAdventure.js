import React from 'react';
import { useState } from "react";
import StartStats from "../components/StatsRepartition";
import StartWeapons from '../components/StartWeapons';

const StatsRepartitionAtStart = () => {

    const [component, setComponent] = useState(1);

    return (
        <div>
            {component === 1 && <StartStats component={component} setComponent={setComponent} />}
            {component === 2 && <StartWeapons component={component} setComponent={setComponent} />}
            {/* Bouton test */}
            {/* <button onClick={() => setComponent(component === 1 ? 2 : 1)}>test</button> */}
        </div>
    )
}

export default StatsRepartitionAtStart;

