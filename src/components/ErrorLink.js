import React from 'react';

const ErrorLink = () => {
    const mainScreen = () => {
        window.location.assign('/')
    }
    return (
        <div className='adventure__Container'>
            <p className='textAlign '>Désolé, cette page n'existe pas ou n'est pas reconnu</p>
            <div className='adventure__Button__Container'>
                <button className='adventure__Button' onClick={mainScreen}>Page d'accueil</button>
            </div>
        </div>
    );
};

export default ErrorLink;