import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Grondar(component) {
    const nextComponentForest17 = () => {
        component.setComponent("forest17")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                "Qu'est-ce que tu fiche ici ? T'es dingue ou quoi ?
                Tu as vu ce qui se passe la nuit dans cette forêt ? Tu est chanceux d'être encore en vie !"
                Dors ici et fous moi le camp à l'aube compris ?
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest17}>
                    Se rapprocher du feu
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Grondar;