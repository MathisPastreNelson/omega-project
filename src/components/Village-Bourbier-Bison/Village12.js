import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Village12(component) {
    const nextComponentFightBoss1 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("fightBoss1")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avancez encore un peu et, soudain, vous entendez un craquement sous vos pieds.
                Horrifié, et vous entendez les bandits se rapprocher.
                Vous entendez un homme chuchoter à l'autre : "Je m'en occupe", et vous comprenez que vous êtes découvert.
                Vous reconnaissez la femme de l'auberge qui s'éloigne, mais l'homme reste là, prêt à se battre. Il est costaud et semble très déterminé
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentFightBoss1}>
                    Affronter le bandit
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village12;