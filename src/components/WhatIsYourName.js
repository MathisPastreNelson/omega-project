import React, { useState, useEffect } from 'react';

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

    return (
        <form onSubmit={handleSubmit} className="generalContainer">
            <label>
                Nom Du personnage :
                <input type="text" value={userName} onChange={handleChange} />
            </label>
            <div className='personalButton__container'>
                <button className='personalButton' type="submit">OK</button>
            </div>
        </form>
    );
}





export default UserNameForm;