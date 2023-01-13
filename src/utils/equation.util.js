import { isOperatorKey } from './operator.util';

export const isEquationAlreadySolved = (length, index) => length <= index + 2; 

export const isEquationCleared = equation => equation === '0';

export const isEquationSingleNumberWithoutOperator = length => length === 1;

export const handleOperatorBeingLastEquationPart = equationParts => {
    if (isOperatorKey(equationParts.slice(-1))) {
        equationParts.pop();
    }
};