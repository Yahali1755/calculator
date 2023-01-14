export const isEquationAlreadySolved = (length, index) => length - 3 < index; 

export const isEquationCleared = equation => equation === '0';

export const isEquationSingleNumberWithoutOperator = length => length === 1;