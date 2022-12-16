import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Start02(component) {
    const nextComponent = () => {
        // On change le Props Ici pour passer au composant suivant
        window.localStorage.setItem('Bandage', 2);
        component.setComponent(3)
    }


    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Votre voyage vous a conduit jusqu'à l'Ile de la
                Flèche Noire, à l'est de Khul. Arrivé à bon port,
                le prestigieux Régiment du Tigre Blanc a été
                ravi d'accueillir en son sein un mercenaire de
                votre réputation, et si ses officiers recruteurs ont
                un peu toussé lorsque vous leur avez indiqué le
                montant de la solde que vous exigiez en regard
                de vos exceptionnels états de service, ils l'ont
                finalement accepté sans marchander, à votre
                grande satisfaction. Mais c'est aujourd'hui que
                votre engagement touche à sa fin... et que vos
                ennuis commencent. Vous achevez de
                boucler votre paquetage avant de quitter Port
                Fanal.</p>
            <div className='adventure__Button__Container'>
                <button className='adventure__Button' onClick={nextComponent}>
                    Suivant
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}



export default Start02;