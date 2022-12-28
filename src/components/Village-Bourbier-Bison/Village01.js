import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village01(component) {
    const nextComponentVillage02 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village02")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Le village de Bourbier-Bison est un petit hameau perdu au milieu de la campagne,
                une poignée de maisons de pierre et de bois regroupées autour d'une place centrale où se trouve une fontaine.
                Les rues sont étroites et sinueuses, bordées de jardins potagers et de maisons paisibles.
                L'atmosphère qui règne ici est celle de la tranquillité et de la sérénité, un sentiment de paix qui se ressent dans
                les échanges et les discussions entre les habitants du village
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage02}>
                    Continuer à marcher
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village01;