import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village03(component) {
    const nextComponentVillage04 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village04")
    }
    const nextComponentMerchant01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("merchant01")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avancez dans la rue principale, admirant les maisons en bois qui bordent la route.
                Vous êtes étonné de voir à quel point le village est calme et paisible,
                et vous vous demandez si vous n'avez pas commis une erreur en venant ici.
                Soudain, vous apercevez une petite échoppe qui semble être le seul commerce du village.
                Vous pouvez vous approcher et jeter un coup d'œil à l'intérieur.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentMerchant01}>
                    Aller voir l'échoppe
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage04}>
                    Continuer à marcher
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village03;