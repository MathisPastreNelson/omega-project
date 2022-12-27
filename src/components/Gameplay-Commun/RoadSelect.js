import React from 'react';
// Import FontAwesome Component
import { FaCheck, FaRegWindowClose } from 'react-icons/fa';

function RoadSelect(component) {
    const data = component.data

    const goToForest = () => {
        localStorage.setItem("Save", 0)
        window.location.assign('/road1')
    }
    return (
        <div className="road__Container">
            <h2 className="fade-in textAlign">
                La forêt de Tourbe-Bourbe
            </h2>
            {data.SideQuest01 === "saved" && <p className="fade-in textAlign center"> <FaCheck className='adventure__Finished' /> Vous avez sauvé Clarisse</p>}
            {data.SideQuest02 === "ok" && <p className="fade-in textAlign center"><FaCheck className='adventure__Finished' />Vous avez fait la conaissance de Grondar</p>}
            {data.SideQuest03 === "ok" && <p className="fade-in textAlign center"><FaCheck className='adventure__Finished' />Vous avez tué le loup-garou</p>}
            {data.SideQuest01 === "notSaved" && <p className="fade-in textAlign center"><FaRegWindowClose className='adventure__NotFinished' />Vous avez tué Clarisse</p>}
            {data.SideQuest01 === undefined && <p className="fade-in textAlign center"><FaRegWindowClose className='adventure__NotFinished' />Un personnage n'a pas été rencontré</p>}
            {data.SideQuest02 === undefined && <p className="fade-in textAlign center"><FaRegWindowClose className='adventure__NotFinished' />Un personnage n'a pas été rencontré</p>}
            {data.SideQuest03 === undefined && <p className="fade-in textAlign center"><FaRegWindowClose className='adventure__NotFinished' />Un monstre n'a pas été tué</p>}
            {localStorage.getItem("Save") &&
                <div className='adventure__ChooseButton__Container'>
                    <button className='adventure__Button' onClick={goToForest}>
                        Recommencer la route
                    </button>
                </div>
            }
        </div>
    );
}

export default RoadSelect;