import React from 'react';
import { useEffect, useState } from 'react';
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
    const parsedLevel = parseInt(data.data.Level)
    const parsedXp = parseInt(data.data.Xp)
    // État du niveau et de l'XP
    const [level, setLevel] = useState(parsedLevel);
    const [xp, setXp] = useState(parsedXp);

    // Demande d'XP pour le prochain niveau
    const xpForNextLevel = 40 * level;

    useEffect(() => {
        // Récupération du niveau et de l'XP du localStorage lorsque le composant est monté
        const levelFromStorage = data.data.Level;
        const xpFromStorage = data.data.Xp;
        if (levelFromStorage) {
            setLevel(levelFromStorage);
        }
        if (xpFromStorage) {
            setXp(xpFromStorage);
        }
    }, [data.data.Xp, data.data.Level]);

    useEffect(() => {
        // Mise à jour du niveau et de l'XP dans le localStorage lorsque le niveau ou l'XP du composant change
        localStorage.setItem('Level', level);
        localStorage.setItem('Xp', xp);
    }, [level, xp]);

    // Fonction de niveau supérieur qui met à jour le niveau et l'XP
    const levelUp = () => {
        setLevel(parsedLevel + 1);
        setXp(xp - xpForNextLevel);
    };
    /*/////*/////////////////////////////////////////////////////////////////////////////////////

    // rendu
    return (
        <div className="character__container">
            <div className='statEquipped'>
                <p>Force : {data.data.Force}</p>
                <p>Endurance : {data.data.Endurance}</p>
                <p>Exp : {xp}/ {xpForNextLevel}</p>
            </div>
            <div className='character__level__container'>
                {data.data.Xp && <p className='character__level'>
                    Niveau {parsedLevel}
                </p>}
                {xp >= xpForNextLevel && <button onClick={levelUp}>Niveau supérieur</button>}
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
        </div>
    );
}

export default Hud