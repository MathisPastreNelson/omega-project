import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Battle01(component) {
    const nextComponentBattle01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("battle01")
    }


    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Combat ici (prochaine maj demain)
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentBattle01}>
                    Engager le combat.
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={nextComponentBattle01}>
                    Engager le combat.
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={nextComponentBattle01}>
                    Engager le combat.
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Battle01;