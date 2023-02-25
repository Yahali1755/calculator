export const isMinusKey = (key: string): boolean => key === '-';

export const operationDictionary = (firstNumber: number, secondNumber: number) => ({
    '+': () => firstNumber + secondNumber,
    '-': () => firstNumber - secondNumber,
    '*': () => firstNumber * secondNumber,
    '/': () => firstNumber / secondNumber,
    '%': () => firstNumber % secondNumber
});