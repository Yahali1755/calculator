export const isLastKeyAnOperator = (equation) => equation && equation.slice(-1) === ' ';

export const isMinusKey = key => key === '-';

export const operationDictionary = (firstNumber, secondNumber) => ({
    '+': () => firstNumber + secondNumber,
    '-': () => firstNumber - secondNumber,
    '*': () => firstNumber * secondNumber,
    '/': () => firstNumber / secondNumber,
    '%': () => firstNumber % secondNumber
});