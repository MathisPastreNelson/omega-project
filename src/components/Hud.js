import React from 'react';
import { useState, useRef } from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const Hud = (data) => {
    const [bandageDisabled, setBandageEnable] = useState(false);
    const [buttonBandageText, setButtonBandageText] = useState("Bandage")
    const buttonBandage = useRef(null);

    // Variable nécéssaire au levelUp
    let parsedLevel = parseInt(data.data.Level)
    let parsedXp = parseInt(data.data.Xp)
    let parsedForce = parseInt(data.data.Force)
    let parsedEndurance = parseInt(data.data.Endurance)

    // Demande d'XP pour le prochain niveau
    let xpForNextLevel = 20;
    xpForNextLevel = parsedLevel * (xpForNextLevel * 1.2);

    const { maxHp, actualHp, setActualHp } = data;
    // Vérifiez si actualHp est inférieur à 20 % de maxHp
    const isLowHp = actualHp / maxHp < 0.2;
    // La logique d'utilisation du bandage
    const bandageUse = () => {
        // Si on ades bandage et qu'on a plus de 20 hp manquant on change le nombre de bandage et on heal
        if (actualHp + 20 < maxHp) {
            console.log("Bandage utilisé")
            setActualHp(actualHp + 20)
        }//Sinon on heal au maximum    
        else {
            console.log("Full Vie, bandage inutilisable")
            setActualHp(maxHp)
        }
        if (buttonBandage.current) {
            // Désactivez le bouton et ajoutez la classe de recharge
            setBandageEnable(true);
            buttonBandage.current.classList.add('recharging');
        }

        let counter = 30

        const interval = setInterval(() => {
            counter--;
            setButtonBandageText(` Récupération(${counter}s)`);

            // Si le compteur atteint 0, arrêtez l'intervalle et réactivez le bouton
            if (counter === 0) {
                clearInterval(interval);
                setBandageEnable(false);
                setButtonBandageText('Bandage');
                buttonBandage.current.classList.remove('recharging');
            }
        }, 1000);
    }


    // Condition de levelUp
    if (parsedXp >= xpForNextLevel) {
        parsedLevel += 1;
        parsedForce += 1;
        parsedEndurance += 1
        parsedXp = 0;
        window.localStorage.setItem('Level', parsedLevel);
        window.localStorage.setItem('Xp', parsedXp);
        window.localStorage.setItem('Force', parsedForce);
        window.localStorage.setItem('Endurance', parsedEndurance);
    }

    return (
        <div className="character__container">
            <div className='statEquipped'>
                {data.data.Force && <p>Force : {data.data.Force}</p>}
                {data.data.Endurance && <p>Endurance : {data.data.Endurance}</p>}
                {data.data.Xp && <p>Exp : {parsedXp}/ {xpForNextLevel}</p>}
            </div>
            <div className='character__level__container'>
                {data.data.Xp && <p className='character__level'>Niveau {parsedLevel}</p>}
            </div>
            <div className="character__consommable">
                <p>Personnage : {data.data.userName}</p>
                {data.data.maxPv && <div className='hpBar'><p>{actualHp}/{data.maxHp}</p> <FaHeartbeat className='hpBarHeart' /></div>}
                {data.data.Bandage ? (
                    <button
                        id='bandage'
                        className={`bandage__Button ${isLowHp ? 'low-hp' : ''}`}
                        onClick={bandageUse}
                        disabled={bandageDisabled}
                        ref={buttonBandage}
                    >
                        {buttonBandageText}
                    </button>
                ) : (
                    <p>Pas de bandage</p>
                )}
            </div>
            <div className='character__gold__container'>
                {data.data.Or && <p className='character__gold'>
                    Or : {data.data.Or}
                </p>}
            </div>
            <div className='itemEquipped'>
                <p> {data.data.Arme}</p>
                <p> {data.data.Torse}</p>
                <p> {data.data.Jambe}</p>
            </div>
        </div >
    );
}

export default Hud