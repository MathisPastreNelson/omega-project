import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village14(component) {
    const nextComponentVillage15 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village15")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous faites votre retour chez Jérome, le fermier qui vous a demandé de l'aide pour retrouver ses biens volés.
                Vous avez réussi à suivre les traces des bandits jusqu'à leur cachette,
                et vous avez récupéré une boîte à bijou sur l'un d'entre eux.
                Vous êtes impatients de remettre cette boîte à Jérome et de lui annoncer la nouvelle de votre victoire.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage15}>
                    Remettre la boîte
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village14;