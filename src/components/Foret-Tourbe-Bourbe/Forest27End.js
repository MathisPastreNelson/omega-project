import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight, FaCheck, FaRegWindowClose } from 'react-icons/fa';

function Forest27(component) {
    const data = component.data
    const savePosition = parseInt(data.SavePosition)

    const successForest = () => {
        if (savePosition >= 1) {
            window.location.assign('/roadSelect')
            window.localStorage.setItem('Save', 0);
        } else {
            window.localStorage.setItem('SavePosition', 1);
            window.localStorage.setItem('Save', 0);
            window.location.assign('/roadSelect')
        }
    }
    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Bravo vous venez de finir votre première aventure.
            </p>
            {data.SideQuest01 === "saved" && <p className="fade-in textAlign center smallFont"> <FaCheck className='adventure__Finished' /> Vous avez sauvé Clarisse</p>}
            {data.SideQuest02 === "ok" && <p className="fade-in textAlign center smallFont"><FaCheck className='adventure__Finished' />Vous avez fait la conaissance de Grondar</p>}
            {data.SideQuest03 === "ok" && <p className="fade-in textAlign center smallFont"><FaCheck className='adventure__Finished' />Vous avez tué le loup-garou</p>}
            {data.SideQuest01 === "notSaved" && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Vous avez tué Clarisse</p>}
            {data.SideQuest01 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un personnage n'a pas été rencontré</p>}
            {data.SideQuest02 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un personnage n'a pas été rencontré</p>}
            {data.SideQuest03 === undefined && <p className="fade-in textAlign center smallFont"><FaRegWindowClose className='adventure__NotFinished' />Un monstre n'a pas été tué</p>}
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={successForest}>
                    Achever le scenario
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest27;