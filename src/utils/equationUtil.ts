import { isMinusKey } from './operatorUtil';

export const defaultEquationValue = '0';

export const isLastKeyAnOperator = (equation: string): boolean => equation && equation.slice(-1) === ' ';

export const isEquationCleared = (equation: string): boolean => equation === defaultEquationValue;

export const isResultError = (equation: string): boolean => equation === 'Error';

export const adjustEquationOnMinusKeyClick = (equation: string, label: string): string => {
    const isLastKeyInEquationMinus = (equation: string): boolean => isMinusKey(equation.slice(-2)[0]) || isMinusKey(equation.slice(-1)[0]);

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