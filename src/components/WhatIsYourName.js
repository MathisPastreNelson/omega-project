import React, { useState } from 'react';

function UserNameForm(component) {
    const [userName, setUserName] = useState('');

    function handleChange(event) {
        setUserName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('userName', userName);
        component.setComponent(2)
    }

    // Définissez l'indication qui sera affichée pour indiquer qu'un regex doit être utilisé
    const regexIndication = "Minimum 4 lettres";


    return (
        <form onSubmit={handleSubmit} className="generalContainer">
            <label className='nameAndInput'>
                Nom du personnage :
                <input className='inputPlaceholder' placeholder={regexIndication} type="text" pattern="^\S[A-Za-z]{3,}$" value={userName} onChange={handleChange} required />
            </label>
            <div className='personalButton__container'>
                <button className='personalButton' type="submit">OK</button>
            </div>
        </form>
    );
}





export default UserNameForm;