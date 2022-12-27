import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Forest21(component) {
    const nextComponentForest22 = () => {
        window.localStorage.setItem('SideQuest02', "ok");
        window.localStorage.setItem('Save', 3);
        component.setComponent(1)
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous quittez le camp de Grondar en silence, sans dire un mot à la vieille femme ni au propriétaire.
                Vous n'avez pas envie de parler, ni de faire la conversation.
                Vous êtes préoccupé par votre voyage et par les dangers qui vous attendent dans la forêt Tourbe-Bourbe.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest22}>
                    Reprendre la route
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest21;