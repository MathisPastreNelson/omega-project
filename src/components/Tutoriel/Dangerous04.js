import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Dangerous04(component) {
    const nextComponentBattle01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("battle01")
    }


    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Soudain, un bruit étrange attire votre attention. Vous vous retournez brusquement, prêts à affronter n'importe quel danger.
                Et c'est alors que vous le voyez : un énorme slim gluant et baveux qui se dirige droit sur vous.

                Vous n'avez pas le temps de réfléchir. Vous sortez votre arme et vous mettez en position de défense.
                Le slim se rapproche de plus en plus, en laissant derrière lui une traînée visqueuse et nauséabonde.
                Vous savez que vous devez agir vite, avant que le monstre ne soit sur vous.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentBattle01}>
                    Engager le combat.
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Dangerous04;