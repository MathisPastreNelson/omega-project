import React from 'react';

const Help = (component) => {

    // Ce composant s'adapte en fonction du composant actif
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
                <p className='textAlign'>La force détermine tes dégats à l'épée et à la hache.</p>
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
                <p className='textAlign'>Une armure légère augmente vos dégats.</p>
                <p className='textAlign'>Une armure lourde augmente votre défense.</p>
            </div>
        );
    }

};

export default Help;