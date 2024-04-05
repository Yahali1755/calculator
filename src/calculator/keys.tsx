import { FC, ReactElement } from 'react';

import { ClearKey } from '../keys/clearKey';
import { EqualsKey } from '../keys/equalsKey';
import { NumberKey } from '../keys/numberKey';
import { OperatorKey } from '../keys/operatorKey';
import { Operator } from '../constants/operator';
import { DotKey } from '../keys/dotKey';
import { BackspaceKey } from '../keys/backspaceKey';

interface Key {
    label: string,
    component?: ReactElement
}

const keys: Key[] = [
    {label: '^'},
    {label: '%'}, 
    {label: 'C', component: <ClearKey/>}, 
    {label: 'backspace', component: <BackspaceKey/>}, 
    {label: '7'}, 
    {label: '8'}, 
    {label: '9'},
    {label: '/'}, 
    {label: '4'}, 
    {label: '5'}, 
    {label: '6'}, 
    {label: '*'}, 
    {label: '1'}, 
    {label: '2'}, 
    {label: '3'}, 
    {label: '-'}, 
    {label: '0'}, 
    {label: '.', component: <DotKey/>}, 
    {label: '=', component: <EqualsKey/>}, 
    {label: '+'}
];

export const Keys: FC = () =>
    <>
        {
            keys.map(({ label, component }) => { 
                if (component) {
                    return component
                };
        
                if (Object.values(Operator).some(operator => operator === label)) {
                    return <OperatorKey label={label}/>
                };
        
                return <NumberKey label={label}/>
            })
        }
    </>