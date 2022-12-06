import React from "react";
import { useState } from "react";

const StatsRepartition = () => {
    // States des statistiques
    const [countTotal, setCountTotal] = useState(5);
    const [countStr, setCounterStr] = useState(3);
    const [countAgi, setCounterAgi] = useState(3);
    const [countIntel, setCounterIntel] = useState(3);
    const [countEndu, setCounterEndu] = useState(3);

    // Logique des statistiques
    const deleteStatStr = () => {
        setCounterStr(countStr - 1)
        setCountTotal(countTotal + 1)
    }
    const addStatStr = () => {
        setCounterStr(countStr + 1)
        setCountTotal(countTotal - 1)
        console.log("test")
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
        setCounterStr(3)
        setCounterAgi(3)
        setCounterIntel(3)
        setCounterEndu(3)
    }

    // Rendu
    return (
        <div className="statistic--container">
            <p className="test">Point restants : {countTotal}</p>
            <div className="statistic__unitary">
                <p>Force</p>
                <form className="statistic_form">
                    <button onClick={countStr > 1 ? deleteStatStr : console.log("Cette valeur ne peux pas être inférieur à 1")} className="lessAndMore" type="button">-</button>
                    <p>{countStr}</p>
                    <button onClick={countTotal > 0 ? addStatStr : console.log("Veuillez ne pas dépasser la limite de points")} className="lessAndMore" type="button">+</button>
                </form>
            </div>
            <div className="statistic__unitary">
                <p>Agilité</p>
                <form className="statistic_form">
                    <button onClick={countAgi > 1 ? deleteStatAgi : console.log("Cette valeur ne peux pas être inférieur à 1")} className="lessAndMore" type="button">-</button>
                    <p>{countAgi}</p>
                    <button onClick={countTotal > 0 ? addStatAgi : console.log("Veuillez ne pas dépasser la limite de points")} className="lessAndMore" type="button">+</button>
                </form>
            </div>
            <div className="statistic__unitary">
                <p>Intelligence</p>
                <form className="statistic_form">
                    <button onClick={countIntel > 1 ? deleteStatIntel : console.log("Cette valeur ne peux pas être inférieur à 1")} className="lessAndMore" type="button">-</button>
                    <p>{countIntel}</p>
                    <button onClick={countTotal > 0 ? addStatIntel : console.log("Veuillez ne pas dépasser la limite de points")} className="lessAndMore" type="button">+</button>
                </form>
            </div>
            <div className="statistic__unitary">
                <p>Endurance</p>
                <form className="statistic_form">
                    <button onClick={countEndu > 1 ? deleteEndu : console.log("Cette valeur ne peux pas être inférieur à 1")} className="lessAndMore" type="button">-</button>
                    <p>{countEndu}</p>
                    <button onClick={countTotal > 0 ? addStatEndu : console.log("Veuillez ne pas dépasser la limite de points")} className="lessAndMore" type="button">+</button>
                </form>
            </div>
            <div className="resetButton__container">

                <button className="resetButton" onClick={resetButton} type="button">Reset des points</button>
            </div>
        </div >
    );
};

export default StatsRepartition;