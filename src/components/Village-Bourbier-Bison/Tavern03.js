import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern03(component) {
    const nextComponentTavern04 = () => {
        window.localStorage.removeItem('Beer');
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern04")
    }

    return (
        <div className="adventure__Container">
            {window.localStorage.getItem("Beer") ?
                <p className="fade-in textAlign">
                    Une simple bière hein ?
                </p> :
                <p className="fade-in textAlign">
                    De l'eau ? Allons allons...
                </p>}
            <p className="fade-in textAlign">
                Le Tavernier vous regarde attentivement et il remarque que vous avez l'air épuisé et affamé.
                Il décide de prendre les choses en main et il crie à sa cuisinière de préparer une volaille bien dodue.
                Pendant que vous attendez que votre repas soit prêt, vous regardez autour de vous et vous constatez
                que la taverne est pleine de voyageurs et de villageois.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern04}>
                    Continuer d'observer
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern03;