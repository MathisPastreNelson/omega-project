import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village10(component) {
    const nextComponentVillage11 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village11")
    }
    const nextComponentVillage10Alt = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village10Alt")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avancez encore un peu et remarquez que les empreintes se divisent en deux groupes.
                L'un des groupes semble comprendre les empreintes d'un homme et d'une femme,
                tandis que l'autre ne comprend qu'un seul individu. Vous hésitez un instant.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage11}>
                    Suivre l'empreinte double
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage10Alt}>
                    Suivre l'individu seul
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village10;