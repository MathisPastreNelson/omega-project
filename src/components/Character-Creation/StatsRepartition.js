import React from "react";
import { useState } from "react";


const StartStats = (component) => {
    // States des statistiques
    const [countTotal, setCountTotal] = useState(5);
    const [countStr, setCounterStr] = useState(5);
    const [countEndu, setCounterEndu] = useState(5);

    // Les changement de states des statistiques sont attribués au click sur les boutons
    const deleteStatStr = () => {
        setCounterStr(countStr - 1)
        setCountTotal(countTotal + 1)
    }
    const addStatStr = () => {
        setCounterStr(countStr + 1)
        setCountTotal(countTotal - 1)
    }
    const deleteEndu = () => {
        setCounterEndu(countEndu - 1)
        setCountTotal(countTotal + 1)
    }
    const addStatEndu = () => {
        setCounterEndu(countEndu + 1)
        setCountTotal(countTotal - 1)
    }
    const resetButton = () => {
        setCountTotal(5)
        setCounterStr(5)
        setCounterEndu(5)
    }

    // Sauvegarde des statistiques dans le localStorage
    const saveStorage = () => {
        localStorage.setItem("Force", countStr)
        localStorage.setItem("Endurance", countEndu)
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(3)
    }

    // Obligation de dépensez tous les points de statistiques
    const spendAllPoint = () => {
        alert("Dépensez tous vos points !")
    }

    return (
        <div className="generalContainer" >
            <p className="textAlign">Séléctionnez vos statistiques de départ</p>
            <p className="restPoint">Point restants : {countTotal}</p>
            <div className="statistic__unitary">
                <p>Force</p>
                <form className="statistic_form">
                    <button onClick={countStr > 5 ? deleteStatStr : null} className="lessAndMore lessColor" type="button">-</button>
                    <p>{countStr}</p>
                    <button onClick={countTotal > 0 ? addStatStr : null} className="lessAndMore moreColor" type="button">+</button>
                </form>
            </div>
            <div className="statistic__unitary">
                <p>Endurance</p>
                <form className="statistic_form">
                    <button onClick={countEndu > 5 ? deleteEndu : null} className="lessAndMore lessColor" type="button">-</button>
                    <p>{countEndu}</p>
                    <button onClick={countTotal > 0 ? addStatEndu : null} className="lessAndMore moreColor" type="button">+</button>
                </form>
            </div>
            <div className="adventure__ChooseButton__Container">
                <button className="adventure__ChooseButton" onClick={resetButton} type="button">Réinitialiser</button>
                <button className="adventure__ChooseButton" onClick={countTotal === 0 ? saveStorage : spendAllPoint} type="button">Ok</button>
            </div>
        </div >
    );
};

export default StartStats;