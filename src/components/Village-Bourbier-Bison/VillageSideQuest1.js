import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function VillageSideQuest1(component) {
    const nextComponentVillage03 = () => {
        window.localStorage.setItem('Save', 3);
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village03")
    }

    const nextComponentVillage03SideQuest2 = () => {
        window.localStorage.setItem('Save', 1);
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(1)
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                La vieille femme semble encore plus inquiète lorsque vous lui demandez ce qui la tracasse.
                Elle vous explique qu'elle vient de découvrir un tunnel dans sa cave, un tunnel creusé par les Glubandurs,
                une espèce d'araignée géante commune dans cette région.

                "J'étais en train de faire du rangement dans ma cave quand j'ai vu une de ces créatures !
                J'ai eu tellement peur que j'ai couru pour m'enfuir, et c'est là que j'ai vu qu'il y en avait
                au moins une autre dans mon salon. Je n'ose même pas imaginer combien il y en a dans ma maison !"
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage03SideQuest2}>
                    La rassurer et aller voir..
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage03}>
                    Des araignées ? Oh que non...
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default VillageSideQuest1;