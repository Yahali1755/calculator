import { CalculatorKey } from './calculatorKey'
import { useSetEquation } from '../../contexts/equationContext';
import { useSetShouldResetEquation } from '../../contexts/shouldResetEquationContext';

export const EqualsKey = ({ label }) => {
  const setEquation = useSetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();
  
  const onClick = () => {
    setEquation(equation => {
        const result = eval(equation);

        setShouldResetEquation(true);

        return result.toString();
    })
  };

  return (
    <CalculatorKey xs={6} onClick={onClick} label={label}/>
  )
}