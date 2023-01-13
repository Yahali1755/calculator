const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const isNumberKey = (key) => numberKeys.some(numberKey => key === numberKey);

export const isEqualsKey = (key) => key === '=';

export const isClearKey = (key) => key === 'AC';