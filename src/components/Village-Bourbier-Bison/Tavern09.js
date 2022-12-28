import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern09(component) {
    const nextComponentTavern10 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern10")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Le vieil homme sourit et reprend son récit : "Jérôme habite dans une petite ferme au bord de la forêt,
                non loin d'ici. C'est un endroit paisible et accueillant, avec une vue imprenable sur les montagnes et
                les champs qui entourent la ferme. Jérôme y cultive des légumes et élève quelques animaux, principalement
                des poulets et des cochons. Je suis sûr qu'il sera ravi de vous accueillir et de vous raconter son histoire."
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern10}>
                    Le remercier et sortir de la taverne
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern09;