import { CalculatorKey } from './calculatorKey'
import { isLastKeyAnOperator } from '../../utils/operator.util';
import { useEquation } from '../../contexts/equationContext';

export const OperatorKey = ({ label }) => {
  const { setEquation } = useEquation();

  const onClick = () => setEquation(currentEquation => !isLastKeyAnOperator(currentEquation) 
    ? currentEquation.concat(` ${label} `) : currentEquation);

  return (
    <CalculatorKey onClick={onClick} label={label}/>
  )
};