import React from 'react';
// import { useEffect, useState } from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const Hud = (data) => {
    const { maxHp, actualHp, setActualHp } = data;
    // Vérifiez si actualHp est inférieur à 20 % de maxHp
    const isLowHp = actualHp / maxHp < 0.2;
    // La logique d'utilisation du bandage
    const bandageUse = () => {
        // Si on ades bandage et qu'on a plus de 20 hp manquant on change le nombre de bandage et on heal
        if (actualHp + 8 < maxHp) {
            console.log("Bandage utilisé")
            setActualHp(actualHp + 8)
        }//Sinon on heal au maximum
        else {
            console.log("Full Vie, bandage inutilisable")
            setActualHp(maxHp)
        }
    }
    /*/////*/////////////////////////////////////////////////////////////////////////////////////
    let parsedLevel = parseInt(data.data.Level)
    let parsedXp = parseInt(data.data.Xp)
    let parsedForce = parseInt(data.data.Force)
    let parsedEndurance = parseInt(data.data.Endurance)


    // Demande d'XP pour le prochain niveau
    let xpForNextLevel = 20;
    xpForNextLevel = parsedLevel * (xpForNextLevel * 1.2);
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



    /*/////*/////////////////////////////////////////////////////////////////////////////////////

    // rendu
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
                    >
                        Bandage
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