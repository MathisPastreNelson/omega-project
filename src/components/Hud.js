import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const LocalStorageData = ({ data, maxHp, actualHp, setMaxHp, setActualHp, bandageNumber, setBandageNumber }) => {

    // La logique d'utilisation du bandage
    const bandageUse = () => {
        // Si on ades bandage et qu'on a plus de 20 hp manquant on change le nombre de bandage et on heal
        if (actualHp + 8 < maxHp) {
            console.log("Bandage utilisé")
            setActualHp(actualHp + 8)
        }//Sinon on heal au maximum
        else {
            console.log("Full Vie")
            setActualHp(maxHp)
        }
    }


    // rendu
    return (
        <div className="character__container">
            <div>
                <p>Force : {data.Force}</p>
                <p>Agilité : {data.Agilité}</p>
                <p>Intelligence : {data.Intelligence}</p>
                <p>Endurance : {data.Endurance}</p>
            </div>
            <div className="character__consommable">
                <p>Personnage : {data.userName}</p>
                {data.maxPv && <div className='hpBar'><p>{actualHp}/{maxHp}</p> <FaHeartbeat className='hpBarHeart' /></div>}
                {/* Si il y a bandage on affiche le bouton sinon on affiche rien */}
                {data.Bandage ? <button id='bandage' className='bandage__Button' onClick={bandageUse}> Bandage</button> : <p>Pas de bandage</p>}
            </div>
            <div className='itemEquipped'>
                <p>Arme : {data.Arme}</p>
                <p>Casque : {data.Casque}</p>
                <p>Torse : {data.Torse}</p>
                <p>Jambe : {data.Jambe}</p>
            </div>
        </div>
    );
}

export default LocalStorageData