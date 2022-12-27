import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest25(component) {
    const nextComponentForest26 = () => {
        component.setComponent("forest26")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                À quelques kilomètres de là, vous apercevez une auberge qui semble accueillante.
                Vous décidez de vous y rendre pour vous reposer et vous réchauffer après votre longue marche dans la forêt.
                En approchant de l'auberge, vous remarquez que celle-ci est bâtie en pierre et en bois,
                avec une enseigne en fer forgé qui cliquette au vent.
                Vous pouvez entendre les rires et les conversations qui viennent de l'intérieur,
                et vous sentez une odeur de nourriture qui vous met l'eau à la bouche.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest26}>
                    Pousser la porte
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest25;