import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import { useRef } from "react";
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Battle01(component) {
    const { setActualHp } = component;
    const [enemyMaxHp] = useState(50)
    const [enemyHp, setEnemyHp] = useState(50)
    const [damage, setDamage] = useState(0);

    const [buttonAttack1Disabled, setButtonAttack1Disabled] = useState(false);
    const [buttonAttack2Disabled, setButtonAttack2Disabled] = useState(false);
    const [buttonAttack3Disabled, setButtonAttack3Disabled] = useState(false);
    const [buttonAttack1Text, setButtonAttack1Text] = useState('Attaque 1');
    const [buttonAttack2Text, setButtonAttack2Text] = useState('Attaque 2');
    const [buttonAttack3Text, setButtonAttack3Text] = useState('Attaque 3');
    const [running] = useState(true);
    const buttonAttack1 = useRef(null);
    const buttonAttack2 = useRef(null);
    const buttonAttack3 = useRef(null);
    // const nextComponentBattle01 = () => {
    //     component.setComponent("battle01")
    // }


    const attackOne = () => {
        console.log(enemyHp)
        // Générez une valeur aléatoire entre 3 et 10
        const damage = Math.floor(Math.random() * (3 + 4));
        // Cette condition me permet de win le combat
        if (enemyHp - damage < 1) {
            window.location.assign('/GameOver');
        }
        setEnemyHp(prevEnemyHp => prevEnemyHp - damage);

        if (buttonAttack1.current) {
            // Désactivez le bouton et ajoutez la classe de recharge
            setButtonAttack1Disabled(true);
            buttonAttack1.current.classList.add('recharging');
        }

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
                buttonAttack1.current.classList.remove('recharging');
            }
        }, 1000);
    }


    const attackTwo = () => {
        // Générez une valeur aléatoire entre 3 et 10
        const damage = Math.floor(Math.random() * (4 + 7));
        setEnemyHp(prevEnemyHp => prevEnemyHp - damage);

        if (buttonAttack2.current) {
            // Désactivez le bouton et ajoutez la classe de recharge
            setButtonAttack2Disabled(true);
            buttonAttack2.current.classList.add('recharging');
        }

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
                buttonAttack2.current.classList.remove('recharging');
            }
        }, 1000);
    }

    const attackThree = () => {
        // Générez une valeur aléatoire entre 3 et 10
        const damage = Math.floor(Math.random() * (6 + 10));
        setEnemyHp(prevEnemyHp => prevEnemyHp - damage);


        if (buttonAttack3.current) {
            // Désactivez le bouton et ajoutez la classe de recharge
            setButtonAttack3Disabled(true);
            buttonAttack3.current.classList.add('recharging');
        }

        // Initialisez un compteur à 3
        let counter = 12;

        // Mise à jour du texte du bouton avant de démarrer l'intervalle de temps
        setButtonAttack3Text(` Récupération(${counter}s)`);

        // Mise à jour du compteur toutes les secondes
        const interval = setInterval(() => {
            counter--;
            setButtonAttack3Text(` Récupération(${counter}s)`);

            // Si le compteur atteint 0, arrêtez l'intervalle et réactivez le bouton
            if (counter === 0) {
                clearInterval(interval);
                setButtonAttack3Text('Attaque 3');
                setButtonAttack3Disabled(false);
                buttonAttack3.current.classList.remove('recharging');
            }
        }, 1000);
    }


    const healEnemy = () => {
        setEnemyHp(50);
    }


    useEffect(() => {
        const interval = setInterval(() => {
            // Calcul des dégâts
            let newDamage = Math.floor(Math.random() * (5 + 11));
            setDamage(newDamage);

            setActualHp(prevActualHp => {
                if (prevActualHp - newDamage <= 0) {
                    console.log("Vous etes mort");
                    // window.location.assign('/GameOver');
                    return 0;
                } else {
                    console.log("Vous recevez ", newDamage, "dégat");
                    return prevActualHp - newDamage;
                }
            });
        }, 3500);
        return () => clearInterval(interval);
    }, [running, setActualHp]);
    // console.log("maxhp=", component.maxHp)
    // console.log("actualHp=", actualHp)
    // console.log("vie apres dégat=", actualHp)
    // console.log("dégat=", damage)

    return (
        <div className="adventure__Container">
            <div className='textAlign'>
                <p className="fade-in textAlign">
                    Monstre {enemyHp} / {enemyMaxHp} Pv
                </p>
                <p>J'encaisse {damage} dégats</p>

            </div>
            <div className='adventure__ChooseButton__Container'>
                <button ref={buttonAttack1} className='battle__ChooseButton attack' onClick={attackOne} disabled={buttonAttack1Disabled}>
                    {buttonAttack1Text}
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button ref={buttonAttack2} className='battle__ChooseButton attack' onClick={attackTwo} disabled={buttonAttack2Disabled}>
                    {buttonAttack2Text}
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button ref={buttonAttack3} className='battle__ChooseButton attack' onClick={attackThree} disabled={buttonAttack3Disabled}>
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