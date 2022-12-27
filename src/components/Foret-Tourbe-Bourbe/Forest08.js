import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest08(component) {
    const nextComponentForest09 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest09")
    }
    const nextComponentBivouac = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("bivouac01")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Le soleil commence à descendre à l'horizon et vous vous demandez si vous ne devriez pas songer à monter un bivouac
                pour passer la nuit en toute sécurité. Vous êtes épuisé par votre longue marche et vous avez besoin de repos.
                Mais d'un autre côté, vous êtes curieux de savoir ce qui vous attend plus loin dans la forêt.

                Vous hésitez un instant, puis décidez de poursuivre votre route. Vous êtes persuadé que vous pourrez traverser
                la forêt de nuit sans problème et que vous arriverez à destination avant l'aube.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentBivouac}>
                    Monter un bivouac.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentForest09}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest08;