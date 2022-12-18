import React from 'react';
import { useEffect } from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Battle01({ component, maxHp, actualHp }) {
    const nextComponentBattle01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("battle01")
    }
    useEffect(() => {
        const interval = setInterval(() => {
            //Math floor pour arrondire Math random pour l'aléatoire
            let damage = Math.floor(Math.random() * (3 + 8))
            let actualHpAfterShock = actualHp - damage
            console.log(actualHpAfterShock)
        }, 4000)
        return () => clearInterval(interval)
    })


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