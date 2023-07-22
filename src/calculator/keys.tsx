import { FC } from 'react';

import { ClearKey } from '../keys/clearKey';
import { EqualsKey } from '../keys/equalsKey';
import { OperandKey } from '../keys/operandKey';
import { OperatorKey } from '../keys/operatorKey';
import { Operator } from '../constants/operator';
import { DotKey } from '../keys/dotKey';

const keys = ['(', ')', '%', 'C', '7','8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

export const Keys: FC = () =>
    <>
        {
            keys.map(key => {
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
        
                return <OperandKey label={key}/>
            })
        }
    </>