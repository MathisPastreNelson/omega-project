import React from 'react';
// Import FontAwesome Component
import { FaFulcrum, FaArrowAltCircleRight } from 'react-icons/fa';

function Village10Alt(component) {
    const nextComponentFightSideBoss3 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("fightSideBoss3")
    }
    const nextComponentVillage10 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village10")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avancez encore un peu dans les bois, suivant les traces de l'homme seul. Vous êtes sur le qui-vive,
                prêt à réagir à tout moment. Soudain, vous entendez un bruit devant vous.
                Vous vous figez sur place et tendez l'oreille, essayant de comprendre ce qui se passe.
                Vous entendez des bruits de pas et vous comprenez que vous êtes tombé sur le bandit.
                Vous sortez votre arme et avancez lentement, prêt à passer à l'attaque.
                Lorsque vous débouchez dans une petite clairière, vous apercevez l'homme en train de masquer ses traces.
                Il est très imposant, et vous comprenez que ce ne sera pas une bataille facile.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentFightSideBoss3}>
                    Affronter le bandit
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage10}>
                    Revenir en arrière discrement
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village10Alt;