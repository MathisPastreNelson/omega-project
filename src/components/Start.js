import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Start() {
    const startGame = () => {
        window.location.assign('/NewCharacter');
    }
    // LA SAUVEGARDE DE L'AVENTURE SERA CONTENU ICI
    const savedGame = () => {
        if (window.localStorage.length >= 9) {
            console.log("bon")
            window.location.assign('/road1')
        };
    }
    const clearSavedGame = () => {
        localStorage.clear();
        window.location.assign('/NewCharacter');
    };

    if (window.localStorage.length >= 9) {
        return (
            <div className="adventure__Container">
                <p className="fade-in textAlign">Reprendre votre aventure.</p>
                <div className='adventure__Button__Container'>
                    <button onClick={savedGame} className='adventure__Button'>
                        Reprendre
                        <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                    </button>
                    <button onClick={clearSavedGame} className='adventure__Button'>
                        Supprimer le personnage
                        <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="adventure__Container">
                <p className="fade-in textAlign">Commencer votre aventure ici.</p>
                <div className='adventure__Button__Container'>
                    <button onClick={startGame} className='adventure__Button'>
                        Commencer
                        <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                    </button>
                </div>
            </div>
        )
    }
};




export default Start;