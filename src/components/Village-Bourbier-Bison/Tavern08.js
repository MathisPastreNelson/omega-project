import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern08(component) {
    const nextComponentTavern09 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern09")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                "Il y a un vieil ami à moi qui habite non loin d'ici, dans une petite ferme au bord de la forêt",
                commence le vieil homme. "Il s'appelle Jérôme et c'est un homme bon et généreux, mais il a un problème
                qui le tracasse depuis quelque temps. Il y a quelques semaines, un groupe de voleurs est venu lui dérober
                sa précieuse possession"
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern09}>
                    Demander où se trouve Jérôme
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern08;