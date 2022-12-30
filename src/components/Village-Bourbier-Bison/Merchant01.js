import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Merchant01(component) {
    let parsedOr = parseInt(component.data.Or)
    let parsedEndu = parseInt(component.data.Endurance)
    const nextComponentVillage04 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent(1)
    }
    const letsPay = () => {
        if (localStorage.getItem("SideQuest06")) {
            alert("Vous avez deja acheté cette objet")
        } else {
            // On change le Props Ici pour passer au composant suivant
            localStorage.setItem("Or", parsedOr - 500)
            localStorage.setItem("Endurance", parsedEndu + 3)
            localStorage.setItem("SideQuest06", "ok")
            component.setComponent("village04")
        }
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous poussez la porte de l'échoppe et vous entrez. L'homme qui se tient derrière le comptoir est petit et rondouillard,
                avec des cheveux gris et un visage buriné par le temps. Il porte une longue robe de coton et un tablier maculé de taches diverses.
                Il lève les yeux vers vous et vous salue d'un signe de tête. "Bonjour, mon ami", dit-il d'une voix râpeuse.
                "Je suis le marchand de cette échoppe, et je peux vous offrir tout un tas de bric-à-brac.
                Mais ce qui intéressera peut-être le plus votre héroïque personne, c'est cette amulette.
                Elle donnera plus d'endurance à son porteur, croyez-moi."

                Il sort une petite amulette en argent de sous le comptoir et la met sous votre nez.
                Elle est ornée d'un cœur en rubis et pendue à une chaîne en or. "Ce collier est le parfait accessoire
                pour un aventurier comme vous", dit le marchand en vous gratifiant d'un sourire qui révèle une dentition manquante.
                "Je vous le vends pour 500 pièces d'or. Qu'en dites-vous?"

                Vous regardez l'amulette avec intérêt, mais vous hésitez.
                500 pièces d'or, c'est une somme considérable, et vous n'êtes pas sûr de vouloir
                dépenser autant d'argent pour une amulette qui ne vous est peut-être même pas utile.
                Que décidez-vous de faire?
            </p>

            {parsedOr < 500 && <p>
                Vous regardez l'amulette avec intérêt, mais vous savez que vous n'avez pas assez d'argent pour l'acheter.
                Vous remerciez poliment l'homme pour son offre et lui dites que vous n'êtes pas intéressé. L'homme hausse les épaules et range son amulette
                dans sa sacoche, puis il vous salue. Vous reprenez votre route, résolu à découvrir ce que Bourbier-bison a à vous révéler.
            </p>}
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage04}>
                    Quitter l'échoppe
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                {parsedOr >= 500 && <button className='adventure__ChooseButton' onClick={letsPay}>
                    Payer
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>}
            </div>
        </div >
    );
}

export default Merchant01;