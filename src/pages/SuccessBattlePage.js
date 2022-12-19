import React from 'react';
import { useState } from "react";
import SuccessBattle from '../components/SuccessBattle';

const SucessBattlePage = () => {
    const [component, setComponent] = useState(1);
    return (
        <div>
            <SuccessBattle component={component} setComponent={setComponent} />
        </div>
    );
};

export default SucessBattlePage;