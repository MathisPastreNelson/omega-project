import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Start03(component) {
    const nextComponent = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(4)
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous rangez rapidement votre campement et vérifiez que vous n'oubliez rien d'important avant de vous mettre en route.
                Celui-ci est composé de soins de fortunes et d'un kit pour établir un bivouac.</p>
            <div className='adventure__Button__Container'>
                <button className='adventure__Button' onClick={nextComponent}>
                    Suivant
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}



export default Start03;