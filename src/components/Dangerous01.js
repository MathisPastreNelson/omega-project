import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Dangerous01(component) {
    const dangerousDecline = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("safe01")
    }
    const nextComponentDangerous03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("dangerous03")
    }


    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous décidez de prendre le risque et de suivre le chemin plus arpentueux, espérant arriver plus rapidement à destination.
                Mais vous n'avez pas prévu que le chemin serait aussi difficile.

                Il est tantôt escarpé, bordé de rochers qui vous obligent à grimper et à vous hisser pour avancer,
                tantôt envahi par des herbes hautes qui dépassent maintenant votre taille.
                Vous vous retrouvez à avancer à l'aveuglette, essayant de suivre le chemin le plus direct possible tout en évitant les obstacles.

                Vous commencez à vous demander si vous n'avez pas fait une erreur en choisissant ce chemin,
                mais il est maintenant trop tard pour faire demi-tour. Vous allez devoir aller jusqu'au bout, quoi qu'il arrive.

                Espérons que vous arriverez à destination sans trop de problèmes... ou que vous trouverez
                une solution pour en sortir si vous vous retrouvez dans une impasse.
                Voulez vous rebrousser chemin et choisir la route des pélerins ou vous obstiner dans cette voie ?
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={dangerousDecline}>
                    Rebrousser chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentDangerous03}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Dangerous01;