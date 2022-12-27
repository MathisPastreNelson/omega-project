import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest10(component) {
    const nextComponentForest08 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest08")
    }
    const nextComponentForest11 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest11")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Alors que vous vous enfoncez de plus en plus profondément dans la forêt, vous commencez à entendre des bruits étranges qui vous mettent les nerfs à vif.
                Ce sont les cris des animaux sauvages de nuit, qui s'appellent entre eux dans l'obscurité.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest08}>
                    Rebrousser chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentForest11}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest10;