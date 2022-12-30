import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Village10Alt(component) {
    const nextComponentVillage10AltFight = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village10AltFight")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avancez encore un peu et remarquez que les empreintes se divisent en deux groupes.
                L'un des groupes semble comprendre les empreintes d'un homme et d'une femme,
                tandis que l'autre ne comprend qu'un seul individu. Vous hésitez un instant.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentVillage10AltFight}>
                    Affronter le bandit
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village10Alt;