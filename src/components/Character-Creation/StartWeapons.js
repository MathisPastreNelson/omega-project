import React, { useState } from 'react';

const StartWeapons = (component) => {
    const [selectedWeapon, setSelectedWeapon] = useState('');

    const back = () => {
        // On change le Props Ici pour passer au composant précédant
        component.setComponent(2)
    }

    // On récupère la value qui correspond à l'arme choisis
    const handleChange = (event) => {
        setSelectedWeapon(event.target.value);
    };

    // Fonction obligeant l'utilisateur à choisir
    const handleSave = () => {
        if (!selectedWeapon) {
            alert("Veuillez choisir une arme.")
        } else {
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
                    <option value="Hache">Hache</option>
                </select>
            </label>
            <div className="adventure__ChooseButton__Container">
                <button className='adventure__Button' onClick={back}>Retour</button>
                <button className='adventure__Button' onClick={handleSave}>Ok</button>
            </div>
        </div>
    );
};

export default StartWeapons