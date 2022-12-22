import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaFulcrum } from 'react-icons/fa';

function Safe03(component) {
    const nextComponentRandomFight01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomFight01")
    }
    const nextComponentSafe04 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("safe04")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Félicitations, vous avez remporté votre combat !
                Votre bravoure et votre habileté au combat ont été mises à l'épreuve et vous avez réussi à triompher de votre adversaire.
                Vous pouvez être fier de vous et de votre performance.
                Maintenant, vous vous rendez compte que cet environnement est hostile et propice à un entraînement intense.
                Vous vous demandez si vous devriez rester dans les parages pour progresser encore plus, ou si vous devriez continuer votre route.
                Quelle décision allez-vous prendre ?
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentRandomFight01}>
                    Continuer les combats.
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>

                <button className='adventure__ChooseButton' onClick={nextComponentSafe04}>
                    Continuer la route
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Safe03;