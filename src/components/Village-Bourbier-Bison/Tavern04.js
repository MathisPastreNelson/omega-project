import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Tavern04(component) {
    const nextComponentTavern05 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern05")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Il y a là un groupe de mercenaires bruyants qui se racontent des histoires de batailles et de trésors,
                un couple de voyageurs qui se chuchotent des mots doux à l'oreille, et un groupe de villageois qui jouent
                aux dés et rient de bon cœur. La fumée et les bruits de conversations animées créent une atmosphère conviviale
                et chaleureuse.

                Enfin, votre repas arrive et vous vous jetez dessus avec appétit. La volaille est tendre et savoureuse,
                les légumes croustillants et parfumés, et la boisson est fraîche et revigorante.
                Vous mangez jusqu'à ce que vous soyez rassasié,
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern05}>
                    Savourer son repas
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern04;