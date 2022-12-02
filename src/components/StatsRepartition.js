import React from "react";
import { useState } from "react";

const StatsRepartition = () => {
    // States des statistiques
    const [countStr, setCounterStr] = useState(5);
    const [countAgi, setCounterAgi] = useState(5);
    const [countIntel, setCounterIntel] = useState(5);
    const [countEndu, setCounterEndu] = useState(5);

    // Logique des statistiques
    const deleteStatStr = () => {
        setCounterStr(countStr - 1)
    }
    const addStatStr = () => {
        setCounterStr(countStr + 1)
    }
    const deleteStatAgi = () => {
        setCounterAgi(countAgi - 1)
    }
    const addStatAgi = () => {
        setCounterAgi(countAgi + 1)
    }
    const deleteStatIntel = () => {
        setCounterIntel(countIntel - 1)
    }
    const addStatIntel = () => {
        setCounterIntel(countIntel + 1)
    }
    const deleteEndu = () => {
        setCounterEndu(countEndu - 1)
    }
    const addStatEndu = () => {
        setCounterEndu(countEndu + 1)
    }

    return (
        <div className="statistic--container">
            <div className="statistic__unitary">
                <p>Force</p>
                <form className="statistic_form">
                    <button onClick={deleteStatStr} className="lessAndMore" type="button">-</button>
                    <p>{countStr}</p>
                    <button onClick={addStatStr} className="lessAndMore" type="button">+</button>
                </form>
            </div>
            <div className="statistic__unitary">
                <p>Agilité</p>
                <form className="statistic_form">
                    <button onClick={deleteStatAgi} className="lessAndMore" type="button">-</button>
                    <p>{countAgi}</p>
                    <button onClick={addStatAgi} className="lessAndMore" type="button">+</button>
                </form>
            </div>
            <div className="statistic__unitary">
                <p>Intelligence</p>
                <form className="statistic_form">
                    <button onClick={deleteStatIntel} className="lessAndMore" type="button">-</button>
                    <p>{countIntel}</p>
                    <button onClick={addStatIntel} className="lessAndMore" type="button">+</button>
                </form>
            </div>
            <div className="statistic__unitary">
                <p>Endurance</p>
                <form className="statistic_form">
                    <button onClick={deleteEndu} className="lessAndMore" type="button">-</button>
                    <p>{countEndu}</p>
                    <button onClick={addStatEndu} className="lessAndMore" type="button">+</button>
                </form>
            </div>
        </div >
    );
};

export default StatsRepartition;