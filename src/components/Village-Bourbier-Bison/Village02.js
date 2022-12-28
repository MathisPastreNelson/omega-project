import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village02(component) {
    const nextComponentVillage03 = () => {
        window.localStorage.setItem('Save', 1);
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village03")
    }

    const nextComponentVillageSideQuest1 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("villageSideQuest1")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Alors que vous vous promenez dans les rues du village de Bourbier-Bison,
                vous apercevez une vieille femme qui semble très inquiète devant sa maison.
                Elle est agitée et regarde sans cesse autour d'elle, comme si elle attendait quelque chose ou quelqu'un.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillageSideQuest1}>
                    Aller voir la vieille femme
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage03}>
                    Continuer sa route
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village02;