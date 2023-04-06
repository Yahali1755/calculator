import { FC } from 'react';

import { Key, BaseKeyProps } from './Key'
import { useSetEquation } from '../../contexts/equationContext';
import { defaultEquationValue } from '../../utils/equationUtil';

export const ClearKey: FC<BaseKeyProps> = ({ label }) => {
    const setEquation = useSetEquation();

    const clearEquation = () => setEquation(defaultEquationValue);

    return (
        <Key xs={6} onClick={clearEquation} label={label}/>
    );
};