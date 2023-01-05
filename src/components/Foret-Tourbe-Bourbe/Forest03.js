import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaFulcrum } from 'react-icons/fa';
import imageEncounter from '../../assets/EncounterImg/Clarisse.webp'

function Forest03(component) {
    const nextComponentQuestEncounter01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("questEncounter01")
    }
    const nextComponentForest04 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest04")
    }

    return (
        <div className="adventure__Container">
            <img className='imageEnemy' src={imageEncounter} alt="Illustration d'adversaire" />
            <p className="fade-in textAlign">
                Vous avancez dans la forêt Tourbe-Bourbe, votre arme à la main, prêt à affronter n'importe quel danger qui se présentera.
                Alors que vous marchez, vous apercevez un endroit un peu dégagé devant vous. Intrigué, vous vous approchez pour en savoir plus.

                C'est alors que vous apercevez une jeune fille qui ramasse des herbes dans un petit bosquet.
                Elle est vêtue de manière simple, mais ses vêtements sont de qualité. Elle a de longs cheveux blonds qui cascadent sur ses
                épaules et elle a l'air concentrée sur sa tâche.

                Vous hésitez un instant, vous demandant si vous devriez aller lui parler ou l'ignorer et poursuivre votre route.
                Si vous allez lui parler, vous pourriez peut-être obtenir de l'aide ou de précieux conseils.
                Mais si vous poursuivez votre route, vous risquez de manquer une occasion de rencontrer quelqu'un qui pourrait vous être utile.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentQuestEncounter01}>
                    Aller voir la cueilleuse
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentForest04}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest03;