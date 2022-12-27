import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest18(component) {
    const nextComponentForest19 = () => {
        component.setComponent("forest19")
    }

    const nextComponentForest20 = () => {
        component.setComponent("forest20")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                "Sale petit morveux ! Tu crois que tu vas t'en tirer comme ça ? Tu es encore plus stupide que tu en as l'air !"
                "Tu es pitoyable ! Tu n'es même pas capable de te débrouiller tout seul ? Tu es tellement dépendant que tu es obligé de te servir des autres !""
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest20}>
                    Se coucher...
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentForest19}>
                    Insulter la vieille bique
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest18;