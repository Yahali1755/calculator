import { CalculatorKey } from './calculatorKey'
import { useUpdateResult } from '../../contexts/resultContext';

const operationDictionary = (firstNumber, secondNumber) => ({
    '+': () => firstNumber + secondNumber,
    '-': () => firstNumber - secondNumber,
    '*': () => firstNumber * secondNumber,
    '/': () => firstNumber / secondNumber,
    '%': () => firstNumber % secondNumber,
});

export const EqualsKey = ({ label }) => {
  const setResult = useUpdateResult();

  const onClick = () => {
    setResult(equation => {
        const equationParts = equation.split(' ') 

        const result = equationParts.reduce((equationResult, currentPart, index) => {
          if (index + 2 >= equationParts.length) {
            return equationResult;
          }

          let firstNumber = equationResult ? equationResult : +currentPart;
          let operator = equationParts[index + 1];
          let secondNumber = +equationParts[index + 2];

          equationResult = operationDictionary(firstNumber, secondNumber)[operator]();

          index++;

          return equationResult
        }, 0)

        return result.toString();
    })
  };

  return (
    <CalculatorKey xs={6} onClick={onClick} label={label}/>
  )
}