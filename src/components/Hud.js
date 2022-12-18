import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const Hud = (data) => {
    const { maxHp, actualHp, setActualHp } = data;
    // La logique d'utilisation du bandage
    const bandageUse = () => {
        console.log(data.Bandage)
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
                <p>Force : {data.data.Force}</p>
                <p>Agilité : {data.data.Agilité}</p>
                <p>Intelligence : {data.data.Intelligence}</p>
                <p>Endurance : {data.data.Endurance}</p>
            </div>
            <div className="character__consommable">
                <p>Personnage : {data.data.userName}</p>
                {data.data.maxPv && <div className='hpBar'><p>{actualHp}/{data.maxHp}</p> <FaHeartbeat className='hpBarHeart' /></div>}
                {/* Si il y a bandage on affiche le bouton sinon on affiche rien */}
                {data.data.Bandage ? <button id='bandage' className='bandage__Button' onClick={bandageUse}> Bandage</button> : <p>Pas de bandage</p>}
            </div>
            <div className='itemEquipped'>
                <p>Arme : {data.data.Arme}</p>
                <p>Casque : {data.data.Casque}</p>
                <p>Torse : {data.data.Torse}</p>
                <p>Jambe : {data.data.Jambe}</p>
            </div>
        </div>
    );
}

export default Hud