import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village06(component) {
    const nextComponentVillage07 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village07")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous lui demandez s'il a pu voir leurs visages, mais il secoue la tête. "Non, malheureusement",
                dit-il. "Ils étaient masqués, et il faisait trop sombre pour que je puisse les distinguer.
                Tout ce que je sais, c'est qu'ils ont pris les bijoux de ma femmes et qu'ils ont disparu dans la nuit."
                Vous remerciez Jérôme pour ses informations et vous lui demandez s'il a une idée de
                l'endroit où les bandits pourraient se cacher. Il réfléchit un moment, puis il hausse les épaules.
                "Je n'en ai aucune idée, voyageur", dit-il. "Je ne suis pas sûr que quiconque dans ce village puisse vous
                aider à trouver ces hommes. Mais je vous souhaite bonne chance dans votre quête. Si vous les trouvez,
                je vous serais très reconnaissant de m'apporter les bijoux."
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage07}>
                    Tenter de trouver des indices..
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village06;