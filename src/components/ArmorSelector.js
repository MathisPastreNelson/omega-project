import React, { useState } from 'react';

function ArmorSelector(component) {
    // Déclarer une variable d'état pour stocker le type d'armure sélectionné
    const [selectedArmor, setSelectedArmor] = useState('tissu');

    // On récupère la value qui correspond à l'armure choisis
    const handleChange = event => {
        setSelectedArmor(event.target.value);
    };

    // Enregistrer la sélection dans le local storage
    const handleSave = () => {
        window.localStorage.setItem('Torse', "Haubert de " + selectedArmor);
        window.localStorage.setItem('Jambe', "Jambière de " + selectedArmor);
        // Si j'ai plus de 6 data dans le localStorage je peux continuer l'aventure
        if (window.localStorage.length >= 6) {
            window.location.assign('/road1');
        } else {
            component.setComponent(1)
        }
    };

    return (
        <div className='generalContainer textAlign'>
            <label className='armorChoose__container'>
                Choisissez votre type d'armure :
                <select className='armorChoose' value={selectedArmor} onChange={handleChange}>
                    <option value="tissu">Tenue en tissu</option>
                    <option value="maille">Tenue en maille</option>
                </select>
            </label>
            <p className='textAlign'>Vous commencerez avec une tenue en {selectedArmor}.</p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__Button' onClick={handleSave}>Commencer</button>
            </div>
        </div>
    );
}

export default ArmorSelector;