import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Start01(component) {
    const nextComponent = () => {
        // On change le Props Ici pour passer au composant suivant
        if (window.localStorage.length >= 7) {
            component.setComponent(2)
        } else {
            window.location.assign('/')
        }
    }


    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">Voici le début de l'histoire.</p>
            <div className='adventure__Button__Container'>
                <button onClick={nextComponent} className='adventure__Button'>
                    Suivant
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}



export default Start01;