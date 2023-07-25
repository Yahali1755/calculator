import { FC } from 'react';

import { Key } from './key';
import { useAppendDot } from '../hooks/useAppendDot';

export const DotKey: FC = () => {
    const appendDot = useAppendDot();

    return (
        <Key onClick={appendDot} label={'.'}/>
    );
};