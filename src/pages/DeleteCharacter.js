import React from 'react';

const DeleteCharacter = () => {
    // Retour à la page d'introduction
    const returnToMenu = () => {
        window.location.assign('/')
    }
    // On efface la sauvegarde et on retourne à la création de personnage
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