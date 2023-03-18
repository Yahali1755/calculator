import { isMinusKey } from './operatorUtil';

export const defaultEquationValue = '0';

export const isLastKeyAnOperator = (equation: string) => equation && equation.slice(-1) === ' ';

export const isLastKeyZero = (equation: string) => equation.split(' ')[equation.length - 1] === '0';

export const isResultError = (equation: string) => equation === 'Error';

export const sliceLastKeyFromEquation = (equation: string) => equation.substring(0, equation.length - 1);

export const adjustEquationOnMinusKeyClick = (equation: string, label: string): string => {
    const isLastKeyInEquationMinus = (equation: string) => isMinusKey(equation.slice(-2)[0]) || isMinusKey(equation.slice(-1)[0]);

    if (isLastKeyZero(equation)) {
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