import { FC } from 'react';

import { Key } from './key';
import { useClearEquation } from '../hooks/useClearEquation';

export const ClearKey: FC = () => {
    const clearEquation = useClearEquation();

    const handleKeyDown = (event) => {
        if (event.key === "c") {
            clearEquation();
        }
    };

    return (
        <Key onClick={clearEquation} onKeyDown={handleKeyDown} label={'C'}/>
    );
};