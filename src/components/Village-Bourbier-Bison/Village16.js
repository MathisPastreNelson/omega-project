import React from 'react';
// Import FontAwesome Component
import { FaFulcrum } from 'react-icons/fa';

function Village16(component) {
    const data = component.data
    const savePosition = parseInt(data.SavePosition)

    const successVillage = () => {
        if (savePosition >= 2) {
            window.location.assign('/roadSelect')
            window.localStorage.setItem('Save', 0);
        } else {
            window.localStorage.setItem('SavePosition', 2);
            window.localStorage.setItem('Save', 0);
            window.location.assign('/roadSelect')
        }
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Avant de partir la femme de Jérome vous interpelle, elle vous offre un beau sac de voyageur
                qu'elle a cousu elle-même durant la nuit.
                Selon elle, il devrait être assez grand pour contenir tout ce dont vous avez besoin pour vos futurs périples.
                Vous remerciez chaleureusement la femme pour son geste et prenez congé
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={successVillage}>
                    Achever le scenario
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}


export default Village16;