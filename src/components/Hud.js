import React from 'react';
import { useState, useEffect } from "react";

const LocalStorageData = ({ data }) => {
    // rendu
    return (
        <div className="character__container">
            <div>
                <p>Force : {data.Force}</p>
                <p>Agilité : {data.Agilité}</p>
                <p>Intelligence : {data.Intelligence}</p>
                <p>Endurance : {data.Endurance}</p>
            </div>
            <div>
                <p>{data.userName}</p>
            </div>
            <div className='itemEquipped'>
                <p>Arme : {data.Arme}</p>
                <p>Casque : {data.Casque}</p>
                <p>Torse : {data.Torse}</p>
                <p>Jambe : {data.Jambe}</p>
            </div>
        </div>
    );
}

export default LocalStorageData