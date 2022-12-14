import React from 'react';
import { useState } from "react";

const LocalStorageData = () => {
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        // Récupération de toutes les données du localStorage
        const data = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            data[key] = localStorage.getItem(key);
        }

        // Mise à jour de l'état du composant avec les données récupérées
        setData(data);
    }, []);
    console.log(data)


    return (
        <div>
            <div>
                <p>Force : {data.Force}</p>
                <p>Agilité : {data.Agilité}</p>
                <p>Intelligence : {data.Intelligence}</p>
                <p>Endurance : {data.Endurance}</p>
            </div>
            <div>
                <p>Arme : {data.selectedWeapon}</p>
            </div>
        </div>
    );
}

export default LocalStorageData