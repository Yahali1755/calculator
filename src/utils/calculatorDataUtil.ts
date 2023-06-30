import { Operand } from '../constants/operand';
import { Operator } from '../constants/operator';
import { isMinusKey } from './operatorUtil';

export const isLastKeyAnOperator = (equation: string) => equation && equation.slice(-1) === ' ';

export const isLastOperandZero = (equation: string) => equation.split(' ').pop() === Operand.Zero;

export const doesLastEquationOperandContainDot = (equation: string) => equation.split(' ').pop().includes('.');

export const sliceLastKeyFromEquation = (equation: string) => equation.substring(0, equation.length - 1);

export const isEquationEmpty = (equation: string) => equation === "";

export const isResultEmpty = (result: string) => result === "";

export const getAdjustedEquationOnMinusKeyClick = (equation: string): string => {
    const isLastKeyInEquationMinus = (equation: string) => isMinusKey(equation.slice(-2)[0]) || isMinusKey(equation.slice(-1)[0]);

    if (isLastOperandZero(equation)) {
        return Operator.Subtraction;
    };

    if (isLastKeyInEquationMinus(equation)) {
        return equation;
    };

    if (isLastKeyAnOperator(equation)) {
        return equation.concat(` ${Operator.Subtraction}`);
    };

    return equation.concat(` ${Operator.Subtraction} `);
};