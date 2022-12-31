import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaFulcrum } from 'react-icons/fa';

function Village13(component) {
    const nextComponentVillage14 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village14")
    }
    const nextComponentRandomBattle04 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomBattle04")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                L'homme tombe au sol, vaincu, vous remarquez une petite boîte à bijou attachée à la ceinture de l'homme,
                et décidez de la récupérer. Vous pouvez désormais traverser la rivière sans encombre et à regagner
                le village de Bourbier-Bison.
                Vous pouvez aussi profiter du coin semblant un peu hostile pour affronter quelques Glubandurs.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage14}>
                    Retourner chez Jérome
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={nextComponentRandomBattle04}>
                    Chasser les araignées
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village13;