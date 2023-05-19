import { isOperandMinusKey } from './operatorUtil';

export const defaultEquationValue = '0';

export const isLastKeyAnOperator = (equation: string) => equation && equation.slice(-1) === ' ';

export const isLastOperandZero = (equation: string) => equation.split(' ').pop() === '0';

export const doesLastEquationOperandContainDot = (equation: string) => equation.split(' ').pop().includes('.');

export const isResultError = (equation: string) => equation === 'Error';

export const sliceLastKeyFromEquation = (equation: string) => equation.substring(0, equation.length - 1);

export const handleMinusKeyClick = (equation: string, label: string): string => {
    const isLastKeyInEquationMinus = (equation: string) => isOperandMinusKey(equation.slice(-2)[0]) || isOperandMinusKey(equation.slice(-1)[0]);

    if (isLastOperandZero(equation)) {
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