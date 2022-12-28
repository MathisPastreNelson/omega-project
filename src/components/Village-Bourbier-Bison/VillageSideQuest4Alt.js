import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function VillageSideQuest4Alt(component) {
    const nextComponentSideBoss2 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("sideBoss2")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avancez dans le tunnel, votre arme à la main, prêt à affronter tous les dangers qui se dressent sur votre chemin.
                Le tunnel s'enfonce de plus en plus profondément sous terre, et vous commencez à sentir une odeur âcre et écœurante qui vous prend à la gorge. Vous savez que vous êtes proche de votre destination, et vous redoublez de vigilance.
                Soudain, vous entendez un bruit sourd qui résonne dans tout le tunnel. Vous vous figez sur place,
                votre arme prête à frapper. Vous attendez quelques instants, mais le bruit ne se reproduit pas.
                Vous reprenez donc votre marche, le cœur battant la chamade.
                Vous avancez encore un peu et vous apercevez soudain une lumière qui filtre à travers
                les parois du tunnel. Vous vous approchez prudemment et vous jetez un coup d'œil à l'intérieur.
                Ce que vous découvrez vous glace le sang : le tunnel s'ouvre sur un nid de Glubandurs,
                une immense caverne remplie de ces créatures qui grouillent de tous côtés.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentSideBoss2}>
                    Affronter les bêtes
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default VillageSideQuest4Alt;