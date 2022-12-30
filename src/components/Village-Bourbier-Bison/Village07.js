import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village07(component) {
    const nextComponentVillage08 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village08")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous faites le tour de la maison de Jérôme et vous remarquez des empreintes dans la terre.
                Vous vous penchez pour les examiner de plus près, et vous constatez qu'il y a des empreintes de deux hommes et d'une femme.
                Les empreintes des hommes sont plus larges et plus profondes que celles de la femme.
                Les premières sont celles de bottes de cuir, qui ont laissé des marques nettes et bien dessinées dans la terre.
                Les secondes sont celles de bottines à talons, qui ont laissé des empreintes plus fines et plus légères.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage08}>
                    Suivre les traces
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village07;