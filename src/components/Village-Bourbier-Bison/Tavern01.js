import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern01(component) {
    const nextComponentTavern02 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern02")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous êtes assis à une table de la taverne, entourés de voyageurs et de villageois qui viennent profiter
                de la chaleur et de la bonne humeur qui règnent dans l'établissement. La taverne est remplie de fumée
                et de bruits de conversations animées, et l'odeur de la nourriture qui cuit sur les fourneaux vous met
                l'eau à la bouche.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern02}>
                    Faire signe à l'aubergiste.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern01;