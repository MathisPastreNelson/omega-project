import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaFulcrum } from 'react-icons/fa';

function Forest06(component) {
    const nextComponentForest07 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest07")
    }

    const nextComponentRandomFight02 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomFight02")
    }

    return (
        <div className="adventure__Container">
            {window.localStorage.getItem("SideQuest01") === "notSaved" ? <p className="fade-in textAlign"> La dépouille de Clarisse et celle du bandit gisent au sol...</p> :
                <p className="fade-in textAlign">La dépouille de la victime et celle du bandit gisent au sol...</p>}
            <p className="fade-in textAlign">
                Rapidement, vous remarquez à nouveau les traces étranges sur le sol, qui semblent être celles de pattes de rat.

                Vous hésitez un instant, vous demandant si vous devriez suivre ces traces ou poursuivre votre route.
                Si vous suivez les traces, vous pourriez vous retrouver face à un danger inattendu.
                Mais si vous poursuivez votre route, vous risquez de manquer une occasion..

                Vous réfléchissez longuement, pesant le pour et le contre.
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='battle__ChooseButton' onClick={nextComponentRandomFight02}>
                    Suivre les traces..
                    <FaFulcrum className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentForest07}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest06;