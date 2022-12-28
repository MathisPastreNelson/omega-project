import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern02(component) {
    const nextComponentTavern03WithBeer = () => {
        window.localStorage.setItem('Beer', "Yes");
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern03")
    }

    const nextComponentTavern03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern03")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Un homme énorme arrive en trombe. Il a la bedaine proéminente et la barbe grisonnante,
                et il porte un tablier qui indique qu'il est le Tavernier. Il s'approche de vous et vous salue d'un sourire jovial.
                "Bonsoir, mon ami ! Qu'est-ce que je vous sers ?", demande-t-il.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern03}>
                    Prendre de l'eau
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern03WithBeer}>
                    Prendre une bière
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern02;