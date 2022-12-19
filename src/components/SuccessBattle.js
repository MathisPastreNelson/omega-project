import React from 'react';


const SuccessBattle = (component) => {
    let goldEarned = Math.floor(Math.random() * (2 + 6));
    let xpEarned = Math.floor(Math.random() * (1 + 3));
    const mainScreen = () => {
        localStorage.setItem("Or", goldEarned)
        localStorage.setItem("Xp", xpEarned)
        window.location.assign('/road1')
    }
    return (
        <div className='adventure__Container'>
            <p className='textAlign '>Bravo, vous etes victorieux.</p>
            <p className='textAlign '>Vous gagner {goldEarned} pièces d'or.</p>
            <p className='textAlign '>Vous gagner {xpEarned} point d'exp.</p>
            <div className='adventure__Button__Container'>
                <button className='adventure__Button' onClick={mainScreen}>Retour à l'aventure</button>
            </div>
        </div>
    );
};

export default SuccessBattle;