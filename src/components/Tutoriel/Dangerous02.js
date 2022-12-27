import React from 'react';
// Import FontAwesome Component
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Dangerous02(component) {
    const nextComponentDangerous03 = () => {
        // On change le Props Ici pour passer au composant suivant
        component.setComponent("dangerous03")
    }

    return (
        <div className="adventure__Container">
            <p className="fade-in textAlign">
                "La route a toujours été un endroit sûr pour voyager, mais ces derniers temps,
                elle est devenue bien plus dangereuse qu'avant.
                Des monstres malveillants ont commencé à apparaître un peu partout,
                et ils n'hésitent pas à attaquer les voyageurs innocents qui passent par là.
                Personne ne sait vraiment d'où ils viennent, mais ils semblent avoir une force et une agressivité sans pareil.
                Si tu veux te rendre quelque part en empruntant cette route, fais bien attention et sois prêt à te défendre à tout moment.
                Prends aussi des précautions, comme voyager en groupe ou porter une arme, pour augmenter tes chances de te sortir indemne de cette situation."
            </p>
            <div className='adventure__ChooseButton__Container'>
                <button className='adventure__ChooseButton' onClick={nextComponentDangerous03}>
                    Continuer le chemin.
                    <FaArrowAltCircleRight className='adventure__Button__Arrow' />
                </button>
            </div>
        </div>
    );
}

export default Dangerous02;