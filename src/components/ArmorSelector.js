import React, { useState } from 'react';

function ArmorSelector(component) {
    // Déclarer une variable d'état pour stocker le type d'armure sélectionné
    const [selectedArmor, setSelectedArmor] = useState('tissu');

    // Gérer les changements de sélection dans la balise select
    const handleChange = event => {
        setSelectedArmor(event.target.value);
    };

    // Enregistrer la sélection dans le local storage
    const handleSave = () => {
        window.localStorage.setItem('Casque', "Casque de " + selectedArmor);
        window.localStorage.setItem('Torse', "Haubert de " + selectedArmor);
        window.localStorage.setItem('Jambe', "Jambière de " + selectedArmor);
        // console.log("Combien de stat ?", window.localStorage.length)
        if (window.localStorage.length >= 9) {
            window.location.assign('/omega-project/road1');
        } else {
            component.setComponent(1)
        }
    };

    // Afficher le composant
    return (
        <div className='generalContainer textAlign'>
            <label>
                Choisissez votre type d'armure :
                <select className='armorChoose' value={selectedArmor} onChange={handleChange}>
                    <option value="tissu">Tenue en tissu</option>
                    <option value="cuir">Tenue en cuir</option>
                    <option value="maille">Tenue en maille</option>
                </select>
            </label>
            <p className='textAlign'>Vous commencerez avec une tenue en {selectedArmor}.</p>
            <button className='personalButton' onClick={handleSave}>Commencer</button>
        </div>
    );
}

export default ArmorSelector;