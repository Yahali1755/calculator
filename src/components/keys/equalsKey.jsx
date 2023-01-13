import { CalculatorKey } from './calculatorKey'
import { useEquation } from '../../contexts/equationContext';
import { handleOperatorBeingLastEquationPart, isEquationAlreadySolved } from '../../utils/equation.util';

const operationDictionary = (firstNumber, secondNumber) => ({
    '+': () => firstNumber + secondNumber,
    '-': () => firstNumber - secondNumber,
    '*': () => firstNumber * secondNumber,
    '/': () => firstNumber / secondNumber,
    '%': () => firstNumber % secondNumber,
});

export const EqualsKey = ({ label }) => {
  const { setEquation } = useEquation();

  const onClick = () => {
    setEquation(equation => {
        const equationParts = equation.split(' ') 

        handleOperatorBeingLastEquationPart(equationParts);

        let equationResult;

        for (let index = 0; index < equationParts.length - 1; index++) {
          if (isEquationAlreadySolved(equationParts.length, index)) {
            return equationResult;
          }

          let firstNumber = equationResult ? equationResult : equationParts[index];
          let operator = equationParts[index + 1];
          let secondNumber = +equationParts[index + 2];

          equationResult = operationDictionary(firstNumber, secondNumber)[operator]();

          index++;
        }

        const roundedResult = Math.round(equationResult * 1000) / 1000;

        return roundedResult.toString();      
    })
  };

  return (
    <CalculatorKey xs={6} onClick={onClick} label={label}/>
  )
}