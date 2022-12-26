import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Forest19(component) {
    const nextComponentRandomBattle03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomFight03")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous êtes abasourdi lorsque Grondar vous ordonne de quitter son campement.
                Vous ne comprenez pas pourquoi il a soudainement changé d'attitude et vous vous sentez trahi et abandonné.
                Vous ramassez vos affaires et vous quittez le campement, le cœur lourd et la tête basse.
                En sortant, vous vous retrouvez nez à nez avec le loup-garou qui vous a terrorisé
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentRandomBattle03}>
                    Se retourner et attaquer
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest19;