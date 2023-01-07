import { CalculatorKey } from './calculatorKey'
import { useUpdateResult } from '../../contexts/resultContext';
import { isLastKeyAnOperator } from '../../utils/operator.util';

export const OperatorKey = ({label}) => {
  const setResult = useUpdateResult();

  const onClick = () => setResult(currentResult => !isLastKeyAnOperator(currentResult) 
    ? currentResult.concat(` ${label} `) : currentResult);

  return (
    <CalculatorKey onClick={onClick} label={label}/>
  )
}