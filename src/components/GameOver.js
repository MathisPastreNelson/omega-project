import React from 'react';

const GameOver = () => {
    const mainScreen = () => {
        window.location.assign('/')
    }
    return (
        <div className='adventure__Container'>
            <p className='textAlign '>Vous avez perdu désolé.. Reprendre au dernier point de sauvegarde ?</p>
            <div className='adventure__Button__Container'>
                <button className='adventure__Button' onClick={mainScreen}>Page d'accueil</button>
            </div>
        </div>
    );
};

export default GameOver;