import React from 'react';
import { useEffect } from 'react';
// import { useRef } from "react";
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Battle01(component) {
    const { setActualHp } = component;


    const nextComponentBattle01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("battle01")
    }
    //Math floor pour arrondire Math random pour l'aléatoire

    useEffect(() => {
        const interval = setInterval(() => {
            let damage = Math.floor(Math.random() * (3 + 8))
            setActualHp(prevActualHp => {

                if (prevActualHp - damage <= 0) {
                    clearInterval(interval);
                    console.log("Vous etes mort")
                    window.location.assign('/GameOver');
                    return 0;
                } else {
                    console.log("Vous recevez ", damage, "dégat")
                    return prevActualHp - damage;
                }
            });
        }, 3000);
    });

    // console.log("maxhp=", component.maxHp)
    // console.log("actualHp=", actualHp)
    // console.log("dégat=", damage)
    // console.log("vie apres dégat=", actualHp)

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