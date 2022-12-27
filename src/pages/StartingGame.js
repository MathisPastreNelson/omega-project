import React from 'react';
// import AMongoDbConnect from "../components/AMongoDbConnect"

// Différents composants
import Start from "../components/Gameplay-Commun/Start"
import RoadSelect from '../components/RoadSelect';
import Introduction from '../components/Gameplay-Commun/Introduction';

const StartingGame = () => {
    const data = window.localStorage
    return (
        <div>
            <h1 className='textAlign'>Role Playing Groubi</h1>
            <Start />
            {data.length > 6 ? < RoadSelect data={data} /> : <Introduction />}
            {/* <AMongoDbConnect /> */}
        </div>
    )
}

export default StartingGame;

