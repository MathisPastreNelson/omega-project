import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Bivouac01(component) {
    const nextComponentForest22 = () => {
        window.localStorage.setItem('Save', 3);
        component.setComponent(1)
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous décidez de faire votre campement ici..
                Cette nuit-là, vous avez du mal à trouver le sommeil.
                Malgré votre fatigue, votre esprit est agité par toutes les émotions et les expériences que vous avez vécues cette journée.
                Vous vous retournez dans votre lit de fortune, enveloppé dans votre couverture et allongé sur le sol dur de la forêt.
                Les bruits des animaux sauvages finissent tout de même par vous bercer...
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentForest22}>
                    Attendre l'aube...
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Bivouac01;