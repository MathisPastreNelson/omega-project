import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Safe04(component) {
    const nextComponentSafe05 = () => {
        // On change le Props Ici pour passer au composant suivant
        window.localStorage.setItem('Save', 1);
        component.setComponent(1)
    }
    const nextComponentMerchant01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("merchant01")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                La forêt Tourbe-Bourbe se dresse fièrement à l'horizon, ses arbres verts et luxuriants semblant vous inviter à les découvrir.
                Mais alors que vous vous mettiez en route, vous remarquez un individu étrange semblant vous regarder.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentSafe05}>
                    Continuer vers la forêt
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentMerchant01}>
                    Aller voir l'individu
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Safe04;