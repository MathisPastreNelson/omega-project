import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village11(component) {
    const nextComponentVillage12 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village12")
    }
    const nextComponentVillage10 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village10")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Soudain, vous entendez un bruit devant vous. Vous vous figez sur place et tendez l'oreille,
                essayant de comprendre ce qui se passe. Vous entendez des bruits de pas et des chuchotements,
                et vous comprenez que vous êtes tombé sur les deux bandits.
                Vous sortez votre arme et avancez lentement, prêt à passer à l'attaque.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage12}>
                    Avancer
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage10}>
                    Revenir en arrière discrement
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village11;