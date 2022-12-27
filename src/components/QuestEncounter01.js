import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaFulcrum } from 'react-icons/fa';

function QuestEncounter01(component) {
    const nextComponentForest04SideOk = () => {
        // On change le Props Ici pour passer au composant suivant
        window.localStorage.setItem('SideQuest01', "saved");
        component.setComponent("forest04")
    }
    const nextComponentForest04SideNone = () => {
        // On change le Props Ici pour passer au composant suivant
        if (localStorage.getItem('SideQuest01', "saved")) {
            alert("Un objectif accompli restera accompli")
        } else {
            window.localStorage.setItem('SideQuest01', "notSaved");
        }
        component.setComponent("forest04")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                "Bonjour, dit-elle d'une voix hésitante. Que faites-vous ici ?"

                Vous lui expliquez que vous vous desirez traverser la forêt. Elle hoche la tête, l'air soulagé.

                "Je m'appelle Clarisse, dit-elle en souriant. Et vous, comment vous appelez-vous ?"

                Vous lui répondez et elle vous explique qu'elle est partie cueillir des herbes pour trouver de la nourriture.
                Elle a déjà récolté une plante mais s'est perdue en trouvant ce bosquet. Elle vous demande si vous connaissez le sens de la route pour sortir de la forêt.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest04SideOk}>
                    Lui indiqué la bonne direction.
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentForest04SideNone}>
                    Laisser Clarisse s'enfoncée dans la forêt.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default QuestEncounter01;