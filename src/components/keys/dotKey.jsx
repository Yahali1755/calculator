import { CalculatorKey } from './calculatorKey'
import { useEquation } from '../../contexts/equationContext';
import { isEquationCleared } from '../../utils/equation.util';
import { isLastKeyAnOperator } from '../../utils/operator.util';

export const DotKey = ({ label }) => {
  const { equation, setEquation } = useEquation();

  const onClick = () => setEquation(currentEqaution => {
    if (isEquationCleared(equation)) {
        return label;
    }

    return isLastKeyAnOperator(equation) ? currentEqaution : currentEqaution.concat(label)
  })

  return (
    <CalculatorKey onClick={onClick} label={label}/>
  )
}