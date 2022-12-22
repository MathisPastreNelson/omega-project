import React, { useState } from 'react';

function UserNameForm(component) {
    // State du pseudo de l'utilisateur
    const [userName, setUserName] = useState('');

    // On récupère la valeur de l'input (Le pseudo)
    function handleChange(event) {
        setUserName(event.target.value);
    }

    // On sauvegarde le pseudo dans le localStorage
    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('userName', userName);
        component.setComponent(2)
    }

    // Indication qui sera affichée pour indiquer qu'un regex doit être utilisé
    const regexIndication = "4-10 lettres";

    return (
        <form onSubmit={handleSubmit} className="generalContainer">
            <label className='nameAndInput'>
                Nom du personnage :
                <input className='inputPlaceholder' placeholder={regexIndication} type="text" pattern="^\S[A-Za-z]{3,10}$" value={userName} onChange={handleChange} required />
            </label>
            <div className='personalButton__container'>
                <button className='adventure__Button' type="submit">OK</button>
            </div>
        </form>
    );
}





export default UserNameForm;