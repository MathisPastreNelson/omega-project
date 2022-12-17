
import React, { useState } from 'react';


const StartWeapons = (component) => {
    const back = () => {
        // On change le Props Ici pour passer au composant précédant
        component.setComponent(2)
    }

    const [selectedWeapon, setSelectedWeapon] = useState('');

    const handleChange = (event) => {
        setSelectedWeapon(event.target.value);
    };

    const handleSave = () => {
        if (!selectedWeapon) {
            alert("Veuillez choisir une arme.")
        }
        else {
            localStorage.setItem('Arme', selectedWeapon);
            // On change le Props Ici pour passer au composant suivant
            component.setComponent(4)
        }
    };

    return (
        <div className="generalContainer">
            <label className='StartWeapons__list'>
                Choisissez votre arme de départ :
                <select required className='textAlign WeaponsChoose' value={selectedWeapon} onChange={handleChange}>
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