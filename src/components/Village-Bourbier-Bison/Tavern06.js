import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';
import imageEncounter from '../../assets/EncounterImg/BlackHairWomanTavern.webp'

function Tavern06(component) {
    const nextComponentTavern07 = () => {
        window.localStorage.removeItem('Solene');
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("tavern07")
    }

    return (
        <div className="adventure__Container">
            {window.localStorage.getItem("Solene") ?
                <div>
                    <img className='imageEnemy' src={imageEncounter} alt="Illustration d'adversaire" />
                    <p className="fade-in textAlign">
                        Vous vous approchez de la jeune femme et vous lui demandez si vous pouvez vous asseoir à côté d'elle.
                        Un refus catégorique vous oblige à rebrousser chemin. Vous vous rabattez sur le vieil homme.
                    </p>
                </div> :
                <p className="fade-in textAlign">
                    Vous vous approchez du vieil homme..
                </p>}
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentTavern07}>
                    Accoster l'homme
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Tavern06;