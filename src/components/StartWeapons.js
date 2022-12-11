import React from 'react';

const StartWeapons = () => {
    return (
        <div className='StartWeapons__container'>
            <div className='StartWeapons__list'>
                <button className='weaponsButtons' type='button'>Epee</button>
                <button className='weaponsButtons' type='button'>Hache</button>
                <button className='weaponsButtons' type='button'>Masse</button>
                <button className='weaponsButtons' type='button'>Arc</button>
                <button className='weaponsButtons' type='button'>Bâton</button>
            </div>
        </div>
    );
};

export default StartWeapons;