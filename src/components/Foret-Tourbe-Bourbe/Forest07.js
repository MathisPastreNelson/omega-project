import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest07(component) {
    const nextComponentForest08 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest08")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avancez avec assurance, sachant que quoi qu'il arrive, vous êtes capable de surmonter tous les obstacles qui se dresseront sur votre chemin.
                La forêt vous offre de nombreuses merveilles à découvrir et vous êtes impatient de voir ce qui vous attend à chaque tournant.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest08}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest07;