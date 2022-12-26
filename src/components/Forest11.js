import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaFulcrum } from 'react-icons/fa';

function Forest11(component) {
    const nextComponentForest12 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest12")
    }
    const nextComponentRandomBattle03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomFight03")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Les cris qui vous entourent deviennent de plus en plus inquiétants et vous avez l'impression que ce ne sont plus seulement des animaux sauvages qui vous appellent.
                Il y a quelque chose de plus sinistre dans l'air, comme si une présence maléfique vous suivait de près.

                Vous frissonnez à cette idée et vous accélérez le pas, espérant mettre le plus de distance possible entre vous et cette créature invisible.
                Malheureusement, vous n'arrivez pas à vous débarrasser de cette sensation d'être épié et vous avez l'impression que quelque chose de terrible
                se rapproche de vous à chaque pas.

                Soudain, vous apercevez une ombre qui se profile à l'horizon. Elle est encore lointaine, mais vous la voyez grandir et se rapprocher de vous
                à une vitesse alarmante. C'est un garou-loup, une créature terrifiante à moitié humaine et à moitié loup, qui terrorise les voyageurs qui ont
                le malheur de croiser sa route.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest12}>
                    Tenter la fuite.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={nextComponentRandomBattle03}>
                    Tenter l'attaque
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest11;