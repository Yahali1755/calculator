import { Key } from './Key'
import { useSetEquation } from '../../contexts/equationContext';
import { useSetShouldResetEquation } from '../../contexts/shouldResetEquationContext';
import { isResultError, isLastKeyAnOperator } from '../../utils/equation.util';

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
        // eslint-disable-next-line
        const result = eval(equation);

        const roundedResult = Math.round(result * 1000) / 1000;

        return roundedResult.toString();
      } catch {
        return 'Error';
      }
    })
  };

  return (
    <Key xs={6} onClick={onClick} label={label}/>
  )
}