import React from 'react';
import { useEffect, useState } from 'react';
// import { useRef } from "react";
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Battle01(component) {
    const { setActualHp } = component;
    const [enemyMaxHp] = useState(50)
    const [enemyHp, setEnemyHp] = useState(50)

    const [buttonAttack1Disabled, setButtonAttack1Disabled] = useState(false);
    const [buttonAttack2Disabled, setButtonAttack2Disabled] = useState(false);
    const [buttonAttack3Disabled, setButtonAttack3Disabled] = useState(false);
    const [buttonAttack1Text, setButtonAttack1Text] = useState('Attaque 1');
    const [buttonAttack2Text, setButtonAttack2Text] = useState('Attaque 2');
    const [buttonAttack3Text, setButtonAttack3Text] = useState('Attaque 3');
    const [running] = useState(true);
    // const nextComponentBattle01 = () => {
    //     component.setComponent("battle01")
    // }


    const attackOne = () => {
        // Générez une valeur aléatoire entre 3 et 10
        const damage = Math.floor(Math.random() * (3 + 4));
        setEnemyHp(prevEnemyHp => prevEnemyHp - damage);

        // Désactivez le bouton
        setButtonAttack1Disabled(true);

        // Initialisez un compteur à 3
        let counter = 3;

        // Mise à jour du texte du bouton avant de démarrer l'intervalle de temps
        setButtonAttack1Text(` Récupération(${counter}s)`);

        // Mise à jour du compteur toutes les secondes
        const interval = setInterval(() => {
            counter--;
            setButtonAttack1Text(` Récupération(${counter}s)`);

            // Si le compteur atteint 0, arrêtez l'intervalle et réactivez le bouton
            if (counter === 0) {
                clearInterval(interval);
                setButtonAttack1Text('Attaque 1');
                setButtonAttack1Disabled(false);
            }
        }, 1000);
    }


    const attackTwo = () => {
        // Générez une valeur aléatoire entre 3 et 10
        const damage = Math.floor(Math.random() * (4 + 7));
        setEnemyHp(prevEnemyHp => prevEnemyHp - damage);

        // Désactivez le bouton
        setButtonAttack2Disabled(true);

        // Initialisez un compteur à 3
        let counter = 6;

        // Mise à jour du texte du bouton avant de démarrer l'intervalle de temps
        setButtonAttack2Text(` Récupération(${counter}s)`);

        // Mise à jour du compteur toutes les secondes
        const interval = setInterval(() => {
            counter--;
            setButtonAttack2Text(` Récupération(${counter}s)`);

            // Si le compteur atteint 0, arrêtez l'intervalle et réactivez le bouton
            if (counter === 0) {
                clearInterval(interval);
                setButtonAttack2Text('Attaque 2');
                setButtonAttack2Disabled(false);
            }
        }, 1000);
    }

    const attackThree = () => {
        // Générez une valeur aléatoire entre 3 et 10
        const damage = Math.floor(Math.random() * (6 + 10));
        setEnemyHp(prevEnemyHp => prevEnemyHp - damage);

        // Désactivez le bouton
        setButtonAttack3Disabled(true);

        // Initialisez un compteur à 3
        let counter = 12;

        // Mise à jour du texte du bouton avant de démarrer l'intervalle de temps
        setButtonAttack3Text(` Récupération(${counter}s)`);

        // Mise à jour du compteur toutes les secondes
        const interval = setInterval(() => {
            counter--;
            setButtonAttack1Text(` Récupération(${counter}s)`);

            // Si le compteur atteint 0, arrêtez l'intervalle et réactivez le bouton
            if (counter === 0) {
                clearInterval(interval);
                setButtonAttack3Text('Attaque 3');
                setButtonAttack3Disabled(false);
            }
        }, 1000);
    }


    const healEnemy = () => {
        setEnemyHp(50);
    }



    useEffect(() => {
        const interval = setInterval(() => {
            //Math floor pour arrondire Math random pour l'aléatoire
            let damage = Math.floor(Math.random() * (5 + 11))
            setActualHp(prevActualHp => {
                if (prevActualHp - damage <= 0) {
                    console.log("Vous etes mort")
                    // window.location.assign('/GameOver');
                    return 0;
                } else {
                    console.log("Vous recevez ", damage, "dégat")
                    return prevActualHp - damage;
                }
            });
        }, 3500);
        return () => clearInterval(interval);
    }, [running, setActualHp]);
    // console.log("maxhp=", component.maxHp)
    // console.log("actualHp=", actualHp)
    // console.log("dégat=", damage)
    // console.log("vie apres dégat=", actualHp)

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Monstre {enemyHp} / {enemyMaxHp} Pv
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={attackOne} disabled={buttonAttack1Disabled}>
                    {buttonAttack1Text}
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={attackTwo} disabled={buttonAttack2Disabled}>
                    {buttonAttack2Text}
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={attackThree} disabled={buttonAttack3Disabled}>
                    {buttonAttack3Text}
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
            <button className='battle__ChooseButton' onClick={healEnemy}>
                Heal test button
                <FaFulcrum className='adventure__Button__Arrow' />
            </button>
        </div>
    );
}

export default Battle01;