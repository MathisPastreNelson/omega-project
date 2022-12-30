import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village08(component) {
    const nextComponentVillage09 = () => {
        window.localStorage.setItem('Save', 4);
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(1)
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous êtes intrigué par cette découverte, et vous décidez de suivre les empreintes.
                Elles vous mènent à l'arrière de la maison, où vous apercevez une petite rivière qui serpente à travers la campagne.
                Vous vous approchez et vous constatez que les empreintes s'arrêtent au bord de l'eau.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage09}>
                    Traverser la rivière
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village08;