import React from 'react';

const DeleteCharacter = () => {
    const returnToMenu = () => {
        if (window.localStorage.length >= 6) {
            window.location.assign('/')
        };
    }
    const clearSavedGame = () => {
        localStorage.clear();
        window.location.assign('/NewCharacter');
    };


    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Etes-vous sûr de votre choix ?
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={returnToMenu}>
                    Revenir en arrière
                </button>
                <button className='battle__ChooseButton' onClick={clearSavedGame}>
                    Supprimer le personnage
                </button>
            </div>
        </div>
    );
};

export default DeleteCharacter;