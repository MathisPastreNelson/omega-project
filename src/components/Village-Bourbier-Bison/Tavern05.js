import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern05(component) {
    const nextComponentTavern06Option1 = () => {
        window.localStorage.setItem('Solene', "Yes");
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern06")
    }

    const nextComponentTavern06Option2 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern06")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Une fois votre repas terminé et votre estomac bien plein, vous décidez de vous mêler
                aux autres clients de la taverne et de faire connaissance.
                Vous observez la salle et vous remarquez deux personnes qui sont assises toutes seules à des tables différentes.
                La première est une jeune femme qui a l'air de méditer en sirotant sa bière. Elle a les cheveux noirs et les yeux bleus,
                et elle porte une robe de voyageur usée mais bien entretenue.
                La seconde personne est un vieil homme qui regarde par la fenêtre en fumant sa pipe.
                Il a l'air solitaire et mélancolique, et vous avez l'impression qu'il a de nombreuses histoires à raconter.
                Il a les cheveux gris et les yeux bleus, et il porte une chemise et un pantalon de travail.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern06Option1}>
                    Aller voir la femme
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern06Option2}>
                    Aller voir l'homme
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern05;