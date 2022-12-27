import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest14(component) {
    const nextComponentForest15 = () => {
        component.setComponent("forest15")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                L'homme qui ouvre la porte est grand et imposant, avec une barbe broussailleuse et des yeux perçants.
                Il a l'air d'un guerrier expérimenté et vous avez l'impression qu'il n'a pas froid aux yeux.

                Sans même vous regarder, il décoche une flèche enflammée sur le garou-loup qui vous poursuivait.
                La créature pousse un cri de douleur et s'enfuit en direction de la forêt, la queue entre les jambes.

                "Entre vite, avant qu'il ne revienne !", crie l'homme en vous faisant signe de passer la porte.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest15}>
                    Passer la porte
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest14;