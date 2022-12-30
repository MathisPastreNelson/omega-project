import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaFulcrum } from 'react-icons/fa';

function Village09(component) {
    const nextComponentVillage10 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village10")
    }
    const nextComponentRandomBattle04 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomBattle04")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous descendez les pentes de la rivière et avancez dans l'eau fraîche.
                L'eau vous arrive aux chevilles, puis aux genoux, et vous sentez l'eau glaciale vous envahir.
                Vous avancez lentement, prenant soin de ne pas glisser sur les cailloux et les rochers qui jonchent le fond de la rivière.
                Vous atteignez enfin l'autre rive et sortez de l'eau, soulagé de retrouver le sol ferme sous vos pieds.
                Vous vous secouez pour vous débarrasser de l'eau qui couvre votre corps et vous regardez autour de vous,
                curieux de découvrir ce qui vous attend.
                Vous apercevez un groupe de Glubandurs qui se nourrissent de fruits sauvages.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage10}>
                    Continuer de suivre les empreintes
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

export default Village09;