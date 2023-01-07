import { CalculatorKey } from './calculatorKey'
import { useUpdateResult } from '../../contexts/resultContext';

export const NumberKey = ({label}) => {
  const setResult = useUpdateResult();

  const onClick = () => setResult(currentResult => currentResult.concat(label));

  return (
    <CalculatorKey onClick={onClick} label={label}/>
  )
}