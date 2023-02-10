export const isMinusKey = key => key === '-';

export const operationDictionary = (firstNumber, secondNumber) => ({
    '+': () => firstNumber + secondNumber,
    '-': () => firstNumber - secondNumber,
    '*': () => firstNumber * secondNumber,
    '/': () => firstNumber / secondNumber,
    '%': () => firstNumber % secondNumber
});