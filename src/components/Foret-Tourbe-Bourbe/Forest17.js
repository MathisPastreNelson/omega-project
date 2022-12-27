import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest17(component) {
    const nextComponentForest18 = () => {
        component.setComponent("forest18")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                La vieille dame se tourne alors vers vous.
                Elle vous regarde d'un air furieux et elle commence à vous insulter de tous les noms.
                "Espèce de petit merdeux ! Tu te crois malin, hein ? Tu crois que tu peux venir ici et te servir de moi comme d'un sac à dos ?
                Tu es pire que tous les autres ! Tu n'es qu'un sale petit voleur ! Tu n'es même pas capable de te débrouiller tout seul !"
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest18}>
                    "Ignorer et préparer un lit.."
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest17;