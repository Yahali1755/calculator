export const isLastKeyAnOperator = (equation) => equation && equation.slice(-1) === ' ';

export const isLastKeyADot = (equation) => equation && equation.slice(-1) === '.';

export const operationDictionary = (firstNumber, secondNumber) => ({
    '+': () => firstNumber + secondNumber,
    '-': () => firstNumber - secondNumber,
    '*': () => firstNumber * secondNumber,
    '/': () => firstNumber / secondNumber,
    '%': () => firstNumber % secondNumber
});