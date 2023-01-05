import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';
import imageEncounter from '../../assets/EncounterImg/Merchant.webp'

function Merchant01(component) {
    let parsedOr = parseInt(component.data.Or)
    const backComponentSafe03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(1)
    }
    const letsPay = () => {
        // On change le Props Ici pour passer au composant suivant
        localStorage.setItem("Or", parsedOr - 10)
        component.setComponent("cucked01")
    }
    console.log("Or du joueur", parsedOr)

    return (
        <div className="adventure__Container">
            <img className='imageEnemy' src={imageEncounter} alt="Illustration d'adversaire" />
            <p className="fade-in textAlign">
                L'homme vous salue avec une politesse feinte et vous tend une fiole remplie d'un liquide rouge vif, qui brille d'une lueur étrange.
                "Voici une Flamenkunsh enchantée", dit-il d'une voix grave et râpeuse. "Elle vous donnera la force et le courage nécessaires
                pour affronter les dangers de la forêt Tourbe-Bourbe. Mais attention, cette potion n'est pas gratuite. Je la vends au prix de 10 pièces d'or."
            </p>

            {parsedOr < 10 && <p>
                Vous regardez la fiole avec intérêt, mais vous savez que vous n'avez pas assez d'argent pour l'acheter.
                Vous remerciez poliment l'homme pour son offre et lui dites que vous n'êtes pas intéressé. L'homme hausse les épaules et range la fiole
                dans sa sacoche, puis il vous salue et s'éloigne rapidement dans la forêt. Vous reprenez votre route, résolu à découvrir ce que la forêt
                Tourbe-Bourbe a à vous révéler.
            </p>}
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={backComponentSafe03}>
                    Retourner en arrière
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                {parsedOr >= 10 && <button className='adventure__ChooseButton' onClick={letsPay}>
                    Payer sans broncher
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>}
            </div>
        </div >
    );
}

export default Merchant01;