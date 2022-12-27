import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest04(component) {
    const nextComponentForest05 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest05")
    }

    return (
        <div className="adventure__Container">
            {window.localStorage.getItem("SideQuest01") &&
                <p className="fade-in textAlign">La décision aura surement un impact à un moment..</p>
            }
            <p className="fade-in textAlign">
                La forêt vous enveloppe de ses bras verdoyants, vous offrant un abri sous ses frondaisons.
                Le sol est tapissé de feuilles mortes et de mousses douces sous vos pieds.
                Les arbres sont si grands qu'ils bloquent la plupart de la lumière du soleil, créant une atmosphère paisible et mystérieuse.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest05}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest04;