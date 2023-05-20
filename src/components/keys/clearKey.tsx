import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { defaultEquationValue } from '../../utils/equationUtil';
import { useSetDisplayPanelData } from '../../contexts/displayPanelDataContext';

export const ClearKey: FC<BaseKeyProps> = ({ label }) => {
    const setDisplayPanelData = useSetDisplayPanelData();

    const clearEquation = () => setDisplayPanelData({result: defaultEquationValue, equation: ""});

    return (
        <Key onClick={clearEquation} label={label}/>
    );
};