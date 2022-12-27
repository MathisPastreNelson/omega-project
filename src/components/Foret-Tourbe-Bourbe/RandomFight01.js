import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import { useRef } from "react";
// Import FontAwesome Component
import { FaPhoenixSquadron, FaAudible, FaServicestack, FaSith } from 'react-icons/fa';

function RandomFight01(component) {
    const { setActualHp } = component;
    const [enemyMaxHp] = useState(50)
    const [enemyHp, setEnemyHp] = useState(50)
    // le state des dégats de l'adversaire
    const [damage, setDamage] = useState(0);

    // Le state de l'activation des boutons attaques
    const [buttonAttack1Disabled, setButtonAttack1Disabled] = useState(false);
    const [buttonAttack2Disabled, setButtonAttack2Disabled] = useState(false);
    const [buttonAttack3Disabled, setButtonAttack3Disabled] = useState(false);
    const [buttonAlternativeAttack3Disabled, setButtonAlternativeAttack3Disabled] = useState(enemyHp > (enemyMaxHp / 4));

    // Le state du textes des boutons attaques
    const [buttonAttack1Text, setButtonAttack1Text] = useState('Frappe rapide');
    const [buttonAttack2Text, setButtonAttack2Text] = useState('Frappe lourde');
    const [buttonAttack3Text, setButtonAttack3Text] = useState('Estoc percante');
    const [buttonAttack3AlternativeText, setButtonAttack3AlternativeText] = useState('Fendoir');

    // Le useRef des Attaques
    const buttonAttack1 = useRef(null);
    const buttonAttack2 = useRef(null);
    const buttonAttack3 = useRef(null);
    const buttonAttack3Alt = useRef(null)

    // Le state du useEffect  pour le rythme des dégats subit
    const [running] = useState(true);

    // Les gains apres combat sont ici
    const totalGold = window.localStorage.getItem("Or")
    const parseIntGoldStorage = parseInt(totalGold)
    const totalXp = window.localStorage.getItem("Xp")
    const parseIntXpStorage = parseInt(totalXp)
    let goldEarned = Math.floor(Math.random() * 3) + 1;
    let xpEarned = Math.floor(Math.random() * 2) + 3;
    let totalGoldNew = goldEarned + parseIntGoldStorage;
    let totalXpNew = xpEarned + parseIntXpStorage;

    // Récupération de la force pour l'ajustement des dégats
    const forceNotParsed = window.localStorage.getItem("Force")
    const force = parseInt(forceNotParsed)

    // Les states de génération de dégat aléatoire pour les 3 attaques
    const [randomNumber1, setRandomNumber1] = useState(null);
    const [randomNumber2, setRandomNumber2] = useState(null);
    const [randomNumber3, setRandomNumber3] = useState(null);

    // Pour la réduction de dégat infligé et reçu lié à l'armure Lourde
    let damageReductionCoefficient = 1;
    if (window.localStorage.getItem("Torse") === "Haubert de maille") {
        damageReductionCoefficient = 0.85;
    } else {
        damageReductionCoefficient = 1;
    }

    /****************************** CALCUL DEGAT ATAQUE LEGERE  ******************************/
    function getRandomNumber1() {
        // Epée
        if (window.localStorage.getItem("Arme") === "Epée") {
            const newRandomNumber1 = Math.floor(Math.random() * force) * damageReductionCoefficient;
            setRandomNumber1(Math.floor(newRandomNumber1));
            return newRandomNumber1;
        }
        // Hache
        else if (window.localStorage.getItem("Arme") === "Hache") {
            const newRandomNumber1 = Math.floor(Math.random() * force) * damageReductionCoefficient;
            setRandomNumber1(Math.floor(newRandomNumber1));
            return newRandomNumber1;
        }
    }

    /****************************** CALCUL DEGAT ATAQUE LOURDE  ******************************/
    function getRandomNumber2() {
        // Epée
        if (window.localStorage.getItem("Arme") === "Epée") {
            const newRandomNumber2 = Math.floor(Math.random() * force + 2) * damageReductionCoefficient;
            setRandomNumber2(Math.floor(newRandomNumber2));
            return newRandomNumber2;
        }
        // Hache
        else if (window.localStorage.getItem("Arme") === "Hache") {
            const newRandomNumber2 = Math.floor(Math.random() * force) * damageReductionCoefficient;
            setRandomNumber2(Math.floor(newRandomNumber2));
            return newRandomNumber2;
        }
    }


    /****************************** CALCUL DEGAT ATAQUE SPECIAL  ******************************/
    function getRandomNumber3() {
        // Epée
        if (window.localStorage.getItem("Arme") === "Epée") {
            const newRandomNumber3 = Math.floor(Math.random() * force + 5) * damageReductionCoefficient;
            setRandomNumber3(Math.floor(newRandomNumber3));
            return newRandomNumber3;
        }
        // Hache
        else if (window.localStorage.getItem("Arme") === "Hache") {
            const newRandomNumber3 = Math.floor(Math.random() * force + 3) * damageReductionCoefficient;
            setRandomNumber3(Math.floor(newRandomNumber3));
            return newRandomNumber3;
        }
    }

    /******************************  DEFINITION ATAQUE LEGERE  ******************************/
    const attackOne = () => {
        // Condition de victoire du combat
        if (enemyHp - getRandomNumber1() < 1) {
            localStorage.setItem("Or", totalGoldNew)
            localStorage.setItem("Xp", totalXpNew)
            window.location.assign('/SuccessRandomBattle01');
        }
        setEnemyHp(prevEnemyHp => prevEnemyHp - getRandomNumber1());

        if (buttonAttack1.current) {
            // Désactivez le bouton et ajoutez la classe de recharge
            setButtonAttack1Disabled(true);
            buttonAttack1.current.classList.add('recharging');
        }

        // Cooldown de l'attaque
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
                setButtonAttack1Text('Attaque rapide');
                setButtonAttack1Disabled(false);
                buttonAttack1.current.classList.remove('recharging');
            }
        }, 1000);
    }

    /******************************  DEFINITION ATAQUE LOURDE  ******************************/
    const attackTwo = () => {
        setEnemyHp(prevEnemyHp => prevEnemyHp - getRandomNumber2());

        // Condition de victoire du combat
        if (enemyHp - getRandomNumber2() < 1) {
            localStorage.setItem("Or", totalGoldNew)
            localStorage.setItem("Xp", totalXpNew)
            window.location.assign('/SuccessRandomBattle01');
        }

        if (buttonAttack2.current) {
            // Désactivez le bouton et ajoutez la classe de recharge
            setButtonAttack2Disabled(true);
            buttonAttack2.current.classList.add('recharging');
        }

        // Cooldown de l'attaque
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
                setButtonAttack2Text('Attaque lourde');
                setButtonAttack2Disabled(false);
                buttonAttack2.current.classList.remove('recharging');
            }
        }, 1000);
    }

    /******************************  DEFINITION ATAQUE SPECIAL  ******************************/
    const attackThree = () => {
        /*********************** POUR L'EPEE ***************************/
        if (window.localStorage.getItem("Arme") === "Epée") {
            // Générez une valeur aléatoire entre 3 et 10
            setEnemyHp((prevEnemyHp) => prevEnemyHp - getRandomNumber3());

            // Condition de victoire du combat
            if (enemyHp - getRandomNumber3() < 1) {
                localStorage.setItem("Or", totalGoldNew)
                localStorage.setItem("Xp", totalXpNew)
                window.location.assign('/SuccessRandomBattle01');
            }

            if (buttonAttack3.current) {
                // Désactivez le bouton et ajoutez la classe de recharge
                setButtonAttack3Disabled(true);
                buttonAttack3.current.classList.add('recharging');
            }

            // Cooldown de l'attaque
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
                    setButtonAttack3Text('Estoc percante');
                    setButtonAttack3Disabled(false);
                    buttonAttack3.current.classList.remove('recharging');
                }
            }, 1000);
        }
        /*********************** POUR LA HACHE ***************************/
        else {
            setEnemyHp(prevEnemyHp => prevEnemyHp - getRandomNumber3());
            if (enemyHp - getRandomNumber3() < 1) {
                localStorage.setItem("Or", totalGoldNew)
                localStorage.setItem("Xp", totalXpNew)
                window.location.assign('/SuccessRandomBattle01');
            }
            // Une fois le bouton préssé on déclenche un changement de texte et un nouveau style
            setButtonAttack3AlternativeText(`Fendre à mort`);
            buttonAttack3Alt.current.classList.add('spamThis');
        };
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

    /*********************** USEEFFECTS ***************************/
    // useEffect qui se déclanche a 1/4 de la vie de l'adversaire pour les éxecution(attaque)
    useEffect(() => {
        setButtonAlternativeAttack3Disabled(enemyHp > (enemyMaxHp / 4));
    }, [enemyHp, enemyMaxHp]);

    // useEffect qui définie les dégats de l'adversaire et le rythme de ses coups
    useEffect(() => {
        const interval = setInterval(() => {
            //*********************  Calcul des dégâts du monstre ***********************//
            let newDamage = Math.floor(Math.random() * (5 + 11) * damageReductionCoefficient);
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
    }, [running, setActualHp, damageReductionCoefficient]);

    /*********************** RENDU ***************************/
    return (
        <div className="battle__Container">
            <div className='textAlign battle__Container__Box'>
                <p className="fade-in textAlign">
                    Slime : {Math.floor(enemyHp)} / {enemyMaxHp} Pv
                </p>
                <p>J'encaisse {damage} dégats</p>
            </div>
            <div className='textAlign battle__Container__Damage'>
                <p>Dernière attaque rapide : {randomNumber1} dégats</p>
                <p>Dernière attaque lourde : {randomNumber2} dégats</p>
                <p>Dernière attaque spécial : {randomNumber3} dégats</p>
            </div>
            <div className='adventure__ChooseButton__Container'>
                <button ref={buttonAttack1} className='battle__ChooseButton attack' onClick={attackOne} disabled={buttonAttack1Disabled}>
                    {buttonAttack1Text}
                    <FaSith className='adventure__Button__Arrow' />
                </button>
                <button ref={buttonAttack2} className='battle__ChooseButton attack' onClick={attackTwo} disabled={buttonAttack2Disabled}>
                    {buttonAttack2Text}
                    <FaPhoenixSquadron className='adventure__Button__Arrow' />
                </button>
                {window.localStorage.getItem("Arme") === "Epée" ?
                    <button ref={buttonAttack3} className='battle__ChooseButton attack' onClick={attackThree} disabled={buttonAttack3Disabled}>
                        {buttonAttack3Text}
                        <FaAudible className='adventure__Button__Arrow' />
                    </button>
                    :
                    <button ref={buttonAttack3Alt} className='battle__ChooseButton attack' onClick={attackThree} disabled={buttonAlternativeAttack3Disabled}>
                        {buttonAttack3AlternativeText}
                        <FaServicestack className='adventure__Button__Arrow' />
                    </button>}
            </div>
            {/* <button className='battle__ChooseButton' onClick={LeBoutonTriche}>
                CHEATBUTTON
                <FaFulcrum className='adventure__Button__Arrow' />
            </button> */}
        </div>
    );
}

export default RandomFight01;