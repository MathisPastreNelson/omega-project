import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function VillageSideQuest3(component) {
    const nextComponentVillage03SideQuest4 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("villageSideQuest4")
    }

    const nextComponentVillage03SideQuest4Alt = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("villageSideQuest4Alt")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous descendez dans la cave. Celle-ci est sombre et humide, et vous sentez une odeur âcre qui vous
                prend à la gorge. Vous avancez prudemment, votre arme à la main, et vous apercevez bientôt un tunnel
                qui s'enfonce dans le sol.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage03SideQuest4}>
                    Tenter de reboucher
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage03SideQuest4Alt}>
                    S'infiltré dans le Tunnel
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default VillageSideQuest3;