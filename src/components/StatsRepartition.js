import React from "react";
import { useState } from "react";

const StatsRepartition = () => {
    const [count, setCounter] = useState(5);
    const deleteStat = () => {
        setCounter(count - 1)
    }
    const addStat = () => {
        setCounter(count + 1)
    }
    return (
        <div className="statistic--container">
            <form className="statistic_form">
                <button onClick={deleteStat} className="lessAndMore" type="button">-</button>
                <p>{count}</p>
                <button onClick={addStat} className="lessAndMore" type="button">+</button>
            </form>
        </div >
    );
};

export default StatsRepartition;