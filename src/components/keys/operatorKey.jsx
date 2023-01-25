import { CalculatorKey } from './calculatorKey'
import { isLastKeyAnOperator } from '../../utils/operator.util';
import { useSetEquation } from '../../contexts/equationContext';
import { useShouldResetEquation, useSetShouldResetEquation } from '../../contexts/shouldResetEquationContext';
import { defaultEquationValue } from '../../utils/equation.util';

export const OperatorKey = ({ label }) => {
  const setEquation = useSetEquation();
  const shouldResetEquation = useShouldResetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();

  const onClick = () => setEquation(currentEquation => {
    if (shouldResetEquation) {
      setShouldResetEquation(false);

      if (currentEquation === 'Error') {
        return `${defaultEquationValue} ${label} `
      }
    }

    return !isLastKeyAnOperator(currentEquation) ? currentEquation.concat(` ${label} `) : currentEquation
  });

  return (
    <CalculatorKey onClick={onClick} label={label}/>
  )
};