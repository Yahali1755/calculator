import { FC } from 'react';

import { Key } from './key';
import { useClearEquation } from '../hooks/useClearEquation';

export const ClearKey: FC = () => {
    const clearEquation = useClearEquation();

    return (
        <Key onClick={clearEquation} label={'C'}/>
    );
};