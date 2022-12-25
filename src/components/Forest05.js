import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Forest05(component) {
    const nextComponentBattle02 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("battle02")
    }

    return (
        <div className="adventure__Container">
            {window.localStorage.getItem("SideQuest01") === "notSaved" ?
                <p className="fade-in textAlign">
                    Alors que vous avancez dans la forêt Tourbe-Bourbe, vous apercevez soudain un homme au loin.
                    Il est en train de s'acharner sur quelque chose ou quelqu'un, et vous avez l'horrible pressentiment que cela pourrait être Clarisse,
                    la jeune fille que vous avez rencontrée plus tôt.

                    Vous dégainez votre arme et vous vous avancez vers lui, déterminé à l'arrêter.
                    Il se retourne et vous aperçoit, et son visage se fige de surprise.
                    Il n'a pas l'air de s'attendre à être dérangé mais dégaine son arme.
                </p>
                :
                <p className="fade-in textAlign">
                    Alors que vous avancez dans la forêt Tourbe-Bourbe, vous apercevez soudain un homme au loin.
                    Il est en train de fouiller dans un sac et semble occupé à quelque chose, mais vous ne voyez pas bien de quoi il s'agit.

                    Intrigué, vous décidez de vous approcher pour en savoir plus. Lorsque vous arrivez à sa hauteur, vous réalisez qu'il s'agit d'un bandit.
                    Il est en train de dépouiller un voyageur qu'il vient de détrousser et il ne vous remarque pas tout de suite.

                    Vous dégainez votre arme et vous vous avancez vers lui, déterminé à l'arrêter.
                    Il se retourne et vous aperçoit, et son visage se fige de surprise.
                    Il n'a pas l'air de s'attendre à être dérangé mais dégaine son arme.
                </p>
            }
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentBattle02}>
                    Se défendre
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest05;