import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaFulcrum } from 'react-icons/fa';

function VillageSideQuest3(component) {
    const nextComponentRandomBattle03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomBattle04")
    }

    const nextComponentVillage03SideQuest4 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("villageSideQuest4")
    }

    const nextComponentSideQuestAbandon = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village03")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous êtes prêt à affronter ces Glubandurs et à débarrasser la maison de ces créatures.
                Vous entrez dans le salon et vous êtes immédiatement assailli par des dizaines de petits yeux qui
                vous fixent. Les Glubandurs sont partout, grouillant sur les meubles et les murs.
                Vous frissonnez à la vue de ces araignées géantes, mais vous vous ressaisissez rapidement.
                Vous n'avez pas le choix, il faut agir vite si vous voulez éviter que la situation ne s'aggrave.
                Vous avez deux options : soit décontaminer la zone et tuer toutes les Glubandurs que vous pouvez trouver,
                soit aller directement à la source du problème et vous rendre dans la cave pour voir par vous-même ce qui se passe.
                Vous pouvez également abandonner cette endroit à son propre sort...
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage03SideQuest4}>
                    Aller dans la cave
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentSideQuestAbandon}>
                    Abandonner cette maison
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={nextComponentRandomBattle03}>
                    Chasser les araignées
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default VillageSideQuest3;