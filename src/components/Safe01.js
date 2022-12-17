import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Safe01(component) {
    const nextComponentSafe01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("safe02")
    }
    const nextComponentDangerous01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("safe02")
    }


    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous décidez de suivre le chemin de pélerin, rassuré par sa largeur et sa fréquentation.
                Vous avancez tranquillement, admirant les paysages qui défilent sous vos yeux.

                Soudain, vous entendez un bruit de pas derrière vous et vous vous retournez pour voir un vieil homme qui vous suit à grand-peine.
                Il semble essoufflé et en sueur, et vous lui demandez s'il a besoin d'aide.

                Le vieil homme vous explique qu'il est à la recherche de sa fille Clarisse, partie la veille à la recherche de "Shlabodules",
                une plante réputée pour ses vertus nourrissantes. Il vous implore de l'aider à la retrouver et vous hésitez un instant, ne sachant quoi faire.

                Dois-je abandonner ma quête et aider ce vieil homme à retrouver sa fille ?
                Ou bien dois-je poursuivre mon voyage et espérer que tout se passera bien pour lui ? La décision vous appartient,
                et vous devrez en assumer les conséquences.


            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentSafe01}>
                    Refuser d'aider
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentDangerous01}>
                    Accepter d'aider
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Safe01;