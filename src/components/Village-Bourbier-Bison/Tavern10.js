import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern10(component) {
    const nextComponentVillage05 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village05")
    }

    const nextComponentVillage01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village01")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous vous apprêtez à quitter la taverne pour vous rendre à la ferme de Jérôme,
                lorsque vous apercevez la jeune femme se lever brusquement de sa chaise et sortir précipitamment de la taverne.
                Vous êtes un peu perplexe, mais vous decidez de poursuivre votre route vers la ferme de Jérôme.
                Toutefois, vous vous rendez compte qu'il est peut-être un peu tôt pour vous rendre à la ferme,
                vous pouvez décider de l'occasion pour visiter un peu Bourbier-Bison.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage05}>
                    Se diriger chez Jérôme
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage01}>
                    Visiter Bourbier-Bison
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern10;