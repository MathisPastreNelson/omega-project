import React from 'react';
// Import FontAwesome Component
import { FaCheck, FaRegWindowClose } from 'react-icons/fa';

function RoadSelect(component) {
    const data = component.data
    const saveAdvance = parseInt(data.SavePosition)

    const goToForest = () => {
        localStorage.setItem("Save", 0)
        window.location.assign('/road1')
    }
    const goToVillage = () => {
        localStorage.setItem("Save", 0)
        window.location.assign('/village1')
    }

    return (
        <div>
            <div className="road__Container">
                {saveAdvance > 0 ?
                    <h2 className="fade-in textAlign done">
                        La forêt de Tourbe-Bourbe (Terminé)
                    </h2> :
                    <h2 className="fade-in textAlign notDone">
                        La forêt de Tourbe-Bourbe (En cours)
                    </h2>
                }
                {data.SideQuest01 === "saved" && <p className="fade-in textAlign center smallFont"> <FaCheck className='adventure__Finished' /> Vous avez sauvé Clarisse</p>}
                {data.SideQuest02 === "ok" && <p className="fade-in textAlign center smallFont"><FaCheck className='adventure__Finished' />Vous avez fait la conaissance de Grondar</p>}
                {data.SideQuest03 === "ok" && <p className="fade-in textAlign center smallFont"><FaCheck className='adventure__Finished' />Vous avez tué le loup-garou</p>}
                {data.SideQuest01 === "notSaved" && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Vous avez tué Clarisse</p>}
                {data.SideQuest01 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un personnage n'a pas été rencontré</p>}
                {data.SideQuest02 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un personnage n'a pas été rencontré</p>}
                {data.SideQuest03 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un monstre n'a pas été tué</p>}
                {localStorage.getItem("Save") &&
                    <div className='adventure__ChooseButton__Container'>
                        <button className='adventure__Button' onClick={goToForest}>
                            Initialiser la route
                        </button>
                    </div>
                }
            </div>
            <div className="road__Container">
                {saveAdvance >= 2 ?
                    <h2 className="fade-in textAlign done">
                        Le village de Bourbier-Bison (Terminé)
                    </h2> :
                    <h2 className="fade-in textAlign notDone">
                        Le village de Bourbier-Bison (En cours)
                    </h2>
                }
                {data.SideQuest04 === "ok" && <p className="fade-in textAlign center smallFont"><FaCheck className='adventure__Finished' />Vous avez chassé les araignées de la maison.</p>}
                {data.SideQuest05 === "ok" && <p className="fade-in textAlign center smallFont"><FaCheck className='adventure__Finished' />Vous avez vaincu la multitude.</p>}
                {data.SideQuest06 === "ok" && <p className="fade-in textAlign center smallFont"><FaCheck className='adventure__Finished' />Vous trouver l'amulette.</p>}
                {data.SideQuest07 === "ok" && <p className="fade-in textAlign center smallFont"><FaCheck className='adventure__Finished' />L'impressionant bandit a été tué.</p>}
                {data.SideQuest04 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un personnage n'a pas été rencontré</p>}
                {data.SideQuest05 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un monstre n'a pas été tué</p>}
                {data.SideQuest06 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un objet doit être trouvé.</p>}
                {data.SideQuest07 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Une personne malveillante en liberté.</p>}
                <div className='adventure__ChooseButton__Container'>
                    <button className='adventure__Button' onClick={goToVillage}>
                        Initialiser la route
                    </button>
                </div>
            </div>

        </div>
    );
}

export default RoadSelect;