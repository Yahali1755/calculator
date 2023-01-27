import { CalculatorKey } from './calculatorKey'
import { useSetEquation } from '../../contexts/equationContext';
import { useSetShouldResetEquation } from '../../contexts/shouldResetEquationContext';
import { isLastKeyAnOperator } from '../../utils/operator.util';
import { isResultError } from '../../utils/equation.util';

export const EqualsKey = ({ label }) => {
  const setEquation = useSetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();
  
  const onClick = () => {
    setEquation(equation => {
      if (isLastKeyAnOperator(equation) || isResultError(equation)) {
        return equation;
      }

      setShouldResetEquation(true);

      try {
        const result = eval(equation);

        const roundedResult = Math.round(result * 1000) / 1000;

        return roundedResult.toString();
      } catch {
        return 'Error';
      }
    })
  };

  return (
    <CalculatorKey xs={6} onClick={onClick} label={label}/>
  )
}