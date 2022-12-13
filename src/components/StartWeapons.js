import React from 'react';
import { useState } from "react";

const StartWeapons = (component) => {
    const back = () => {
        // On change le Props Ici
        component.setComponent(1)
    }

    const save = () => {
        // On change le Props Ici
        component.setComponent(3)
    }

    const [style, setStyle] = useState("movedComp");
    // const changeStyle = () => {
    //     console.log("you just clicked");
    //     setStyle("movedCompNext");
    // };

    const weapons = [
        { name: 'épée', damage: 10 },
        { name: 'hache', damage: 15 },
        { name: 'arc', damage: 8 },
    ];

    return (
        <div className={style}>
            <div className='StartWeapons__list'>
                <button className='weaponsButtons' type='button'>Epee</button>
                <button className='weaponsButtons' type='button'>Dague</button>
                <button className='weaponsButtons' type='button'>Hache à deux mains</button>
                <button className='weaponsButtons' type='button'>Masse</button>
                <button className='weaponsButtons' type='button'>Arc</button>
                <button className='weaponsButtons' type='button'>Bâton</button>
                <button className="personalButton" onClick={save} type="button">Ok</button>
                {/* Change l'état du props pour revenir au composant précédant */}
                <button className="personalButton" onClick={back} type="button">Retour</button>
            </div>
        </div>
    );
};

export default StartWeapons;