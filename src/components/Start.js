import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Start() {
    const startGame = () => {
        window.location.assign('/omega-project/NewCharacter');
    }
    // LA SAUVEGARDE DE L'AVENTURE SERA CONTENU ICI
    const SavedGame = () => {
        if (window.localStorage.length >= 9) {
            console.log("bon")
            window.location.assign('/omega-project/road1')
        };
    }

    if (window.localStorage.length >= 9) {
        return (
            <div className="adventure__Container">
                <p className="fade-in textAlign">Reprendre votre aventure.</p>
                <div className='adventure__Button__Container'>
                    <button onClick={SavedGame} className='adventure__Button'>
                        Commencer
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