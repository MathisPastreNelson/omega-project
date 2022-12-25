import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Cucked01(component) {
    const nextComponentSafe04 = () => {
        window.localStorage.setItem('Save', 1);
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("Forest01")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                L'homme vous regarde avec un sourire mauvais et prend la bourse que vous lui tendez.
                Il ouvre la fermeture et compte les pièces d'or rapidement, puis il hoche la tête et vous tend la fiole de Flamenkunsh enchantée.

                Vous restez bloqué l'espace d'un instant, admirant son contenu rouge vif. Mais alors que vous êtes distrait par la potion,
                l'homme ricane et éclate la fiole contre un rocher, libérant une puissante fumée qui vous aveugle.

                Vous toussez et clignez des yeux, essayant de voir ce qui se passe. Mais c'est trop tard : le bandit a déjà disparu dans la forêt,
                emportant votre argent et vous laissant seul
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentSafe04}>
                    Tâcher d'être plus prudent...
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Cucked01;