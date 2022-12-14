import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaTrash } from 'react-icons/fa';

function Start() {
    const startGame = () => {
        window.location.assign('/NewCharacter');
    }
    // LA SAUVEGARDE DE L'AVENTURE SERA CONTENU ICI
    const savedGame = () => {
        if (window.localStorage.getItem("SavePosition") >= 1) {
            window.location.assign('/village1')
        } else {
            window.location.assign('/road1')
        }
    }
    const clearSavedGame = () => {
        window.location.assign('/DeleteCharacter');
    };

    // Il faut au moin avoir crée son personnage
    if (window.localStorage.length >= 6) {
        return (
            <div className="adventure__Container">
                <p className="fade-in textAlign">Reprendre votre aventure.</p>
                <div className='adventure__ChooseButton__Container'>
                    <button onClick={savedGame} className='adventure__ChooseButton'>
                        Reprendre l'histoire
                        <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                    </button>
                    <button onClick={clearSavedGame} className='battle__ChooseButton'>
                        Effacer sauvegarde
                        <FaTrash className='adventure__Button__Arrow' />
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="adventure__Container">
                <p className="fade-in textAlign">Commencer votre aventure ici.</p>
                <div className='adventure__ChooseButton__Container'>
                    <button onClick={startGame} className='adventure__ChooseButton'>
                        Commencer
                        <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                    </button>
                </div>
            </div>
        )
    }
};




export default Start;