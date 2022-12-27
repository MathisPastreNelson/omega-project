import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest15(component) {
    const nextComponentForest16 = () => {
        component.setComponent("forest16")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                "Je suis Grondar, le gardien de cet endroit", dit l'homme en vous tendant la main.
                "Bienvenue dans mon campement. T'es chanceux d'avoir échappé au garou-loup.
                C'est une créature redoutable et peu de gens ont la chance de s'en sortir vivants."
                L'homme vous rend votre bourse après avoir pris ses pièces d'or.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest16}>
                    Ecouter Grondar
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest15;