import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import { useRef } from "react";
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Fight01(component) {
    const { setActualHp } = component;
    const [enemyMaxHp] = useState(50)
    const [enemyHp, setEnemyHp] = useState(50)
    // le state des dégats de l'adversaire
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

    const forceNotParsed = window.localStorage.getItem("Force")
    const force = parseInt(forceNotParsed)

    // Les gains apres combat sont ici
    let goldEarned = Math.floor(Math.random() * 3) + 1;
    let xpEarned = Math.floor(Math.random() * 2) + 1;

    const [randomNumber1, setRandomNumber1] = useState(null);
    const [randomNumber2, setRandomNumber2] = useState(null);
    const [randomNumber3, setRandomNumber3] = useState(null);
    function getRandomNumber1() {
        // Epée
        if (window.localStorage.getItem("Arme") === "Epée") {
            const newRandomNumber1 = Math.floor(Math.random() * force);
            setRandomNumber1(newRandomNumber1);
            return newRandomNumber1;
        }
        // Hache
        else if (window.localStorage.getItem("Arme") === "Hache") {
            const newRandomNumber1 = Math.floor(Math.random() * force);
            setRandomNumber1(newRandomNumber1);
            return newRandomNumber1;
        }
    }


    function getRandomNumber2() {
        // Epée
        if (window.localStorage.getItem("Arme") === "Epée") {
            const newRandomNumber2 = Math.floor(Math.random() * force) + 2;
            setRandomNumber2(newRandomNumber2);
            return newRandomNumber2;
        }
        // Hache
        else if (window.localStorage.getItem("Arme") === "Hache") {
            const newRandomNumber2 = Math.floor(Math.random() * force) + 2;
            setRandomNumber2(newRandomNumber2);
            return newRandomNumber2;
        }
    }

    function getRandomNumber3() {
        // Epée
        if (window.localStorage.getItem("Arme") === "Epée") {
            const newRandomNumber3 = Math.floor(Math.random() * force) + 5;
            setRandomNumber3(newRandomNumber3);
            return newRandomNumber3;
        }
        // Hache
        else if (window.localStorage.getItem("Arme") === "Hache") {
            const newRandomNumber3 = Math.floor(Math.random() * force) + 5;
            setRandomNumber3(newRandomNumber3);
            return newRandomNumber3;
        }
    }

    const attackOne = () => {
        // Cette condition me permet de win le combat
        if (enemyHp - getRandomNumber1() < 1) {
            localStorage.setItem("Or", goldEarned)
            localStorage.setItem("Xp", xpEarned)
            window.location.assign('/SuccessBattle01');
        }
        setEnemyHp(prevEnemyHp => prevEnemyHp - getRandomNumber1());

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
        setEnemyHp(prevEnemyHp => prevEnemyHp - getRandomNumber2());

        if (enemyHp - getRandomNumber2() < 1) {
            localStorage.setItem("Or", goldEarned)
            localStorage.setItem("Xp", xpEarned)
            window.location.assign('/SuccessBattle01');
        }

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
        setEnemyHp(prevEnemyHp => prevEnemyHp - getRandomNumber3());

        if (enemyHp - getRandomNumber3() < 1) {
            localStorage.setItem("Or", goldEarned)
            localStorage.setItem("Xp", xpEarned)
            window.location.assign('/SuccessBattle01');
        }


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


    // const LeBoutonTriche = () => {
    //     // Générez une valeur aléatoire entre 3 et 10
    //     const damage = Math.floor(Math.random() * (800 + 900));
    //     setEnemyHp(prevEnemyHp => prevEnemyHp - damage);

    //     if (enemyHp - damage < 1) {
    //         localStorage.setItem("Or", totalGoldNew)
    //         localStorage.setItem("Xp", totalXpNew)
    //         window.location.assign('/SuccessBattle');
    //     }


    //     if (buttonAttack3.current) {
    //         // Désactivez le bouton et ajoutez la classe de recharge
    //         setButtonAttack3Disabled(true);
    //         buttonAttack3.current.classList.add('recharging');
    //     }

    //     // Initialisez un compteur à 3
    //     let counter = 12;

    //     // Mise à jour du texte du bouton avant de démarrer l'intervalle de temps
    //     setButtonAttack3Text(` Récupération(${counter}s)`);

    //     // Mise à jour du compteur toutes les secondes
    //     const interval = setInterval(() => {
    //         counter--;
    //         setButtonAttack3Text(` Récupération(${counter}s)`);

    //         // Si le compteur atteint 0, arrêtez l'intervalle et réactivez le bouton
    //         if (counter === 0) {
    //             clearInterval(interval);
    //             setButtonAttack3Text('Attaque 3');
    //             setButtonAttack3Disabled(false);
    //             buttonAttack3.current.classList.remove('recharging');
    //         }
    //     }, 1000);
    // }


    useEffect(() => {
        const interval = setInterval(() => {
            // Calcul des dégâts
            let newDamage = Math.floor(Math.random() * (5 + 11));
            setDamage(newDamage);

            setActualHp(prevActualHp => {
                if (prevActualHp - newDamage <= 0) {
                    console.log("Vous etes mort");
                    window.location.assign('/GameOver');
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
        <div className="battle__Container">
            <div className='textAlign'>
                <p className="fade-in textAlign">
                    Monstre {enemyHp} / {enemyMaxHp} Pv
                </p>
                <p>J'encaisse {damage} dégats</p>
                <p>J'inflige {randomNumber1} dégats</p>
                <p>J'inflige {randomNumber2} dégats</p>
                <p>J'inflige {randomNumber3} dégats</p>
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
            {/* <button className='battle__ChooseButton' onClick={LeBoutonTriche}>
                CHEATBUTTON
                <FaFulcrum className='adventure__Button__Arrow' />
            </button> */}
        </div>
    );
}

export default Fight01;