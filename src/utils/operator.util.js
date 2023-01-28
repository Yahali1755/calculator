export const isLastKeyAnOperator = (equation) => equation && equation.slice(-1) === ' ';

export const isMinusKey = key => key === '-';

export const isLastKeyMinus = (equation) => isMinusKey(equation.slice(-2)[0]);

export const operationDictionary = (firstNumber, secondNumber) => ({
    '+': () => firstNumber + secondNumber,
    '-': () => firstNumber - secondNumber,
    '*': () => firstNumber * secondNumber,
    '/': () => firstNumber / secondNumber,
    '%': () => firstNumber % secondNumber
});