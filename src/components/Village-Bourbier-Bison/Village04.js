import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village04(component) {
    const nextComponentVillage05 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village05")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Au centre de la place se trouve une grande fontaine en marbre, avec un jet d'eau qui jaillit du haut d'une statue de la déesse de la nature.
                Des oiseaux viennent boire à la fontaine, et des villageois viennent s'y rafraîchir en cette chaude journée d'été.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage05}>
                    Continuer à marcher
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village04;