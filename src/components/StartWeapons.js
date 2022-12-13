import React from 'react';
import { useState } from "react";

const StartWeapons = (props) => {
    const test = () => {
        alert("Dépensez tous vos points !")
    }

    const [style, setStyle] = useState("movedComp");
    const changeStyle = () => {
        console.log("you just clicked");
        setStyle("movedCompNext");
    };

    return (
        <div className={style}>
            <div className='StartWeapons__list'>
                <button className='weaponsButtons' type='button'>Epee</button>
                <button className='weaponsButtons' type='button'>Dague</button>
                <button className='weaponsButtons' type='button'>Hache à deux mains</button>
                <button className='weaponsButtons' type='button'>Masse</button>
                <button className='weaponsButtons' type='button'>Arc</button>
                <button className='weaponsButtons' type='button'>Bâton</button>
                <button className="personalButton" onClick={test} type="button">Ok</button>
                {/* Change l'état du props pour revenir au composant précédant */}
                <button className="personalButton" onClick={props.handleClick("SetupStats")} type="button">Retour</button>
            </div>
        </div>
    );
};

export default StartWeapons;