import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest23(component) {
    const nextComponentForest24 = () => {
        component.setComponent("forest24")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous avancez pendant plusieurs heures, en admirant la beauté de la forêt et en écoutant les
                bruits de la nature. Vous entendez les oiseaux chanter et les feuilles bruisser dans le vent,
                et vous ressentez une grande paix intérieure.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest24}>
                    Continuer la route
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest23;