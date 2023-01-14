import { CalculatorKey } from './calculatorKey'
import { useEquation } from '../../contexts/equationContext';
import { isEquationAlreadySolved } from '../../utils/equation.util';
import { isLastKeyAnOperator, operationDictionary } from '../../utils/operator.util';

export const EqualsKey = ({ label }) => {
  const { setEquation } = useEquation();

  const onClick = () => {
    setEquation(equation => {
        const equationParts = equation.split(' ') 

        if (isLastKeyAnOperator(equation)) {
          return equation;
        }

        let equationResult;

        for (let index = 0; index <= equationParts.length - 1; index = index + 2) {
          if (isEquationAlreadySolved(equationParts.length, index)) {
            equationResult = equationResult ? equationResult : equationParts[index];

            break;
          }

          let firstNumber = equationResult ? equationResult : equationParts[index];
          let operator = equationParts[index + 1];
          let secondNumber = +equationParts[index + 2];

          equationResult = operationDictionary(firstNumber, secondNumber)[operator]();
        }

        const roundedResult = Math.round(equationResult * 1000) / 1000;

        return roundedResult.toString();      
    })
  };

  return (
    <CalculatorKey xs={6} onClick={onClick} label={label}/>
  )
}