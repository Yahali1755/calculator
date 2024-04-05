import { FC } from 'react';
import BackspaceIcon from '@mui/icons-material/Backspace';

import { Key } from './key';
import { useBackspace } from '../hooks/useBackspace';

export const BackspaceKey: FC = () => {
    const clickOnBackspace = useBackspace();

    return (
        <Key icon={<BackspaceIcon/>} onClick={clickOnBackspace}/>
    );
};