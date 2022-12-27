import React from 'react';


const SuccessBattle = (component) => {
    const mainScreen = () => {
        // Retour à la route 1
        window.location.assign('/road1')
    }

    return (
        <div className='adventure__Container'>
            <p className='textAlign '>Bravo, vous êtes victorieux.</p>
            <p className='textAlign '>Vous gagner un peu de pièces d'or.</p>
            <p className='textAlign '>Vous gagner un peu d'experience de combat.</p>
            <div className='adventure__Button__Container'>
                <button className='adventure__Button' onClick={mainScreen}>Retour à l'aventure</button>
            </div>
        </div>
    );
};

export default SuccessBattle;