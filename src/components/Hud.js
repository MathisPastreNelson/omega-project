import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const LocalStorageData = ({ data, maxHp, actualHp }) => {

    // La logique d'utilisation du bandage
    const bandageUse = () => {
        let actualValueOfBandage = parseInt(localStorage.getItem('Bandage'));
        let newValueOfBandage = actualValueOfBandage - 1;
        if (newValueOfBandage >= 0) {
            localStorage.setItem('Bandage', newValueOfBandage);
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
                {data.Bandage > 0 ? <button id='bandage' className='bandage__Button' onClick={bandageUse}> Bandage(s) = {data.Bandage}</button> : <p>Pas de bandage</p>}
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