import { CalculatorKey } from './calculatorKey'
import { useUpdateResult } from '../../contexts/resultContext';

export const ClearKey = ({label}) => {
    const setResult = useUpdateResult();

    const clearResult = () => setResult('');

    return (
        <CalculatorKey onClick={clearResult} xs={6} label={label}/>
    )
}