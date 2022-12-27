import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Start04(component) {
    const nextComponentSafe01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("safe01")
    }
    const nextComponentDangerous01 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("dangerous01")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                Vous marchez depuis plusieurs heures et la forêt Tourbe-Bourbe n'est toujours pas en vue. Vous commencez à vous demander si
                vous n'avez pas pris la mauvaise direction lorsque vous arrivez à une croisée de chemins.

                Un chemin large et bien entretenu mène tout droit vers la forêt, bordé de poteaux indicateurs et de pancartes indiquant la
                direction à suivre. Vous en déduisez qu'il s'agit du chemin de pélerin, emprunté par de nombreux voyageurs pour se rendre dans la forêt Tourbe-Burnes.

                L'autre chemin est beaucoup moins emprunté, envahi par les herbes hautes et parsemé de cailloux et de branches. Il semble plus
                rapide et plus direct, mais aussi plus périlleux. Vous hésitez un instant, ne sachant lequel choisir.

                Dois-je suivre le chemin de pélerin, sûr mais lent, ou bien prendre le risque de suivre le chemin plus arpentueux mais qui me
                permettrait d'arriver plus rapidement à destination ? La décision vous appartient, et vous devrez en assumer les conséquences.
                Quel sera votre choix ?
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentSafe01}>
                    Le chemin des pélerins
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
                <button className='adventure__ChooseButton' onClick={nextComponentDangerous01}>
                    Le chemin périlleux
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Start04;