import React from 'react';
// Import FontAwesome Component
import { FaCheck, FaRegWindowClose } from 'react-icons/fa';

function RoadSelect(component) {
    const data = component.data

    const goToForest = () => {
        localStorage.setItem("Save", 0)
        window.location.assign('/road1')
    }
    console.log(data.SavePosition)
    const saveAdvance = parseInt(data.SavePosition)
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
                            Recommencer la route
                        </button>
                    </div>
                }
            </div>
            {saveAdvance > 0 &&
                <div className="road__Container">
                    <h2 className="fade-in textAlign notDone">
                        ??? (Bientôt)
                    </h2>
                    <p className="fade-in textAlign center smallFont"> <FaRegWindowClose className='adventure__NotFinished' />???</p>
                    <p className="fade-in textAlign center smallFont"> <FaRegWindowClose className='adventure__NotFinished' />???</p>
                    <p className="fade-in textAlign center smallFont"> <FaRegWindowClose className='adventure__NotFinished' />???</p>
                    <p className="fade-in textAlign center smallFont"> <FaRegWindowClose className='adventure__NotFinished' />???</p>
                </div>
            }
        </div>
    );
}

export default RoadSelect;