import React from 'react';
import { useState, useEffect } from "react";

// Différents composants
import Hud from '../components/Hud';
import Start01 from "../components/Start01"
// import Test from "../components/Test";

const Road1 = () => {
    const [component, setComponent] = useState(1);

    const [localStorageValues, setLocalStorageValues] = useState({});

    // Utiliser l'Hook useEffect pour exécuter du code chaque fois que la valeur du local storage change
    useEffect(() => {
        // Obtenir un tableau de toutes les clés du local storage
        const localStorageKeys = Object.keys(window.localStorage);

        // Parcourir le tableau des clés pour obtenir la valeur associée à chaque clé
        localStorageKeys.forEach(key => {
            const localStorageValue = window.localStorage.getItem(key);

            // Mettre à jour l'objet de valeurs du local storage
            setLocalStorageValues({
                ...localStorageValues,
                [key]: localStorageValue
            });
        });
    }, [window.localStorage]); // La condition met à jour le DOM si la valeur du local storage change

    const data = window.localStorage
    console.log("Data = ", data)
    return (
        <div>
            <Hud data={data} />
            {component === 1 && <Start01 component={component} setComponent={setComponent} />}
            {component === 2 && <Start01 component={component} setComponent={setComponent} />}
        </div>
    );
};

export default Road1;