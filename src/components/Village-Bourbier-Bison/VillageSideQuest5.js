import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function VillageSideQuest5(component) {
    const nextComponentVillage03 = () => {
        window.localStorage.setItem('Save', 3);
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village03")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                La Glubandur s'effondre en poussant un cri strident, et les autres s'enfuient en tous sens, désorientées.
                Vous profitez de cette confusion pour vous refrayer un chemin jusqu'à l'entrée du tunnel.
                Vous bloquez l'entrée avec l'étagère en bois massif et vous vous assurez que toutes les Glubandurs sont bien parties.
                La vieille femme est ravie de votre aide et vous remercie chaleureusement.
                Vous quittez la maison, heureux d'avoir accompli votre mission. Vous reprenez votre route dans les rues de Bourbier-Bison
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage03}>
                    Continuer
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default VillageSideQuest5;