import React from 'react';
// import AMongoDbConnect from "../components/AMongoDbConnect"

// Différents composants
import Start from "../components/Start"
import RoadSelect from '../components/RoadSelect';
import Introduction from '../components/Introduction';

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

