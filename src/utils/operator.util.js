const operationKeys = ['+', '*', '-', '/', '%'];

export const isOperatorKey = (key) => operationKeys.some(operationKey => key === operationKey);

export const isLastKeyAnOperator = (equation) => equation && equation.slice(-1) === ' ';

export const operationDictionary = (firstNumber, secondNumber) => ({
    '+': () => firstNumber + secondNumber,
    '-': () => firstNumber - secondNumber,
    '*': () => firstNumber * secondNumber,
    '/': () => firstNumber / secondNumber,
    '%': () => firstNumber % secondNumber,
});