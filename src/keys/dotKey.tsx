import { FC } from 'react';

import { Key } from './key';
import { useAppendDot } from '../hooks/useAppendDot';

export const DotKey: FC = () => {
    const appendDot = useAppendDot();

    const handleKeyDown = (event) => {
        if (event.key === ".") {
            appendDot()
        }
    };

    return (
        <Key onClick={appendDot} onKeyDown={handleKeyDown} label={'.'}/>
    );
};