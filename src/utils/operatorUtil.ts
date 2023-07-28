import { Operator } from "../constants/operator";

export const isLastKeyAnOperator = (equation: string) => isOperator(equation.slice(-1));

export const isOperator = (character: string) => Object.values(Operator).some(operator => operator === character);

export const replaceOperatorsWithSpaces = (equation: string) => {
    Object.values(Operator).forEach(operator => {
        equation = equation.replace(operator, ' ')
    });

    return equation;
}
