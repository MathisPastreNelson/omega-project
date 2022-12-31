import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Start02(component, { bandageNumber }) {
    const nextComponent = () => {
        // Attribution du Bandage
        window.localStorage.setItem('Bandage', "OK");
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(3)
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Le soleil se lève à peine sur la prairie et vous vous réveillez, nerveux à l'idée de votre première véritable aventure.
                Vous êtes un jeune débutant, peu habitué aux dangers et aux incertitudes de la vie de mercenaire.
                Mais vous êtes déterminé à vous faire une place dans ce monde et à prouver votre valeur.
                La forêt Tourbe-Bourbe vous attend, une dense et mystérieuse forêt où vous espérez trouver votre premier contrat.
                La nature vous entoure de toutes parts et vous vous sentez un peu perdu, loin de la sécurité de votre foyer.
                Mais attention, la forêt Tourbe-Bourbe est réputée pour être dangereuse et peuplée de créatures féroces.
                Vous devrez être vigilant et prêt à tout moment à dégainer votre arme.
                Qui sait ce que vous réserve cette journée d'aventures ?
                Peut-être trouverez-vous votre premier contrat ou bien vous devrez affronter des ennemis redoutables.
                Quoi qu'il arrive, vous êtes déterminé à réaliser votre objectif et à vous faire une place dans ce monde.
            </p>
            <div className='adventure__Button__Container'>
                <button className='adventure__Button' onClick={nextComponent}>
                    Suivant
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div >
    );
}



export default Start02;