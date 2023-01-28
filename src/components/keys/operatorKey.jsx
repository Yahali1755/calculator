import { CalculatorKey } from './calculatorKey'
import { isLastKeyAnOperator, isLastKeyMinus, isMinusKey } from '../../utils/operator.util';
import { useSetEquation } from '../../contexts/equationContext';
import { useShouldResetEquation, useSetShouldResetEquation } from '../../contexts/shouldResetEquationContext';
import { defaultEquationValue, isEquationCleared, isResultError } from '../../utils/equation.util';

export const OperatorKey = ({ label }) => {
  const setEquation = useSetEquation();
  const shouldResetEquation = useShouldResetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();

  const onClick = () => setEquation(currentEquation => {
    if (shouldResetEquation) {
      setShouldResetEquation(false);

      if (isResultError(currentEquation)) {
        return `${defaultEquationValue} ${label} ` 
      }
    }

    if (isMinusKey(label)) {
      if (isEquationCleared(currentEquation)) {
        return label;
      }

      if (isLastKeyMinus(currentEquation)) {
        return currentEquation;
      }

      return isLastKeyAnOperator(currentEquation) ? currentEquation.concat(` ${label}`) : currentEquation.concat(` ${label} `)
    }

    return !isLastKeyAnOperator(currentEquation) ? currentEquation.concat(` ${label} `) : currentEquation
  });

  return (
    <CalculatorKey onClick={onClick} label={label}/>
  )
};