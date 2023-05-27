import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { useSetDisplayPanelData } from '../../contexts/displayPanelDataContext';
import { Operand } from '../../constants/operand';

export const ClearKey: FC<BaseKeyProps> = ({ label }) => {
    const setDisplayPanelData = useSetDisplayPanelData();

    const clearEquation = () => setDisplayPanelData({result: Operand.Zero, equation: ""});

    return (
        <Key onClick={clearEquation} label={label}/>
    );
};