import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest01(component) {
    const nextComponentForest02 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest02")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                L'entrée de la forêt Tourbe-Bourbe est imposante et majestueuse.
                Les arbres y sont gigantesques, leur feuillage dense et verdoyant formant une voûte au-dessus de votre tête.
                Le sol est recouvert d'une couche épaisse de mousse et de feuilles mortes, qui étouffe les bruits de vos pas.

                L'atmosphère est calme et paisible, mais vous savez que cette sérénité est trompeuse.
                La forêt Tourbe-Bourbe est un endroit dangereux, rempli de créatures monstrueuses et de pièges mortels.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest02}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest01;