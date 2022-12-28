import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern07(component) {
    const nextComponentTavern08 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern08")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous vous approchez du vieil homme assis seul à une table de la taverne et vous lui demandez s'il
                accepterait de vous parler un moment. Il vous regarde avec intérêt et vous répond qu'il n'y a rien
                de qu'il aime plus que bavarder avec de jeunes aventuriers.
                Vous lui expliquez que vous êtes à la recherche d'une quête à accomplir et que vous espérez trouver
                une mission intéressante en arrivant ici. Le vieil homme hoche la tête et vous dit qu'il connaît
                peut-être une tâche qui pourrait vous intéresser.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern08}>
                    Ecouter avec attention
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern07;