import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Village15(component) {
    const nextComponentVillage16 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("village16")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous lui remettez la boîte à bijou et lui racontez votre aventure.
                Il est reconnaissant et vous remercie chaleureusement pour votre aide.
                Sa femme lui demande de quoi il s'agit et il lui montre les bijoux,
                qui sont en effet ceux qu'elle lui avait offerts pour leur anniversaire de mariage.
                Elle est ravie de les retrouver et vous remercie également.
                Jérome vous propose de rester dîner en remerciement et vous acceptez avec plaisir.
                Vous passez une agréable soirée en leur compagnie et repartez le lendemain matin,
                ravi d'avoir pu aider une famille et d'avoir fait une bonne action.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentVillage16}>
                    Partir
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Village15;