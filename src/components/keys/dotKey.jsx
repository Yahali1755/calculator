import { CalculatorKey } from './calculatorKey'
import { useEquation } from '../../contexts/equationContext';
import { isEquationCleared } from '../../utils/equation.util';

export const DotKey = ({ label }) => {
  const { equation, setEquation } = useEquation();

  const onClick = () => setEquation(currentEqaution => isEquationCleared(equation) ? 
    label :  currentEqaution.concat(label))

  return (
    <CalculatorKey onClick={onClick} label={label}/>
  )
}