import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaFulcrum } from 'react-icons/fa';

function Forest02(component) {
    const nextComponentForest02 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("forest03")
    }
    const nextComponentRandomFight02 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("randomFight02")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Rapidement, vous remarquez des traces étranges sur le sol, qui semblent être celles de pattes de rat.
                Elles sont énormes et se déplacent sur deux pattes, indiquant une créature potentiellement dangereuse.

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
                <button className='adventure__ChooseButton' onClick={nextComponentForest02}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Forest02;