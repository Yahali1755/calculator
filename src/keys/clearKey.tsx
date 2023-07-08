import { FC } from 'react';

import { Key } from './key';
import { useSetCalculatorData } from '../contexts/calculatorDataContext';

export const ClearKey: FC = () => {
    const setCalculatorData = useSetCalculatorData();

    const clearEquation = () => {
        setCalculatorData({result: '0', equation: ""});
    };

    return (
        <Key onClick={clearEquation} label={'C'}/>
    );
};