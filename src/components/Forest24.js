import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest24(component) {
    const nextComponentForest25 = () => {
        component.setComponent("forest25")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous apercevez enfin la sortie de la forêt Tourbe-Bourbe. Après avoir marché pendant
                plusieurs heures, vous êtes enfin arrivé à destination. Vous vous sentez soulagé et
                heureux d'avoir réussi à traverser cette forêt, même si vous avez dû affronter quelques
                dangers et difficultés le long du chemin.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest25}>
                    Continuer la route
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest24;