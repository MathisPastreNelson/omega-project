import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Dangerous03(component) {
    const nextComponentDangerous04 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("dangerous04")
        window.localStorage.setItem('maxPv', window.localStorage.Endurance * 4 + 50);
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avez décidé de prendre la route malgré tout,
                bien déterminés à arriver à destination coûte que coûte.
                Vous marchez depuis plusieurs heures déjà, et la fatigue commence à se faire sentir.
                Soudain, vous avez l'impression d'être observés. Vous regardez autour de vous, mais ne voyez rien d'anormal.
                Pourtant, la sensation d'être épiés ne vous quitte pas.
                Vous resserrez votre emprise sur vos armes et continuez à avancer, les sens en alerte.

                La tension est palpable dans l'air, et vous avez l'impression que chaque pas que
                vous faites résonne comme un coup de tonnerre dans le silence de la forêt.
                Vous jetez de fréquents coups d'œil par-dessus vos épaules,
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentDangerous04}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Dangerous03;