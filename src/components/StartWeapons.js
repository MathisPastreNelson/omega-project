
import React, { useState } from 'react';


const StartWeapons = (component) => {
    const back = () => {
        // On change le Props Ici pour passer au composant précédant
        component.setComponent(1)
    }

    const [style, setStyle] = useState("movedComp");

    const [selectedWeapon, setSelectedWeapon] = useState('');

    const handleChange = (event) => {
        setSelectedWeapon(event.target.value);
    };

    const handleSave = () => {
        localStorage.setItem('selectedWeapon', selectedWeapon);
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(1)
    };

    return (
        <div className="generalContainer">
            <label className='StartWeapons__list'>
                Choisissez votre arme :
                <select value={selectedWeapon} onChange={handleChange}>
                    <option value="">-- Sélectionnez une arme --</option>
                    <option value="Epée">Épée</option>
                    <option value="Dague">Dague</option>
                    <option value="Hache">Hache</option>
                    <option value="Masse">Masse</option>
                    <option value="Arc">Arc</option>
                    <option value="Bâton">Bâton</option>
                </select>
            </label>
            <div className="personalButton__container">
                <button className='personalButton' onClick={back}>Retour</button>
                <button className='personalButton' onClick={handleSave}>Ok</button>
            </div>
        </div>
    );
};

export default StartWeapons