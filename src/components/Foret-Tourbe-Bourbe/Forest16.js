import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest16(component) {
    const nextComponentGrondar = () => {
        component.setComponent("grondar")
    }
    const nextComponentForest17 = () => {
        component.setComponent("forest17")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Près du feu de camp, vous apercevez une vieille femme assise sur un tabouret.
                Elle est vêtue de haillons et elle a l'air très âgée, mais ses yeux brillent d'une lumière intérieure qui vous étonne.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentGrondar}>
                    Parler à Grondar
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentForest17}>
                    Remercier Grondar et se rapprocher du feu
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest16;