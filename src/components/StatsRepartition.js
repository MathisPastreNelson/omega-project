import React from "react";
import { useState } from "react";


const StartStats = (component) => {
    // States des statistiques
    const [countTotal, setCountTotal] = useState(5);
    const [countStr, setCounterStr] = useState(5);
    const [countAgi, setCounterAgi] = useState(5);
    const [countIntel, setCounterIntel] = useState(5);
    const [countEndu, setCounterEndu] = useState(5);

    const deleteStatStr = () => {
        setCounterStr(countStr - 1)
        setCountTotal(countTotal + 1)
    }
    const addStatStr = () => {
        setCounterStr(countStr + 1)
        setCountTotal(countTotal - 1)
    }
    const deleteStatAgi = () => {
        setCounterAgi(countAgi - 1)
        setCountTotal(countTotal + 1)
    }
    const addStatAgi = () => {
        setCounterAgi(countAgi + 1)
        setCountTotal(countTotal - 1)
    }
    const deleteStatIntel = () => {
        setCounterIntel(countIntel - 1)
        setCountTotal(countTotal + 1)
    }
    const addStatIntel = () => {
        setCounterIntel(countIntel + 1)
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
        setCounterAgi(5)
        setCounterIntel(5)
        setCounterEndu(5)
    }

    const saveStorage = () => {
        localStorage.setItem("Force", countStr)
        localStorage.setItem("Agilité", countAgi)
        localStorage.setItem("Intelligence", countIntel)
        localStorage.setItem("Endurance", countEndu)
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(3)
    }

    const spendAllPoint = () => {
        alert("Dépensez tous vos points !")
    }


    // Rendu
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
                <p>Agilité</p>
                <form className="statistic_form">
                    <button onClick={countAgi > 5 ? deleteStatAgi : null} className="lessAndMore lessColor" type="button">-</button>
                    <p>{countAgi}</p>
                    <button onClick={countTotal > 0 ? addStatAgi : null} className="lessAndMore moreColor" type="button">+</button>
                </form>
            </div>
            <div className="statistic__unitary">
                <p>Intelligence</p>
                <form className="statistic_form">
                    <button onClick={countIntel > 5 ? deleteStatIntel : null} className="lessAndMore lessColor" type="button">-</button>
                    <p>{countIntel}</p>
                    <button onClick={countTotal > 0 ? addStatIntel : null} className="lessAndMore moreColor" type="button">+</button>
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
            <div className="personalButton__container">
                <button className="personalButton" onClick={resetButton} type="button">Réinitialiser</button>
                <button className="personalButton" onClick={countTotal === 0 ? saveStorage : spendAllPoint} type="button">Ok</button>
            </div>
        </div >
    );
};

export default StartStats;