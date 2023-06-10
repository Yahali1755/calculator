import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { useSetCalculatorData } from '../../contexts/calculatorDataContext';
import { Operand } from '../../constants/operand';

export const ClearKey: FC<BaseKeyProps> = ({ label }) => {
    const setCalculatorData = useSetCalculatorData();

    const clearEquation = () => setCalculatorData({result: Operand.Zero, equation: ""});

    return (
        <Key onClick={clearEquation} label={label}/>
    );
};