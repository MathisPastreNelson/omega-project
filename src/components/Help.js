import React from 'react';
import { useState, useEffect } from "react";

const Help = (component) => {

    const actualComponent = component.component

    if (actualComponent === 1) {
        return (
            <div className='help__Container'>
                <p className='textAlign'>Le nom de ton personnage n'est pas partagé.. Fait toi plaisir.</p>
            </div>
        );
    }
    else if (actualComponent === 2) {
        return (
            <div className='help__Container'>
                <p className='textAlign'>La force détermine tes dégats au corps à corps.</p>
                <p className='textAlign'>L'agilité détermine tes chances de coups critiques.</p>
                <p className='textAlign'>L'intelligence détermine tes dégats magiques.</p>
                <p className='textAlign'>L'endurance détermine ta santé maximum.</p>
            </div>
        );
    }
    else if (actualComponent === 3) {
        return (
            <div className='help__Container'>
                <p className='textAlign'>Choisissez l'arme de votre début d'aventure.</p>
            </div>
        );
    }
    else if (actualComponent === 4) {
        return (
            <div className='help__Container'>
                <p className='textAlign'>Une armure légère augmente vos dégats, une armure lourde augmente votre défense, une armure moyenne est équilibrée.</p>
            </div>
        );
    }

};

export default Help;