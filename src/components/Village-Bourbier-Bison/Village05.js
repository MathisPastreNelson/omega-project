import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village05(component) {
    const nextComponentVillage06 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village06")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous vous approchez de la maison de Jérôme et vous l'apercevez qui se tient sur le seuil, en train de fumer une pipe.
                C'est un homme d'une cinquantaine d'années, avec des cheveux gris et un visage buriné par les années.
                Il porte une chemise en lin et un pantalon en toile, et il a l'air d'un homme solide et travailleur.
                Vous lui expliquez que vous êtes à la recherche d'informations sur les bandits qui ont cambriolé sa maison,
                et il fronce les sourcils, l'air pensif. "Je me souviens bien de cette nuit-là", dit-il. "J'étais en train de dormir,
                quand j'ai entendu du bruit dans la maison. Je me suis levé pour voir ce qui se passait, et j'ai aperçu deux hommes et une femme
                qui s'enfuyaient par la porte d'entrée. Ils avaient l'air de brigands, avec leurs masques et leurs capes noires."
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage06}>
                    Demander des renseignements
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village05;