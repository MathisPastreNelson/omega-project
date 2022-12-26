import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaFulcrum } from 'react-icons/fa';

function Forest13(component) {
    let parsedOr = parseInt(component.data.Or)
    console.log(parsedOr)
    const nextComponentForest14 = () => {
        localStorage.setItem("Or", parsedOr - 20)
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest14")
    }
    const nextComponentRandomBattle03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomFight03")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous arrivez enfin devant une muraille de bois qui vous sépare du feu de camp.
                Vous êtes à bout de souffle et vous êtes couvert de sueur, mais vous êtes soulagé d'avoir réussi à vous échapper du garou-loup.

                Vous vous apprêtez à frapper à la porte pour demander de l'aide, lorsque vous entendez une voix crier de l'autre côté :
                "L'entrée, c'est 20 pièces d'or !"
            </p>
            <div className='adventure__ChooseButton__Container'>
                {parsedOr >= 20 && <button className='adventure__ChooseButton' onClick={nextComponentForest14}>
                    Lui ordonné d'ouvrir en lui jetant votre bourse
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>}
                <button className='battle__ChooseButton' onClick={nextComponentRandomBattle03}>
                    " Plutôt mourrir !"
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest13;