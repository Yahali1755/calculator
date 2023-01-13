const operationKeys = ['+', '*', '-', '/', '%'];

export const isOperationKey = (key) => operationKeys.some(operationKey => key === operationKey);

export const isLastKeyAnOperator = (result) => result && result.slice(-1) === ' ';