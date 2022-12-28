import React from 'react';
import { useState } from "react";
import SuccessBattle from '../components/Village-Bourbier-Bison/SuccessBattle';

const SucessBattlePage2 = () => {
    const [component, setComponent] = useState(1);
    return (
        <div>
            <SuccessBattle component={component} setComponent={setComponent} />
        </div>
    );
};

export default SucessBattlePage2;