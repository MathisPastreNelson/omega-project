import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest20(component) {
    const nextComponentForest21 = () => {
        component.setComponent("forest21")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Cette nuit-là, vous avez du mal à trouver le sommeil.
                Malgré votre fatigue, votre esprit est agité par toutes les émotions et les expériences que vous avez vécues cette journée.
                Vous vous retournez dans votre lit de fortune, enveloppé dans votre couverture et allongé sur le sol dur de la forêt.
                Le campement de Grondar est terriblement silencieux désormais...
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest21}>
                    Attendre l'aube..
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest20;