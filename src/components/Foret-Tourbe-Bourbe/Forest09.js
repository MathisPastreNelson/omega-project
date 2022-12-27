import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest09(component) {
    const nextComponentForest08 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest08")
    }
    const nextComponentForest10 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest10")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                La nuit, la forêt Tourbe-Bourbe devient un lieu plus dangereux.
                Les créatures sauvages sortent de leur tanière et les bandits sont encore plus audacieux,
                sachant que les voyageurs sont plus vulnérables dans l'obscurité.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest08}>
                    Rebrousser chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentForest10}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest09;