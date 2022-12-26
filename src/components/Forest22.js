import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaFulcrum } from 'react-icons/fa';

function Forest22(component) {
    const nextComponentForest23 = () => {
        component.setComponent("forest23")
    }

    const nextComponentRandomFight02 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomFight02")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                L'aube se lève sur la forêt Tourbe-Bourbe, baignant les arbres d'une lumière dorée.
                Les oiseaux chantent leur douce mélodie, saluant le nouveau jour qui commence.
                La rosée scintille sur les feuilles et les brins d'herbe, comme autant de diamants étincelants.
                Le jour vous permet d'aperçevoir une tanière de rats bipèdes non loin.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest23}>
                    Continuer
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={nextComponentRandomFight02}>
                    Affronter quelques rats..
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest22;