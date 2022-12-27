import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest26(component) {
    const nextComponentForest26 = () => {
        component.setComponent("forest27End")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous poussez la porte et entrez dans l'auberge. L'intérieur est chaleureux et confortable,
                avec des tables et des chaises en bois et une cheminée qui crépite au fond de la salle.
                Le propriétaire, un homme jovial et bedonnant, vous accueille avec un large sourire et vous
                invite à vous asseoir à une table près du feu. Vous êtes heureux de pouvoir enfin vous reposer
                et vous réjouissez à l'idée de savourer un bon repas chaud.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest26}>
                    Continuer
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest26;