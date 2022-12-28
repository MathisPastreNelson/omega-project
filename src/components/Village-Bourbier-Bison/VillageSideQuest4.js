import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function VillageSideQuest4(component) {
    const nextComponentSideBoss1 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("sideBoss1")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous êtes en train de pousser l'énorme étagère en bois massif devant l'entrée du tunnel,
                déterminé à bloquer cette porte d'accès aux Glubandurs. Vous savez que c'est la seule solution
                pour mettre fin à cette infestation, et vous êtes prêt à tout pour y parvenir.

                Mais alors que vous poussez de toutes vos forces, vous entendez un grondement sourd qui vous
                fait frémir. Vous vous retournez et vous apercevez une immense araignée géante qui se dresse
                devant vous, ses yeux brillants de haine. C'est la reine des Glubandurs, la créature la plus
                redoutable de toutes.

                Vous êtes paralysé par la peur, mais vous vous ressaisissez rapidement. Vous brandissez votre
                épée et vous vous préparez à affronter cette créature. La reine des Glubandurs gronde de nouveau
                et se jette sur vous, ses mandibules acérées prêtes à vous déchiqueter.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentSideBoss1}>
                    Affronter la bête
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default VillageSideQuest4;