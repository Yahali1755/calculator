import { CalculatorKey } from './calculatorKey'
import { useSetEquation } from '../../contexts/equationContext';
import { isEquationCleared } from '../../utils/equation.util';
import { useShouldResetEquation, useSetShouldResetEquation } from '../../contexts/shouldResetEquationContext';

export const DotKey = ({ label }) => {
  const setEquation = useSetEquation();
  const shouldResetEquation = useShouldResetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();

  const onClick = () => setEquation(currentEquation => {
    if(shouldResetEquation) {
      setShouldResetEquation(false);

      return label;
    }

    return isEquationCleared(currentEquation) ? label : currentEquation.concat(label);
  });

  return (
    <CalculatorKey onClick={onClick} label={label}/>
  );
};