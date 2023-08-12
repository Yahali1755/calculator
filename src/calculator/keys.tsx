import { FC } from 'react';

import { ClearKey } from '../keys/clearKey';
import { EqualsKey } from '../keys/equalsKey';
import { NumberKey } from '../keys/numberKey';
import { OperatorKey } from '../keys/operatorKey';
import { Operator } from '../constants/operator';
import { DotKey } from '../keys/dotKey';
import { BackspaceKey } from '../keys/backspaceKey';

const keys = ['^', '%', 'C', 'backspace', '7','8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

export const Keys: FC = () =>
    <>
        {
            keys.map(key => { 
                if (key === 'backspace') {
                    return <BackspaceKey/>
                }

                if (key === 'C') {
                    return <ClearKey/>
                };
        
                if (key === '=') {
                    return <EqualsKey/>
                };

                if (key === '.') {
                    return <DotKey/>
                };
        
                if (Object.values(Operator).some(operator => operator === key)) {
                    return <OperatorKey label={key}/>
                };
        
                return <NumberKey label={key}/>
            })
        }
    </>