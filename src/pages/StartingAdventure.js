import React from 'react';
import { useState } from "react";
import StartStats from "../components/StatsRepartition";
import StartWeapons from '../components/StartWeapons';

const StatsRepartitionAtStart = () => {
    const [game, setGame] = useState('SetupStats')

    // On appelle le bon composant grace à ce Hook
    const handleClick = (gameState) => {
        setGame(gameState)
        console.log(game)
    }

    return (
        <div>
            {(() => {
                switch (game) {
                    case 'SetupStats':
                        return <StartStats handleClick={handleClick} />
                    case 'SetupWeapons':
                        return <StartWeapons handleClick={handleClick} />
                }

            })()};
        </div>
    )
}

export default StatsRepartitionAtStart;