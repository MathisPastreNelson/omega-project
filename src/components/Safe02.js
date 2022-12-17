import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Safe02(component) {
    const nextComponentDangerous03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("dangerous03")
    }


    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                "Ah oui, bien sûr, vous êtes trop occupés à courir après votre propre petit bonheur pour vous préoccuper des
                autres.
                Vous êtes vraiment pitoyable."
                A la suite de ces remarques désobligeante vous reprenez votre route... Après tout vous n'êtes pas au service du
                premier venu...
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentDangerous03}>
                    Continuer la route
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Safe02;