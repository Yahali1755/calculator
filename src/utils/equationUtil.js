import { isMinusKey } from './operatorUtil';

export const defaultEquationValue = '0';

export const isLastKeyAnOperator = (equation) => equation && equation.slice(-1) === ' ';

export const isEquationCleared = equation => equation === defaultEquationValue;

export const isResultError = equation => equation === 'Error';

export const adjustEquationOnMinusKeyClick = (equation, label) => {
    const isLastKeyInEquationMinus = (equation) => isMinusKey(equation.slice(-2)[0]) || isMinusKey(equation.slice(-1)[0]);

    if (isEquationCleared(equation)) {
        return label;
    };

    if (isLastKeyInEquationMinus(equation)) {
        return equation;
    };

    if (isLastKeyAnOperator(equation)) {
        return equation.concat(` ${label}`);
    };

    return equation.concat(` ${label} `);
};