import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaFulcrum } from 'react-icons/fa';

function Forest12(component) {
    const nextComponentForest12 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest13")
    }
    const nextComponentRandomBattle03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomFight03")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Paniqué, vous tentez de fuir à toutes jambes. Vous courrez aussi vite que vous le pouvez, les yeux fixés sur l'obscurité devant vous.
                Vous ne savez pas où vous allez, mais vous espérez que vous trouverez un moyen de vous enfuir avant que le garou-loup ne vous rattrape.

                Vous trébuchez et vous vous relevez, sans jamais perdre de vue la créature qui vous poursuit.
                Vous sentez son souffle chaud sur votre nuque et vous entendez ses grondements menaçants qui résonnent dans la forêt.

                Malgré tous vos efforts, vous n'arrivez pas à distancer le garou-loup.
                Vous avez l'impression qu'il vous talonne de près et que vous n'avez aucune chance de lui échapper.
                Vous vous demandez si c'est la fin et si vous allez périr dans cette forêt maudite.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest12}>
                    Continuer la fuite.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='battle__ChooseButton' onClick={nextComponentRandomBattle03}>
                    Se retourner et attaquer
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest12;